
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
    span.classList.add("hide")

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

