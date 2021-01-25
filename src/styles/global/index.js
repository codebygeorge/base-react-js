import { createGlobalStyle } from 'styled-components';
import { size } from '../constants';


export default createGlobalStyle`
    
    html, body {
      overflow: hidden;
      overscroll-behavior-y: none;
      overscroll-behavior-x: none;
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      min-width: ${`${size.mobile}px`};
    }
    
    div {
        box-sizing: border-box;
    }
   
    a {
      text-decoration: none;
    }
    
    button {
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        cursor: pointer;
    }
    
    b {
      font-weight: 500;
    }
    
    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    li {
        list-style: none;
    }

    .p-relative {
        position: relative;
    }
    
    .p-absolute {
        position: absolute;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes smoothShow {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;