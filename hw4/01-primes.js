const getPrimes = () => {
  // Add your code here
  console.log("Prime numbers between 1 to 100:");
  factor = 0;
  for (n = 2; n <= 100; n++) {
    for (i = 1; i <= n; i++) {
      if (n % i == 0) {
        factor++;
      }
    }
    if ((factor = 2)) {
      console.log(n);
    }
    factor = 0;
  }
};

getPrimes();
