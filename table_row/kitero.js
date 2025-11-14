/**
 * @typedef {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} CountryWriters
 */


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
//---------------------------------------------------------
/** @type {CountryWriters[]} */
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
//----------------------------------------------------
const table = document.createElement('table')
document.body.appendChild(table)
 
generateHeader(table,["Nemzetiseg","Szerzo","Mu"])
 
const tbody1 = document.createElement('tbody')
table.appendChild(tbody1)
tbody1.id='tabbody'

renderTableBody(arr0)

const htmlform=document.getElementById('form')


/** @type {HTMLFormElement} */
const jsform=document.createElement("form")
jsform.id="jsform"
document.body.appendChild(jsform)

createFormElement(jsform,"Nemzetiség:","jsnemzetiseg")
createFormElement(jsform,"Szerző:","jsszerzo1")
createFormElement(jsform,"Mű:","jsmu1")
createFormElement(jsform,"Másik Szerző:","jsszerzo2")
createFormElement(jsform,"Mű:","jsmu2")

const button=document.createElement("button")
button.innerText="hozzáadás"
jsform.appendChild(button)

htmlform.addEventListener("submit", htmlEventListener)


jsform.addEventListener("submit", 
    function (e){
        e.preventDefault()
        /** @type {HTMLFormElement} */
        const targetdefault= e.target
        
        /** @type {HTMLInputElement} */   
        const nemz=targetdefault.querySelector("#jsnemzetiseg")
        /** @type {HTMLInputElement} */
        const sz1=targetdefault.querySelector("#jsszerzo1")
        /** @type {HTMLInputElement} */
        const mu1=targetdefault.querySelector("#jsmu1")
        /** @type {HTMLInputElement} */
        const sz2=targetdefault.querySelector("#jsszerzo2")
        /** @type {HTMLInputElement} */
        const mu2=targetdefault.querySelector("#jsmu2")


        /** @type {string} */
        const n=nemz.value
        /** @type {string} */
        const s=sz1.value
        /** @type {string} */
        const m=mu1.value
        /** @type {string} */
        const sz=sz2.value
        /** @type {string} */
        const mu=mu2.value

        /** @type {CountryWriters} */
        const obj={}          
        obj.nemzet=n
        obj.szerzo=s
        obj.mu=m
        obj.szerzo2=sz
        obj.mu2=mu

        arr0.push(obj);
        renderTableBody(arr0);
})




