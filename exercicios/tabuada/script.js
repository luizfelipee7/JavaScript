function contar()
{


   let numc = document.getElementById('txtn')
   let tab = document.getElementById('seltab')

   

  
   if(numc.value.length == 0)
   {
    window.alert(`por favor, digite um numero!`)
   }
   else{
    let num = Number(numc.value)

    tab.innerHTML = ''
    for(i = 1; i <=10; i++)
    {
        let item = document.createElement('option')
        item.text = `${num} x ${i} = ${num*i}`
        item.value = `tab${i}`
        tab.appendChild(item)
       
    }
   }



 
}