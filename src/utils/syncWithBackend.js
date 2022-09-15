const syncWithBackend = (countries) => (
  new Promise((resolve) => {
    setTimeout(() => {
      const datetime = new Date().toISOString();

      console.log(countries, datetime);

      resolve(countries);
    }, 3000)
  })
);

export default syncWithBackend;
