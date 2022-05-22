function calcular() {
    var peso = document.getElementById('txtp')
    var alt = document.getElementById('txta')
    var res = document.getElementById('res')
if (peso.value.length == 0 || alt.value.length == 0) {
  window.alert('ERRO')
} else {
        var imc = (peso.value / (alt.value * alt.value)).toFixed(2)
        let classificacao = ''
      if(imc < 18.5) {
        classificacao = '<br> Abaixo do peso.'
      }else if(imc < 25){
        classificacao = '<br> Peso ideal'
      }else if(imc < 30) {
        classificacao = '<br> Sobrepeso'
      }else if(imc < 40) {
        classificacao = '<br> Obesidade'
      }else {
        classificacao = '<br> Obesidade morbida'
      }
    res.innerHTML = `<br>Seu calculo IMC é de : ${imc} <br>${classificacao}`
  }

}