export const getBooks = (resolve, reject = () => {}) => {
  fetch("http://localhost:5000/api/author/all")
    .then((data) => data.json(), reject)
    .then(resolve);
};
