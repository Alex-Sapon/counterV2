import React, {FC} from 'react';
import styles from './Output.module.css';

type HeaderProps = {
    value: number
    maxValue: number
}

const Output: FC<HeaderProps> = ({value, maxValue}) => {
    const headerStyles = `${styles.output_window} ${value === maxValue && styles.output_limit}`
    return (
        <div className={headerStyles}>
            {value}
        </div>
    );
};

export default Output;