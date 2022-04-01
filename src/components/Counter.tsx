import React, {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Button from '../UI/Button/Button';
import Output from './Output/Output';
import styles from './Counter.module.css'
import {PATH} from '../App';

type CounterProps = {
    max: number
    start: number
}

const Counter: FC<CounterProps> = ({max, start}) => {
    const [value, setValue] = useState<number>(start)
    const navigate = useNavigate()

    const incrementHandler = () => setValue(prev => prev + 1)
    const resetHandler = () => setValue(start)
    const navigateHandler = () => navigate(PATH.SETTER)

    const increment = value === max
    const reset = value <= start && value < max

    return (
        <div className={styles.output_container}>
            <Output value={value} maxValue={max}/>
            <div className={styles.output_buttons}>
                <Button disabled={increment} title={'incr'} onClick={incrementHandler}/>
                <Button disabled={reset} title={'reset'} onClick={resetHandler}/>
                <Button title={'set'} onClick={navigateHandler}/>
            </div>
        </div>
    );
};

export default Counter;