/**
 * @typedef {{telepules: string, agazat1: string, agazat2: string, pelda1: string, pelda2: string}[]} OkorObj
 */


/**
 * @returns {void}
 */
function toggletable(){
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
 * @param {*HTMLFormElement} parent 
 * @param {string} txt 
 * @param {string} id 
 * @param {string} inpname 
 * @returns {void}
 */
function generateFormDiv(parent,txt,id,inpname){
    const div= document.createElement("div")
    parent.appendChild(div)

    const label= document.createElement("label")
    div.appendChild(label)
    label.htmlFor=id
    label.innerText=txt

    generateBr(div)

    const input=document.createElement("input")
    div.appendChild(input)
    input.type="text"
    input.id=id
    input.name=inpname

    generateBr(div)

    const span= document.createElement("span")
    div.appendChild(span)
    span.classList.add("error")

    generateBr(div)
}

/**
 * 
 * @param {HTMLDivElement} parent 
 */
function generateBr(parent){
    const br=document.createElement("br")
    parent.appendChild(br)
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
    const okor=target.querySelector("#elso")
    /** @type {HTMLInputElement} */
    const agazat= target.querySelector("#masodik")
    /** @type {HTMLInputElement} */
    const pelda1=target.querySelector("#harmadik")
    /** @type {HTMLInputElement} */
    const pelda2=target.querySelector("#negyedik")

    if(validateFields(okor,agazat,pelda1)){

    /** @type {string} */
    const ok=okor.value
    /** @type {string} */
    const ag=agazat.value
    /** @type {string} */
    const p1=pelda1.value
    /** @type {string} */
    const p2=pelda2.value


    /** @type {OkorObj} */
    const obj={}

    obj.okor=ok
    obj.agazat=ag
    obj.pelda1=p1
    obj.pelda2=p2

    const htmlbodyid=document.getElementById("htmlbody")

    const tr= document.createElement("tr")
    htmlbodyid.appendChild(tr)

    const td1= document.createElement("td")
    tr.appendChild(td1)
    td1.innerText= obj.okor

    const td2= document.createElement("td")
    tr.appendChild(td2)
    td2.innerText= obj.agazat

    const td3= document.createElement("td")
    tr.appendChild(td3)
    td3.innerText= obj.pelda1

    if(obj.pelda2){
        const td5=document.createElement("td")
        tr.appendChild(td5)
        td5.innerText= obj.pelda2
        
    }
    else{
        td3.colSpan= 2
    }

    } 
}

/**
 * 
 * @param {HTMLInputElement} input 
 * @param {string} txt 
 * @returns {boolean}
 */
function validateField(input, txt){
    let valid= true
    const felmeno1= input.parentElement
    if(input.value==""){
        const felm= felmeno1.querySelector(".error")
        felm.innerText=txt
        valid=false
    }
    else{
        const hiba= felmeno1.querySelector(".error")
        hiba.innerText=""
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
    if(validateField(inpelem1,"kötelező")==false){valid=false}
    if(validateField(inpelem2,"kötelező")==false){valid=false}
    if(validateField(inpelem3,"kötelező")==false){valid=false}
    return valid
}



