import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyles from '../globalStyles.js';
import SearchBar from './SearchBar.jsx';
import Votes from './Votes.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import SearchView from './SearchView.jsx';
const _ = require('lodash');

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
  const [customerQuestionsData, setCustomerQuestionsData] = useState();
  const [showAmt, setShowAmt] = useState(3);
  const [searchResults, setSearchResults] = useState({
    productInfoResults: [],
    QandAresults: [],
    customerReviews: []
  });
  const [isSearching, setIsSearching] = useState(false);
  const [httpStatusCode, setHttpStatusCode] = useState();
  let dataToShow;

  if (customerQuestionsData) {
    dataToShow = customerQuestionsData.slice(0, showAmt);
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setIsSearching(false);
    } else {
      console.log(`searching for ${searchTerm}`)
      setIsSearching(true);
      setSearchResults({
        QandAresults: filteredResults
      })
    }
  }


  const getCustomerQuestionsData = (productId) => {
    axios.get(`http://ec2-3-22-93-125.us-east-2.compute.amazonaws.com:4001/customer-questions/${productId}`)
      .then(res => {
        console.log(res);
        setHttpStatusCode(res.status);
        setCustomerQuestionsData(res.data[0].questionAndAnswers);
      })
      .catch(err => {
        setHttpStatusCode(404);
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

  if (httpStatusCode === 404) {
    return <div>404</div>
  }

  if (!customerQuestionsData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <GlobalStyles/>
      <h3>Customer questions & answers</h3>
      <div>
        <SearchBar handleSearch={handleSearch}/>
      </div>
      {(isSearching
        ? <SearchView/>
        : <div>
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
          </div>
      )}
    </div>
  )
}

export default CustomerQuestions;