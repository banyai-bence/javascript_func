const szam = 1 //globalis valtozo

/** 
 * micsinal
 * 
 * parameter
 * 
 * @returns {void}
 */
function a1(){
    console.log(szam)
}
a1();

/**
 * a2 kilogolja a globalis scopeon beluli valtozot
 * 
 * @returns {void}
 */
function a2(){
    console.log(szam)
}
a2();

/**
 * deklaral egy lokalis valtozot
 * @returns {void}
 */
function a3(){
    const szam1=2
    console.log(szam1)
}
a3();

/**
 * 
 * @param {number} parameter 
 * @returns {number}
 */
function a4(parameter){
    /**
     * @type {number}
     */
    let valtozo=1
    let osszeg= valtozo+parameter
    return osszeg
}
const a= a4(4);
console.log(a)


function a5(){

}







