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
th3.colSpan="2"

tbody