import Image from 'next/image'
import styles from './gameCard.module.css'
import Button from '@/components/form/button/button'

export default function GameCard({ onAdd }) {
    return (
        <div className={styles.gameCard}>
            <Image src='/products/counter-strike.jpg' width={300} height={145}
                className={styles.image}
            />
            <div className={styles.info}>
                <h3 className={styles.title}>Counter-Strike: Global Offensive</h3>
                <p className={styles.category}>Ação, estratégia, multijogador.</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>R$99,99</h2>
                    <Button onClick={onAdd}>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}