import Image from 'next/image';
import styles from './page.module.css';
import Header from './component/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <div>Hello Introduction to next js</div>
    </main>
  );
}
