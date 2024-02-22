function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora} horas` 
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'fotomanha.jpg.jpg'
        document.body.style.background = '#FCE583'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'fototarde.jpg.jpg'
        document.body.style.background = '#F06500'
    }  else {
        img.src = 'fotonoite.jpg.jpg'
        //Boa noite
        document.body.style.background = '#011F43'
    }
}


   





/*function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var  hora = data.getHours()
    msg.innerHTML = `Agora sao  ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'foto.manha'
    } else if (hora >== 12 && hora < 18) {
        //Boa tarde
        img.src = 'foto.tarde'
    } else {
        //Boa noite
        img.src = 'foto.noite'
    }
}   */