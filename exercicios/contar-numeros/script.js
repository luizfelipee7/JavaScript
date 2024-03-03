function contar()
{


   var inic = document.getElementById('ini')
   var fimc = document.getElementById('fim')
   var pasc = document.getElementById('pas')
   var ini = Number(inic.value)
   var fim = Number(fimc.value)
   var pas = Number(pasc.value)
   var i
   

   if (ini <= 0 || fim <= 0 || pas <= 0) 
   {
        res.innerHTML = '<p>Preencha todos os campos do formulário.</p>'
       
    }
    else
    {
        
        res.innerHTML = 'Contando: <br>'
        if(ini < fim)
        {
            for (var i = ini; i <= fim; i += pas) {
                res.innerHTML += `${i} \u{1f449} `
            }
        }
        else 
        {
            for (var i = ini; i >= fim; i -= pas) {
                res.innerHTML += `${i} \u{1f449} `
            }
        }
       
        
         res.innerHTML += `🏴󠁧󠁢󠁥󠁮 `
        
        
    }


 
}