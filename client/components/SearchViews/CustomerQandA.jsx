import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 14px;
  font-weight: 400;
  color: #565959!important;
`;

const LinkWrapper = styled.div`
  margin-top: 16px;
`;

const Link = styled.a`
  color: #007185;
  text-decoration: none;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

const CustomerQandA = () => {
  return (
    <>
      <Header>Customer questions & answers</Header>
      <div>Q: How do i cancel my alarms</div>
      <div>A: On alexa app udner manage alarms simply say "alexa, cancel alarms.."</div>
      <div>By Eric Feel on December 23, 2020</div>

      <LinkWrapper>
          <Link>See 11 matching Q&A</Link>
      </LinkWrapper>
    </>
  )
}

export default CustomerQandA;