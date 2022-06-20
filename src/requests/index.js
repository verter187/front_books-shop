export const getBooks = (resolve, reject = () => {}) => {
  fetch("http://localhost:5000/api/router/books")
    .then((data) => data.json(), reject)
    .then(resolve);
};

export const getPartners = (resolve, reject = () => {}) => {
  fetch("http://localhost:5000/api/router/partners")
    .then((data) => data.json(), reject)
    .then(resolve);
};

export const getTopics = (resolve, reject = () => {}) => {
  fetch("http://localhost:5000/api/router/topics")
    .then((data) => data.json(), reject)
    .then(resolve);
};

export const getArticles = (resolve, reject = () => {}) => {
  fetch("http://localhost:5000/api/router/articles")
    .then((data) => data.json(), reject)
    .then(resolve);
};
