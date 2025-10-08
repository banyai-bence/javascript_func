/** @type {{theme: string, time:string, scientist1: string, scientist2: string}[]} */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

/** document.createelement(string)
 */
const table =document.createElement("table")

/** document.body.appendChild(htmlelement)
 */
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

th.innerText="Fizika területe"
th2.innerText="Időszak"
th3.innerText="Képviselők"
th3.colSpan=2

const tbody = document.createElement("tbody")
table.appendChild(tbody)
for(const i of arr){
    const tr2 =document.createElement("tr")
    tbody.appendChild(tr2)
    const td =document.createElement("td")
    td.innerText=i.theme
    tr2.appendChild(td)
    const td2 =document.createElement("td")
    td2.innerText=i.time
    tr2.appendChild(td2)
    const td3 =document.createElement("td")
    td3.innerText=i.scientist1
    tr2.appendChild(td3)
    if(i.scientist2===undefined){
        td3.colSpan="2"
    }
    else{
        const td4 =document.createElement("td")
        td4.innerText=i.scientist2
        tr2.appendChild(td4)
    }
}




