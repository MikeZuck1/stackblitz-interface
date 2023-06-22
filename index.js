// run `node index.js` in the terminal

console.log(`test with readline v${process.versions.node}!`);

const readline = require('readline'); 

const rl = readline.createInterface({ // créer l'interface => readline.createInterface({});  
  input: process.stdin,
  output: process.stdout 
});

rl.question('Entrez un chiffre entre 0 et 10 : ', (chiffre) => {
  if (chiffre > 10 || chiffre < 0) { // si le chiffre est supérieur à 10 ou inférieur à 0  
    console.log('Ce chiffre ne se trouve pas entre 0 et 10'); // alors il affiche 'Ce chiffre ne se trouve pas entre 0 et 10'
  } else {
    while (chiffre >= 0) { 
      console.log(chiffre); 
      chiffre--; 
    } 
  }
  
  rl.close(); 
});
