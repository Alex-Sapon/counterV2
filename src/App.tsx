import {useSelector} from 'react-redux';
import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import {CounterStateType} from './bll/counter-reducer';
import {RootStateType} from './bll/store';
import {Counter} from './components/Counter/Counter';
import {Setter} from './components/Setter/Setter';

export const PATH = {
    COUNTER: '/counter',
    SETTER: '/setter',
};

export const App = () => {
    const {value, minValue, maxValue, isDisabled} = useSelector<RootStateType, CounterStateType>(state => state.counter);

    return (
        <div className={'app'}>
            <div className={'app_container'}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.COUNTER}/>}/>
                    <Route path={PATH.COUNTER} element={
                        <Counter value={value} minValue={minValue} maxValue={maxValue}/>
                    }/>
                    <Route path={PATH.SETTER} element={
                        <Setter minValue={minValue} maxValue={maxValue} isDisabled={isDisabled}/>
                    }/>
                </Routes>
            </div>
        </div>
    );
};
