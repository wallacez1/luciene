const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const qt1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Defina o tamanho do array: ',
            answer => {
                resolve(answer)
            }
        );
    });
};

const qt2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Defina o valor minimo: ',
            answer => {
                resolve(answer)
            }
        );
    });
};

const qt3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Defina o valor maximo: ',
            answer => {
                resolve(answer)
            }
        );
    });
};

var array = []


const definir = async() => {
    var size = Number(await qt1());
    var min = Number(await qt2());
    var max = Number(await qt3());

    if(min > max){
        console.log('\nO valor minimo não pode ser superior ao valor maximo!!');
        rl.question(
            'Gostaria de outra chance ? \n \n 1-Sim  2-Não \n', 
            answer =>{
                if(answer === '1') {
                    continua = true;
                    definir();
                }else if(answer === '2'){
                    console.log('\n Até mas ver!');
                    return;
                }
            }
        );
    } else if(max >= min){

        for (var i = 1; i <= size; i++) {
            var number = (Math.floor(getRandomInt(min, max)));
            parseInt(number,10)
            array.push(number)
        }
    }
    console.log('\n')
    console.log(array)
    console.log('\n')

    decisao()
}

function decisao(){
    rl.question('\nDeseja fazer a ordenação em QuickSort?\n\n 1-Sim  2-Não \n\n', answer => {
        if(answer === '1'){
            console.log('\n')
            console.log(qsort(array))
        }     
    });
}

function qsort(arr){
    if(arr.length <= 1){
        return arr;
    }
    var left = [];
    var right = [];
    var pivot = arr[0];

    for (var i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
   return qsort(left).concat([pivot]).concat(qsort(right));   
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
definir()