const searchHelper = (data, query) => {
  let results = data.filter((ele) => {
    return ele.question.toLowerCase().includes(query.toLowerCase())
  })

  return results;
}

export default searchHelper;