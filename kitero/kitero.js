const htmlDropdown = document.getElementById('htmldropdown'); // elkérjük a htmldropdown id-jú elemet
createOtherDivForSelect(htmlDropdown.parentElement);
hideBasedOnSelected(htmlDropdown); // alapértelmezett értéken megnézzük mi jelenjen meg
htmlDropdown.addEventListener('change', changeDropdownList) // hozzáadunk egy eventListenert

const htmlcheckbox = document.getElementById('htmlcheckbox'); // elkérjük a htmlcheckbox id-val rendelkező elemet
hideBasedOnCheckbox(htmlcheckbox); // a checkboxnak van alapértelmezett értéke (hamis)
htmlcheckbox.addEventListener('change', changeCheckbox) // hozzáadunk egy eventlistenert

/**
 * 
 * Létrehoz egy kitöltött div elemet egyeb azonosítóval, és hozzáfűzi a bemeneti paraméterhez.
 * 
 * @param {HTMLDivElement} element az elem amihez hozzáfűrrük a divünket
 */
function createOtherDivForSelect(element){
    const elem = document.createElement('div'); // létrehozunk egy div elemet
    elem.innerText = "Név: They Doe\nÉletkor: 20" // beállítunk egy szöveget a \n sortörés karakterrel
    elem.id = 'egyeb'; // beállítjuk az egyeb id-t
    elem.classList.add('hide'); // hozzáadjuk a hide css osztályt
    elem.classList.add('card'); // hozzáadjuk a card css osztályt
    element.appendChild(elem) // hozzáfűzzük a létrehozott elemet a bemeneti paraméterhez
}

/**
 * 
 * Egy azonosító alapján eltávolítja a hide css osztályt az elemről egy szülőelemen belül.
 * 
 * @param {HTMLDivElement} parentDiv a szülőelem, amin belül keressük az elemet
 * @param {string} id a keresett elem azonosítója
 * 
 * @returns {void}
 */
function makeVisibleBasedOnId(parentDiv, id){
    if(id != ""){ // megnézzük üres string-e a második paraméter
        const visibleCard = parentDiv.querySelector(`#${id}`); // lekérjük az adott id alapján az elemet (ez lehet null is!, de ha elírjuk az id-t
        // így legalább szintaxis errort kapunk, ami megengedett, 
        // hiszen ha elírtuk az id-t csak akkor fordulhat ez elő, olyan eset a helyes 
        // működés esetén nem jöhet elő, hogy ez null)
        visibleCard.classList.remove('hide'); // eltávolítjuk a hide css osztályt
    }
}

/**
 * 
 * Egy azonosító alapján hozzáadja a hide css osztályt az elemhez egy szülőelemen belül.
 * 
 * @param {HTMLDivElement} parentDiv a szülőelem, amin belül keressük az elemet
 * @param {string} id a keresett elem azonosítója
 * 
 * @returns {void}
 */
function makeInvisibleBasedOnid(parentDiv, id){
    if(id != ""){ // megnézzük üres string-e a második paraméter
        const visibleCard = parentDiv.querySelector(`#${id}`);// lekérjük az adott id alapján az elemet (ez lehet null is!, de ha elírjuk az
        // id-t így legalább szintaxis errort kapunk, ami megengedett, 
        // hiszen ha elírtuk az id-t csak akkor fordulhat ez elő, olyan eset a helyes 
        // működés esetén nem jöhet elő, hogy ez null)
        visibleCard.classList.add('hide'); // hozzáadjuk a hide css osztályt
    }
}

/**
 * 
 * A lenyíló menü értéke alapján elrejt és megjelenít elemeket. Ha ferfi akkor a ferfi id-val rendelkező elemet, ha no,
 * akkor a no id-val rendelkezőt jeleníti meg.
 * 
 * @param {HTMLSelectElement} dropdownList  a lenyíló menü
 * 
 * @returns {void}
 */
function hideBasedOnSelected(dropdownList){
    const option=dropdownList.value
    const parent= dropdownList.parentElement 
    const selector= parent.querySelectorAll(".card")

    for(const elem of selector){
        elem.classList.add("hide")
    }

    makeVisibleBasedOnId(parent,option)
}


/**
 * 
 * Egy checkbox html input element checked értéke alapján elrejtjük, 
 * vagy megjelenítjük a szülöelemben található elemeket
 * 
 * @param {HTMLInputElement} checkbox a jelölőnégyzet ami, alapján eldöntjük, mit kell megjeleníteni
 * 
 * @returns {void}
 */
function hideBasedOnCheckbox(checkbox){
    const csekkelt= checkbox.checked
    const parent= checkbox.parentElement
    if(csekkelt){
        makeInvisibleBasedOnid(parent,"no")
        makeVisibleBasedOnId(parent,"ferfi")
    }
    else{
        makeInvisibleBasedOnid(parent,"ferfi")
        makeVisibleBasedOnId(parent,"no")
    }
}

/**
 * 
 * A lenyíló menü eseménykezelő függvénye. A lenyíló menü kiválasztott értéke alapján
 * frissíti, hogy a szülőelemben melyik elem jelenjen meg. 
 * 
 * @param {Event} e az esemény, ami akkor keletkezik, ha megváltoztatjuk a lenyílómenüt
 * 
 * @returns {void}
 */
function changeDropdownList(e){
    /**
     * @type {HTMLSelectElement}
     */
    const target=e.target
    hideBasedOnSelected(target)
}

/**
 * 
 * A jelölőnégyzet értékének változtatásakor, megjelenítjük a vagy a férfi vagy a nő kártyát.
 * Ha az érték igaz, akkor a ferfi azonosítójú elemet, ha hamis, akkor a no azonosítóju elemet
 * jelenítjük meg.
 * 
 * @param {Event} e az esemény ami akkor keletkezik, ha megváltoztatjuk a jelölőnégyzet értékét
 * 
 * @returns {void}
 */
function changeCheckbox(e){
    const target=e.target
    hideBasedOnCheckbox(target)
    
}