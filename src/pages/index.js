import Head from 'next/head'
import Navebar from '@/components/navebar/navebar'
import Subtitle from '@/components/tipographi/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCards from '@/components/cards/saleCards/saleCards'
import styles from '@/styles/index.module.css'
import GameCard from '@/components/cards/gamecard/gameCard'
import { useRecoilState } from 'recoil'
import { cartState } from '@/atoms/cart'

export default function Home() {
  const [cart, setCart] = useRecoilState(cartState)

  const handleAddProduct = (info) => {
    const discountPrice = info.price * (info.discount / 100)
    const fullPrice = Number((info.price - discountPrice).toFixed(2))

    setCart([...cart, { ...info, fullPrice }])
  }
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        < Navebar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</ Subtitle>
            <div className={styles.saleConteiner} >
              <SaleCards
                image={'league-of-legends.jpg'}
                discount={20}
                fullprice={99.99}
                onAdd={() => handleAddProduct({
                  name: 'league of legends',
                  price: 99.99,
                  image: 'league-of-legends.jpg',
                  discount: 20
                })}
              />

              <SaleCards
                image={'dota-2.jpg'}
                discount={80}
                fullprice={106.21}
                onAdd={() => handleAddProduct({
                  name: 'dota 2',
                  price: 106.21,
                  image: 'dota-2.jpg',
                  discount: 80
                })}
              />

              <SaleCards
                image={'valorant.jpg'}
                discount={10}
                fullprice={73.62}
                onAdd={() => handleAddProduct({
                  name: 'Valorant',
                  price: 73.62,
                  image: 'valorant.jpg',
                  discount: 10
                })}
              />
            </div>
          </div>

          <div className={styles.session}>
            <Subtitle>Outros jogos</ Subtitle>
            <div className={styles.gameConteiner}>
              <GameCard onAdd={() => handleAddProduct({
                name: 'counter-strike',
                price: 99.99,
                image: 'counter-strike.jpg',
                discount: 0
              })} />

            </div>
          </div>
        </Container>

      </div>
    </>
  )
}
