import styles from './input.module.css'

export default function Input({ fullWidth, ...props }) {
    return (
        <input type="text" className={`${styles.input} ${fullWidth && styles.fullWidth}`}
            {...props}
        />
    )
}