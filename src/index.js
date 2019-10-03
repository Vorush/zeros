module.exports = function zeros(expression) {
  
  let fact = expression.split('*');

  let countTwos = 0;
  let countFives = 0;

  for(let i = 0; i < fact.length; i++){

    let move = 2;
    let num;


    if (fact[i].includes('!!')) {
      num = fact[i].slice(0, -2);
    }else {
      move = 1;
      num = fact[i].slice(0, -1);
    } 

    while(num > 0){

      let tmpFive = num;
      let tmpTwo = num;

      while(tmpFive % 5 == 0){

        countFives++;
        tmpFive /= 5;

      }

      while(tmpTwo % 2 == 0){

        countTwos++;
        tmpTwo /= 2;
        
      }

      num -= move;

    }

  }

  return Math.min(countTwos, countFives); 
}
