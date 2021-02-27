import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 14px;
  font-weight: 400;
  color: #565959!important;
`;

const User = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #565959!important;
`;

const LinkWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Link = styled.a`
  color: #007185;
  text-decoration: none;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

const Bold = styled.div`
  font-weight: bold;
  display: inline;
`;

const Answer = styled.div`
  margin-bottom: 10px;
`;

const HorizonalRule = styled.hr`
  border-top: 1px solid #CCC;
  background-color: transparent;
  height 1px;
  border-width: 0;
  border-top-width: 1px;
  border-top-style: solid;
  margin-top: 0;
  margin-bottom: 14px;
`;

const dateConversion = (ISOdate) => {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let date = new Date(ISOdate);
  let m = date.getMonth();
  let d = date.getDate();
  let y = date.getFullYear();

  return `${month[m]} ${d}, ${y}`;
}

const CustomerQandA = ({ QandAresults, setSelectedTab }) => {
  if (QandAresults.length === 0) {
    return (
      <>
        <Answer>There are 0 results in Customer Q&A's</Answer>
        <HorizonalRule/>
      </>
    )
  } else {
    return (
      <>
        <Header>Customer questions & answers</Header>
        {QandAresults.map((ele, i) => {
          return (
            <Answer key={i}>
              <Bold><div>Q: {ele.question}</div></Bold>
              <div><Bold>A:</Bold> {ele.answers[0].answer}</div>
              <User>By {ele.answers[0].user} on {dateConversion(ele.answers[0].date)}</User>
            </Answer>

          )
        })}
        <LinkWrapper>
            <Link onClick={() => setSelectedTab('Customer Q&A\'s')}>See {QandAresults.length} matching Q&A</Link>
        </LinkWrapper>
        <HorizonalRule/>
      </>
    )
  }
}

export default CustomerQandA;