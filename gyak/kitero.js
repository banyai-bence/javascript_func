//tablearr
/**
 * @type {OkorArr[]}
 */
const tablearr=[
    {
        telepules:"Athén",
        agazat1: "politika",
        pelda1: "demokrácia",
        agazat2: "tudomány",
        pelda2: "filozófia"
    },
    {
        telepules:"Egyiptom",
        agazat1: "mezőgazdaság",
        pelda1: "csatornák",
    },
    {
        telepules:"Spárta",
        agazat1: "neveléstudomány",
        pelda1: "agogé",
        agazat2: "harcászat",
        pelda2: "hoplita"
    }
]

//jssection div--------------------------------------------

const div=document.createElement("div")
document.body.appendChild(div)
div.id="jssection"
div.classList.add("hide")

//table 
const table=document.createElement("table")
div.appendChild(table)

//header
const header=["Ókori település","Ágazat","Példa"]
headergenerator(header)

//tbody
tbodygenerator(tablearr)


//dropdown------------------------------------------------

const tableselector=document.getElementById("tableselector")

dropdownSelector(tableselector)

tableselector.addEventListener("change", function(){
    dropdownSelector(tableselector)
})


//jsForm---------------------------------------------------

const form=document.createElement("form")
div.appendChild(form)
form.id="jsform"
createBR(form)

//div label input span
generateForm(form,"Ókori telepules","telepules","elso")
generateForm(form,"Ágazat","agazat1","masodik")
generateForm(form,"Példa","pelda1","harmadik")
generateForm(form,"Másik Ágazat","agazat2","negyedik")
generateForm(form,"Másik Példa","pelda2","otodik")

//button
const button=document.createElement("button")
form.appendChild(button)
button.innerText="Hozzáadás"

//js eventlistener
const jsform=document.getElementById("jsform")
jsform.addEventListener("submit",function(e){
    e.preventDefault()

    /**
     * @type {HTMLFormElement}
     */
    const target=e.target

    /** @type {HTMLInputElement} */
    const telepules=target.querySelector("#elso")
    /** @type {HTMLInputElement} */
    const agazat1=target.querySelector("#masodik")
    /** @type {HTMLInputElement} */
    const pelda1=target.querySelector("#harmadik")
    /** @type {HTMLInputElement} */
    const agazat2=target.querySelector("#negyedik")
    /** @type {HTMLInputElement} */
    const pelda2=target.querySelector("#otodik")


    if(validateFields(telepules,agazat1,pelda1)){

        let seged=true

        if(agazat2.value){
            if(validateField(pelda2,"Kötelező másik példa is")==false){seged=false}
        }
        else if(pelda2.value){
            if(validateField(agazat2,"Kötelező másik ágazat is")==false){seged=false}
        }

        if(seged){

        /**@type {string} */
        const telep=telepules.value
        /**@type {string} */
        const ag1=agazat1.value
        /**@type {string} */
        const p1=pelda1.value
        /**@type {string} */
        const ag2=agazat2.value
        /**@type {string} */
        const p2=pelda2.value
    
        /** @type {OkorArr} */
        const obj={}

        obj.telepules=telep
        obj.agazat1=ag1
        obj.pelda1=p1
        obj.agazat2=ag2
        obj.pelda2=p2

        const tr= document.createElement("tr")
        jstbody.appendChild(tr)

        const td1=createTableCell("td",tr,obj.telepules)
        createTableCell("td",tr,obj.agazat1)
        createTableCell("td",tr,obj.pelda1)

        if(obj.agazat2 && obj.pelda2){

            const tr2= document.createElement("tr")
            jstbody.appendChild(tr2)

            createTableCell("td",tr2,obj.agazat2)
            createTableCell("td",tr2,obj.pelda2)

            td1.rowSpan=2
        }
        tablearr.push(obj)
        jsform.reset()
    }
}
})


//htmlForm-------------------------------------------------
const htmlform=document.getElementById("htmlform")

htmlform.addEventListener("submit",htmlTableAdder)

