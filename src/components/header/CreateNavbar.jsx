import { NavLink } from 'react-router';
import { useRedux } from '../../hooks/useRedux.jsx';

function CreateNavbar({ props }) {
  const { listNavbar } = props;
  const {
    auth: {
      user: { dark_preference: isDark },
    },
  } = useRedux();

  return (
    <nav className={` ${isDark ? '' : ''}`}>
      <ul className={` ${isDark ? '' : 'hidden md:flex w-full'}`}>
        {listNavbar.map((n, i) => {
          if (n.isDekstop && n.isShow) {
            return (
              <NavLink
                key={i}
                to={n.link}
                className={({ isActive }) => ` ${
                  isDark
                    ? ''
                    : 'py-6 px-12 text-font-primary font-medium my-center round-8'
                }
                  ${isActive ? 'text-primary bg-primary6' : 'text-font-primary'}
                    hover:bg-primary6
              `}
              >
                <li className={` ${isDark ? '' : 'f-14'}`}>{n.navbar}</li>
              </NavLink>
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
}

export default CreateNavbar;
