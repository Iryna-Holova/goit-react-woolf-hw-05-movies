import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerBtn from 'components/NavMenu/BurgerBtn';
import Logo from 'components/Shared/Logo';

const PAGES = [
  { page: 'Home', path: '/' },
  { page: 'Movies', path: '/movies' },
];

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <header
      className={
        'absolute w-full z-20 transition-[height,background-color] ease-in-out duration-500 sm:h-16 sm:bg-gray-950/50 ' +
        (isOpen ? 'h-screen bg-gray-950' : 'h-16 bg-gray-950/50')
      }
    >
      <nav className="container relative h-full flex items-start justify-between flex-wrap sm:gap-10">
        <Logo />
        <BurgerBtn isOpen={isOpen} onClick={handleMenuToggle} />
        <div
          id="navbar-sticky"
          className={
            'text-xl w-full flex-grow flex items-center justify-center flex-col gap-6 sm:flex sm:flex-row sm:w-auto sm:justify-start sm:animate-none ' +
            (isOpen
              ? 'animate-[back-in-down_300ms_ease-in-out]'
              : 'hidden animate-[back-out-up_300ms_ease-in-out]')
          }
        >
          {PAGES.map(({ page, path }, idx) => (
            <NavLink
              key={idx}
              to={path}
              className="flex items-center h-16 font-medium transition-colors hover:text-rose-500 aria-[current=page]:text-rose-500"
            >
              {page}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
