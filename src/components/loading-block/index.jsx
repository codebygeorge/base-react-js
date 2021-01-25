import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Col, Loader } from '../../styles';
import { colors } from '../../styles/constants';


const LoadingBlock = ({ isLoading, isError, onError, children }) => useMemo(() => (
    isLoading ? (
        <Wrapper>
            <Loader/>
        </Wrapper>
    ) : (
        isError ? (
            <Wrapper>
               <Col align="center">
                   <ErrorMessage>Failed to load</ErrorMessage>
                   {onError && (
                       <Button color="blue" onClick={onError}>Refresh</Button>
                   )}
               </Col>
            </Wrapper>
        ) : (
            children
        )
    )
), [isLoading, isError, children]);

export default LoadingBlock;

LoadingBlock.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
    isError: PropTypes.string,
    onError: PropTypes.func
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ErrorMessage = styled.span`
    color: ${colors.red1};
    font-size: 1rem;
    padding: 15px;
`;