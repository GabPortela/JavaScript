
var idade = 12
console.log( `you have  ${idade} years old`)
if (idade < 16) {
    console.log(`no vote`)
}  else if (idade < 18 || idade > 65) {
    console.log(`Optional vote`)
} else {
    console.log(`Obrigation Vote`)
}
