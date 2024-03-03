function verificar()
{

   var data = new Date()
   var ano = data.getFullYear()

   var fano = document.getElementById('nasc')
   var res = document.getElementById('res')
   var n1 = Number(fano.value)
    //var img = document.getElementById('img')

    if(n1.length == 0 || n1.length == ano)
    {
        window.alert('verifique os dados e tente novamente')
    }
    else
    {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - n1

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        img.style.textAlign = `center`
       
        if (fsex[0].checked) {
            genero = 'Homem';
        
            if (idade >= 1 && idade < 13) {
                img.setAttribute('src', 'img/homem-crianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/homem-jovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem-adulto.jpg');
            } else {
                img.setAttribute('src', 'img/homem-idoso.jpg');
            }
        } else {
            genero = 'Mulher';
        
            if (idade >= 1 && idade < 13) {
                img.setAttribute('src', 'img/mulher-crianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/mulher-jovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher-adulta.jpg');
            } else {
                img.setAttribute('src', 'img/mulher-idosa.jpg');
            }
        }
         
        img.style.borderRadius = '50%'
        res.style.textAlign = 'center'
        res.innerHTML = `<p>detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)

    }

    // function clicar()
    // {
        
    //      a.innerText = 'clicou!'
    //      a.style.background = 'red'
    // }
}