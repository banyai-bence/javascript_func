/** @type {{war: string, team1: string, team1Size: string, team2?: string, team2Size?: string}[]} */

const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

const table=document.createElement("table")
document.body.appendChild(table)

const thead=document.createElement("thead")
table.appendChild(thead)

const tr=document.createElement("tr")
thead.appendChild(tr)

const a=[ "Harc megnevezése","Szembenálló felek","Haderő"]

for(const b of a){
    const th=document.createElement("th")
    th.innerText=b
    tr.appendChild(th)
}

const tbody=document.createElement("tbody")
table.appendChild(tbody)

for(const c of arr){
    const tr=document.createElement("tr")
    tbody.appendChild(tr)

    const td=document.createElement("td")
    td.innerText=c.war
    tr.appendChild(td)
    
    const td2=document.createElement("td")
    td2.innerText=c.team1
    tr.appendChild(td2)

    const td3=document.createElement("td")
    td3.innerText=c.team1Size
    tr.appendChild(td3)

    // (=) ertek ; (==) egyenlok-e? ; (===) tipus pl:int, string
    if(c.team2 !== undefined && c.team2Size !== undefined){

        td.rowSpan=2

        const tr2=document.createElement("tr")
        tbody.appendChild(tr2)

        const td4=document.createElement("td")
        td4.innerText=c.team2
        tr2.appendChild(td4)

        const td5=document.createElement("td")
        td5.innerText=c.team2Size
        tr2.appendChild(td5)
    }
}