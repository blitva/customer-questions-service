import React, { useState } from 'react';
import styled from 'styled-components';
import Answers from './Answers.jsx';

const QandAContainer = styled.div`
  padding-left: 7.25px;
  display: block;
  float: left;
  margin-left: 40px;
  position: relative;
`;

const QuestionBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 8px;
`;

const AnswersBlock = styled(QuestionBlock)`
  margin-top: 8px;
  margin-bottom: 12px;
`;

const QuestionHeader = styled.div`font-weight: 700;`;
const AnswerHeader = styled(QuestionHeader)``;

const Question = styled.div`
  margin-left: 30px;
`;

const StyledAnswers = styled(Question)`
  width: 625px;
  margin-left: 40px;
  color: #0F1111
`;

const Links = styled.a`
  color: #007185;
  text-decoration: none;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

const QuestionsAnswers = (props) => {

  return (
    <QandAContainer>
      <QuestionBlock id="test">
        <QuestionHeader>Question:</QuestionHeader>
        <Question>
          <Links>
            {props.question}
          </Links>
        </Question>
      </QuestionBlock>
      <AnswersBlock>
        <AnswerHeader>Answer:</AnswerHeader>
        <StyledAnswers>
          <Answers
            answers = {props.answers}/>
        </StyledAnswers>
      </AnswersBlock>
    </QandAContainer>
  )
}

export default QuestionsAnswers;