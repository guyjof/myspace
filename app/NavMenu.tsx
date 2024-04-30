import Image from 'next/image';
import Link from 'next/link';
import styles from './NavMenu.module.css';
import { SignInButton, SignOutButton } from '../components/auth-buttons';
import AuthCheck from '../components/AuthCheck';

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
        src='/logo.svg'
        width={216}
        height={30}
        priority={true}
        alt='nextSpace logo'
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
        <li>
          <SignInButton />
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  )
};
