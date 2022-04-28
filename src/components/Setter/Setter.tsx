import React, {ChangeEvent, useEffect} from 'react';
import Input from '../../UI/Input/Input';
import styles from './Setter.module.css';
import Button from '../../UI/Button/Button';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {PATH} from '../../App';
import {isDisabledAC, resetValueAC, setMaxValueAC, setMinValueAC} from '../../bll/counter-reducer';

type SetterType = {
    minValue: number
    maxValue: number
    isDisabled: boolean
};

export const Setter = React.memo(({minValue, maxValue, isDisabled}: SetterType) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        maxValue <= minValue || minValue < 0 ? dispatch(isDisabledAC(true)) : dispatch(isDisabledAC(false))
    }, [minValue, maxValue]);

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(setMaxValueAC(+e.currentTarget.value))
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(setMinValueAC(+e.currentTarget.value))

    const setValueHandler = () => {
        dispatch(resetValueAC(minValue));
        navigate(PATH.COUNTER);
    };

    return (
        <div className={styles.setter_container}>
            <form className={styles.setter_inputs}>
                <div>
                    <span className={styles.setter_text}>max value:</span>
                    <Input value={maxValue} onChange={onChangeMaxHandler} error={isDisabled}/>
                </div>
                <div>
                    <span className={styles.setter_text}>start value:</span>
                    <Input value={minValue} onChange={onChangeStartHandler} error={isDisabled}/>
                </div>
            </form>
            <div className={styles.setter_buttons}>
                {isDisabled
                    ? <div className={styles.setter_error}>You entered an invalid value!</div>
                    : <Button title={'set'} onClick={setValueHandler}/>}
            </div>
        </div>
    )
});