const options = [
    "HP",
    "HP %",
    "ATK",
    "ATK %",
    "DEF",
    "DEF %",
    "CRIT Rate %",
    "CRIT DMG %",
    "Break Intensity",
    "Cycle Intensity",
    "DMG %"
];

const cartridgeMainStatOptions = [
    "ATK %",
    "DEF %",
    "HP %",
    "Crit Rate %",
    "Crit DMG %",
    "Break Intensity",
    "Cycle Intensity",
    "Universal DMG Bonus %",
    "Cosmos DMG Bonus %",
    "Anima DMG Bonus %",
    "Incantation DMG Bonus %",
    "Chaos DMG Bonus %",
    "Psyche DMG Bonus %",
    "Lakhshana DMG Bonus %",
    "Healing Bonus %"
];

const tabs = ["character", "cartridge", "module"];
const tabLabels = {
    character: "Character",
    cartridge: "Cartridge",
    module: "Module"
};

let activeTab = "character";
let data = {
    character: [],
    cartridge: [],
    module: []
};

let editModeId = null;

function loadData() {
    tabs.forEach((tab) => {
        const stored = localStorage.getItem(`eq_${tab}`);
        if (stored) {
            data[tab] = JSON.parse(stored);
        } else if (tab === "cartridge") {
            const legacy = JSON.parse(localStorage.getItem("eq") || "null");
            data[tab] = legacy || [];
        }
    });
}

function save() {
    tabs.forEach((tab) => {
        localStorage.setItem(`eq_${tab}`, JSON.stringify(data[tab]));
    });

    localStorage.setItem("eq", JSON.stringify(data.cartridge));
}

function getCurrentItems() {
    return data[activeTab] || [];
}

const subContainer = document.getElementById("subStats");

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.className = "row";

    const select = document.createElement("select");
    select.id = "subName" + i;

    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "--";
    select.appendChild(empty);

    options.forEach((option) => {
        const op = document.createElement("option");
        op.value = option;
        op.textContent = option;
        select.appendChild(op);
    });

    const val = document.createElement("input");
    val.type = "number";
    val.id = "subVal" + i;

    row.appendChild(select);
    row.appendChild(val);

    subContainer.appendChild(row);
}

const modal = document.getElementById("modal");
const emptyState = document.getElementById("emptyState");
const contentArea = document.getElementById("contentArea");
const panelTitle = document.getElementById("panelTitle");
const modalTitle = document.getElementById("modalTitle");
const selectedTitle = document.getElementById("selectedTitle");

function getSelectionLimit(tab = activeTab) {
    if (tab === "cartridge") {
        return 1;
    }

    return 20;
}

function updateSelectedTitle(tab = activeTab) {
    if (!selectedTitle) return;

    if (tab === "cartridge") {
        selectedTitle.textContent = "Selected:";
    } else if (tab === "module") {
        selectedTitle.textContent = "Selected (max 20)";
    } else {
        selectedTitle.textContent = "Selected";
    }
}

function populateCartridgeMainSelect() {
    const select = document.getElementById("cartridgeMainStat");
    if (!select) return;

    select.innerHTML = "";

    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "-- Select a main stat --";
    select.appendChild(empty);

    cartridgeMainStatOptions.forEach((option) => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

function setModalMode(tab) {
    const isCartridge = tab === "cartridge";
    document.getElementById("genericMainFields").classList.toggle("hidden", isCartridge);
    document.getElementById("cartridgeMainFields").classList.toggle("hidden", !isCartridge);
}

function setActiveTab(tab) {
    activeTab = tab;

    document.querySelectorAll(".tabBtn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tab);
    });

    if (tab === "character") {
        emptyState.classList.remove("hidden");
        contentArea.classList.add("hidden");
    } else {
        emptyState.classList.add("hidden");
        contentArea.classList.remove("hidden");
    }

    panelTitle.textContent = tabLabels[tab];
    modalTitle.textContent = `Add / Import ${tabLabels[tab]}`;
    updateSelectedTitle(tab);
    setModalMode(tab);
    render();
}

document.querySelectorAll(".tabBtn").forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
});

document.getElementById("openModalBtn").onclick = () => {
    modal.classList.remove("hidden");
};

function closeModal() {
    modal.classList.add("hidden");
}

function importJSON() {
    const file = document.getElementById("fileInput").files[0];

    if (!file) {
        alert("Select a JSON file first");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const parsed = JSON.parse(e.target.result);
            const imported = Array.isArray(parsed) ? parsed : parsed.equipment || parsed[activeTab] || [];

            if (!Array.isArray(imported)) {
                alert("Invalid JSON format");
                return;
            }

            data[activeTab] = [...data[activeTab], ...imported];
            save();
            render();
            closeModal();
        } catch (err) {
            alert("Invalid JSON file");
        }
    };

    reader.readAsText(file);
}

function getMainPayload() {
    if (activeTab === "cartridge") {
        const stat = document.getElementById("cartridgeMainStat").value;
        const value = Number(document.getElementById("cartridgeMainValue").value || 0);

        return stat ? { [stat]: value } : {};
    }

    return {
        ATK: Number(document.getElementById("mainATK").value || 0),
        HP: Number(document.getElementById("mainHP").value || 0)
    };
}

function addEquipment() {
    const main = getMainPayload();

    const sub = {};
    const used = new Set();

    for (let i = 0; i < 4; i++) {
        const name = document.getElementById("subName" + i).value;
        const val = Number(document.getElementById("subVal" + i).value || 0);

        if (name && !used.has(name)) {
            sub[name] = val;
            used.add(name);
        }
    }

    const items = getCurrentItems();

    if (editModeId !== null) {
        const item = items.find((entry) => entry.id === editModeId);
        if (item) {
            item.main = main;
            item.sub = sub;
        }
        editModeId = null;
    } else {
        items.push({
            id: Date.now(),
            main,
            sub,
            selected: false
        });
    }

    save();
    render();
    clearForm();
    closeModal();
}

function toggleSelect(id) {
    const items = getCurrentItems();
    const item = items.find((entry) => entry.id === id);

    if (!item) return;

    const limit = getSelectionLimit();
    if (!item.selected && items.filter((entry) => entry.selected).length >= limit) {
        alert(`Max ${limit} selected`);
        return;
    }

    item.selected = !item.selected;
    save();
    render();
}

function deleteItem(id) {
    const items = getCurrentItems();
    data[activeTab] = items.filter((entry) => entry.id !== id);
    save();
    render();
}

function clearForm() {
    document.getElementById("mainATK").value = "";
    document.getElementById("mainHP").value = "";
    document.getElementById("cartridgeMainStat").value = "";
    document.getElementById("cartridgeMainValue").value = "";

    for (let i = 0; i < 4; i++) {
        document.getElementById("subName" + i).value = "";
        document.getElementById("subVal" + i).value = "";
    }
}

function formatMainSummary(entry) {
    const main = entry.main || {};
    const entries = Object.entries(main);

    if (!entries.length) {
        return "No main stats";
    }

    return entries.map(([key, value]) => `<b>${key}:</b> ${value}`).join("<br>");
}

function render() {
    const selDiv = document.getElementById("selected");
    const libDiv = document.getElementById("library");

    selDiv.innerHTML = "";
    libDiv.innerHTML = "";

    if (activeTab === "character") {
        return;
    }

    const items = getCurrentItems();

    items.forEach((entry) => {
        const box = document.createElement("div");
        box.className = "cardBox";

        box.innerHTML = `
        <div class="cardTop">
            <div class="cardStats">
                ${formatMainSummary(entry)}<br><br>

                ${Object.entries(entry.sub || {})
                    .map(([key, value]) => `${key}: ${value}`)
                    .join("<br>")}
            </div>

            <button class="editBtn" onclick="editItem(${entry.id})">✏️</button>
        </div>

        <div class="cardButtons">
            <button onclick="toggleSelect(${entry.id})">
                ${entry.selected ? "Unselect" : "Select"}
            </button>
            <button onclick="deleteItem(${entry.id})">🗑️</button>
        </div>`;

        if (entry.selected) {
            selDiv.appendChild(box);
        } else {
            libDiv.appendChild(box);
        }
    });
}

function downloadJSON() {
    const blob = new Blob([JSON.stringify({
        character: data.character,
        cartridge: data.cartridge,
        module: data.module
    }, null, 2)], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "console-optimizer.json";
    link.click();

    URL.revokeObjectURL(url);
}

function editItem(id) {
    const items = getCurrentItems();
    const item = items.find((entry) => entry.id === id);

    if (!item) return;

    if (activeTab === "cartridge") {
        const entries = Object.entries(item.main || {});
        const [stat, value] = entries[0] || [];
        document.getElementById("cartridgeMainStat").value = stat || "";
        document.getElementById("cartridgeMainValue").value = value ?? "";
    } else {
        document.getElementById("mainATK").value = item.main?.ATK ?? "";
        document.getElementById("mainHP").value = item.main?.HP ?? "";
    }

    const keys = Object.keys(item.sub || {});
    const values = Object.values(item.sub);

    for (let i = 0; i < 4; i++) {
        document.getElementById("subName" + i).value = keys[i] || "";
        document.getElementById("subVal" + i).value = values[i] || "";
    }

    editModeId = id;
    modal.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

populateCartridgeMainSelect();
loadData();
setModalMode(activeTab);
setActiveTab(activeTab);