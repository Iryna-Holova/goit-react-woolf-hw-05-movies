const BurgerBtn = ({ isOpen, onClick }) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <button
      className="sm:hidden absolute right-2 p-2 group"
      onClick={onClick}
      aria-controls="navbar-sticky"
      aria-expanded="false"
      type="button"
    >
      <span className="sr-only">Open main menu</span>
      <div
        className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center"
        aria-hidden="true"
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
      </div>
    </button>
  );
};

export default BurgerBtn;
