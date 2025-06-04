import styles from './style.module.css';
import type { FC, ReactNode } from 'react';

interface Props {
  readonly children:ReactNode;
}

export const Section: FC<Props> = ({children}) => {
  return (
    <section className={styles.section}>
      {children}
    </section>
  )
}