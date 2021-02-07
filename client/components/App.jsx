import React, { Component } from 'react';
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

class CustomerQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <GlobalStyles/>
        <h2>Customer questions & answers</h2>
        <div>
          <Search/>
        </div>
        <AskContainer>
          <Votes/>
          <QuestionsAnswers/>
        </AskContainer>
      </div>
    )
  }
}

export default CustomerQuestions;