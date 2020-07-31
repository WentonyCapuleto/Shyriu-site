function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12){
        // bom Dia
        img.src = '_imagens/fotomanha.png'
        document.body.style.background = '#b2d1f5'
    }
    else if (hora >= 12 && hora <= 18){
        //Boa Tarde
        img.src = '_imagens/fototarde.png'
        document.body.style.background = '#e2cd9f'
    }
    else {
        //Boa Noite
        img.src = '_imagens/fotonoite.png'
        document.body.style.background = '#151110'
    }
}
