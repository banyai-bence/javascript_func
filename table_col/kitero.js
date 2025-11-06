//const { cloneElement } = require("react")

console.log("szar volt a ropdoga")
const a="szia"
/**
 * @type {string}
 */
console.log(a)

const b=["a","b","c"]
console.log(b)

for(let i=0;i<b.length;i++){
    console.log(b[i])
}

console.log(b[1])

/**
 * while()
 * 
 * do 
 * while()
*/

for(const a of b){

}

for(const key in b){
    console.log(`${key}: ${b[key]}`)
}
/**@type {{name:string, age:number}} */
const y ={
    name:"bence",
    age:17
}

for(const key in y){
    console.log(y[key])
}

 
/** 
 @type {{kor: string, nev: string, sz1: string, sz2?: string}[]}
 */
const arr = [
    {
        kor: "reformáció",
        nev: "Balassi Bálint",
        sz1: "Losonczy Anna",
        sz2: "Dobó Krisztina"
    },
    {
        kor: "felvilágosodás",
        nev: "Csokonai",
        sz1: "Vajda Juliána",
        
    },
    {
        kor: "magyar romantika",
        nev: "Petőfi Sándor",
        sz1: "Mednyánszky Berta",
        sz2: "Szendrey Júlia"
    },
    {
        kor: "20. század",
        nev: "Ady Endre",
        sz1: "Léda",
        sz2: "Csinszka"
    }
]

const table =document.createElement("table")
document.body.appendChild(table)

const thead =document.createElement("thead")
table.appendChild(thead)

const tr =document.createElement("tr")
thead.appendChild(tr)

createcell("th","Szerző neve",tr)
createcell("th","Korszak",tr)
const th3=createcell("th","Szerelmek",tr)
th3.colSpan=2

const tbody = document.createElement("tbody")
table.appendChild(tbody)
for (const i of arr){
    const tr2 = document.createElement("tr")
    tbody.appendChild(tr2)

    createcell("td",i.nev,tr2)

    createcell("td",i.kor,tr2)

    const td3=createcell("td",i.sz1,tr2)

    if(i.sz2 === undefined){
        td3.colSpan=2
    }
    else{
    /*
    const td4 = document.createElement("td")
    td4.innerText = i.sz2
    tr.appendChild(td4)
    */
    createcell("td",i.sz2,tr2)
    }
}

/**
 * 
 * @param {string} celltype -letrehoz td,th cellatipus
 * @param {string} cellcontent -beallitja a kontentet
 * @param {HTMLTableRowElement} parentrow -hozzafuzunk egy sort
 * 
 * @returns {HTMLTableCellElement} -visszater a letreozott cell elemennel
 */
function createcell(celltype,cellcontent,parentrow){
    const valami1 = document.createElement(celltype)
    valami1.innerText=cellcontent
    parentrow.appendChild(valami1)
    return valami1
}


//hazi

const form =document.createElement("form")
form.id="form_js"
document.body.appendChild(form)

const h2 =document.createElement("h2")
h2.innerText="Javascript form"
form.appendChild(h2)

LabelInput("koltoneve","Költő neve:")
LabelInput("korszak","Korszak:")
LabelInput("szerelme1","Szerelme:")
LabelInput("szerelme2","Szerelme:")

const button =document.createElement("button")
button.innerText="Hozzaadas"
form.appendChild(button)

function bek(){
    const br = document.createElement("br")
    form.appendChild(br)
}

/**
@param {string} kapcs
@param {string} cimke
*/

function LabelInput(kapcs,cimke){
    const label =document.createElement("label")
    label.htmlFor=kapcs
    label.innerText=cimke
    form.appendChild(label)
    bek();

    const input = document.createElement("input")
    input.type="text"
    input.id=kapcs
    input.name=kapcs
    form.appendChild(input)
    bek();
    bek();
}


