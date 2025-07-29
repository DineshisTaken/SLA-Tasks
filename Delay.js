async function getResult() {
  function delay() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Done!"), 1000);
    });
  }

  const result = await delay();
  console.log(result);
  return result;
}

getResult();
