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

let equipment = JSON.parse(localStorage.getItem("eq")) || [];
let selected = [];

const subContainer = document.getElementById("subStats");

// create 4 sub slots
for(let i=0;i<4;i++){

    const row = document.createElement("div");
    row.className="row";

    const select = document.createElement("select");
    select.id = "subName"+i;

    const empty = document.createElement("option");
    empty.value="";
    empty.textContent="--";
    select.appendChild(empty);

    options.forEach(o=>{
        const op=document.createElement("option");
        op.value=o;
        op.textContent=o;
        select.appendChild(op);
    });

    const val = document.createElement("input");
    val.type="number";
    val.id="subVal"+i;

    row.appendChild(select);
    row.appendChild(val);

    subContainer.appendChild(row);
}

// ADD EQUIPMENT
function addEquipment(){

    const main = {
        ATK: Number(document.getElementById("mainATK").value || 0),
        HP: Number(document.getElementById("mainHP").value || 0)
    };

    const sub = {};
    const used = new Set();

    for(let i=0;i<4;i++){

        const name = document.getElementById("subName"+i).value;
        const val = Number(document.getElementById("subVal"+i).value || 0);

        if(name && !used.has(name)){
            sub[name] = val;
            used.add(name);
        }
    }

    const item = {
        id: Date.now(),
        main,
        sub,
        selected:false
    };

    equipment.push(item);

    save();
    render();
    clearForm();
}

// SELECT / UNSELECT
function toggleSelect(id){

    const item = equipment.find(e=>e.id===id);

    if(!item.selected && selected.length>=4){
        alert("Max 4 selected");
        return;
    }

    item.selected = !item.selected;

    selected = equipment.filter(e=>e.selected);

    save();
    render();
}

// DELETE
function deleteItem(id){
    equipment = equipment.filter(e=>e.id!==id);
    selected = equipment.filter(e=>e.selected);
    save();
    render();
}

// CLEAR FORM
function clearForm(){

    document.getElementById("mainATK").value="";
    document.getElementById("mainHP").value="";

    for(let i=0;i<4;i++){
        document.getElementById("subName"+i).value="";
        document.getElementById("subVal"+i).value="";
    }
}

// RENDER
function render(){

    const selDiv = document.getElementById("selected");
    const libDiv = document.getElementById("library");

    selDiv.innerHTML="";
    libDiv.innerHTML="";

    equipment.forEach(e=>{

        const box = document.createElement("div");
        box.className="cardBox";

        box.innerHTML=`
            <b>ATK:</b> ${e.main.ATK}<br>
            <b>HP:</b> ${e.main.HP}<br><br>
            ${Object.entries(e.sub).map(([k,v])=>`${k}: ${v}`).join("<br>")}
            <br><br>
            <button onclick="toggleSelect(${e.id})">
                ${e.selected?"Unselect":"Select"}
            </button>
            <button onclick="deleteItem(${e.id})">Delete</button>
        `;

        if(e.selected){
            selDiv.appendChild(box);
        } else {
            const item = document.createElement("div");
            item.className="item";
            item.innerHTML=`
                <div>
                    <b>ATK:</b> ${e.main.ATK} |
                    <b>HP:</b> ${e.main.HP}
                </div>
                <div>
                    <button onclick="toggleSelect(${e.id})">Select</button>
                    <button onclick="deleteItem(${e.id})">X</button>
                </div>
            `;
            libDiv.appendChild(item);
        }
    });
}

// SAVE
function save(){
    localStorage.setItem("eq", JSON.stringify(equipment));
}

// DOWNLOAD JSON
function downloadJSON(){
    const blob = new Blob([JSON.stringify({equipment},null,2)],{
        type:"application/json"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "equipment.json";
    a.click();

    URL.revokeObjectURL(url);
}

// INIT
render();