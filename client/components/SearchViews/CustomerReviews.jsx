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

const CustomerReviews = () => {
  return (
    <>
      <Header>Customer Reviews</Header>
      <div>Good to have for an alarm</div>
      <div>By Cedric Grice on January 19, 2021</div>
      <div>Having problems syncing them together</div>

      <LinkWrapper>
          <Link>See 20 matching customer reviews</Link>
      </LinkWrapper>
    </>
  )
}

export default CustomerReviews;