
var exports = module.exports

function escolha(){
  rl.question('\nEscolha o tipo de exclusão que deseja realizar\n\n 1 - Ordenada 2- Desordenada \n\n', answer => {
    if(answer === '1'){
      removerItemOrdenada()
    }else if(answer === '2'){
      removerItemDesordenada()
    }
    
  });
}
  
  function removerItemDesordenada(){
    
    rl.question(' Insira o elemento que deseja remover \n\n', answer => {
       var resposta = parseInt(answer,10)
       var index = array.indexOf(resposta);
       array.splice(index, 1);
       console.log(array);
 });   

}

  function removerItemOrdenada(){
    
    rl.question(' Insira o elemento que deseja remover \n\n', answer => {
       var resposta = parseInt(answer,10)
       var inclui = array.includes(resposta);
        
        if(!inclui){
          console.log(`o elemento ${answer} não existe no array`)
        return
        }else{
            
        var filtered = array.filter(function(element) {
            return element !== resposta;
        });

        rl.question('\nDeseja visualizar o novo array\n\n 1 - Sim  2- Não  \n', answer => {
            if(answer === '1'){

                filtered.sort((a, b) => a - b)

                console.log(filtered)
            }
            
          });
     }
 });   

}

