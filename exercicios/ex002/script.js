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
       

        if(fsex[0].checked)
        {
            var genero = 'Homem'

            

            
        }
        else
        {
            var genero = 'Mulher'
        }

        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`

    }

    // function clicar()
    // {
        
    //      a.innerText = 'clicou!'
    //      a.style.background = 'red'
    // }
}