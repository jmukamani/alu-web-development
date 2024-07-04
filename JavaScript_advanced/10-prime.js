function countPrimeNumbers(primeNumbers) {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      let isPrime = true;
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        count++;
      }
    }
    primeNumbers(count);
  }
  
  let startTime = new Date().getTime();
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers(() => {});
  }
  let endTime = new Date().getTime();
  let executionTime = endTime - startTime;
  console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);