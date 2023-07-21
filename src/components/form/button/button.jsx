import styles from './button.module.css'

export default function Button({children, fullWidth, ...props}){
    return(
        <button className={`${styles.button} ${fullWidth && styles.fullWidth}`} {...props}>{children}</button>
    )
} 