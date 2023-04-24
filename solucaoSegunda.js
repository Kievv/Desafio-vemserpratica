//Ex. 2

// Primeira solução

function isFibo(num){
    let first = 0;
    let second = 1;
    let next = first + second;
    
    while(next < num){
        if(next === num){
            return `${num} pertence à sequência de Fibonacci`;
        }
        first = second;
        second = next;
        next = first + second;
    }
    return `${num} não pertence à sequência de Fibonnaci`;
    }
    
    console.log(isFibo(13));
    console.log(isFibo(7));


    //Solução recursiva

    function isFiboRecursive(num, primeiro = 0, segundo = 1) {
        if (primeiro + segundo === num) {
          return `${num} pertence à sequência de Fibonacci!`;
        } else if (primeiro + segundo > num) {
          return `${num} não pertence à sequência de Fibonacci.`;
        } else {
          return isFiboRecursive(num, segundo, primeiro + segundo);
        }
      }
      
      console.log(isFiboRecursive(13)); 
      console.log(isFiboRecursive(7));

