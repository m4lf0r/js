function calcular() {
  let num = document.getElementById('txtn')
  let resultado = document.getElementById('res')
    if(num.value.length == 0) {
      window.alert('Favor, digitar um número!')     
    }else {
      let n = Number(num.value) //Transformando a String gerada pelo input em Number
      resultado.innerHTML = '' //Limpar o texto quando houver nova busca
      for (var c = 1; c <= 10; c++ ) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `resultado${c}`
        resultado.appendChild(item)
      }
    }


}