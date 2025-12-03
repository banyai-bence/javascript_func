/**
 * @type {Okor[]}
 */
const JsArr=[
    {
        telepules: "Athén",
        agazat1: "politika",
        pelda1: "demokrácia",
        agazat2: "tudomány",
        pelda2: "filozófia",
    },
    {
        telepules: "Egyiptom",
        agazat1: "mezőgazdaság",
        pelda1: "csatornák"
    },
    {
        telepules: "Spárta",
        agazat1: "neveléstudomány",
        pelda1: "agogé",
        agazat2: "harcászat",
        pelda2: "hoplita"
    }
]

//JS ------- div es table----------------------------------------
const div=document.createElement("div")
document.body.appendChild(div)
div.id="jssection"
div.classList.add("hide")

const table= document.createElement("table")
div.appendChild(table)

//header
const header=["Ókori település","Ágazat","Példa"]
generateHeader(header)

//tbody
generateTBody(JsArr)

//checkbox-------------------------------------------------------

const checkbox=document.getElementById("tableselector")
const jssection=document.getElementById("jssection")
const htmlsection=document.getElementById("htmlsection")
checkboxSelect()

checkbox.addEventListener("change", checkboxSelect)

//JS ------- form ----------------------------------------------
const jsForm=document.createElement("form")
div.appendChild(jsForm)
jsForm.id="jsform"

generateJsForm(jsForm,"Ókori telepules","elso","telepules")
generateJsForm(jsForm,"Agazat","masodik","agazat1")
generateJsForm(jsForm,"Pelda","harmadik","pelda1")
generateJsForm(jsForm,"Agazat2","negyedik","agazat2")
generateJsForm(jsForm,"Pelda2","otodik","pelda2")
genBR(jsForm)

//submit gomb
const submit=document.createElement("button")
jsForm.appendChild(submit)
submit.innerText="Hozzáadás"

//htmlTableAdder------------------------------------------------

const htmlForm=document.getElementById("htmlform")

htmlForm.addEventListener("submit", htmlTableAdder)

//jsTableAdder--------------eventlistener-----------------------

jsForm.addEventListener("submit", function(e){
    e.preventDefault()

    /**@type {HTMLFormElement} */
    const target=e.target

    /**@type {HTMLInputElement} */
    const telepules=target.querySelector("#elso")
    /**@type {HTMLInputElement} */
    const agazat1=target.querySelector("#masodik")
    /**@type {HTMLInputElement} */
    const pelda1=target.querySelector("#harmadik")
    /**@type {HTMLInputElement} */
    const agazat2=target.querySelector("#negyedik")
    /**@type {HTMLInputElement} */
    const pelda2=target.querySelector("#otodik")
    
    if(validateFields(telepules,agazat1,pelda1)){

        let seged=true
        
        if(agazat2.value){
            if(validateField(pelda2,"kotelezo masik pelda is")==false){seged=false}
        }
        else if(pelda2.value){
            if(validateField(agazat2,"kotelezo masik agazat is")==false){seged=false}
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

    /**@type {Okor[]} */
    const obj={}

    obj.telepules=telep
    obj.agazat1=ag1
    obj.pelda1=p1
    obj.agazat2=ag2
    obj.pelda2=p2


    const tr=document.createElement("tr")
    jstbody.appendChild(tr)
    
    const td=genTableCell("td",tr,obj.telepules)
    genTableCell("td",tr,obj.agazat1)
    genTableCell("td",tr,obj.pelda1)


    if(obj.agazat2 && obj.pelda2){

        const tr2=document.createElement("tr")
        jstbody.appendChild(tr2)

        genTableCell("td",tr2,obj.agazat2)
        genTableCell("td",tr2,obj.pelda2)

        td.rowSpan=2
    }
    JsArr.push(obj)
    jsForm.reset()
    }
    }
    
})