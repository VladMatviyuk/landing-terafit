import logo from '/logo.svg';

export function Header() {
  return (
    <header>
      <img
        src={ logo }
        alt="logo"
        className="logo"
        loading="lazy"
      />
      <h1>
        Производство и разработка спортивного оборудования
      </h1>
    </header>
  )
}