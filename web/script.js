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

const characterProfiles = [
    {
        main: {
            Name: "Lacrimosa",
            Element: "Chaos",
            Role: "DPS",
            Level: 70,
            Ascension: 5,
            Awakenings: [6]
        },
        base_attributes: {
            HP: 13886,
            ATK: 1052,
            DEF: 789,
            Stamina: 200,
            Crit_Rate: 5,
            Crit_DMG: 54,
            Charge_Efficiency: 0,
            Cycle_Intensity: 0,
            Break_Intensity: 0,
            Healing_Bonus: 0,
            Healing_Recieved_Bonus: 0,
            Universal_DMG_Bonus: 0,
            Cosmos_DMG_Bonus: 0,
            Anima_DMG_Bonus: 0,
            Incarnation_DMG_Bonus: 0,
            Chaos_DMG_Bonus: 50,
            Psyche_DMG_Bonus: 0,
            Lakshana_DMG_Bonus: 0,
            Mental_DMG_Bonus: 0,
            Cosmos_Resistance: 0,
            Anima_Resistance: 0,
            Incarnation_Resistance: 0,
            Chaos_Resistance: 0,
            Psyche_Resistance: 0,
            Lakshana_Resistance: 0,
            Mental_Resistance: 0
        }
    },
    {
        main: {
            Name: "Sakiri",
            Element: "Incarnation",
            Role: "Buff",
            Level: 70,
            Ascension: 5,
            Awakenings: []
        },
        base_attributes: {
            HP: 13886,
            ATK: 1052,
            DEF: 789,
            Stamina: 200,
            Crit_Rate: 5,
            Crit_DMG: 54,
            Charge_Efficiency: 0,
            Cycle_Intensity: 0,
            Break_Intensity: 0,
            Healing_Bonus: 0,
            Healing_Recieved_Bonus: 0,
            Universal_DMG_Bonus: 0,
            Cosmos_DMG_Bonus: 0,
            Anima_DMG_Bonus: 0,
            Incarnation_DMG_Bonus: 50,
            Chaos_DMG_Bonus: 0,
            Psyche_DMG_Bonus: 0,
            Lakshana_DMG_Bonus: 0,
            Mental_DMG_Bonus: 0,
            Cosmos_Resistance: 0,
            Anima_Resistance: 0,
            Incarnation_Resistance: 0,
            Chaos_Resistance: 0,
            Psyche_Resistance: 0,
            Lakshana_Resistance: 0,
            Mental_Resistance: 0
        }
    }
];

const arcData = [
    {"name":"Blow up the Crowd","icon":"Solid","stat":"ATK +27.5%","effect":"Active character ATK +10% while the wearer is off-field, and ATK +2% when the wearer deals damage, up to 4 stacks (once every 2s). Resets when switching in. Psyche DMG +12% while active, and Psyche DMG +2% when dealing Psyche DMG with Basic Attack, up to 10 stacks (once every 0.3s). Resets when switching characters."},
    {"name":"Blushing Mirage","icon":"Condensate","stat":"TBD","effect":"TBD"},
    {"name":"Camellia Society","icon":"Condensate","stat":"CRIT Rate +12%","effect":"CRIT DMG +12% for 5s when HP is reduced without taking damage, up to 4 stacks. Unlocks Arc: Silent Garden with random Incantation DMG attacks."},
    {"name":"Contemplative Cat","icon":"Gas","stat":"CRIT DMG +44%","effect":"Increases Cosmos DMG by 2.5% per 100000 Fons held, up to 10 stacks."},
    {"name":"Day Off","icon":"Solid","stat":"Charge Efficiency +33%","effect":"Increases ATK by 30%. Unlocks Arc: Eclipse (40s duration, restores Ultimate Energy on enemy defeat)."},
    {"name":"Eternal Waltz","icon":"Condensate","stat":"HP +41.2%","effect":"Increases Max HP by 20%. Increases Mental DMG by 10% for 10s after casting Ultimate."},
    {"name":"Fluff of Fearlessness","icon":"Solid","stat":"CRIT Rate +22%","effect":"Increases ATK by 25% for 10s after casting Ultimate. Does not stack."},
    {"name":"Fluff of Ferocity","icon":"Condensate","stat":"ATK +27.5%","effect":"Increases CRIT DMG by 4% for 10s after landing a critical hit, up to 10 stacks. Duration resets when retriggered."},
    {"name":"Fluff of Finesse","icon":"Gas","stat":"ATK +27.5%","effect":"Increases damage by 8% for 10s after Critical Dodge, up to 3 stacks. Duration resets when retriggered."},
    {"name":"Fluff of Fleetness","icon":"Liquid","stat":"CRIT DMG +44%","effect":"Increases ATK by 5% every interval while active, up to 5 stacks. Resets when leaving field."},
    {"name":"Fluff of Fortitude","icon":"Plasma","stat":"ATK +27.5%","effect":"Increases DMG by 22%. Effect increases to 28% against enemies below 50% HP."},
    {"name":"Good Boy's Grand Adventure","icon":"Gas","stat":"ATK +45%","effect":"Increases Charge Efficiency by 18%. Increases Team ATK by 10% (20s) after Ultimate, plus 6% if enemies are controlled."},
    {"name":"Hethereau's Keeper","icon":"Solid","stat":"ATK +27.5%","effect":"Increases ATK by 15%. Increases Boss damage by 15%. Unlocks Arc: Officer Whisker (summons ally for 30s)."},
    {"name":"Marching Beyond Time","icon":"Solid","stat":"CRIT Rate +24%","effect":"Increases ATK by 16%. Grants Wastetime stacks in Wastelab, consumed for Ultimate Crit DMG and DEF Ignore."},
    {"name":"Raging Flames","icon":"Plasma","stat":"CRIT DMG +24%","effect":"Increases Lakshana DMG by 15%. Redirect Skill & Ultimate DMG +10% for 10s after Ultimate. Redirect Skill DMG +5% per cast (up to 2)."},
    {"name":"Ready-Ready","icon":"Plasma","stat":"CRIT Rate +24%","effect":"Increases ATK by 15%. Boosts Basic Attack & Critical Riposte DMG by 15% for 15s after Redirect/Ultimate. Unlocks Commander Tiger Talisman Arc."},
    {"name":"Reality Refuge","icon":"Solid","stat":"ATK +30%","effect":"Increases Anima DMG by 15%. Attachment DMG +10% (20% for 6s after Ultimate)."},
    {"name":"Song of the Whale","icon":"Plasma","stat":"ATK +27.5%","effect":"ATK +12%. Damage to Broken enemies +12%. Restores 30% HP when defeating Broken enemy (once every 30s)."},
    {"name":"Stellar Veil","icon":"Plasma","stat":"ATK +27.5%","effect":"Psyche DMG +12%. Crit DMG +2% for 5s when dealing Psyche DMG, up to 10 stacks (once every 0.1s)."},
    {"name":"Tears Beneath the Mask","icon":"Gas","stat":"ATK +27.5%","effect":"Applies Warning Gaze on enemies hit by Ultimate. Marked enemies deal 18% reduced damage for 20s."},
    {"name":"The Last Rose","icon":"Liquid","stat":"CRIT Rate +24%","effect":"ATK +14%. Grants Chaos Thorn stacks on DOT. CRIT DMG +6% per stack (up to 10). Grants 10 stacks on Redirect Skill. Extends Broken state by 3s."},
    {"name":"The Rain That Shook the World","icon":"Solid","stat":"CRIT Rate +22%","effect":"Cosmos DMG +30% with Redirect/Ultimate. Cycle Intensity +36 for 15s after Redirect Skill."},
    {"name":"What's Desired","icon":"Condensate","stat":"CRIT Rate +24%","effect":"Lakshana DMG +20%. CRIT DMG +40% for 20s after Redirect/Ultimate."},
    {"name":"Wrong Gate","icon":"Liquid","stat":"TBD","effect":"TBD"},
    {"name":"Your Happiness is Priceless","icon":"Solid","stat":"DEF +38.5%","effect":"HP +24%. Grants random healing/shield effects after Ultimate (once every 30s)."},
    {"name":"Youthful Fantasy","icon":"Liquid","stat":"ATK +30%","effect":"Break Intensity +60. Unlocks Arc: Black Tome (summons tome, boosts Chaos DMG, deals Chaos DMG on Break)."},
    {"name":"Real Music","icon":"Liquid","stat":"ATK +20%","effect":"Redirect Skill DMG +12%."},
    {"name":"Be Happy","icon":"Gas","stat":"HP +30%","effect":"Restores 12% HP upon defeating enemy (once every 20s)."},
    {"name":"Dangerous Game","icon":"Condensate","stat":"Break Intensity +96","effect":"Break Intensity +60 for 10s when reducing Break (once every 20s)."},
    {"name":"First Step to Success","icon":"Solid","stat":"ATK +20%","effect":"ATK +12% for 10s when casting Redirect Skill (once every 20s)."},
    {"name":"Us.","icon":"Plasma","stat":"ATK +20%","effect":"Basic Attack DMG +12%."},
    {"name":"A Time Will Come","icon":"Condensate","stat":"CRIT Rate +20%","effect":"Grants the wearer 10% ATK, 10% DEF, and 10% HP when the team has at least 3 different Esper Types."},
    {"name":"Call of the Twisted City","icon":"Liquid","stat":"HP +37.5%","effect":"Increases Healing Bonus by 12% for 10s after casting a Redirect Skill. Effect does not stack."},
    {"name":"Clear Skies","icon":"Liquid","stat":"ATK +25%","effect":"Increases Anima DMG dealt by Redirect Skill and Ultimate by 20%."},
    {"name":"Cosmos Daze, Wild Reverie","icon":"Gas","stat":"ATK +25%","effect":"Increases damage dealt by 18% for 10s after casting Support Skill. Triggers at most once every 20s."},
    {"name":"Drawn Blade","icon":"Plasma","stat":"ATK +37.5%","effect":"Deals additional Incantation DMG equal to 200% of ATK when triggering a Parry Attack."},
    {"name":"Failing You, Heavy in My Heart","icon":"Gas","stat":"Break Intensity +120","effect":"Grants 1 stack of Spider Knowledge when dealing damage with Basic Attacks (up to 8 stacks). All stacks consumed when casting Ultimate, increasing team ATK by 1% per stack for 10s. Additional +2% ATK when 8 stacks are consumed."},
    {"name":"Mind Royale","icon":"Liquid","stat":"Break Intensity +60","effect":"Grants 10 Ultimate Energy when casting a Redirect Skill (once every 20s)."},
    {"name":"Oraora!","icon":"Plasma","stat":"ATK +37.5%","effect":"Increases Basic Attack DMG by 2% for 10s after each Basic Attack, up to 10 stacks. Each stack lasts independently."},
    {"name":"Shiny Days","icon":"Liquid","stat":"ATK +25%","effect":"Break Intensity +48. Increases DMG by 10% against Broken units."},
    {"name":"The Fools' Spring","icon":"Condensate","stat":"DEF +52.5%","effect":"Increases ATK by 18% while the wearer has a Shield."},
    {"name":"The Forgotten","icon":"Solid","stat":"HP +25%","effect":"ATK +20% when HP is above 50%; DEF +20% when HP is below 50%."},
    {"name":"The Good, The Bad, The Bitter","icon":"Condensate","stat":"HP +25%","effect":"Increases DEF by 26% for 10s when taking damage (once every 20s)."},
    {"name":"The Great Thief","icon":"Condensate","stat":"Break Intensity +120","effect":"Increases Break Intensity by 70 for all characters of the same Esper Type when the team has 3 or more of that type. Effect does not stack."},
    {"name":"Time Bandit","icon":"Solid","stat":"HP +25%","effect":"Break Intensity +90 for 10s after casting Redirect Skill. Unlocks Arc: Picky (summons Picky to unlock nearby objects)."},
    {"name":"Umbrella","icon":"Condensate","stat":"DEF +52.5%","effect":"HP +10%. Strengthens shields by 10% while HP is above 50%."},
    {"name":"Watch Your Heads!","icon":"Gas","stat":"CRIT DMG +40%","effect":"ATK +10% and Lakshana DMG +10% to targets affected by Remora and Stain for 15s after casting Redirect Skill. Effect does not stack."}
];

const tabs = ["character", "cartridge", "module", "arc"];
const tabLabels = {
    character: "Character",
    cartridge: "Cartridge",
    module: "Module",
    arc: "Arc"
};

let activeTab = "character";
let data = {
    character: [],
    cartridge: [],
    module: [],
    arc: []
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
    if (tab === "cartridge" || tab === "arc") {
        return 1;
    }

    return 10;
}

function updateSelectedTitle(tab = activeTab) {
    if (!selectedTitle) return;

    if (tab === "arc") {
        selectedTitle.textContent = "Selected Arc";
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

function populateCharacterSelect() {
    const select = document.getElementById("characterName");
    if (!select) return;

    select.innerHTML = "";

    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "-- Select a character --";
    select.appendChild(empty);

    characterProfiles.forEach((character) => {
        const option = document.createElement("option");
        const characterName = character.main?.Name || character.name;
        option.value = characterName;
        option.textContent = characterName;
        select.appendChild(option);
    });
}

function updateCharacterDetails() {
    const select = document.getElementById("characterName");
    const detailsBox = document.getElementById("characterDetails");

    if (!select || !detailsBox) return;

    const profile = characterProfiles.find((character) => (character.main?.Name || character.name) === select.value);

    if (!profile) {
        detailsBox.innerHTML = "Select a character to see details.";
        return;
    }

    const main = profile.main || {};
    const attrs = profile.base_attributes || {};
    detailsBox.innerHTML = `
        <b>Element:</b> ${main.Element || "—"}<br>
        <b>Role:</b> ${main.Role || "—"}<br>
        <b>Level:</b> ${main.Level ?? "—"}<br>
        <b>Ascension:</b> ${main.Ascension ?? "—"}<br>
        <b>HP:</b> ${attrs.HP ?? 0}<br>
        <b>ATK:</b> ${attrs.ATK ?? 0}<br>
        <b>DEF:</b> ${attrs.DEF ?? 0}
    `;
}

function populateArcSelect() {
    const select = document.getElementById("arcName");
    const typeSelect = document.getElementById("arcType");

    if (!select) return;

    if (!typeSelect) return;

    typeSelect.innerHTML = "";

    const typeEmpty = document.createElement("option");
    typeEmpty.value = "";
    typeEmpty.textContent = "-- Select a type --";
    typeSelect.appendChild(typeEmpty);

    [...new Set(arcData.map((arc) => arc.icon).filter(Boolean))].forEach((icon) => {
        const option = document.createElement("option");
        option.value = icon;
        option.textContent = icon;
        typeSelect.appendChild(option);
    });

    updateArcNameOptions();
}

function updateArcNameOptions() {
    const select = document.getElementById("arcName");
    const typeSelect = document.getElementById("arcType");

    if (!select || !typeSelect) return;

    const selectedType = typeSelect.value;
    const currentValue = select.value;

    select.innerHTML = "";

    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "-- Select an Arc --";
    select.appendChild(empty);

    const filteredArcs = selectedType
        ? arcData.filter((arc) => arc.icon === selectedType)
        : arcData;

    filteredArcs.forEach((arc) => {
        const opt = document.createElement("option");
        opt.value = arc.name;
        opt.textContent = arc.name;
        select.appendChild(opt);
    });

    if (currentValue && filteredArcs.some((arc) => arc.name === currentValue)) {
        select.value = currentValue;
    } else {
        select.value = "";
    }

    updateArcEffectPreview();
}

function updateArcEffectPreview() {
    const select = document.getElementById("arcName");
    const typeSelect = document.getElementById("arcType");
    const specificStatInput = document.getElementById("arcSpecificStat");
    const effectBox = document.getElementById("arcEffect");

    if (!select || !typeSelect || !specificStatInput || !effectBox) return;

    const selectedArc = arcData.find((arc) => arc.name === select.value);

    if (selectedArc) {
        typeSelect.value = selectedArc.icon || "";
        specificStatInput.value = selectedArc.stat || "";
        effectBox.textContent = selectedArc.effect || "";
    } else {
        effectBox.textContent = "Choose an arc to see its effect.";
    }
}

function setModalMode(tab) {
    const isCartridge = tab === "cartridge";
    const isArc = tab === "arc";
    const isCharacter = tab === "character";

    document.getElementById("characterDetailsFields").classList.toggle("hidden", !isCharacter);
    document.getElementById("genericMainFields").classList.toggle("hidden", isCartridge || isArc || isCharacter);
    document.getElementById("cartridgeMainFields").classList.toggle("hidden", !isCartridge);
    document.getElementById("arcMainFields").classList.toggle("hidden", !isArc);
    document.getElementById("subStatsCard").classList.toggle("hidden", isArc || isCharacter);
}

function setActiveTab(tab) {
    activeTab = tab;

    document.querySelectorAll(".tabBtn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tab);
    });

    if (tab === "character") {
        emptyState.classList.add("hidden");
        contentArea.classList.remove("hidden");
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

function getSelectedCharacterProfile() {
    const characterName = document.getElementById("characterName").value;
    return characterProfiles.find((character) => (character.main?.Name || character.name) === characterName);
}

function getMainPayload() {
    if (activeTab === "character") {
        const profile = getSelectedCharacterProfile();

        if (!profile) {
            return {};
        }

        return profile.main || {};
    }

    if (activeTab === "cartridge") {
        const stat = document.getElementById("cartridgeMainStat").value;
        const value = Number(document.getElementById("cartridgeMainValue").value || 0);

        return stat ? { [stat]: value } : {};
    }

    if (activeTab === "arc") {
        const main = {};
        const atkPercent = document.getElementById("arcATKPercent").value;
        const specificStat = document.getElementById("arcSpecificStat").value.trim();

        if (atkPercent !== "") {
            main["ATK %"] = Number(atkPercent);
        }

        if (specificStat) {
            main["Specific Stat"] = specificStat;
        }

        return main;
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

    const profile = activeTab === "character" ? getSelectedCharacterProfile() : null;
    const baseAttributes = activeTab === "character" ? (profile?.base_attributes || {}) : null;

    const items = getCurrentItems();

    if (editModeId !== null) {
        const item = items.find((entry) => entry.id === editModeId);
        if (item) {
            item.main = main;

            if (activeTab === "character") {
                item.base_attributes = baseAttributes;
                delete item.sub;
            } else {
                item.sub = sub;
            }

            if (activeTab === "arc") {
                item.arcName = document.getElementById("arcName").value;
                item.arcType = document.getElementById("arcType").value;
                item.effect = document.getElementById("arcEffect").textContent.trim();
            }
        }
        editModeId = null;
    } else {
        const newItem = {
            id: Date.now(),
            main,
            selected: false
        };

        if (activeTab === "character") {
            newItem.base_attributes = baseAttributes;
        } else {
            newItem.sub = sub;
        }

        if (activeTab === "arc") {
            newItem.arcName = document.getElementById("arcName").value;
            newItem.arcType = document.getElementById("arcType").value;
            newItem.effect = document.getElementById("arcEffect").textContent.trim();
        }

        items.push(newItem);
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
    document.getElementById("characterName").value = "";
    document.getElementById("characterDetails").innerHTML = "Select a character to see details.";
    document.getElementById("arcName").value = "";
    document.getElementById("arcType").value = "";
    document.getElementById("arcATKPercent").value = "";
    document.getElementById("arcSpecificStat").value = "";
    document.getElementById("arcEffect").textContent = "Choose an arc to see its effect.";

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

    const items = getCurrentItems();

    items.forEach((entry) => {
        const box = document.createElement("div");
        box.className = "cardBox";

        const specificStatLine = activeTab === "arc" && entry.main?.["Specific Stat"]
            ? `<br><b>Specific Stat:</b>${entry.main["Specific Stat"]}`
            : "";

        const arcInfo = activeTab === "arc"
            ? `<br><br><b>Arc:</b> ${entry.arcName || "—"}<br><b>Type:</b> ${entry.arcType || "—"}<b>Effect:</b> ${entry.effect || "—"}`
            : "";

        const characterInfo = activeTab === "character"
            ? `<br><br><b>Base Attributes:</b><br>${Object.entries(entry.base_attributes || {})
                .map(([key, value]) => `${key}: ${value}`)
                .join("<br>")}`
            : "";

        const subSummary = activeTab === "arc" || activeTab === "character"
            ? ""
            : Object.entries(entry.sub || {})
                .map(([key, value]) => `${key}: ${value}`)
                .join("<br>");

        box.innerHTML = `
        <div class="cardTop">
            <div class="cardStats">
                ${formatMainSummary(entry)}${arcInfo}${characterInfo}${subSummary ? `<br><br>${subSummary}` : ""}
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
        module: data.module,
        arc: data.arc
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
    } else if (activeTab === "arc") {
        document.getElementById("arcName").value = item.arcName || "";
        document.getElementById("arcType").value = item.arcType || "";
        document.getElementById("arcATKPercent").value = item.main?.["ATK %"] ?? "";
        document.getElementById("arcSpecificStat").value = item.main?.["Specific Stat"] ?? "";
        document.getElementById("arcEffect").textContent = item.effect || "Choose an arc to see its effect.";
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

populateCharacterSelect();
populateCartridgeMainSelect();
populateArcSelect();
document.getElementById("characterName").addEventListener("change", updateCharacterDetails);
document.getElementById("arcName").addEventListener("change", updateArcEffectPreview);
document.getElementById("arcType").addEventListener("change", updateArcNameOptions);
loadData();
setModalMode(activeTab);
setActiveTab(activeTab);