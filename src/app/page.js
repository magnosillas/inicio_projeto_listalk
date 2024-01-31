"use client"
import Image from 'next/image'
import { useState } from 'react'
import Login from '@/components/Login';
import Home from '@/components/Home';
import Header from '@/components/Header';
import Footer from '@/components/Home/Footer';
import Link from 'next/link';

export default function PageHome() {
  const [visible, setVisible] = useState(false);
  return (
    <main >
      <Header/>
      <Home />
      <Footer/>
    </main>
  )
}
