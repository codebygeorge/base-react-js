import React, { useEffect } from 'react';
import GlobalStyles from './styles/global';
import AppRoutes from './routes';
import Header from './components/header';
import Sidebar from './components/sidebar';
import { Main } from './styles';
import { categoriesCall } from './store/categories/actions';
import { useDispatch, useSelector } from 'react-redux';
import { currentCategorySelector } from './store/categories/selectors';
import { useDidUpdate } from './hooks';
import { catsCall } from './store/cats/actions';


function App() {

    const dispatch = useDispatch();
    const currentCategory = useSelector(currentCategorySelector);

    useEffect(() => {
        dispatch(categoriesCall());
    }, [])

    useDidUpdate(() => {
        currentCategory && dispatch(catsCall(currentCategory.id));
    }, [currentCategory])

    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Main>
                <Sidebar/>
                <AppRoutes/>
            </Main>
        </>
    );
}

export default App;
