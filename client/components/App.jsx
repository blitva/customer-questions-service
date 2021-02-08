import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyles from '../globalStyles.js';
import Search from './Search.jsx';
import Votes from './Votes.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';

const AskContainer = styled.div`
  height: 106px;
  width: 800px;
  display: inline-block;
  line-height: 20px;
  margin-bottom: 12px;
  position: relative;
  overflow-wrap: break-word;
`;

const CustomerQuestions = (props) => {
  const [customerQuestionsData, setCustomerQuestionsData] = useState(null);

  const getCustomerQuestionsData = (productId) => {
    axios.get(`/customer-questions/${productId}`)
      .then(res => {
        console.log(res);
        setCustomerQuestionsData(res.data[0].questionAndAnswers)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    const productId = window.location.pathname.split('/')[1] || 1000;
    getCustomerQuestionsData(productId)
  }, []);

  return (
    (customerQuestionsData === null
    ? <div>Loading...</div>
    : <div>
        {console.log(customerQuestionsData)}
        <GlobalStyles/>
        <h2>Customer questions & answers</h2>
        <div>
          <Search/>
        </div>
        {customerQuestionsData.map((data, i) => {
          return (
            <AskContainer key={i}>
              <Votes votes={data.rating}/>
              <QuestionsAnswers
                question={data.question}
                answers={data.answers}
              />
            </AskContainer>
          )
        })}
      </div>
    )
  )
}

export default CustomerQuestions;
