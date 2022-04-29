import {Route, Routes, Navigate} from 'react-router-dom';
import {Counter} from './components/Counter/Counter';
import {Setter} from './components/Setter/Setter';
import './App.css';

export const PATH = {
    COUNTER: '/counter',
    SETTER: '/setter',
};

export const App = () => {
    return (
        <div className={'app'}>
            <div className={'app_container'}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.COUNTER}/>}/>
                    <Route path={PATH.COUNTER} element={<Counter/>}/>
                    <Route path={PATH.SETTER} element={<Setter/>}/>
                </Routes>
            </div>
        </div>
    );
};
