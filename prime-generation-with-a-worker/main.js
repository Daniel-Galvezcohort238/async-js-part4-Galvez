// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate").addEventListener("click", () => {

    const quota = document.querySelector("#quota").value;
    worker.postMessage({
      command: "generate",
      quota,
    });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  const listItem = document.createElement('li');
  const textNode = document.createTextNode(`Finished generating ${message.data} primes`);
  listItem.appendChild(textNode);
  document.getElementById('list1').appendChild(listItem);
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

// Create a new worker, giving it the code in "generate.js"
const worker2 = new Worker("./generate2.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate2").addEventListener("click", () => {

    const quota = document.querySelector("#quota2").value;
    worker2.postMessage({
      command: "generate",
      quota,
    });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker2.addEventListener("message", (message) => {
  const listItem = document.createElement('li');
  const textNode = document.createTextNode(`Finished generating ${message.data} primes`);
  listItem.appendChild(textNode);
  document.getElementById('list2').appendChild(listItem);
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});