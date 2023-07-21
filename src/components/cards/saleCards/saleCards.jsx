import Image from 'next/image'
import styles from './saleCards.module.css'
import Button from '@/components/form/button/button'

export default function SaleCards({ image, discount, fullprice, onAdd }) {
    [discount, fullprice] = [Number(discount), Number(fullprice)]

    let discountPrice = fullprice * (discount/100)
    let discounted = (fullprice - discountPrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})


    return (
        <div className={styles.saleCards}>
            <Image src={`/products/${image}`} width={250} height={300} />

            <div className={styles.info}>
                <h3 className={styles.title}>Oferta exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>{`${discount}%`}</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>{`${fullprice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
                        <h4 className={styles.discountPrice}>{`${discounted}`}</h4>
                    </div>

                </div>

                <Button fullWidth={true} onClick={onAdd}>Adicionar ao carrinho</Button >
            </div> 

        </div >
    )
}