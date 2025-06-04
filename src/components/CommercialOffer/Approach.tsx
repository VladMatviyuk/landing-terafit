import { Title } from '../Title/Title.tsx';
import { Section } from '../Section/Section.tsx';
import type { FC, ReactNode } from 'react';

type ApproachCardProps = {readonly children: ReactNode}
const ApproachCard: FC<ApproachCardProps> = ({children}) => {
  return (
    <div style={{padding: '1rem', border: '1px solid gray', borderRadius: '16px'}}>
      {children}
    </div>
  )
}


export function Approach() {

  const approaches = [
    'Корпоративные цвета и брендирование',
    'Специфические нагрузки и конструктивные особенности',
    'Оптимальные решения для малых и больших пространств',
  ]
  return (
    <Section>
      <Title title={'Индивидуальный подход'} />
      Мы готовы разработать уникальное оборудование под ваш проект:
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        {
          approaches.map(approach => (<ApproachCard>{approach}</ApproachCard>))
        }
      </div>
    </Section>
  )
}