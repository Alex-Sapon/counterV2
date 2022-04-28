import React from 'react';
import styles from './Output.module.css';

type HeaderType = {
    value: number
    maxValue: number
}

export const Output = React.memo(({value, maxValue}: HeaderType) => {
    const headerStyles = `${styles.output_window} ${value === maxValue && styles.output_limit}`

    return <div className={headerStyles}>{value}</div>
})