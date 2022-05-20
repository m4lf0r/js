function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gen = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebehomem.jpg')
      }else if (idade < 21) {
        img.setAttribute('src', 'jovemhomem.jpg')
      }else if (idade < 50) {
        img.setAttribute('src', 'adultohomem.jpg')
      }else {
        img.setAttribute('src', 'idosohomem.jpg')
      }

    } else if (fsex[1].checked) {
      gen = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bebemulher.jpg')
      }else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'jovemmulher.jpg')
      }else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'adultamulher.jpg')
      }else {
        //idoso
        img.setAttribute('src', 'idosamulher.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    res.append(img)
  }
} 