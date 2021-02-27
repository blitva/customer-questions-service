import React, { useState } from 'react';
import styled from 'styled-components';
import ProductInformation from './SearchViews/ProductInformation.jsx';
import CustomerQandA from './SearchViews/CustomerQandA.jsx';
import CustomerReviews from './SearchViews/CustomerReviews.jsx';
import PostQuestionModal from './PostQuestionModal.jsx';

const SearchViewWrapper = styled.div`
  display: block;
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
cursor: pointer;
display: inline-block;
padding: 20px;
padding-bottom: 8px;
padding-top: 14px;

${({ active, value }) => {
  if (active === value) return `
    font-weight: 700;
    border-bottom: 3px solid #ffa700;
  `
}}
`;

const SearchResultsContianer = styled.div`
  display: block;
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

const Header = styled.h1`
  font-size: 14px;
  font-weight: 400;
  color: #565959!important;
`;

const BottomQuestionContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const PostQuestionContainer = styled.div`
  border: 1px #F0F2F2 solid;
  background-color: #F0F2F2!important
`;

const Question = styled.div`
  padding: 18px 22px;
  font-weight: 700!important;
  font-size: 14px!important;
`;

const Button = styled.button`
  width: 131px;
  height: 30px;
  margin-left: 14px;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-stlye: solid;
  border-width: 1px;
  text-align: center;
  text-decoration: none!important;
  vertical-algin: middle;
  &:focus {
    outline: none;
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
  }
`;

const AlsoAskedWidget = styled.div`
  display: block;
`;

const FollowUpQuestion = styled.span`
  display: inline-block;
  height: 30px;
  max-width: 100%;
  padding 0 14px;
  margin 0 10px 14px 0;
  background-color: #EBF8FA;
  border-bottom: solid 1px #969696;
  color: #002F36;
  cursor: pointer;
`;

const QuestionLink = styled.a`
  line-height: 30px;
  text-align: center;
`;


const SearchView = ({ QandAresults, productInfoResults, customerReviewsResults }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('All');
  const tabs = ['All', 'Product Information', 'Customer Q&A\'s', 'Customer Reviews'];

  const toggleModal = (e) => {
    setShowModal(!showModal);
  }

  const setActiveTab = (e) => {
    setSelectedTab(e);
  }

  const renderSearchViewTab = (param) => {
    switch(param) {
      case 'Product Information':
        return <ProductInformation productInfoResults={productInfoResults} setSelectedTab={setSelectedTab}/>
      case 'Customer Q&A\'s':
        return <CustomerQandA QandAresults={QandAresults} setSelectedTab={setSelectedTab}/>
      case 'Customer Reviews':
        return <CustomerReviews customerReviewsResults={customerReviewsResults} setSelectedTab={setSelectedTab}/>
      default:
        return (
          <>
            <ProductInformation productInfoResults={productInfoResults} setSelectedTab={setSelectedTab}/>
            <CustomerQandA QandAresults={QandAresults} setSelectedTab={setSelectedTab}/>
            <CustomerReviews customerReviewsResults={customerReviewsResults} setSelectedTab={setSelectedTab}/>
          </>
        )
    }
  }

  return (
    <SearchViewWrapper>
      <SearchTabHeaders>
        {tabs.map((tab, i) => {
          return <Tab
          key={i}
          value={tab}
          active={selectedTab}
          onClick={setActiveTab.bind(this, tab)}>{tab}</Tab>
        })}
        <HorizonalRule/>
      </SearchTabHeaders>

      <SearchResultsContianer>
        {renderSearchViewTab(selectedTab)}
        <BottomQuestionContainer>
          <PostQuestionContainer>
            <Question>
            Don't see the answer you're looking for?
            <Button onClick={toggleModal}>Post your question</Button>
            </Question>
          </PostQuestionContainer>
        </BottomQuestionContainer>
      </SearchResultsContianer>

      <AlsoAskedWidget>
        <Header>Customers also asked</Header>
        <FollowUpQuestion>
          <QuestionLink>
            is there a monthly service fee?
          </QuestionLink>
          </FollowUpQuestion>

          <FollowUpQuestion>
            <QuestionLink>
              Esta Bosina es Recagable
            </QuestionLink>
          </FollowUpQuestion>

          <FollowUpQuestion>
            <QuestionLink>
              How to connect this device via alexa app if network is hidden? i can’t find the option to manual add domain.
            </QuestionLink>
          </FollowUpQuestion>
      </AlsoAskedWidget>
      <PostQuestionModal show={showModal} toggleModal={toggleModal}/>
    </SearchViewWrapper>
  )
}

export default SearchView;