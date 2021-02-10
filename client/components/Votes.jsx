import React, { useState } from 'react';
import styled from 'styled-components';
import up_arrow from '../images/up_arrow.png';
import down_arrow from '../images/down_arrow.png';

const VoteWidget = styled.div`
  width: 65px;
  text-align: center;
  display: block;
  float: left;
  margin-left: -40px;
`;


const VoteContainer = styled.ul`
  display: block;
  list-style-type: none;
  width: 64px;
  border-right: 1px solid #DDDDDD;
`;

const UpArrow = styled.button`
  background-image: url(${up_arrow});
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  width: 20px;
  height: 16px;
  background-color: #fff;
  cursor: pointer;
  outline: none;
`;

const DownArrow = styled(UpArrow)`
  background-image: url(${down_arrow});
  padding: 5px;
`;

const Votes = (props) => {
  const [vote, setVote] = useState(props.votes);

  return (
    <VoteWidget>
      <VoteContainer>
        <li><UpArrow onClick={() => setVote(vote + 1)}/></li>
        <li>{vote}</li>
        <li>votes</li>
        <li><DownArrow onClick={() => setVote(vote + - 1)}/></li>
      </VoteContainer>
    </VoteWidget>
  );
}

export default Votes;