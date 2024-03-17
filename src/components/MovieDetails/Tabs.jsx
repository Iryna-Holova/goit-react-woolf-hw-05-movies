import { NavLink, useLocation } from 'react-router-dom';

const Tabs = ({ tabs, tabsRef }) => {
  const location = useLocation();
  return (
    <ul
      ref={tabsRef}
      className="container flex flex-wrap gap-x-12 text-white/50 text-lg font-bold"
    >
      {tabs.map((tab, index) => (
        <li key={index} className="">
          <NavLink
            to={tab}
            state={{ from: location.state?.from }}
            className="relative inline-block py-4 uppercase transition-colors hover:text-white aria-[current=page]:text-white after:h-1 after:scale-0 after:absolute after:inset-x-0 after:bottom-0 after:rounded after:bg-rose-600 after:transition-transform aria-[current=page]:after:scale-100"
          >
            {tab}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
