/** @param {CountryWriters} array */
function renderTableBody(arr){
    tbody.id='tabbody'
    const tabBody= document.getElementById('tabbody')
    tabBody.innerHTML=''

for(const k of arr){
   
    const trd = document.createElement('tr')
    tabBody.appendChild(trd)  
    
    const tdN = document.createElement('td')
    tdN.innerText=k.nemzet
    trd.appendChild(tdN)
 
    tdN.addEventListener('click',function (e){
        /**@type {HTMLTableCellElement} */
        const target=e.target
        const tr= target.parentElement
        const tbody= tr.parentElement
        const results=tbody.querySelector(".marked")

        if(results){
            results.classList.remove('marked')
        }

        target.classList.add('marked')
    })
 
    
    const tdSz = document.createElement('td')
    tdSz.innerText=k.szerzo
    trd.appendChild(tdSz)
    
    const tdM = document.createElement('td')
    tdM.innerText=k.mu
    trd.appendChild(tdM)
    
    if(k.szerzo2 !== "" && k.mu2 !== ""){
        tdN.rowSpan=2
 
        const tr = document.createElement('tr')
        tabBody.appendChild(tr)
 
        const tdSz2 = document.createElement('td')
        tdSz2.innerText=k.szerzo2
        tr.appendChild(tdSz2)

        const tdM2 = document.createElement('td')
        tdM2.innerText=k.mu2
        tr.appendChild(tdM2)
    }
}
}

/** @type {HTMLFormElement} */
const jsform=document.getElementById("jsform")

jsform.addEventListener("submit", 
    function (e){
        e.preventDefault()

        /** @type {HTMLFormElement} */
        const targetdefault= e.target
        
        /** @type {HTMLInputElement} */   
        const nemz=targetdefault.querySelector("#nemzetiseg")
        /** @type {string} */
        const n=nemz.value

        /** @type {HTMLInputElement} */
        const sz1=targetdefault.querySelector("#szerzo1")
        /** @type {string} */
        const s=sz1.value

        /** @type {HTMLInputElement} */
        const mu1=targetdefault.querySelector("#mu1")
        /** @type {string} */
        const m=mu1.value

        /** @type {HTMLInputElement} */
        const sz2=targetdefault.querySelector("#szerzo2")
        /** @type {string} */
        const sz=sz2.value

        /** @type {HTMLInputElement} */
        const mu2=targetdefault.querySelector("#mu2")
        /** @type {string} */
        const mu=mu2.value

        /** @type {CountryWriters} */
        const obj={}          
        obj.nemzet=n
        obj.szerzo=s
        obj.mu=m
        obj.szerzo2=sz
        obj.mu2=mu

        arr.push(obj);
        renderTableBody(arr);
    }
)
renderTableBody(arr);

function createBr(parent){
    const br=document.createElement("br")
    parent.appendChild(br)
}

function createFormElement(form,labeltxt,id){
    const label=document.createElement("label")
    label.innerText=id
    form.appendChild(labeltxt)

    createBr(div)

    const input=document.createElement("input")
    input.type="test"
    label.id=id
    form.appendChild(input)

    createBr(div)
    createBr(div)

    const span=document.createElement("span")
    span.classList.add("error")
    span.appendChild(div)

}

/**
 * @param {HTMLSelectElement} tablebody 
 * @param {CountryWriters} writerRow
 */
function renderTableRow(tablebody,writerRow){
    const trd = document.createElement('tr')
    tablebody.appendChild(trd) 
    tdN=createTableCell("td",writerRow.nemzet,trd)
    createTableCell("td",writerRow.nemzet,trd)
     
 
    tdN.addEventListener('click',htmlEventListener)

    

    createTableCell("td",writerRow.szerzo,trd)
    
    createTableCell("td",writerRow.mu,trd)
    
    if(writerRow.szerzo2 !== "" && writerRow.mu2 !== ""){
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
 * @param {HTMLTableElement} table 
 * @param {string[]} headerList 
 */
function generateHeader(table,headerList){
    const thead=document.createElement("thead")
    table.appendChild(thead)

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
        /** @type {string} */
        const n=nemz.value

        /** @type {HTMLInputElement} */
        const sz1=targetdefault.querySelector("#szerzo1")
        /** @type {string} */
        const s=sz1.value

        /** @type {HTMLInputElement} */
        const mu1=targetdefault.querySelector("#mu1")
        /** @type {string} */
        const m=mu1.value

        /** @type {HTMLInputElement} */
        const sz2=targetdefault.querySelector("#szerzo2")
        /** @type {string} */
        const sz=sz2.value

        /** @type {HTMLInputElement} */
        const mu2=targetdefault.querySelector("#mu2")
        /** @type {string} */
        const mu=mu2.value

        /** @type {CountryWriters} */
        const obj={}          
        obj.nemzet=n
        obj.szerzo=s
        obj.mu=m
        obj.szerzo2=sz
        obj.mu2=mu

        arr.push(obj);
        renderTableBody(arr);
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
        felmeno1.querySelector(".error")
        felmeno1.innerText="kotelezo"
        valid=false
    }
    else if(b.value==""){
        const felmeno2=b.parentElement
        felmeno2.querySelector(".error")
        felmeno2.innerText="kotelezo"
        valid=false
    }
    else{
        const felmeno3=c.parentElement
        felmeno3.querySelector(".error")
        felmeno3.innerText="kotelezo"
        valid=false
    }

    return valid
}

