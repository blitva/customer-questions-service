import React, { useState } from 'react';
import styled from 'styled-components';

const QandAContainer = styled.div`
  /* height: 126px; */
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

const Answers = styled(Question)`
  width: 625px;
  margin-left: 40px;
  margin-bottom: 8px;
  color: #0F1111
`;

const User = styled.span`
  color: #565959!important;
`;

const SeeMoreAnswers = styled.div`
  width: 625px;
  height: 20px;
  padding-top: 6px;
`;

const Links = styled.a`
  color: #007185;
`;

const QuestionsAnswers = (props) => {
  const question = props.question;
  const answer = props.answers[0].answer;
  const user = props.answers[0].user;
  const date = props.answers[0].date;

  return (
    <QandAContainer>
      <QuestionBlock>
        <QuestionHeader>Question:</QuestionHeader>
        <Question>
          <Links href="#">
            {question}
          </Links>
        </Question>
      </QuestionBlock>
      <AnswersBlock>
        <AnswerHeader>Answer:</AnswerHeader>
        <Answers>
          {answer} <br/>
          <User>By {user} on {date}</User><br/>
          <SeeMoreAnswers>
            <Links href="#">
              See more answers ({props.answers.length})
            </Links>
          </SeeMoreAnswers>
        </Answers>
      </AnswersBlock>
    </QandAContainer>
  )
}

export default QuestionsAnswers;