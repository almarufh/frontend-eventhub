import { useContext, useEffect, useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FiEdit2, FiKey } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';
import { NavLink, Outlet, useNavigate } from 'react-router';
import imageContext from '../../context/image/imageContext';
import { useRedux } from '../../hooks/useRedux';
import ChangePassword from '../../modals/ChangePassword';
import ChangeProfiles from '../../modals/ChangeProfiles';
import { getUser } from '../../redux/slice/auth';
import { getMyCommunitiesJoined } from '../../redux/slice/communities';
import { getMyEventsJoined, getMyEventsSaved } from '../../redux/slice/events';

function MyProfile() {
  const {
    auth: {
      auth: { token },
      user,
      setUser: { isFulfilled },
    },
    events: {
      events: { joined: eventsJoined, saved },
      count: { joined: totalJoined, saved: totalSaved },
    },
    communities: { joined: communitiesJoined },
    dispatch,
  } = useRedux();

  const navigate = useNavigate();

  if (!token) {
    navigate('/');
  }

  useEffect(() => {
    dispatch(getMyEventsJoined());
    dispatch(getMyEventsSaved());
    dispatch(getMyCommunitiesJoined());
    if (isFulfilled) {
      dispatch(getUser());
    }
  }, [dispatch, isFulfilled]);

  const { previewPhoto, setPreviewPhoto } = useContext(imageContext);
  const [modal, setModal] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const tab = [
    {
      name: 'Events',
      link: `/profile/events`,
    },
    {
      name: 'Communities',
      link: `/profile/communities`,
    },
    {
      name: 'Saved',
      link: `/profile/saved`,
    },
  ];
  return (
    <main className="mt-12 px-16">
      {modal && (
        <ChangeProfiles
          modal={modal}
          setModal={setModal}
          previewPhoto={previewPhoto}
          setPreviewPhoto={setPreviewPhoto}
        />
      )}

      {modalPassword && (
        <ChangePassword
          value={modalPassword}
          set={setModalPassword}
        />
      )}

      <section className="z-60 flex-col flex max-w-7xl w-full mx-auto">
        <div className="flex gap-20">
          <div className="h-80 w-80 border border-border-header rounded-xl overflow-hidden flex items-center justify-center">
            {!previewPhoto ? (
              <span className="text-primary text-lg font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            ) : (
              <img
                className="object-cover w-full h-full"
                src={previewPhoto}
                alt="L"
              />
            )}
          </div>

          <div className="flex flex-col justify-between items-start w-full">
            <div className="flex flex-col md:flex-row justify-between items-start w-full">
              <div className="flex flex-col w-full justify-between">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-dark-primary">
                    {user?.name.toUpperCase() || ''}
                  </span>
                  <span className="f-14 text-font-forthy">{user.email}</span>
                </div>

                <div className="w-fit flex md:hidden gap-2 md:gap-4 mb-6">
                  <div
                    onClick={() => {
                      setModal(!modal);
                    }}
                    className="w-full flex gap-8 items-center f-14 text-font-fivethy py-6 px-12 border border-border-header round-8 mt-8 md:mt-0 cursor-pointer hover:text-secondary hover:border-secondary"
                  >
                    <FiEdit2 />
                    <span>Edit Profile</span>
                  </div>

                  <div
                    onClick={() => {
                      setModalPassword(!modalPassword);
                    }}
                    className="w-full flex whitespace-nowrap gap-8 items-center f-14 text-font-fivethy py-6 px-12 border border-border-header round-8 mt-8 md:mt-0 cursor-pointer hover:text-secondary hover:border-secondary"
                  >
                    <FiKey />
                    <span>Change Password</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 text-xs text-font-forthy md:items-center">
                  {user.address && (
                    <div className="flex items-center gap-2">
                      <LuMapPin />
                      <span>{user.address}</span>
                    </div>
                  )}

                  {user.created_at && (
                    <div className="flex gap-2 items-center">
                      <CiCalendar />
                      <span>{`Joined ${user.created_at}`}</span>
                    </div>
                  )}

                  {user.role && (
                    <span className="py-2 px-8 round-8 bg-primary8 text-primary w-fit">
                      {user.role}
                    </span>
                  )}
                </div>

                {user.description && (
                  <span className="text-font-primary f-14 max-w-2xl">
                    {user.description}
                  </span>
                )}
              </div>

              <div className="w-fit hidden md:flex flex-col gap-2 md:gap-4">
                <div
                  onClick={() => {
                    setModal(!modal);
                  }}
                  className="w-full flex gap-8 items-center f-14 text-font-fivethy py-6 px-12 border border-border-header round-8 mt-8 md:mt-0 cursor-pointer hover:text-secondary hover:border-secondary"
                >
                  <FiEdit2 />
                  <span>Edit Profile</span>
                </div>

                <div
                  onClick={() => {
                    setModalPassword(!modalPassword);
                  }}
                  className="w-full flex whitespace-nowrap gap-8 items-center f-14 text-font-fivethy py-6 px-12 border border-border-header round-8 mt-8 md:mt-0 cursor-pointer hover:text-secondary hover:border-secondary"
                >
                  <FiKey />
                  <span>Change Password</span>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-16 justify-between mt-18">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-zinc-900">
                  {totalJoined}
                </span>
                <span className="text-xs text-zinc-500">Events</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-zinc-900">
                  {communitiesJoined?.length ?? 0}
                </span>
                <span className="text-xs text-zinc-500">Communities</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-zinc-900">
                  {totalSaved}
                </span>
                <span className="text-xs text-zinc-500">Saved</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16">
          {tab.map((e, id) => (
            <NavLink
              key={id}
              to={e.link}
              className={({ isActive }) =>
                `${isActive ? 'text-primary border-b border-primary' : 'text-font-forthy'} py-10 px-16 f-14 font-medium`
              }
            >
              {e.name}
            </NavLink>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-7xl">
        <Outlet />
      </section>
    </main>
  );
}

export default MyProfile;
