import {counterReducer, CounterStateType, incValueAC, isDisabledAC, resetValueAC, setMaxValueAC, setMinValueAC} from '../bll/counter-reducer'

test('correct value should be uncremented', () => {
    const initialState: CounterStateType = {
        value: 0,
        minValue: 0,
        maxValue: 1,
        isDisabled: false
    };

    const endState = counterReducer(initialState, incValueAC());

    expect(endState.value).toBe(1);
});

test('correct value should be reseted', () => {
    const initialState: CounterStateType = {
        value: 0,
        minValue: 0,
        maxValue: 1,
        isDisabled: false
    };

    const endState = counterReducer(initialState, resetValueAC(0));

    expect(endState.value).toBe(0);
});

test('correct min value should be changed', () => {
    const initialState: CounterStateType = {
        value: 0,
        minValue: 0,
        maxValue: 1,
        isDisabled: false
    };

    const endState = counterReducer(initialState, setMinValueAC(5));

    expect(endState.minValue).toBe(5);
});

test('correct max value should be changed', () => {
    const initialState: CounterStateType = {
        value: 0,
        minValue: 0,
        maxValue: 1,
        isDisabled: false
    };

    const endState = counterReducer(initialState, setMaxValueAC(7));

    expect(endState.maxValue).toBe(7);
});

test('disabled should be changed from false to true', () => {
    const initialState: CounterStateType = {
        value: 0,
        minValue: 0,
        maxValue: 1,
        isDisabled: false
    };

    const endState = counterReducer(initialState, isDisabledAC(true));

    expect(endState.isDisabled).toBeTruthy();
});