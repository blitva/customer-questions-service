import React, { useState } from 'react';
import styled from 'styled-components';

const PopoverLightbox = styled.div`
  background: #0F1111;
  z-index: 1008;
  // opacity: 0.5;
  display: block;
`;

const PopoverWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  // border: 1px solid;
  border-color: #D5D9D9;
  box-shadow: 0 0 14px 0 rgb(15 17 17 / 50%);
  width: 460px;
  height: 276px;
  top: 363px;
  left: 400px;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  background-color: #fff;
`;

const Header = styled.header`
  position: relative;
  border-bottom: 1px solid #D5D9D9;
  background-color: #F0F2F2;
  border-radius: 8px 8px 0 0;
  padding: 0 24px;
  height: 56px;
`;

const H4 = styled.h4`
  padding: 16px 0;
  min-height: 56px;
  margin-right: 28px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
`;

const Content = styled.div`
  height: auto;
  background-color: #fff;
  overflow-y: auto;
  padding: 16px 24px;
  text-align: left;
  overflow-x: hidden;
`;

const Form = styled.form`
  margin-bottom: 0!important;
  box-sizing: boarder-box;
  display: block;
  margin-top: 0em;
  line-height: 20px;
  height: 66px;
  width: 410px;
`;

const TextArea = styled.textarea`
  width: 394px;
  padding: 5px 7px;
  resize: vertical;
  line-height: 19px;
  border: 1px solid #888C8C;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgb(15 17 17 / 15%) inset;
`;

const P = styled.p`
  padding: 0;
  margin-top: 12px!important;
  margin-bottom: 0!important;
  font-size: 14px;
  color: #565959!important;
`;

const Footer = styled.div`
  padding: 8px 24px 24px;
  margin: 0;
  border-radius: 0 0 8px 8px;
  display: block;
  text-align: right;
`;

const Button = styled.button`
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none!important;
  veritcal-align: middle;
  width: 61px;
  height: 29px;
  margin-right: 2px;
  &:focus {
    outline: none;
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
  }
`;

const PostButton = styled(Button)`
  background: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  margin-left: 2px;
  margin-right: 0;
`;


const PostQuestionModal = ({show}) => {
  return (
    (!show
      ? null
      : <PopoverLightbox>
          <PopoverWrapper>
              <Header>
                <H4>Post your question</H4>
              </Header>

              <Content>
                <Form>
                  <div style={{'marginTop': '4px!important'}}>
                    <TextArea placeholder="Please enter a question."></TextArea>
                  </div>
                </Form>
                <P>Your question might be answered by sellers, manufacturers, or customers who bought this product.</P>
              </Content>

              <Footer>
                <Button>Cancel</Button>
                <PostButton>Post</PostButton>
              </Footer>
            </PopoverWrapper>
        </PopoverLightbox>
    )
  )
}

export default PostQuestionModal;