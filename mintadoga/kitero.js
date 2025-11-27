/**
 * tablazat adatai
 * @type {{telepules: string, agazat1: string, agazat2: string, pelda1: string, pelda2: string}[]}
 */
const arr=[
    {
        telepules: "Athén",
        agazat1: "politika",
        agazat2: "tudomány",
        pelda1: "demokrácia",
        pelda2: "filozófia"
    },
    {
        telepules: "Egyiptom",
        agazat1: "mezőgazdaság",
        pelda1: "csatornák",
    },
    {
        telepules: "Spárta",
        agazat1: "neveléstudomány",
        agazat2: "harcászat",
        pelda1: "agogé",
        pelda2: "hoplita"
    },
]

//checkbox
const div= document.createElement("div")
document.body.appendChild(div)
div.id="jssection"
div.classList.add("hide")

const checkbox = document.getElementById("tableselector")
const jssection = document.getElementById("jssection")
const htmlsection = document.getElementById("htmlsection")

toggletable()

checkbox.addEventListener("change", toggletable)

//tablazat letrehozasa
const table = document.createElement("table")
div.appendChild(table)

//fejlec letrehozasa / kitoltese
const thead = document.createElement("thead")
table.appendChild(thead)
const thr = document.createElement("tr")
thead.appendChild(thr)

/**
 * @type {string[]}
 */
const header= ["Ókori település","Ágazat","Példa"]

for(const elem of header){
    const th = document.createElement("th")
    thr.appendChild(th)
    th.innerText= elem
    if(elem=="Példa"){
        th.colSpan=2
    }
}

//tbody letrehozasa / kitoltese
const tbody = document.createElement("tbody")
table.appendChild(tbody)

for(const elem of arr){
    const tr= document.createElement("tr")
    tbody.appendChild(tr)

    const td1= document.createElement("td")
    tr.appendChild(td1)
    td1.innerText= elem.telepules

    const td2= document.createElement("td")
    tr.appendChild(td2)
    td2.innerText= elem.agazat1

    const td3= document.createElement("td")
    tr.appendChild(td3)
    td3.innerText= elem.pelda1

    if(elem.agazat2 !== undefined){
        td1.rowSpan=2

        const tr2= document.createElement("tr")
        tbody.appendChild(tr2)

        const td4=document.createElement("td")
        tr2.appendChild(td4)
        td4.innerText= elem.agazat2

        const td5=document.createElement("td")
        tr2.appendChild(td5)
        td5.innerText= elem.pelda2
    }
}

generateBr(div)

//urlap letrehozasa
const form= document.createElement("form")
div.appendChild(form)
form.id="jsform"

//mezok letrehozasa
generateFormDiv(form,"Ókori település","elso","telepules")
generateFormDiv(form,"Ágazat1","masodik","agazat1")
generateFormDiv(form,"Példa1","harmadik","pelda1")
generateFormDiv(form,"Ágazat2","negyedik","agazat2")
generateFormDiv(form,"Példa2","otodik","pelda2")

//submit gomb
const submit= document.createElement("input")
form.appendChild(submit)
submit.type="submit"
submit.value="Hozzáadás"




