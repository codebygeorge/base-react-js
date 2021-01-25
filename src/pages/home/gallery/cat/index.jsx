import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../../../styles/constants';
import { Image } from '../../../../styles';


const Cat = ({ id, imgSrc }) => useMemo(() => (
    <CatElement to={`/home/${id}`}>
        <Image url={imgSrc}/>
    </CatElement>
), [id, imgSrc]);

export default Cat;

Cat.propTypes = {
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
}

const CatElement = styled(Link)`
    position: relative;
    display: block;
    width: calc((100% / 4) - 10px);
    margin: 5px;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 3px 10px -6px black, 0 0 0 1px #80808054;
    transition: box-shadow 0.2s;
    opacity: 0;
    
    &:hover {
       box-shadow: 0 0 6px 3px rgba(255,255,255,0.3), 0 2px 10px 0 rgba(0,0,0,0.5), 0 0 0 1px #80808054;
    }
    
    animation: smoothShow 0.2s forwards;
    animation-delay: 0.2s;
    
    ${device.laptop} {  
      width: calc((100% / 3) - 10px);
    }
    
    ${device.tablet} {  
      width: calc((100% / 2) - 10px);
    }
    
    ${device.mobile} {  
      width: 100%;
    }
`;