class UsingWebWorkers {
    constructor() {
        console.log('USING WEB WORKERS--------------------------------------------------------')

        this.theSynchronousPrimeGenerator();
    }

    theSynchronousPrimeGenerator() {
        function generatePrimes(quota) {
            function isPrime(n) {
              for (let c = 2; c <= Math.sqrt(n); ++c) {
                if (n % c === 0) {
                  return false;
                }
              }
              return true;
            }
          
            const primes = [];
            const maximum = 1000000;
          
            while (primes.length < quota) {
              const candidate = Math.floor(Math.random() * (maximum + 1));
              if (isPrime(candidate)) {
                primes.push(candidate);
              }
            }
          
            return primes;
          }
          
          document.querySelector("#generate").addEventListener("click", () => {
            const quota = document.querySelector("#quota").value;
            const primes = generatePrimes(quota);
            document.querySelector("#output").textContent =
              `Finished generating ${quota} primes!`;

              for (let i = 0; i < primes.length; i++) {
                document.querySelector('ul').appendChild(document.createElement('li').appendChild(document.createTextNode(primes[i])));
              }
          });
          
          document.querySelector("#reload").addEventListener("click", () => {
            document.querySelector("#user-input").value =
              'Try typing in here immediately after pressing "Generate primes"';
            document.querySelector('ul').textContent = '';
            document.location.reload();
          });
          
    }
}

const usingWebWorkers = new UsingWebWorkers();