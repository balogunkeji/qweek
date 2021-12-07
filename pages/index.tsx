import type { NextPage } from 'next'
import LayoutComponent from '../Component/Layout'
import Link from 'next/link'

interface className{
  className?: string
}

const Home: NextPage = () => {
  return (
    <LayoutComponent>
      <Link href="/about">About</Link>
    </LayoutComponent>
  )
}

export default Home
