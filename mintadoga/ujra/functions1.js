/**
 * @typedef {{telepules: string, agazat1: string, pelda1: string, agazat2?: string, pelda2?: string}[]} Okor
 */


/**
 * 
 * @param {HTMLDivElement} parentelem 
 */
function genBR(parentelem){
    const br=document.createElement("br")
    parentelem.appendChild(br)
}

/**
 * 
 * @param {string} type
 * @param {HTMLTableRowElement} parentelem 
 * @param {string} txt 
 * @returns {HTMLTableCellElement}
 */
function genTableCell(type,parentelem,txt){
    const tdh=document.createElement(type)
    parentelem.appendChild(tdh)
    tdh.innerText=txt

    return tdh
}

/**
 * 
 * @param {string[]} tomb 
 */
function generateHeader(tomb){
    const thead=document.createElement("thead")
    table.appendChild(thead)

    const tr=document.createElement("tr")
    thead.appendChild(tr)

    for(const elem of tomb){
        const th=genTableCell("th", tr, elem)
        
        if(elem=="Példa"){
            th.rowSpan=2
        }
    }
}

/**
 * 
 * @param {string[]} arr 
 */
function generateTBody(arr){
    const tbody=document.createElement("tbody")
    table.appendChild(tbody)
    tbody.id="jstbody"

    for(const elem of arr){
        const tr=document.createElement("tr")
        tbody.appendChild(tr)

        const td=genTableCell("td",tr,elem.telepules)
        genTableCell("td",tr,elem.agazat1)
        genTableCell("td",tr,elem.pelda1)

        if(elem.agazat2){
            const tr2=document.createElement("tr")
            tbody.appendChild(tr2)

            genTableCell("td",tr2,elem.agazat2)
            genTableCell("td",tr2,elem.pelda2)
            td.rowSpan=2
        }
    }
}

/**
 * 
 * @returns {void}
 */
function checkboxSelect(){
    if(checkbox.checked){
        htmlsection.classList.add("hide")
        jssection.classList.remove("hide")
    }
    else{
        htmlsection.classList.remove("hide")
        jssection.classList.add("hide")
    }
}

/**
 * 
 * @param {HTMLDivElement} parentelem
 * @param {HTMLLabelElement} label 
 * @param {string} labInpId 
 * @param {string} name 
 */
function generateJsForm(parentelem,label,labInpId,name){
    const div=document.createElement("div")
    parentelem.appendChild(div)

    genBR(div)


    const lab=document.createElement("label")
    div.appendChild(lab)
    lab.htmlFor=labInpId
    lab.innerText=label

    genBR(div)

    const inp=document.createElement("input")
    div.appendChild(inp)
    inp.id=labInpId
    inp.name=name

    genBR(div)

    const span=document.createElement("span")
    div.appendChild(span)
    span.classList.add("error")
}

/**
 * 
 * @param {Event} e 
 */
function htmlTableAdder(e){
    e.preventDefault()

    /**@type {HTMLFormElement} */
    const target=e.target

    /**@type {HTMLInputElement} */
    const telepules=target.querySelector("#elso")
    /**@type {HTMLInputElement} */
    const agazat=target.querySelector("#masodik")
    /**@type {HTMLInputElement} */
    const pelda1=target.querySelector("#harmadik")
    /**@type {HTMLInputElement} */
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

    /**@type {Okor[]} */
    const obj={}

    obj.telepules=telep
    obj.agazat1=ag
    obj.pelda1=p1
    obj.pelda2=p2


    const htmltbody=document.getElementById("htmltbody")

    const tr=document.createElement("tr")
    htmltbody.appendChild(tr)
    
    genTableCell("td",tr,obj.telepules)
    genTableCell("td",tr,obj.agazat1)
    const td=genTableCell("td",tr,obj.pelda1)


    if(obj.pelda2){
        genTableCell("td",tr,obj.pelda2)
    }
    else{
        td.colSpan=2
    }

    
    target.reset()
    }
}

/**
 * 
 * @param {HTMLInputElement} inp 
 * @param {string} txt 
 * @returns {boolean}
 */
function validateField(inp,txt){
    let valid=true
    parent=inp.parentElement

    if(inp.value==""){
        const error=parent.querySelector(".error")
        error.innerText=txt

        valid=false
    }
    else{
        const error=parent.querySelector(".error")
        error.innerText=""
        
    }

    return valid
}

/**
 * 
 * @param {HTMLInputElement} inpelem1 
 * @param {HTMLInputElement} inpelem2 
 * @param {HTMLInputElement} inpelem3 
 * @returns {boolean}
 */
function validateFields(inpelem1,inpelem2,inpelem3){
    let valid=true

    if(validateField(inpelem1,"Kötelező")==false){valid=false}
    if(validateField(inpelem2,"Kötelező")==false){valid=false}
    if(validateField(inpelem3,"Kötelező")==false){valid=false}

    return valid
}