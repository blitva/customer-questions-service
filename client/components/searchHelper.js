import axios from 'axios';

const questionsSearchHelper = (data, query) => {
  let results = data.filter((ele) => {
    return ele.question.toLowerCase().includes(query.toLowerCase());
  })

  return results;
}

const productSearchHelper = (query, productId) => {
  return axios.get(`/description/${productId}`)
    .then((res) => {
      let itemDescription = res.data[0].itemDescription;
      let results = itemDescription.filter((ele) => {
        return ele.toLowerCase().includes(query.toLowerCase());
      })

      return results;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
}

const reviewsSearchHelper = (query, productId) => {
  let params = {
    productId: productId,
    searchText: query
  }

  return axios.get('/Reviews/searchReviews/', { params })
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    console.log(err);
    return [];
  })
}

export {questionsSearchHelper, productSearchHelper, reviewsSearchHelper};