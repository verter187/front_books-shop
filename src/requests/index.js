export const getBooks = (resolve, reject = () => {}) => {
  fetch("http://localhost:5000/api/router/books")
    .then((data) => data.json(), reject)
    .then(resolve);
};
