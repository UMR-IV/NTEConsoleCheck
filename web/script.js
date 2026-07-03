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
    "DMG %",
];

const subContainer = document.getElementById("subStats");

for(let i=1;i<=4;i++){

    const row = document.createElement("div");
    row.className="row";

    const select=document.createElement("select");
    select.id="subName"+i;

    options.forEach(option=>{

        const op=document.createElement("option");
        op.value=option;
        op.textContent=option;
        select.appendChild(op);

    });

    const value=document.createElement("input");
    value.type="number";
    value.placeholder="Value";
    value.id="subValue"+i;

    row.appendChild(select);
    row.appendChild(value);

    subContainer.appendChild(row);

}

document.getElementById("downloadBtn").onclick=()=>{

    const data={
        main:{
            HP:Number(document.getElementById("mainHP").value),
            ATK:Number(document.getElementById("mainATK").value)
        },
        sub:{}
    };

    for(let i=1;i<=4;i++){

        const name=document.getElementById("subName"+i).value;
        const value=Number(document.getElementById("subValue"+i).value);

        data.sub[name]=value;

    }

    const json=JSON.stringify(data,null,4);

    const blob=new Blob([json],{
        type:"application/json"
    });

    const url=URL.createObjectURL(blob);

    const a=document.createElement("a");
    a.href=url;
    a.download="equipment.json";
    a.click();

    URL.revokeObjectURL(url);

}