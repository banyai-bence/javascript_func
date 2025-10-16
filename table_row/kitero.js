const a={ 

}
const b =3
if(b>5){
    a.name="nev"
}
else{
    a["name"]="nev"
}
console.log(a)
console.log(a["name"])
console.log(a.name)

/** @type {{nemz: string, szerzo: string, mu: string}[]} */
const arr= [
    {
        nemz: "Orosz",
        szerzo: "Gogol",
        mu: "A köpönyeg",
    },
    {
        szerzo: "Csehov",
        mu: "A csinovnyik halála",
    },
    {
        nemz: "Cseh",
        szerzo: "Franz Kafka",
        mu: "Az átváltozás",
    },
    {
        nemz: "Magyar",
        szerzo: "Örkény István",
        mu: "Egyperces Novellák",
    },
    {
        szerzo: "József Attila",
        mu: "Klárisok",
    },
    {
        nemz: "Svájc",
        szerzo: "Friedrich Dürrenmatt",
        mu: "A fizikusok",
    }
]

const table=document.createElement("table")
document.body.appendChild(table)

const thead =document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const c=["Nemzetiség","Szerző","Mű"]
for(const i of c){
    const th = document.createElement("th")
    th.innerText=i
    tr.appendChild(th)
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for(const j of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    if(j.nemz == "Magyar" || j.nemz == "Orosz"){

        const td = document.createElement("td")
        td.innerText=j.nemz
        tr.appendChild(td)
        td.rowSpan=2

        const td2 = document.createElement("td")
        td2.innerText=j.szerzo
        tr.appendChild(td2)

        const td3 = document.createElement("td")
        td3.innerText=j.mu
        tr.appendChild(td3)

    }
    else if(j.nemz == "Cseh" || j.nemz == "Svájc"){

        const td = document.createElement("td")
        td.innerText=j.nemz
        tr.appendChild(td)

        const td2 = document.createElement("td")
        td2.innerText=j.szerzo
        tr.appendChild(td2)

        const td3 = document.createElement("td")
        td3.innerText=j.mu
        tr.appendChild(td3)

    }
    else{
        const td2 = document.createElement("td")
        td2.innerText=j.szerzo
        tr.appendChild(td2)

        const td3 = document.createElement("td")
        td3.innerText=j.mu
        tr.appendChild(td3)
    }
}



