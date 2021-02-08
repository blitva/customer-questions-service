import React, { useState } from 'react';
import styled from 'styled-components';

const User = styled.span`
  color: #565959!important;
`;

const Answer = styled.div`
  margin-bottom: 8px;
`;

const SeeMoreAnswers = styled.div`
  width: 625px;
  height: 20px;
  padding-top: 6px;
`;

const Link = styled.a`
  color: #007185;
  text-decoration: none;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

const dateConversion = (ISOdate) => {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let date = new Date(ISOdate);
  let m = date.getMonth();
  let d = date.getDate();
  let y = date.getFullYear();

  return `${month[m]} ${d}, ${y}`;
}

const Answers = (props) => {
  const [answers, setAnswers] = useState(props.answers);
  const [showAmt, setShowAmt] = useState(1);

  const seeMore = () => {
    if (showAmt === answers.length - 1) {
      setShowAmt(prevShowAmt => prevShowAmt + 1);
    } else if (showAmt < answers.length) {
      setShowAmt(prevShowAmt => prevShowAmt + 2);
    }
  }

  const collapseAll = () => {
    setShowAmt(1);
  }

  let answersToShow = answers.slice(0, showAmt);

  return (
    <>
    {answersToShow.map((answerData, i) => {
      return (
        <Answer key={i}>
          <div>{answerData.answer}</div>
          <User> By {answerData.user} on {dateConversion(answerData.date)}</User>
        </Answer>
      )
    })}
      <SeeMoreAnswers>
        {(props.answers.length - showAmt === 0
          ? <button onClick={collapseAll}> Collapse all answers </button>
          : <Link onClick={seeMore}>See more answers ({props.answers.length - showAmt})</Link>
          )}
      </SeeMoreAnswers>
    </>
  )
};

export default Answers;