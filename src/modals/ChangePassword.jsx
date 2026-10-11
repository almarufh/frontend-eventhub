import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { useRedux } from '../hooks/useRedux';
import { changePassword, getUser, resetPassword } from '../redux/slice/auth';

function ChangePassword({ value, set }) {
  const dispatch = useDispatch();
  const {
    auth: {
      password: { message, isRejected, isFulfilled },
    },
  } = useRedux();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const [show, setShow] = useState({
    password: {
      value: false,
      type: 'password',
    },
    new: {
      value: false,
      type: 'password',
    },
    confirm: {
      value: false,
      type: 'password',
    },
  });

  const confirmShow = () => {
    setShow((prevState) => ({
      ...prevState,
      confirm: {
        value: !prevState.confirm.value,
        type: prevState.confirm.value ? 'password' : 'text',
      },
    }));
  };

  const newShow = () => {
    setShow((prevState) => ({
      ...prevState,
      new: {
        value: !prevState.new.value,
        type: prevState.new.value ? 'password' : 'text',
      },
    }));
  };

  const passwordShow = () => {
    setShow((prevState) => ({
      ...prevState,
      password: {
        value: !prevState.password.value,
        type: prevState.password.value ? 'password' : 'text',
      },
    }));
  };

  function setPasword(e) {
    const payload = {
      new_password: e.new,
      old_password: e.password,
    };
    dispatch(changePassword(payload));
  }

  useEffect(() => {
    if (isFulfilled) {
      set(!isFulfilled);
      dispatch(resetPassword());
    }
  }, [isFulfilled, set, dispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <section className="fixed w-full h-screen bg-black/10 inset-0 z-50 flex items-center justify-center">
      <div className="bg-light text-dark-primary max-w-md min-w-sm rounded-2xl border-border-header relative">
        <IoClose
          onClick={(e) => {
            e.preventDefault();
            set(!value);
          }}
          className="absolute right-10 top-10 hover:border hover:rounded-full hover:text-font-error cursor-pointer"
        />
        <span className="border-b border-border-header f-16 font-semibold text-dark-primary flex w-full p-12 mb-8">
          Change Password
        </span>

        <form
          className="px-24"
          onSubmit={handleSubmit(setPasword)}
        >
          {/* Input Password Lama */}
          <div className="flex flex-col gap-6">
            <label
              className="f-14 text-font-fivethy"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex border rounded-lg px-12 border-border-header items-center justify-between">
              <input
                className="bg-light py-10 f-14 text-font-secondary w-full outline-none"
                type={show.password.type}
                {...register('password', {
                  required: 'Password lama wajib diisi',
                  minLength: {
                    value: 8,
                    message: 'Password minimal 8 karakter',
                  },
                })}
                id="password"
                placeholder="At least 8 characters"
              />
              <div
                onClick={passwordShow}
                className="cursor-pointer"
              >
                {show.password.value ? <LuEye /> : <LuEyeClosed />}
              </div>
            </div>
            <span
              className={`${errors?.password ? 'opacity-100' : 'opacity-0'} text-font-error text-xs`}
            >
              {errors.password?.message || 'error'}
            </span>
          </div>

          {/* Input Password Baru */}
          <div className="flex flex-col gap-6">
            <label
              className="f-14 text-font-fivethy"
              htmlFor="new"
            >
              New Password
            </label>
            <div className="flex border rounded-lg px-12 border-border-header items-center justify-between">
              <input
                className="bg-light py-10 f-14 text-font-secondary w-full outline-none"
                type={show.new.type}
                {...register('new', {
                  required: 'Password baru wajib diisi',
                  minLength: {
                    value: 8,
                    message: 'New Password minimal 8 karakter',
                  },
                })}
                id="new"
                placeholder="At least 8 characters"
              />
              <div
                onClick={newShow}
                className="cursor-pointer"
              >
                {show.new.value ? <LuEye /> : <LuEyeClosed />}
              </div>
            </div>
            <span
              className={`${errors?.new ? 'opacity-100' : 'opacity-0'} text-font-error text-xs`}
            >
              {errors.new?.message || 'error'}
            </span>
          </div>

          {/* Input Konfirmasi Password */}
          <div className="flex flex-col gap-6 pt-12">
            <label
              className="f-14 text-font-fivethy"
              htmlFor="confirm"
            >
              Confirm Password
            </label>
            <div className="flex border rounded-lg px-12 border-border-header items-center justify-between">
              <input
                className="bg-light py-10 f-14 text-font-secondary w-full outline-none"
                type={show.confirm.type}
                {...register('confirm', {
                  required: 'Konfirmasi password wajib diisi',
                  validate: (value, formValues) =>
                    value === formValues.new || 'Password do not match',
                })}
                id="confirm"
                placeholder="Re-enter your password"
              />
              <div
                onClick={confirmShow}
                className="cursor-pointer"
              >
                {show.confirm.value ? <LuEye /> : <LuEyeClosed />}
              </div>
            </div>
            <span
              className={`${errors?.confirm ? 'opacity-100' : 'opacity-0'} text-font-error text-xs`}
            >
              {errors.confirm?.message || 'error'}
            </span>
          </div>

          <div>
            {
              <span
                className={`${isRejected ? 'opacity-100' : 'opacity-0'} text-font-error text-xs flex items-center justify-center`}
              >
                {message || 'error'}
              </span>
            }
          </div>

          {/* Tombol Aksi (Cancel & Submit) */}
          <div className="flex gap-5 my-24 justify-end">
            <span
              onClick={(e) => {
                e.preventDefault();
                set(!value);
              }}
              className="text-dark-primary bg-border-header px-16 py-8 round-8 f-14 cursor-pointer"
            >
              Cancel
            </span>
            <button
              type="submit"
              className="text-light bg-primary px-16 py-8 round-8 f-14 cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ChangePassword;
