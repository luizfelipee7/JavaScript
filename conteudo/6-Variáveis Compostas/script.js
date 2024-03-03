let num = [5, 8 ,2]
//num[3] = 6   adiciona e substitui valores em um vetor
//num.push(7) // coloca valores na ultima posicao
// num.length   sabe comprimento
// num.sort()   coloca todo elementos em ordem crescente


num.push(7)


console.log(`nosso vetor: ${num}`)
console.log(`nosso vetor na posicao: ${num[0]}`)
console.log(`nosso vetor em ordem crescente eh: ${num.sort()}`)
console.log(`o nosso vetor tem: ${num.length} letras\n`)

// for (let i = 0; i < num.length; i++) {
//     console.log(`a posicao ${i} tem o valor ${num[i]}`);
// }

let  pos = num.indexOf(2)

for(let i in num)
{
    console.log(`a posicao: ${i} tem o valor: ${num[i]}`);
}
if(pos == -1)
{
    console.log(`\no valor nao foi encontrado`)

}
else
{
    console.log(`\no valor 2 esta na posicao: ${pos}`)
}