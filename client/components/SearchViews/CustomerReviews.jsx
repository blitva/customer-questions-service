import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
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

const Answer = styled.div`
  margin-bottom: 10px;
`;

const User = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #565959!important;
  display: inline;
`;

const Bold = styled.div`
  font-weight: bold;
  display: flex;
`;

const StarRating = styled.i`
  background-image: url('https://m.media-amazon.com/images/S/sash/qgGRgelkhXwysfn.png');
  height: 18px;
  width: 80px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  position: relative;
  vertical-algin: text-top;
  line-height: 20px;
  margin-bottom: 0px;
  margin-right: 5px;

  ${({ rating }) => {
  if (rating === 1) return `
    background-position: -375px -144px;
    background-size: 512px 256px;
    display: inline-block;
  `
  if (rating === 2) return `
    background-position: -181px -76px;
    background-size: 512px 256px;
    display: inline-block;
  `
  if (rating === 3) return `
    background-position: -84px -48px;
    background-size: 512px 256px;
    display: inline-block;
  `
  if (rating === 4) return `
    background-position: -84px -8px;
    background-size: 512px 256px;
    display: inline-block;
  `
  if (rating === 5) return `
    background-position: -166px -36px;
    background-size: 512px 256px;
    display: inline-block;
  `
}}
`;

const dateConversion = (ISOdate) => {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let date = new Date(ISOdate);
  let m = date.getMonth();
  let d = date.getDate();
  let y = date.getFullYear();

  return `${month[m]} ${d}, ${y}`;
}

const CustomerReviews = ({ customerReviewsResults, setSelectedTab }) => {
  if (customerReviewsResults.length === 0) {
    return (
      <>
        <Answer>There were 0 results in Customer Reviews.</Answer>
        <HorizonalRule/>
      </>
    )
  } else {
    return (
      <>
        <Header>Customer Reviews</Header>
        {customerReviewsResults.map((data, i) => {
          return (
            <Answer key={i}>
              <Bold><StarRating rating={data.rating}/> {data.title}</Bold>
              <User>By {data.customerName} on {dateConversion(data.reviewDate)}</User>
              <div>{data.description}</div>
            </Answer>
          )
        })}
        <LinkWrapper>
            <Link onClick={() => setSelectedTab('Customer Reviews')}>See {customerReviewsResults.length} matching customer reviews</Link>
        </LinkWrapper>
        <HorizonalRule/>
      </>
    )
  }
}

export default CustomerReviews;