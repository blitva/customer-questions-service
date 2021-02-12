import React, { useState } from 'react';
import styled from 'styled-components';

const SearchViewWrapper = styled.div`
  display: block;
  // max-width: 800px;
  width: 800px;
  overflow: hidden;
`;

const SearchTabHeaders = styled.div`
  display: block;
  width: 800px;
  height: 46px;
  margin-bottom: 12px;
`;

const Tab = styled.span`
  font-size: 14px;
  font-weight: 700;
  border-bottom: 3px solid #ffa700;
  cursor: pointer;
  display: inline-block;
  padding: 20px;
  padding-bottom: 8px;
  padding-top: 14px;
`;

const SearchResultsContianer = styled.div`
  display: block;
`;

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
  // margin-top: 0;
  margin-bottom: 14px;
`;

const Header = styled.h1`
  font-size: 14px;
  font-weight: 400;
  color: #565959!important;
`;

// const QandAResults = styled.div``;

// const CustomerReviewsResults = stlyed.div``;

const SearchView = () => {


  return (
    <SearchViewWrapper>
      <SearchTabHeaders>
        <Tab>All</Tab>
        <Tab>Product Information</Tab>
        <Tab>Customer Q&A's</Tab>
        <Tab>Customer Reviews</Tab>
      </SearchTabHeaders>

      <SearchResultsContianer>
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

        <Header>Customer questions & answers</Header>
        <div>Q: How do i cancel my alarms</div>
        <div>A: On alexa app udner manage alarms simply say "alexa, cancel alarms.."</div>
        <div>By Eric Feel on December 23, 2020</div>

        <LinkWrapper>
            <Link>See 11 matching Q&A</Link>
        </LinkWrapper>

        <Header>Customer Reviews</Header>
        <div>Good to have for an alarm</div>
        <div>By Cedric Grice on January 19, 2021</div>
        <div>Having problems syncing them together</div>

        <LinkWrapper>
            <Link>See 20 matching customer reviews</Link>
        </LinkWrapper>

      </SearchResultsContianer>


    </SearchViewWrapper>
  )
}

export default SearchView;