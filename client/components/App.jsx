import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyles from '../globalStyles.js';
import SearchBar from './SearchBar.jsx';
import Votes from './Votes.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import SearchView from './SearchView.jsx';

const AskContainer = styled.div`
  width: 800px;
  display: inline-block;
  line-height: 20px;
  position: relative;
  overflow-wrap: break-word;
`;

const SeeMoreQuestions = styled.div`
  width: 800px;
  margin-bottom: 12px;
  padding-left: 165px;
`;

const Button = styled.button`
  height: 30px;
  width: 230px;
  padding: 0px 10px 0px 11px;
  position: relative;
`;

const CustomerQuestions = () => {
  const [customerQuestionsData, setCustomerQuestionsData] = useState(null);
  const [questionAnswers, setQuestionAnswers] = useState(customerQuestionsData);
  const [showAmt, setShowAmt] = useState(3);
  let dataToShow;

  if (customerQuestionsData !== null) {
    dataToShow = customerQuestionsData.slice(0, showAmt);
  }


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

  const seeMore = () => {
    if (showAmt === customerQuestionsData.length - 1) {
      setShowAmt(prevShowAmt => prevShowAmt + 1);
    } else if (showAmt < customerQuestionsData.length) {
      setShowAmt(prevShowAmt => prevShowAmt + 2);
    }
  }

  const collapseAll = () => {
    setShowAmt(3);
  }

  useEffect(() => {
    const productId = window.location.pathname.split('/')[1] || 1000;
    getCustomerQuestionsData(productId)
  }, []);

  return (
    (customerQuestionsData === null
    ? <div>404</div>
    : <div>
        {console.log(customerQuestionsData)}
        <GlobalStyles/>
        <h2>Customer questions & answers</h2>
        <div>
          <SearchBar/>
        </div>
        {dataToShow.map((data, i) => {
          return (
            <AskContainer key={i}>
              <Votes votes={data.rating}/>
              <QuestionsAnswers
                question={data.question}
                answers={data.answers}/>
            </AskContainer>
          )
        })}
        <SeeMoreQuestions>
          {(customerQuestionsData.length === 3
            ? <></>
            : customerQuestionsData.length - showAmt === 0
            ? <Button onClick={collapseAll}>Collapse</Button>
            : customerQuestionsData.length > 3
            ? <Button onClick={seeMore}>
              See more answered questions ({customerQuestionsData.length - showAmt})</Button>
            : <></>
            )}
        </SeeMoreQuestions>
        <SearchView/>
      </div>
    )
  )
}

export default CustomerQuestions;