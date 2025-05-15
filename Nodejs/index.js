// main.js
const { Worker } = require("worker_threads");

// Function to create and execute the worker
function runWorker(workerData) {
  return new Promise((resolve, reject) => {
    // Create a new Worker
    const worker = new Worker("./worker.js", {
      workerData: { number: workerData }, // Pass the input data to the worker
    });

    // Listen for messages from the worker
    worker.on("message", (result) => {
      console.log(`Fibonacci result from worker: ${result}`);
      resolve(result); // Resolve the promise with the worker's result
    });

    // Handle errors from the worker
    worker.on("error", (error) => {
      console.error("Worker encountered an error:", error);
      reject(error);
    });

    // Handle worker completion
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

runWorker(40) // Pass the number to calculate Fibonacci for
  .then((result) => {
    console.log("Calculation complete:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
