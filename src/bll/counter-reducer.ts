const initialState: CounterStateType = {
    value: 0,
    minValue: 0,
    maxValue: 1,
    isDisabled: false,
};

export type CounterStateType = {
    value: number
    minValue: number
    maxValue: number
    isDisabled: boolean
};

export const counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, value: state.value + 1};
        case 'RESET-VALUE':
            return {...state, value: action.resetValue};
        case 'SET-MIN-VALUE':
            return {...state, minValue: action.minValue};
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue};
        case 'IS-DISABLED':
            return {...state, isDisabled: action.isDisabled};
        default:
            return state;
    }
};

type ActionType = ReturnType<typeof incValueAC> | ReturnType<typeof resetValueAC>
    | ReturnType<typeof isDisabledAC> | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setMaxValueAC>

export const incValueAC = () => ({type: 'INC-VALUE'}) as const;
export const resetValueAC = (resetValue: number) => ({type: 'RESET-VALUE', resetValue}) as const;
export const setMinValueAC = (minValue: number) => ({type: 'SET-MIN-VALUE', minValue}) as const;
export const setMaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue}) as const;
export const isDisabledAC = (isDisabled: boolean) => ({type: 'IS-DISABLED', isDisabled}) as const;