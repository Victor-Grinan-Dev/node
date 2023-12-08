import generateName from "sillyname";
import { random } from "superheroes";

const sillyName = generateName();
const hero = random();

console.log(`I'am ${hero} not ${sillyName}!`);
