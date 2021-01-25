import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesDataSelector } from '../../store/categories/selectors';
import { categoriesCall, setCurrentCategory } from '../../store/categories/actions';
import LoadingBlock from '../loading-block';
import { colors, device } from '../../styles/constants';
import { ReactComponent as ArrowSvg } from '../../assets/svg/arrow.svg';


function Sidebar() {

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const history = useHistory();
    const { categories, currentId, isFetched, error: categoriesError } = useSelector(categoriesDataSelector);
    const [isOpen, setIsOpen] = useState(false);

    function selectCategory(id) {
        dispatch(setCurrentCategory(id));
        if (pathname !== '/home') {
            history.replace('/home');
        }
    }

    function toggleSideBar() {
        setIsOpen(prevState => !prevState);
    }

    function loadCategories() {
        dispatch(categoriesCall());
    }

    return (
        <SidebarWrapper isOpen={isOpen}>
            <LoadingBlock
                isLoading={!isFetched}
                isError={categoriesError}
                onError={loadCategories}
            >
                <CategoriesList>
                    {categories.map(category => (
                        <li key={category.id}>
                            <Category
                                type="button"
                                isCurrent={category.id === currentId}
                                onClick={() => selectCategory(category.id)}
                            >
                                {category.name}
                            </Category>
                        </li>
                    ))}
                </CategoriesList>
            </LoadingBlock>
            <ToggleButton
                onClick={toggleSideBar}
                isOpen={isOpen}
            >
                <ArrowIcon/>
            </ToggleButton>
        </SidebarWrapper>
    );
}

export default Sidebar;


const SidebarWrapper = styled.div`
    position: relative;
    width: 20%;
    min-width: 200px;
    padding: 30px 0;
    box-shadow: 0 0 10px -5px black;
    background-color: white;
    
    ${device.tablet} { 
        position: absolute;
        z-index: 100;
        left: 0;
        top: 0;
        height: 100%;
        transform: translateX(-100%);
        transition: transform 0.3s;
        
      ${props => props.isOpen && `
         transform: translateX(0);
      `}
    }
`;

const ArrowIcon = styled(ArrowSvg)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 20px;
    height: 24px;
    border-radius: 100%;
`;

const ToggleButton = styled.button`
    display: none;
    
    ${device.tablet} { 
        display: block;
        position: absolute;
        top: 150px;
        right: 0;
        width: 50px;
        height: 50px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        transform: translateX(100%);
        box-shadow: 0 0 0 1px #00000017, 0 0 20px -5px #00000052;
        border: none;
        padding: 0;
        
        ${ArrowIcon} { 
          ${props => props.isOpen && `
            transform: translate(-50%, -50%) scale(-1);
          `}
        }
    }
`;

const Category = styled.button`
    position: relative;
    z-index: 1;
    padding: 0 20px;
    margin: 0;
    text-transform: capitalize;
    border: none;
    height: 40px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    //background-color: transparent;
    background-color: ${colors.blue3};
    color: ${colors.blue1};
    font-weight: 500;
    box-shadow: 0 16px 0 -15px #cccccc;
    
    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      right: -10px;
      width: 10px;
      height: 100%;
      background-color: ${colors.yellow1};
      transition: all 0.2s;
    }
    
    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      transition: all 0.2s;
    }
    
    ${props => props.isCurrent && `  
        color: white;
        
        &::before {
             left: -10px;
             background-color: ${colors.blue1};
             box-shadow: inset 4px 0 10px -7px black;
        }
        
        &::after {
            right: 0;
        }
    `}
`;

const CategoriesList = styled.ul`
    max-height: 100%;
    overflow-y: scroll;
`;