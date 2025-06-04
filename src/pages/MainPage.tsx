import logo from '/logo.svg'
import { useEffect, useState } from 'react';

export function MainPage() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="app">
      <div className={ `logo-container ${ isVisible ? 'slide-down' : '' }` }>
        <img
          src={ logo }
          alt="logo"
          className="logo"
          loading="lazy"
        />
      </div>

      <main className="content">
        <div className={ `description ${ isVisible ? 'slide-up' : '' }` }>
          <h1>Терафит - производство спортивных тренажеров</h1>
          <p>
            Производитель профессиональных тренажеров и комплектующих для фитнес-клубов,
            реабилитационных центров и домашнего использования
          </p>
        </div>

        <div className={ `download-section ${ isVisible ? 'fade-in' : '' }` }>
          <a
            href="/terafit_catalog.pdf"
            className="download-link"
            target="_blank"
          >
            Каталог товаров
          </a>
        </div>
      </main>

      <footer className={ `footer ${ isVisible ? 'slide-up-footer' : '' }` }>
        <div className="contact-info">
          <div className="contact-item">
            <a href="tel:+79199168685">+7 (919) 916-86-85</a>
          </div>
          <div className="contact-item">
            <a href="mailto:terafit.sport@yandex.ru?subject=Вопрос о продукции Терафит">terafit.sport@yandex.ru</a>
          </div>
        </div>
      </footer>
    </section>

  )
}