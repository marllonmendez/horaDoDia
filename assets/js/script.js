function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var res = document.getElementById('res')
    var genero = ""
    var img = document.createElement('img')
    if(nasc.value.length == 0 || Number(nasc.value) > ano){
        window.alert("[ERRO] TENTE NOVAMENTE!")
    }else{
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(nasc.value)
        if(sex[0].checked){
            genero = "um Homem"
        }else if(sex[1].checked){
            genero = "uma Mulher"
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

    }
}