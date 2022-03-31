import React, {FC} from 'react'
import styles from './Input.module.css'

type DefaultInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputProps = DefaultInputProps & {
    error?: boolean
}

const Input: FC<InputProps> = ({className, error, onChange, ...restProps}) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event)
    }

    const inputStyles = `${styles.input} ${className} ${error && styles.input_error}`

    return (
        <input
            type="number"
            placeholder={'value'}
            onChange={onChangeHandler}
            className={inputStyles}
            {...restProps}
        />
    )
}

export default Input

