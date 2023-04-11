const express = require('express');
const app = express();

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimes(max) {
  const primes = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

app.get('/', (req, res) => {
  const nbr = req.query.n;
  if (!nbr) {
    res.send('Please provide a number parameter under the "n" query variable.');
  } else {
    const result = findPrimes(parseInt(nbr));
    res.send(`The primes number from 0 to ${nbr} are ${result}.`);
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});