function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora < 12) {
        // BOM DIA 
        img.src = "css/img/manhaWed.png"
        document.body.style.background = "#e2cd9f"
    } else if(hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = "css/img/tardeWed.png"
        document.body.style.background = "#b9846f"
    } else {
        // BOA NOITE
        img.src = "css/img/noiteWed.png"
        document.body.style.background = "#515154"
    }
}

