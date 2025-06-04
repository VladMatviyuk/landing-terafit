import type { ReactNode } from 'react';

import { MainPage } from '../pages/MainPage.tsx';
import { CommercialOfferPage } from '../pages/CommercialOfferPage.tsx';

export type IRoute = {
  readonly path: string;
  readonly component: () => ReactNode;
}

export const routes: IRoute[] = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/commercial-offer',
    component: CommercialOfferPage,
  }
]

