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
    
    
    
    
    $blue: #687bf7;
$lightblue: #72d9ef;
$cyan: #79e7eb;

section {
 max-width: 15em;
 margin: 10vh auto 0;
 background: whitesmoke;
 padding: 0.5em 1em;
 border-radius: 0.5em;
 box-shadow: 4px 4px 50px rgba($blue, 0);
 transition: box-shadow 100ms linear;
 &:hover {
  box-shadow: 4px 4px 50px rgba($blue, 0.6);
 }
}

ul {
 margin: 0;
 padding: 0;
 list-style: none;

 li {
  display: flex;
  align-items: center;
  cursor: move;
  line-height: 1;
  margin-bottom: 0.1em;
  border-radius: 5px;

  &.dropArea {
   color: white !important;
   background: white !important;
   position: relative;

   &::before {
    content: "Drop Here";
    color: $blue;
    font-size: 0.5em;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    border: 2px dashed $blue;
    border-radius: 3px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
   }

   span {
    display: none;
   }

   p {
    margin-left: 1em;
   }
  }

  &:hover {
   background: linear-gradient(to left, $blue, $lightblue);
   color: white;

   span {
    background-color: $cyan;
   }
  }

  span {
   display: inline-block;
   margin-right: 1em;
   margin-left: 0.5em;
   background-color: $lightblue;
   width: 2em;
   height: 2em;
   border-radius: 50%;
   display: grid;
   place-items: center;
   color: white;
   font-weight: bold;
   transition: background-color 100ms linear;
  }

  p {
   transition: margin-left 50ms ease-in-out;
  }

  i {
   margin-left: auto;
   margin-right: 1em;
  }
 }
}

@keyframes fadeIn {
 0% {
  opacity: 0.2;
 }
 100% {
  opacity: 1;
 }
}

`;