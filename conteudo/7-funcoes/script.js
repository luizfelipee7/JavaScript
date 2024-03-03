var num 


function parimp(num)
{
    var res
    if(num % 2 == 0)
    {
        return 'par'
    }
    else
    {
        return 'impar'
    }
     
}

let res = parimp(3)


console.log(`o valor eh ${res}`)