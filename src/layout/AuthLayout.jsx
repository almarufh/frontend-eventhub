import { Navigate, Outlet } from 'react-router';
import Logo from '../components/header/Logo.jsx';
import { useRedux } from '../hooks/useRedux.jsx';

function AuthLayout() {
  const {
    auth: {
      auth: { isActive },
    },
  } = useRedux();

  if (isActive) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return (
    <main className="flex md:grid md:grid-cols-[35%_65%] w-full h-screen">
      <div className="bg-radial from-orange-900 from-5% to-black hidden md:flex flex-col items-center justify-center w-full gap-16  p-[20%_10%] ">
        <div className="w-full">
          <Logo target={'auth'} />
        </div>
        <div className="flex grow items-center">
          <div className="flex flex-col gap-5">
            <span className="f-30 font-bold text-light">
              Discover events
              <br />
              that shape careers.
            </span>
            <span className="f-14 text-font-secondary">
              Workshops, conferences, and community meetups from Indonesia's
              most active tech communities — all in one place.
            </span>
            <div className="flex flex-col gap-12 mt-28">
              <div className="p-16 border border-wh-8 rounded-xl bg-wh-5">
                <span className="text-xs text-font-thirty">
                  "Found my last three workshops here. The community is
                  fantastic."
                </span>
                <div className="flex items-center gap-10 mt-12">
                  <div className="w-28 h-28 rounded-full overflow-hidden">
                    <img
                      src="/Dina Rahayu.svg"
                      alt="Diana"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-light">Dina Rahayu</span>
                    <span className="text-font-forthy f-11">
                      Backend Lead, Cakrawala Digital
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-16 border border-wh-8 rounded-xl bg-wh-5">
                <span className="text-xs text-font-thirty">
                  "Found my last three workshops here. The community is
                  fantastic."
                </span>
                <div className="flex items-center gap-10 mt-12">
                  <div className="w-28 h-28 rounded-full overflow-hidden">
                    <img
                      src="/Dina Rahayu.svg"
                      alt="Diana"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-light">Dina Rahayu</span>
                    <span className="text-font-forthy f-11">
                      Backend Lead, Cakrawala Digital
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-24 pt-32">
                <div className="flex flex-col items-center">
                  <span className="text-light font-bold text-20">12k+</span>
                  <span className="text-font-forthy text-xs">Members</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-light font-bold text-20">200+</span>
                  <span className="text-font-forthy text-xs">Events/year</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-light font-bold text-20">50+</span>
                  <span className="text-font-forthy text-xs">Communities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="text-xs text-font-primary flex w-full justify-start">
          © 2026 EventHub · Indonesia
        </span>
      </div>
      <Outlet />
    </main>
  );
}

export default AuthLayout;
