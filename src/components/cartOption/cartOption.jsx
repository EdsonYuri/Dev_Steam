import Image from 'next/image'
import styles from './cartOption.module.css'

export default function CartOption({image, title, price, onRemove}){
    return(
        <div className={styles.option}>
            <Image src={`/products/${image}`} alt={`produto${image}`} width={62} height={74} className={styles.image}/>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <h3 className={styles.price}>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
                <p className={styles.remove} onClick={onRemove}>Remover</p>
            </div>
        </div>
    )
}