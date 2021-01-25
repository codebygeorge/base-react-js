import styled from 'styled-components';
import { colors, device } from './constants';
import { ReactComponent as LoaderSvg } from '../assets/svg/loader.svg';

// HEADINGS

export const H1 = styled.h1`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
    margin: 0;
    text-transform: capitalize;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    margin-right: ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    width: ${props => props.width};
    height: ${props => props.height};
    min-height: ${props => props.minHeight};
    padding: ${props => props.padding};
    padding-left: ${props => props.paddingLeft};
    flex-wrap: ${props => props.flexWrap};
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    padding-right: ${props => props.paddingRight};
    padding-left: ${props => props.paddingLeft};
    padding: ${props => props.padding};
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    min-width: ${props => props.minWidth};
    max-width: ${props => props.maxWidth};
`;

export const Main = styled(Row)`
    position: relative;
    width: 100vw;
    height: calc(100vh - 60px);
    background-color: ${colors.gray1};
    
    ${device.tablet} { 
        height: calc(100vh - 40px);
    }
 `;

export const Button = styled.button`
        display: inline-block;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        text-align: center;
        font-style: normal;
        border-radius: 4px;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.375rem 0.75rem;
        background-color: transparent;
        border: none;  
        margin: 0;
        user-select: none;
        transition: all 0.2s;
        
        &:hover, &:focus {
            box-shadow: 0 0 10px -2px rgba(0,0,0,0.25);
        }
                
        ${props => props.color === 'blue' && `
            color: white;
            background-color: ${colors.blue1};
            
            &:hover, &:focus {
            background-color: ${colors.blue4};
            }
        `}
    }`;

export const Loader = styled(LoaderSvg)`
  width: 30px;
  height: 30px;
  animation: spin .6s linear infinite;
`;

export const Image = styled.div`
    width: 100%;
    padding-top: 60%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("${props => props.url}");
`;