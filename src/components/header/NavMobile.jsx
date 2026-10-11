import { useContext } from 'react';
import { FiShield } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { LuLogOut } from 'react-icons/lu';
import { RxDashboard } from 'react-icons/rx';
import { NavLink, useNavigate } from 'react-router';
import imageContext from '../../context/image/imageContext';
import { useRedux } from '../../hooks/useRedux';

function NavMobile({ props, modal }) {
  const {
    auth: {
      auth: { isActive },
      user: { role, name, dark_preference: isDark, email },
    },
  } = useRedux();
  const { listNavbar, setShowNav, showNav } = props;
  const { previewPhoto } = useContext(imageContext);

  const navigate = useNavigate();

  return (
    <div
      className={` ${isDark ? '' : 'flex flex-col'}
    `}
    >
      {isActive ? (
        <div
          className={` ${isDark ? '' : 'flex gap-12 py-12 px-16 items-center'}
        `}
        >
          <div
            className={` ${
              isDark
                ? ''
                : 'border border-border-header w-36 h-36 rounded-full items-center justify-center flex overflow-hidden'
            }
            `}
          >
            {!previewPhoto ? (
              <span
                className={`${isDark ? '' : 'text-primary text-lg font-bold'}`}
              >
                {name.charAt(0).toUpperCase()}
              </span>
            ) : (
              <img
                className="object-cover w-full h-full"
                src={previewPhoto}
                alt="L"
              />
            )}
          </div>

          <div
            className={`${isDark ? '' : 'flex flex-col'}
            `}
          >
            <span
              className={`${isDark ? '' : 'f-14 font-bold text-dark-primary'}
                `}
            >
              {name.toUpperCase()}
            </span>
            <span
              className={`${isDark ? '' : 'text-xs text-font-secondary'}
                `}
            >
              {email}
            </span>
          </div>
        </div>
      ) : (
        <span
          className={` ${
            isDark ? '' : 'text-font-secondary text-xs pl-16 pr-30 pt-10'
          }
        `}
        >
          Browsing as guest
        </span>
      )}

      <ul
        className={` ${isDark ? '' : 'flex flex-col'}
        `}
      >
        {listNavbar.map((m, i) => {
          if (m.isShow) {
            const IconComponent = m.icon;
            return (
              <NavLink
                key={i}
                to={m.link}
                onClick={() => {
                  setShowNav((prevShowNav) => {
                    const newValue = !prevShowNav;
                    return newValue;
                  });
                }}
                className={({ isActive }) => ` ${isDark ? '' : 'w-full'}
                            ${m.navbar === 'My Profile' ? 'md:flex' : 'md:hidden'}
                            ${isActive ? 'bg-primary6 text-primary' : 'text-font-fivethy'}
                        `}
              >
                <li
                  className={` ${
                    isDark
                      ? ''
                      : 'flex gap-12 f-14 pt-14 px-16 pb-10 items-center'
                  }
                            `}
                >
                  <IconComponent />
                  <span>{m.navbar}</span>
                </li>
              </NavLink>
            );
          }
        })}

        {role === 'organizer' && (
          <NavLink
            to={`/dashboard/organizer`}
            className={({ isActive }) => `${isDark ? '' : 'md:hidden w-full'}
                    ${isActive ? 'bg-primary6 text-primary' : 'text-font-fivethy'}
                `}
          >
            <li
              className={` ${
                isDark ? '' : 'flex gap-12 f-14 pt-14 px-16 pb-10 items-center'
              }
                    `}
            >
              <RxDashboard />
              <span>Dashboard</span>
            </li>
          </NavLink>
        )}

        {role === 'admin' && (
          <NavLink
            to={`/dashboard/admin`}
            className={({ isActive }) => `${isDark ? '' : 'md:hidden w-full'}
                    ${isActive ? 'bg-primary6 text-primary' : 'text-font-fivethy'}
                `}
          >
            <li
              className={` ${
                isDark ? '' : 'flex gap-12 f-14 pt-14 px-16 pb-10 items-center'
              }
                    `}
            >
              <FiShield />
              <span>Admin</span>
            </li>
          </NavLink>
        )}

        <li
          className={`${isActive ? 'text-font-error' : 'text-primary'} flex gap-12 px-16 py-10 items-center f-14 font-bold bg-primary6 cursor-pointer`}
        >
          {isActive ? <LuLogOut /> : <GoPerson />}
          {isActive ? (
            <span
              onClick={(e) => {
                e.stopPropagation();
                setShowNav(!showNav);
                modal.setConfirmLogout(true);
              }}
            >
              Sign Out
            </span>
          ) : (
            <span
              onClick={(e) => {
                e.stopPropagation();
                setShowNav(!showNav);
                navigate('/auth/signin');
              }}
            >
              Sign In
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavMobile;
