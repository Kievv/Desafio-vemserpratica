let str = 'Socorram me, subi em um ônibus em Marrocos'



function handleReverse(str){
    let invertedStr ='';
    for (let i = str.length - 1; i >= 0; i--){
       invertedStr += str[i];
    }
    return invertedStr;
}

console.log(handleReverse(str))