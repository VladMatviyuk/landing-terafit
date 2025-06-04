import styles from './style.module.css';
import type { FC } from 'react';

interface Props {
  readonly title: string;
}

export const Title: FC<Props> = ({title}) => {
  return (
    <h2 className={styles.title}>
      {title}
    </h2>
  )
}