import { IoClose } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router';
import { useRedux } from '../hooks/useRedux';
import { authLogout } from '../redux/slice/auth';

function ConfirmLogout({ modal }) {
  const { dispatch } = useRedux();
  const navigate = useNavigate();
  return (
    <main className="inset-0 z-60 fixed h-screen w-full bg-black/10 px-36 flex items-center justify-center">
      <div className="flex w-full max-w-md bg-light mx-auto p-12 flex-col border border-border-header rounded-xl">
        <div className="flex justify-between items-center">
          <span className="f-16 py-32 text-dark font-bold">
            Confirm Log Out ?
          </span>
          <div
            className="hover:text-font-error cursor-pointer"
            onClick={() => {
              navigate('/auth/signin');
            }}
          >
            <IoClose className="" />
          </div>
        </div>
        <div className="bg-primary8 p-24 flex w-fit round-8 mx-auto my-32 text-primary">
          <LuLogOut />
        </div>
        <div className="flex gap-8 items-center justify-between mb-12">
          <span
            onClick={() => {
              modal.setConfirmLogout(false);
              dispatch(authLogout());
            }}
            className="px-16 f-14 text-dark font-medium py-8 round-8 bg-border-header cursor-pointer"
          >
            Confirm
          </span>
          <span
            onClick={() => {
              modal.setConfirmLogout(false);
            }}
            className="px-16 f-14 text-light font-medium py-8 round-8 bg-primary cursor-pointer"
          >
            Keep Browsing
          </span>
        </div>
      </div>
    </main>
  );
}

export default ConfirmLogout;
