function fatorial(n)
{
    let fat = 1
    for (let i = n; i > 1; i--)
    {
        fat *= i
    }
    return fat
}

function fatorialRecur(n)
{
   
       
        if (n==0 || n == 1) {
          return 1;
        } else {
          
          return n * fatorialRecur(n - 1);
        }
       
}

console.log(fatorialRecur(2))

