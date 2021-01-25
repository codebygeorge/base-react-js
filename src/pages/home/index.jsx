import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { currentCategorySelector } from '../../store/categories/selectors';
import Gallery from './gallery';
import { Col, H1 } from '../../styles';
import { colors } from '../../styles/constants';


export default function Home() {

    const currentCategory = useSelector(currentCategorySelector);

    return (
        <Col height="100%">
            {currentCategory && (
                <>
                    <CategoryTitle>
                        <H1>{currentCategory.name}</H1>
                    </CategoryTitle>
                    <Gallery/>
                </>
            )}
        </Col>
    );
}

const CategoryTitle = styled.div`
    height: 30px;
    flex-shrink: 0;
    margin-bottom: 15px;
    color: ${colors.blue1};
`;