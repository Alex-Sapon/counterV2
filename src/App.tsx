import React, {useState, useEffect} from 'react';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Setter from './components/Setter/Setter';

export const PATH = {
    COUNTER: '/counter',
    SETTER: '/setter'
}

const App = () => {
    const max: number = JSON.parse(localStorage.getItem('maxValue') || '0')
    const start: number = JSON.parse(localStorage.getItem('startValue') || '0')

    const [maxValue, setMaxValue] = useState<number>(max)
    const [startValue, setStartValue] = useState<number>(start)
    const navigate = useNavigate()

    const setLocalStorageHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setMaxValue(max)
        setStartValue(start)
        navigate(PATH.COUNTER)
    }

    useEffect(() => {
        setMaxValue(max)
        setStartValue(start)
    }, [max, start])

    return (
        <div className={'app'}>
            <div className={'app_container'}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.COUNTER}/>}/>
                    <Route path={PATH.COUNTER} element={<Counter max={max} start={start}/>}/>
                    <Route path={PATH.SETTER} element={
                        <Setter
                            maxValue={maxValue}
                            startValue={startValue}
                            setStartValue={setStartValue}
                            setMaxValue={setMaxValue}
                            setLocalStorageHandler={setLocalStorageHandler}
                        />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
