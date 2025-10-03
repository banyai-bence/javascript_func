const { cloneElement } = require("react")

console.log('szar volt a ropdoga')
const a="szia"
/**
 * @type {string}
 */
console.log(a)

const b=["a","b","c"]
console.log(b)

for(let i=0;i<b.length;i++){
    console.log(b[i])
}

console.log(b[1])

/**
 * while()
 * 
 * do 
 * while()
*/

for(const a of b){

}

for(const key in b){
    console.log(`${key}: ${b[key]}`)
}
/**@type {{name:string, age:number}} */
const y ={
    name:'bence',
    age:17
}

for(const key in y){
    console.log(y[key])
}
