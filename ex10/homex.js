function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 17
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora => 0 && hora < 12) {
        img.src = `manha2.png`
        document.body.style.background = 'rgb(235, 144, 144)'
    } else if (hora >= 12 && hora <= 18) {
        img.src = `tarde2.png`
        document.body.style.background = ''
    } else {
        img.src = `noite2.png`
    }
}