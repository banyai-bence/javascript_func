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

/**@type {{nemzet:string,szerzo:string,mu:string,szerzo?:string,mu2?:string}[]} */
const arr =[
    {
        nemzet:'Orosz',
        szerzo:'Gogol',
        mu:'A köpönyeg',
        szerzo2:'Csehov',
        mu2:'A csinovnyik halála',
    },
    {
        nemzet:'Cseh',
        szerzo:'Franz Kafka',
        mu:'Az átváltozás',
    },
    {
        nemzet:'Magyar',
        szerzo:'Örkény István',
        mu:'Egyperces Novellák',
        szerzo2:'József Attila',
        mu2:'Klárisok',
    },
    {
        nemzet:'Svájc',
        szerzo:'Friedrich Dürrenmatt',
        mu:'A fizikusok',
    }      
]
 
const table = document.createElement('table')
document.body.appendChild(table)
 
const thead = document.createElement('thead')
table.appendChild(thead)
 
const trh = document.createElement('tr')
thead.appendChild(trh)
 
const tomb=["Nemzetiség","Szerző","Mű"]
for(const i of tomb){
    const th = document.createElement('th')
    th.innerText=i
    thead.appendChild(th)
}
 
const tbody = document.createElement('tbody')
table.appendChild(tbody)
 

for(const k of arr){
   
    const trd = document.createElement('tr')
    tbody.appendChild(trd)  
    
    const tdN = document.createElement('td')
    tdN.innerText=k.nemzet
    trd.appendChild(tdN)
 
    tdN.addEventListener('click',function (e){
        /**@type {HTMLTableCellElement} */
        const target=e.target
        target.classList.add('marked')
 
    })
 
    
    const tdSz = document.createElement('td')
    tdSz.innerText=k.szerzo
    trd.appendChild(tdSz)
    
    const tdM = document.createElement('td')
    tdM.innerText=k.mu
    trd.appendChild(tdM)
    
    if(k.szerzo2 !== undefined && k.mu2 !== undefined){
        tdN.rowSpan=2
 
        const tr = document.createElement('tr')
        tbody.appendChild(tr)
 
        const tdSz2 = document.createElement('td')
        tdSz2.innerText=k.szerzo2
        tr.appendChild(tdSz2)

        const tdM2 = document.createElement('td')
        tdM2.innerText=k.mu2
        tr.appendChild(tdM2)
    }
}

/**
 * @type {HTMLFormElement}
 */
const htmlform=document.getElementById("htmlform")
addEventListener("submit", 
    function (e){
        e.preventDefault()

        /** @type {HTMLFormElement} */
        const targetdefault= e.target
        
        /** @type {HTMLInputElement} */
        const nemz=targetdefault.querySelector("#nemzetiseg")
        /** @type {string} */
        const n=nemz.value

        /** @type {HTMLInputElement} */
        const sz1=targetdefault.querySelector("#szerzo1")
        /** @type {string} */
        const s=sz1.value

        /** @type {HTMLInputElement} */
        const mu1=targetdefault.querySelector("#mu1")
        /** @type {string} */
        const m=mu1.value

        /** @type {HTMLInputElement} */
        const sz2=targetdefault.querySelector("#szerzo2")
        /** @type {string} */
        const sz=sz2.value

        /** @type {HTMLInputElement} */
        const mu2=targetdefault.querySelector("#mu2")
        /** @type {string} */
        const mu=mu2.value

        /**@type {{nemzet:string,szerzo:string,mu:string,szerzo?:string,mu2?:string}} */
        const obj={
            
        }
    }
)
