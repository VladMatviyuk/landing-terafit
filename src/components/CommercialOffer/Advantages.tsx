import { Title } from '../Title/Title.tsx';
import { Section } from '../Section/Section.tsx';
import { Card } from '../Card/Card.tsx';
import { CardWrapper } from '../CardWrapper/CardWrapper.tsx';
import type { FC } from 'react';

type Advantage = {title: string, description: string};
type AdvantageCardProps = {advantage: Advantage};

export function Advantages() {

  const advantages: Advantage[] = [
    {title: 'Опыт', description: '20 лет опыта – гарантия надежности и профессионализма'},
    {title: 'Ассортимент', description: 'Широкий ассортимент – готовые модели и разработка под заказ'},
    {title: 'Процессы', description: 'Собственное производство – контроль качества на всех этапах'},
    {title: 'Индивидуальность', description: 'Гибкие условия – индивидуальный подход к каждому клиенту',},
    {title: 'География', description: 'Глобальная география поставок – опыт работы с международными партнерами'},
  ];

  const AdvantageCard: FC<AdvantageCardProps> = ({advantage}) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'start'}}>
        <div style={{marginBottom: '2rem', fontSize: '1.5rem'}}>
          {advantage.title}
        </div>
        <div style={{fontSize: '1.25rem'}}>
          {advantage.description}
        </div>
      </div>
    )
  };

  return (
    <Section>
      <Title title={'Наши преимущества'} />
      <CardWrapper>
        {advantages.map((a: Advantage) => {
          return (
            <Card>
              <AdvantageCard advantage={a}  />
            </Card>
            )}
        )}
      </CardWrapper>
    </Section>
  );
};