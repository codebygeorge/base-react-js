import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { catsDataSelector } from '../../../store/cats/selectors';
import { catsCall, catsCallMore } from '../../../store/cats/actions';
import { currentCategorySelector } from '../../../store/categories/selectors';
import LoadingBlock from '../../../components/loading-block';
import Cat from './cat';
import { Button, Col, Row } from '../../../styles';


function Gallery() {

    const dispatch = useDispatch();
    const currentCategory = useSelector(currentCategorySelector);
    const { cats, isFetched, isLoading, page, error: catsError, moreError } = useSelector(catsDataSelector);
    const listWrapperRef = useRef();

    function loadMore() {
        dispatch(catsCallMore(currentCategory.id, page + 1));
    }

    function refresh() {
        currentCategory && dispatch(catsCall(currentCategory.id));
    }

    function scrollToBottom() {
        if (listWrapperRef && listWrapperRef.current) {
            listWrapperRef.current.scrollTop = listWrapperRef.current.scrollHeight;
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, [cats])

    const ButtonBlock = useCallback((btnText, onClickAction) => (
        <Row justify="center">
            <Button color="blue" onClick={onClickAction}>{btnText}</Button>
        </Row>
    ), []);

    return (
        <GalleryWrapper ref={listWrapperRef}>
            <GalleryList>
                <LoadingBlock
                    isLoading={!isFetched}
                    isError={catsError}
                    onError={refresh}
                >
                    {cats.map((cat, index) => (
                        <Cat key={`${index}-${cat.id}`}
                             id={cat.id}
                             imgSrc={cat.url}
                        />
                    ))}
                </LoadingBlock>
            </GalleryList>
            {isFetched && cats.length > 0 && (
                <LoadMore>
                    <LoadingBlock
                        isLoading={isLoading}
                        isError={moreError}
                        onError={loadMore}
                    >
                        {ButtonBlock('Load More', loadMore)}
                    </LoadingBlock>
                </LoadMore>
            )}
        </GalleryWrapper>
    );
}

export default Gallery;


const GalleryWrapper = styled(Col)`
    position: relative;
    height: calc(100% - 45px);
    overflow-y: auto;
    overflow-x: hidden;
    flex-shrink: 0;
`;

const GalleryList = styled(Row)`
    flex-wrap: wrap;
    margin: 0 -5px;
`;

const LoadMore = styled.div`
    position: relative;
    height: 60px;
    padding: 10px 15px;
    flex-shrink: 0;
`;