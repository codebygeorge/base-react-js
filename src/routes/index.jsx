import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import styled from 'styled-components';
import { Row } from '../styles';


const Home = lazy(() => import('../pages/home'));
const SingleItem = lazy(() => import('../pages/single-item'));
const DragNDrop = lazy(() => import('../components/drag-n-drop'));

export default function AppRoutes() {
    return (
        <RouterWrapper>
            <Suspense fallback={
                <Row height="100%" width="100%" align="center" justify="center">
                    Loading...
                </Row>
            }>
                <Switch>
                    <Route path="/home" exact>
                        <Home/>
                    </Route>
                    <Route path="/home/:catId">
                        <SingleItem/>
                    </Route>
                    <Route path="/drag">
                        <DragNDrop/>
                    </Route>
                    <Redirect to="/home"/>
                </Switch>
            </Suspense>
        </RouterWrapper>
    );
}

const RouterWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 15px;
    box-shadow: inset 0 0 20px -5px #00000052;
`;