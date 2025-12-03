/**
 * @typedef {{telepules: string, agazat1: string, pelda1:string, agazat2?: string, pelda2?:string}} OkorArr
 */


/**
 * 
 * @param {string} celltype 
 * @param {HTMLTableRowElement} parentelem 
 * @param {string} txt 
 * @returns {HTMLTableCellElement}
 */
function createTableCell(celltype,parentelem,txt){
        const tdh= document.createElement(celltype)
        parentelem.appendChild(tdh)
        tdh.innerText=txt

        return tdh
}

/**
 * 
 * @param {HTMLElement} parentelem 
 */
function createBR(parentelem){
    const br=document.createElement("br")
    parentelem.appendChild(br)
}

/**
 * 
 * @param {string[]} tomb 
 * @param {HTMLTableElement} parentelem 
 */
function headergenerator(tomb){
    const thead=document.createElement("thead")
    table.appendChild(thead)

    const trh=document.createElement("tr")
    thead.appendChild(trh)

    for(const elem of tomb){

        const th=createTableCell("th",trh,elem)

        if(elem=="Példa"){
            th.rowSpan=2
        }
    }
}

/**
 * @param {string[]} arr 
 */
function tbodygenerator(arr){
    const tbody=document.createElement("tbody")
    table.appendChild(tbody)
    tbody.id="jstbody"

    for(const elem of arr){

        const tr= document.createElement("tr")
        tbody.appendChild(tr)

        const td1=createTableCell("td",tr,elem.telepules)
        createTableCell("td",tr,elem.agazat1)
        createTableCell("td",tr,elem.pelda1)

        if(elem.agazat2){
            td1.rowSpan=2

            const tr2= document.createElement("tr")
            tbody.appendChild(tr2)
            createTableCell("td",tr2,elem.agazat2)
            createTableCell("td",tr2,elem.pelda2)
        }
    }
}

/**
 * @param {HTMLInputElement} inp
 * @returns {void}
 */
function dropdownSelector(inp){
    const select=inp.value

    const jssection=document.getElementById("jssection")
    const htmlsection=document.getElementById("htmlsection")

    if(select=="htmlsection"){
        jssection.classList.add("hide")
        htmlsection.classList.remove("hide")
    }
    else{
        htmlsection.classList.add("hide")
        jssection.classList.remove("hide")
    }
}

/**
 * 
 * @param {HTMLFormElement} parent 
 * @param {string} txt 
 * @param {string} name 
 * @param {string} labInpId 
 * @returns {void}
 */
function generateForm(parentelem,txt,name,labInpId){
    
    const div=createTableCell("div",parentelem,"")

    const label=createTableCell("label",div,txt)
    label.htmlFor=labInpId
    createBR(div)
    
    const input=createTableCell("input",div,"")
    input.name=name
    input.id=labInpId
    createBR(div)

    const span=createTableCell("span",div,"")
    span.classList.add("error")
    createBR(div)
}

/**
 * 
 * @param {HTMLInputElement} input 
 * @param {string} txt 
 * @returns {boolean}
 */
function validateField(input,txt){
    let valid=true
    const felmeno= input.parentElement
    if(input.value==""){
        const felm=felmeno.querySelector(".error")
        felm.innerText=txt

        valid=false
    }
    else{
        const felm=felmeno.querySelector(".error")
        felm.innerText=""
    }
    return valid
}

/**
 * 
 * @param {HTMLInputElement} inpElem1 
 * @param {HTMLInputElement} inpElem2 
 * @param {HTMLInputElement} inpElem3 
 * @returns 
 */
function validateFields(inpElem1,inpElem2,inpElem3){
    let valid =true
    if(validateField(inpElem1,"Kötelező")==false){valid=false}
    if(validateField(inpElem2,"Kötelező")==false){valid=false}
    if(validateField(inpElem3,"Kötelező")==false){valid=false}
    return valid
}

/**
 * 
 * @param {Event} e 
 */
function htmlTableAdder(e){
    e.preventDefault()

    /**
     * @type {HTMLFormElement}
     */
    const target=e.target

    /** @type {HTMLInputElement} */
    const telepules=target.querySelector("#elso")
    /** @type {HTMLInputElement} */
    const agazat=target.querySelector("#masodik")
    /** @type {HTMLInputElement} */
    const pelda1=target.querySelector("#harmadik")
    /** @type {HTMLInputElement} */
    const pelda2=target.querySelector("#negyedik")


    if(validateFields(telepules,agazat,pelda1)){

    /**@type {string} */
    const telep=telepules.value
    /**@type {string} */
    const ag=agazat.value
    /**@type {string} */
    const p1=pelda1.value
    /**@type {string} */
    const p2=pelda2.value
    
    /** @type {OkorArr} */
    const obj={}

    obj.telepules=telep
    obj.agazat1=ag
    obj.pelda1=p1
    obj.pelda2=p2

    const htmltbodyid=document.getElementById("htmltbody")

    const tr= document.createElement("tr")
    htmltbodyid.appendChild(tr)

    createTableCell("td",tr,obj.telepules)
    createTableCell("td",tr,obj.agazat1)
    const td1=createTableCell("td",tr,obj.pelda1)

    if(obj.pelda2){
        createTableCell("td",tr,obj.pelda2)
    }
    else{
        td1.colSpan=2
    }

    target.reset()
    }
}

