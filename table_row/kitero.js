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

generateTable("tabbodyjs",["Nemzetiseg","Szerzo","Mu"])

renderTableBody(arr0)

//17
const htmlform=document.getElementById('htmlform')



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


if(validateFields(nemz,sz1,mu1)){     
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



        //---------------------------------------------------------
        arr0.push(obj);
        renderTableBody(arr0);
}
})




