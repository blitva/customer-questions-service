import React from 'react';
import styled from 'styled-components';

const ProductInfoResults = styled.div`
  box-sizing: border-box;
  margin-bottom: 8px!important;
`;

const Span = styled.span`
  display: inline;
  height: auto;
  width: auto;
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

const ProductInformation = () => {
  return (
    <>
      <ProductInfoResults>
        <div>
          <Span>
            Ready to help - Ask Alexa to play music, answer questions, play the news, check the weather, set alarms, control compatible smart home devices, and more.
          </Span>
        </div>
        <LinkWrapper>
          <Link>See 1 matches from product info</Link>
        </LinkWrapper>
      </ProductInfoResults>
      <HorizonalRule/>
    </>
  )
}

export default ProductInformation;