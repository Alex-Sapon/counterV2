import React, {FC} from 'react';
import styles from './Button.module.css';

type DefaultButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonProps = DefaultButtonProps & {}

export const Button: FC<ButtonProps> = ({className, onClick, disabled, title}) => {
    return (
        <button className={`${styles.button} ${className}`} disabled={disabled} onClick={onClick}>
            {title}
        </button>
    );
};