



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite algo: ', (input) => {
  console.log('Você digitou:', input);
  rl.close();
});


var pais = 'Brasil'

if(pais == 'Brasil')
{
     console.log('Brasileiro')
}
else{
    console.log('Estrangeiro')
}