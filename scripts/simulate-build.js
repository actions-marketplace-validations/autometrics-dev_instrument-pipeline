const awaitableTimeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

await awaitableTimeout(1234);
