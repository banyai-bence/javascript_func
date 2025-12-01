/**
 * @typedef {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} CountryWriters
 * @typedef {{label:string,input:string}} LabelInpData
 */


/**
 * 
 * @param {HTMLElement} parent 
 */
function createBr(parent){
    const br=document.createElement("br")
    parent.appendChild(br)
}

/**
 * 
 * @param {HTMLFormElement} form 
 * @param {string} labeltxt 
 * @param {string} id 
 */
function createFormElement(form,labeltxt,id){
    const div= document.createElement("div")
    form.appendChild(div)

    const label=document.createElement("label")
    label.htmlFor=id
    label.innerText=labeltxt
    div.appendChild(label)

    createBr(div)

    const input=document.createElement("input")
    input.type="text"
    input.id=id
    input.name=id
    div.appendChild(input)

    const span=document.createElement("span")
    span.classList.add("error")

    createBr(div)
    div.appendChild(span)
    createBr(div)
}

/**
 * 
 * @param {string} id 
 * @param {LabelInpData[]} tomb 
 */
function formCreator(id,tomb){
    const jsform=document.createElement("form")
    jsform.id=id
    document.body.appendChild(jsform)

    for(const elemgeci of tomb){
        createFormElement(jsform,elemgeci.label,elemgeci.input)
    }

    const button=document.createElement("button")
    button.innerText="hozzáadás"
    jsform.appendChild(button)
    return jsform
}

/**
 * letrehozunk egy cellat a celltype alapjan
 * beallitjuk az innertextjet
 * appendeljuk a parentrowhoz
 * visszaterunk a cellaval
 * 
 * @param {"th"|"td"} cellType 
 * @param {string} cellContent 
 * @param {HTMLTableRowElement} parentRow 
 */
function createTableCell(cellType,cellContent,parentRow){
    const cella= document.createElement(cellType)
    cella.innerText=cellContent
    parentRow.appendChild(cella)
    return cella
}

/**
 * @param {HTMLSelectElement} tablebody 
 * @param {CountryWriters} writerRow
 */
function renderTableRow(tablebody,writerRow){
    const trd = document.createElement('tr')
    tablebody.appendChild(trd) 

    tdN=createTableCell("td",writerRow.nemzet,trd)
 
    tdN.addEventListener('click',function (e){
        /**@type {HTMLTableCellElement} */
        const target=e.target
        const ba =target.parentElement.parentElement

        const result =ba.querySelector('.marked')

        if(result){
            result.classList.remove('marked')
        }
        target.classList.add("marked")
        })

    

    createTableCell("td",writerRow.szerzo,trd)
    
    createTableCell("td",writerRow.mu,trd)
    
    if(writerRow.szerzo2 && writerRow.mu2){
        tdN.rowSpan=2
 
        const tr = document.createElement('tr')
        tablebody.appendChild(tr)
 
        createTableCell("td",writerRow.szerzo2,tr)

        createTableCell("td",writerRow.mu2,tr)
    }
}

/** @param {CountryWriters} array */
function renderTableBody(arr){
    const tabBody= document.getElementById('tabbodyjs')
    tabBody.innerHTML=''

for(const k of arr){
   
    renderTableRow(tabBody,k)
}
}

/**
 * letrehozunk egy theadet
 * hozzacsat table
 * letrehozunk egy sort
 * hozzacsat thead
 * vegigiteralunk 2 parametert
 * letrehozzuk a fejlec cellakat
 * 
 * @param {HTMLTableElement} parent 
 * @param {string[]} headerList 
 */
function generateHeader(parent,headerList){

    const thead=document.createElement("thead")
    parent.appendChild(thead)

    const tr= document.createElement("tr")
    thead.appendChild(tr)

    for(const i of headerList){
        createTableCell("th",i,tr)
    }
}

function htmlEventListener(e){
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

        sz == "" ? obj.szerzo2 = undefined : obj.szerzo2 = sz
        mu == "" ? obj.mu2 = undefined : obj.mu2 = mu


        //---------------------------------------------------------
        const tabbody= document.getElementById("tabbody")
        
        renderTableRow(tabbody,obj)

        console.log(obj)
    }

        
        
}

/**
 * 
 * @param {HTMLInputElement} input 
 * @param {string} txt 
 * @returns {boolean}
 */
function validateField(input, txt){
    let valid=true
    if(input.value==""){
        const felmeno1=input.parentElement
        const felm=felmeno1.querySelector(".error")
        felm.innerText=txt
        valid=false
    }
    else{
        const felmeno1=input.parentElement
        hiba =felmeno1.querySelectorAll(".error")
        for(const h of hiba){
            h.innerText=""
        }
    }
    return valid
}

/**
 * 
 * @param {HTMLInputElement} inputelement1 
 * @param {HTMLInputElement} inputelement2 
 * @param {HTMLInputElement} inputelement3 
 * @returns {boolean}
 */
function validateFields(inputelement1,inputelement2,inputelement3){
    let valid=true
    if(validateField(inputelement1, "kötelező")==false){valid=false}
    if(validateField(inputelement2, "kötelező")==false){valid=false}
    if(validateField(inputelement3, "kötelező")==false){valid=false}
    return valid
}

/**
 * 
 * @param {string} tabbodyid 
 * @param {string[]} header 
 */
function generateTable(tabbodyid, header){
    const table= document.createElement("table")
    document.body.appendChild(table)

    generateHeader(table, header)

    const tbody= document.createElement("tbody")
    table.appendChild(tbody)
    tbody.id=tabbodyid
}

//Létrehoztunk egy függvényt, ami egy string id paraméter és egy tömb segítségével létrehoz nekünk egy formot és visszatér vele. 
// Mivel korábban már létrehoztunk függvényeket az egyes elemek létrehozásához, ezért látjuk, hogy az egyes elemek csak a label szövegében különböznek egymástól,
// valamint az id-ban. Így a tömbünk olyan elemeket kell tartalmazzon amiknek van egy label, illetve egy id tulajdonságot.
// A függvényben végigiteráltunk a tömbön és létrehoztuk az input elemeket. A ciklus után létrehoztunk még egy gombot, amit a formhoz fűztünk, 
// majd visszatért a létrehozott form elemmel.


