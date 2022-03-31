import React, {FC} from 'react';
import styles from './Output.module.css';

type HeaderProps = {
    value: number
    maxValue?: number
    disable?: boolean
}

const Output: FC<HeaderProps> = ({value, maxValue, disable}) => {
    const headerStyles = `
        ${styles.output_window} 
        ${value === maxValue && styles.output_limit}
        ${disable && styles.output_error}
    `

    return (
        <div className={headerStyles}>
            {disable ? 'You entered an invalid value!' : value}
        </div>
    );
};

export default Output;