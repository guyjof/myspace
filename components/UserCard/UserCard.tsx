import Link from 'next/link';
import Image from 'next/image';
import styles from './UserCard.module.css';
import { Props } from './UserCard.interface';

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={image ?? '/mememan.webp'}
        width={50}
        height={50}
        alt={`${name}'s profile`}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
