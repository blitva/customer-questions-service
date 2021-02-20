import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 14px;
    line-height: 20px;
    color: #0F1111;
    font-family:'Amazon Ember', Arial, sans-serif;
    max-width: 1504px;
  }

  h4 {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -.3px;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;
  }
`;

export default GlobalStyles;