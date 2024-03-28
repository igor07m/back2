let nomes=['Admilson', 'Benevides','Clemetina'];

let frutas=['Abacaxi','Banana','Cereja']
//exportação explicita do array
//module.exports=nomes;
//module.exports=frutas

function Soma(a,b){
    return a+b;
}

module.exports={
    nomes,
    frutas,
    Soma
}
