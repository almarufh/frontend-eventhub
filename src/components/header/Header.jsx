import { useState } from 'react';
import { GoPerson } from 'react-icons/go';
import { LuCalendar } from 'react-icons/lu';
import { MdOutlineExplore } from 'react-icons/md';
import { RxPeople } from 'react-icons/rx';
import { TbHome } from 'react-icons/tb';
import { useRedux } from '../../hooks/useRedux.jsx';
import ConfirmLogout from '../../modals/ConfirmLogout.jsx';
import CreateNavbar from './CreateNavbar.jsx';
import CreateProfile from './CreateProfile.jsx';
import Logo from './Logo.jsx';
import NavMobile from './NavMobile.jsx';

function Header() {
  const [confirmLogout, setConfirmLogout] = useState(false);

  // New Redux
  const {
    auth: {
      auth: { isActive },
      user: { dark_preference: isDark },
    },
  } = useRedux();

  const [showNav, setShowNav] = useState(false);

  // Navbar
  const listNavbar = [
    {
      navbar: 'Explore',
      link: '/',
      isDekstop: true,
      isShow: true,
      icon: TbHome,
    },
    {
      navbar: 'Events',
      link: '/events',
      isDekstop: true,
      isShow: true,
      icon: MdOutlineExplore,
    },
    {
      navbar: 'Communities',
      link: `/communities`,
      isDekstop: true,
      isMobile: true,
      isShow: true,
      icon: RxPeople,
    },
    {
      navbar: 'My Events',
      link: `/myevents`,
      isDekstop: true,
      isShow: isActive,
      icon: LuCalendar,
    },
    {
      navbar: 'My Profile',
      link: `/profile`,
      isDekstop: false,
      isShow: isActive,
      icon: GoPerson,
    },
  ];

  const props = {
    showNav,
    setShowNav,
    listNavbar,
  };

  return (
    <header
      className={` ${
        isDark
          ? ''
          : 'sticky top-0 left-0 z-50 px-24 gap-8 w-full py-6 md:py-16 flex items-center border-b border-border-header justify-between bg-light text-light'
      }
      `}
    >
      <div
        className={` ${isDark ? '' : 'flex'}
      `}
      >
        <Logo />
        <CreateNavbar props={props} />
      </div>

      {showNav && (
        <div
          className={` ${
            isDark
              ? ''
              : 'flex flex-col py-8 bg-light border border-border-header rounded-xl'
          } absolute top-40 md:top-55 right-10 md:right-0 w-fit z-40 bg-black
      `}
        >
          <NavMobile
            props={props}
            modal={{ setConfirmLogout }}
          />
        </div>
      )}
      <CreateProfile props={props} />
      <section className="fixed">
        {confirmLogout && <ConfirmLogout modal={{ setConfirmLogout }} />}
      </section>
    </header>
  );
}

export default Header;
