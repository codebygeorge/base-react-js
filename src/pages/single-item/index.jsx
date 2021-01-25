import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { catSelector } from '../../store/cats/selectors';
import { Col, H1, Image, Row } from '../../styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowSvg } from '../../assets/svg/arrow.svg';
import { colors, device } from '../../styles/constants';


function SingleItem() {

    const { catId } = useParams();
    const cat = useSelector(store => catSelector(store, catId));

    return (!cat ? (
            <Redirect to="/home"/>
        ) : (
            <Wrapper>
                <BackLink to="/home">
                    <ArrowSvg/>
                    <span>Back</span>
                </BackLink>
                <Row>
                    <TextBody>
                        <CatAvatarWrapper>
                            <H1>{cat.categories.name}</H1>
                            <Image url={cat.url}/>
                        </CatAvatarWrapper>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but
                            also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the
                            1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with
                            desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but
                            also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the
                            1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with
                            desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but
                            also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the
                            1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with
                            desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </TextBody>
                </Row>
            </Wrapper>
        )
    );
}

export default SingleItem;

const BackLink = styled(Link)`
   display: flex;
   align-items: center;
   padding: 10px 0;
   
   svg {
      width: 16px;
      transform: scaleX(-1);
      margin-right: 8px;
   }
   
   span {
      color: ${colors.blue1};
      font-size: 1.25rem;
   }
`;

const CatAvatarWrapper = styled.div`
   padding: 0 20px 5px 0;
   width: 40%;
   min-width: 300px;
   float: left;
   
   ${device.mobile} {  
      width: 100%;
      padding: 0 0 20px 0;
   }
`;

const TextBody = styled.div`
   width: 100%;
   line-height: 1.45rem;
   
   p {
      margin-top: 0;
   }
`;

const Wrapper = styled(Col)`
    overflow-y: auto;
    max-height: 100%;
`;