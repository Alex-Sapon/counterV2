import {useNavigate} from 'react-router-dom';
import {Button} from '../../UI/Button/Button';
import {Output} from '../Output/Output';
import styles from './Counter.module.css';
import {PATH} from '../../App';
import {useDispatch, useSelector} from 'react-redux';
import {CounterStateType, incValueAC, resetValueAC} from '../../bll/counter-reducer';
import {RootStateType} from '../../bll/store';

export const Counter = () => {
    const {value, minValue, maxValue} = useSelector<RootStateType, CounterStateType>(state => state.counter);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const incrementHandler = () => value !== maxValue && dispatch(incValueAC());
    const resetHandler = () => value !== minValue && dispatch(resetValueAC(minValue));

    const increment = value === maxValue;
    const reset = value === minValue;

    return (
        <div className={styles.output_container}>
            <Output value={value} maxValue={maxValue}/>
            <div className={styles.output_buttons}>
                <Button disabled={increment} title={'incr'} onClick={incrementHandler}/>
                <Button disabled={reset} title={'reset'} onClick={resetHandler}/>
                <Button title={'set'} onClick={() => navigate(PATH.SETTER)}/>
            </div>
        </div>
    );
};