import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../../UI/Button/Button'
import {Output} from '../Output/Output'
import styles from './Counter.module.css'
import {PATH} from '../../App'
import {useDispatch} from 'react-redux'
import {incValueAC, resetValueAC} from '../../bll/counter-reducer'

type CounterType = {
    value: number
    minValue: number
    maxValue: number
}

export const Counter = React.memo(({value, minValue, maxValue}: CounterType) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const incrementHandler = () => value !== maxValue && dispatch(incValueAC())
    const resetHandler = () => value !== minValue && dispatch(resetValueAC(minValue))

    const increment = value === maxValue
    const reset = value === minValue

    return (
        <div className={styles.output_container}>
            <Output value={value} maxValue={maxValue}/>
            <div className={styles.output_buttons}>
                <Button disabled={increment} title={'incr'} onClick={incrementHandler}/>
                <Button disabled={reset} title={'reset'} onClick={resetHandler}/>
                <Button title={'set'} onClick={() => navigate(PATH.SETTER)}/>
            </div>
        </div>
    )
})