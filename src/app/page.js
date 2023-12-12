"use client"
import Image from 'next/image'
import { useState } from 'react'
import Login from '@/components/Login';
import Home from '@/components/Home';
import Link from 'next/link';

export default function PageHome() {
  const [visible, setVisible] = useState(false);
  return (
    <main >
      <Home setVisible={setVisible}></Home>
      { visible && <Login />}

      <Link href={"/categoria"} >Categorias</Link>

    </main>
  )
}
