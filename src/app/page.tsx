import Image from 'next/image'
import styles from './page.module.css'
import Carousel from '@/ui/components/molecules/carousel/Carousel'

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
    </main>
  )
}
