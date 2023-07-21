import styles from './navebar.module.css'
import Logo from '@/components/logo/logo.module'
import Input from '@/components/form/input/input'
import CartButton from '@/components/form/cartButton/cartButton'

export default function Navebar() {
    return (
        <nav className={styles.navebar}>
            <Logo />
            <div className={styles.search}>
                <Input type='text' placeholder={'Buscar'} fullWidth />
            </div>

            <CartButton />
        </nav>
    )
}