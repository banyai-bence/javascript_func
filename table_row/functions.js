/** @param {CountryWriters} array */
function renderTableBody(arr){
    const tabBody= document.getElementById('tabbody')
    tabBody.innerHTML=''

for(const k of arr){
   
    renderTableRow(tabBody,k)
}
}

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
    createBr(div)

    div.appendChild(span)

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
        target.classList.add('marked')

        const ba =target.parentElement.parentElement

        const result =ba.querySelector('marked')

        if(result){
            result.classList.remove('marked')
        }
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
        const nemz=targetdefault.querySelector("#nemzetiseg")
        /** @type {HTMLInputElement} */
        const sz1=targetdefault.querySelector("#szerzo1")
        /** @type {HTMLInputElement} */
        const mu1=targetdefault.querySelector("#mu1")
        /** @type {HTMLInputElement} */
        const sz2=targetdefault.querySelector("#szerzo2")
        /** @type {HTMLInputElement} */
        const mu2=targetdefault.querySelector("#mu2")


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

        const tabbody= document.getElementById("tabbody")
        renderTableRow(tabbody,obj)
}


/**
 * 
 * @param {HTMLInputElement} a 
 * @param {HTMLInputElement} b 
 * @param {HTMLInputElement} c 
 * @returns {boolean}
 */
function validateFields(a,b,c){
    let valid=true
    if(a.value==""){
        const felmeno1=a.parentElement
        const felm=felmeno1.querySelector(".error")
        felm.innerText="kotelezo"
        valid=false
    }
    if(b.value==""){
        const felmeno2=b.parentElement
        const felm=felmeno2.querySelector(".error")
        felm.innerText="kotelezo"
        valid=false
    }
    if(c.value==""){
        const felmeno3=c.parentElement
        const felm=felmeno3.querySelector(".error")
        felm.innerText="kotelezo"
        valid=false
    }

    return valid
}

//Létrehoztunk egy függvényt, ami egy string id paraméter és egy tömb segítségével létrehoz nekünk egy formot és visszatér vele. 
// Mivel korábban már létrehoztunk függvényeket az egyes elemek létrehozásához, ezért látjuk, hogy az egyes elemek csak a label szövegében különböznek egymástól,
// valamint az id-ban. Így a tömbünk olyan elemeket kell tartalmazzon amiknek van egy label, illetve egy id tulajdonságot.
// A függvényben végigiteráltunk a tömbön és létrehoztuk az input elemeket. A ciklus után létrehoztunk még egy gombot, amit a formhoz fűztünk, 
// majd visszatért a létrehozott form elemmel.

function alma(stringid){
    const obj={}          
    
}
 