import styles from './style.module.css';

import type { FC, ReactNode } from 'react';

interface Props {
  readonly children: ReactNode;
}

export const Card: FC<Props> = ({children}) => {
  return (
    <div className={styles.card}>{children}</div>
  )
}