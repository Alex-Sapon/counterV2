import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Button from '../UI/Button/Button';
import Output from './Output/Output';
import styles from './Counter.module.css'

type CounterProps = {
    max: number
    start: number
    disable: boolean
}

const Counter: FC<CounterProps> = ({max, start, disable}) => {
    const navigate = useNavigate()
    const [value, setValue] = useState<number>(start)

    useEffect(() => {
        setValue(start)
    }, [start])

    const incrementHandler = () => setValue(prev => prev + 1)
    const resetHandler = () => setValue(start)

    const increment = value === max || disable
    const reset = value <= start && value < max || disable

    return (
        <div className={styles.container_output}>
            <Output value={value} maxValue={max} disable={disable}/>
            <div className={styles.buttons}>
                <Button disabled={increment} title={'incr'} onClick={incrementHandler}/>
                <Button disabled={reset} title={'reset'} onClick={resetHandler}/>
                <Button title={'set'} onClick={() => navigate('/setter')}/>
            </div>
        </div>
    );
};

export default Counter;