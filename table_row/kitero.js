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


/** @type {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}[]} */
const arr0 =[
    {//tr1
        nemzet:'Orosz',
        szerzo:'Gogol',
        mu:'A köpönyeg',
        szerzo2:'Csehov',
        mu2:'A csinovnyik halála',
    },
    {//tr3
        nemzet:'Cseh',
        szerzo:'Franz Kafka',
        mu:'Az átváltozás',
    },
    {//tr4
        nemzet:'Magyar',
        szerzo:'Örkény István',
        mu:'Egyperces Novellák',
        szerzo2:'József Attila',
        mu2:'Klárisok',
    },
    {//tr6
        nemzet:'Svájc',
        szerzo:'Friedrich Dürrenmatt',
        mu:'A fizikusok',
    }
]

//----------------orai+hf--------------------------------------
//-------------------------------------------------------------
const tbody= document.createElement("tbody")



/**@type {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}[]} */
const arr =[]


/** @param {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} array */
function renderTableBody(arr){
    tbody.id='tabbody'
    const tabBody= document.getElementById('tabbody')
    tabBody.innerHTML=''

for(const k of arr){
   
    const trd = document.createElement('tr')
    tabBody.appendChild(trd)  
    
    const tdN = document.createElement('td')
    tdN.innerText=k.nemzet
    trd.appendChild(tdN)
 
    tdN.addEventListener('click',function (e){
        /**@type {HTMLTableCellElement} */
        const target=e.target
        const tr= target.parentElement
        const tbody= tr.parentElement
        const results=tbody.querySelector(".marked")

        if(results){
            results.classList.remove('marked')
        }

        target.classList.add('marked')
    })
 
    
    const tdSz = document.createElement('td')
    tdSz.innerText=k.szerzo
    trd.appendChild(tdSz)
    
    const tdM = document.createElement('td')
    tdM.innerText=k.mu
    trd.appendChild(tdM)
    
    if(k.szerzo2 !== "" && k.mu2 !== ""){
        tdN.rowSpan=2
 
        const tr = document.createElement('tr')
        tabBody.appendChild(tr)
 
        const tdSz2 = document.createElement('td')
        tdSz2.innerText=k.szerzo2
        tr.appendChild(tdSz2)

        const tdM2 = document.createElement('td')
        tdM2.innerText=k.mu2
        tr.appendChild(tdM2)
    }
}
}
//---------------------------------------------------------------------

/** @type {HTMLFormElement} */
const jsform=document.getElementById("jsform")

jsform.addEventListener("submit", 
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

        /** @type {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} */
        const obj={}          
        obj.nemzet=n
        obj.szerzo=s
        obj.mu=m
        obj.szerzo2=sz
        obj.mu2=mu

        arr.push(obj);
        renderTableBody(arr);
    }
)
renderTableBody(arr);
