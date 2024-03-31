function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homen"
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'css/img/hmCrianca.png')
            } else if(idade >=10 && idade < 65){
                // Jovem
                img.setAttribute('src', 'css/img/hmJovem.png')
            } else if(idade >= 65){
                // VElhor
                img.setAttribute('src','css/img/hmVelho.png')
            }
        } else if(fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'css/img/mhcrianca.png')
            } else if(idade >=10 && idade < 65){
                // Jovem
                img.setAttribute('src', 'css/img/mhJovem.png')
            } else if(idade >= 65){
                // VElhor
                img.setAttribute('src','css/img/mhVelho.png')
            }
        }
        res.innerHTML = `Deterctamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}