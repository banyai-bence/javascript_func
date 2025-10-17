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

const th=document.createElement("th")
tr.appendChild(th)

const th2=document.createElement("th")
tr.appendChild(th2)

const th3=document.createElement("th")
tr.appendChild(th3)

th.innerText="Szerző neve"
th2.innerText="Korszak"
th3.innerText="Szerelmek"
th3.colSpan=2

const tbody = document.createElement("tbody")
table.appendChild(tbody)
for (const i of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td = document.createElement("td")
    td.innerText = i.nev
    tr.appendChild(td)

    const td2 = document.createElement("td")
    td2.innerText = i.kor
    tr.appendChild(td2)

    const td3= document.createElement("td")
    td3.innerText = i.sz1
    tr.appendChild(td3)

    if(i.sz2 === undefined){
        td3.colSpan=2
    }
    else{
    const td4 = document.createElement("td")
    td4.innerText = i.sz2
    tr.appendChild(td4)
    }
}

/**
 * 
 * @param {string} celltype -letrehoz td,th cellatipus
 * @param {string} cellcontent -beallitja a kontentet
 * @param {HTMLTableRowElement} parentrow -hozzafuzunk egy sort
 * 
 * @returns {void}
 */
function createcell(celltype,cellcontent,parentrow){
    const td = document.createElement(celltype)
    celltype.innerText=cellcontent
    parentrow.appendChild(celltype)
}






