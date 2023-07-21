import styles from './cartMenu.module.css'
import CartOption from '../cartOption/cartOption'
import { useRecoilState } from 'recoil'
import { cartState } from '@/atoms/cart'

export default function CartMenu() {
    const [cart, setCart] = useRecoilState(cartState)
    const handleRemoveProduct = (pos) => {
        setCart(cart.filter((obg, posObg) => posObg !== pos))
    }

    const calculatesPrices = () => {
        let sun = cart.reduce((prev, current) => prev + current.fullPrice, 0)
        return sun.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
    return (
        <div className={styles.menu}>
            <div className={styles.options}>
                {
                    cart.lenght === 0 && <p>nenhum produto no seu carrinho</p>
                }
                {
                    cart.map((cartInfo, pos) =>
                        <CartOption
                            image={cartInfo.image}
                            title={cartInfo.name}
                            price={cartInfo.fullPrice}
                            onRemove={() => handleRemoveProduct(pos)}
                            key={`cart-info-${pos}`}
                        />
                    )
                }
            </div>

            <div className={styles.priceLine}>
                <h2>Total</h2>
                <h2 className={styles.price}>{calculatesPrices()}</h2>
            </div>
        </div>
    )
}