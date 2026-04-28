'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { useModal } from '@/context/ModalContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="/" aria-label="Timon home">
          <Image src="/images/logo.svg" alt="Timon" width={113} height={24} priority />
        </a>
        <button onClick={openModal} className={styles.cta}>Join Timon now</button>
      </div>
    </nav>
  );
}
