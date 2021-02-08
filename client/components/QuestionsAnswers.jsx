import React, { useState } from 'react';
import styled from 'styled-components';

const QandAContainer = styled.div`
  // width: 735px;
  height: 126px;
  padding-left: 7.25px;
  display: block;
  float: left;
  margin-left: 40px;
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

const QuestionsAnswers = () => {
  return (
    <QandAContainer>
      <QuestionBlock>
        <QuestionHeader>Question:</QuestionHeader>
        <Question>
          <Links href="#">
            Can it be paired with another identical Echo for true stereo?
          </Links>
        </Question>
      </QuestionBlock>
      <AnswersBlock>
        <AnswerHeader>Answer:</AnswerHeader>
        <Answers>
          Yes. I just set up a system with a show or dot in every room for my elderly mother less than a week ago. You can either create a group of just the couple/few that you want to work together, or if you want the music to play on all the echos, dots, and shows simultaneously just say "Alexa, play (name your music) everywhere." "Everywhere" is the key command, and that works without defining or setting up a group. <br/>
          <User>By Janet W. on October 22, 2020</User><br/>
          <SeeMoreAnswers>
            <Links href="#">
              See more answers (39)
            </Links>
          </SeeMoreAnswers>
        </Answers>
      </AnswersBlock>
    </QandAContainer>
  )
}

export default QuestionsAnswers;