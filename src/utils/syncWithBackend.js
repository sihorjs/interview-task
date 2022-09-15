const SYNC_DELAY_MS = 1000;

const syncWithBackend = (countries) => (
  new Promise((resolve) => {
    setTimeout(() => {
      const datetime = new Date().toISOString();

      console.log(countries, datetime);

      resolve(countries);
    }, SYNC_DELAY_MS)
  })
);

export default syncWithBackend;
