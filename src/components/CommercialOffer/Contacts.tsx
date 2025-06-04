import { Title } from '../Title/Title.tsx';
import { Section } from '../Section/Section.tsx';

export function Contacts () {
  return (
    <Section>
      <Title title={'Давайте обсудим ваш проект!'}/>
      📞 Телефон: [Ваш телефон]
      📧 Email: [Ваш email]
      🌐 Сайт: [Ссылка на сайт]
    </Section>
  )
}