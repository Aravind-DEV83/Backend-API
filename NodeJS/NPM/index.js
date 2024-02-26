import generateName from "sillyname"
import generateSuperHero from "superheroes"

var sillyName = generateName();

var superhero = generateSuperHero.random();

console.log(`My name is ${sillyName}`)
console.log(`I'm a ${superhero}!`)