const faker = require('faker');

const fakeQuestion = () => faker.lorem.sentence().slice(0, -1) + '?';
// generate an array of 1-10 answers
const fakeAnswers = () => {
  let numOfAnswers = Math.floor(Math.random() * 10) + 1;
  let answersArray = [];
  while (numOfAnswers > 0) {
    answersArray.push(faker.lorem.paragraph());
    numOfAnswers--;
  }

  return answersArray;
};
const fakeUser = () => faker.name.findName();
const fakeDate = () => faker.date.past();
// generate rating between 1-100
const fakeRating = () => Math.floor(Math.random() * 100) + 1;

const fakeDataGenerator = async (recordsToCreate, startingRecordID) => {
  let data = [];

  while (recordsToCreate > 0) {
    data.push({
      productId: startingRecordID,
      ask: [
        {
          questions: await fakeQuestion(),
          answers: await fakeAnswers(),
          user: await fakeUser(),
          date: await fakeDate(),
          rating: await fakeRating()
        }
      ]
    })

    recordsToCreate--;
    startingRecordID++;
  }

  return data;
};

module.exports.fakeDataGenerator = fakeDataGenerator;