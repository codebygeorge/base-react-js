import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/constants';


function Header() {
    return (
        <HeaderTag>
            <Name>Those Cats</Name>
        </HeaderTag>
    );
}

export default Header;


const HeaderTag = styled.header`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    background-color: ${colors.blue1};
    box-sizing: border-box;
    box-shadow: 0 4px 6px -4px #00000085;
    
   ${device.tablet} { 
        height: 40px;
    }
`;

const Name = styled.span`
    font-size: 2rem;
    font-weight: bold;
    color: white;
    
    ${device.tablet} { 
      font-size: 1.25rem;
    }
`;