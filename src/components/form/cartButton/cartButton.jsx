import { useState } from 'react'
import styles from './cartButton.module.css'
import { BsCart4 } from 'react-icons/bs'
import CartMenu from '@/components/cartMenu/cartMenu'
import { cartState } from '@/atoms/cart'
import { useRecoilValue } from 'recoil'

export default function CartButton() {

    const [open, setOpen] = useState(false)
    const cartValue = useRecoilValue(cartState)

    const openMenu = () => setOpen(!open)

    return (
        <div className={styles.cartButton}>
            <BsCart4
                size={40}
                onClick={openMenu}
            />
            <div className={styles.quantity} onClick={openMenu}>{`${cartValue.length}`}</div>
            {open && <CartMenu />}
        </div>
    )
} 