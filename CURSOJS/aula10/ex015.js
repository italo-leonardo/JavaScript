var agora = new Date()
var horas = agora.getHours()

console.log(`Agora são exatamente ${horas} horas.`)
if (horas < 12){
    console.log('Bom dia')
} else {
    if(horas >= 12 && horas < 18){
        console.log('Boa Tarde')
    } else {
        if(horas >= 18){
            console.log('Boa Noite')
        }
    }
}