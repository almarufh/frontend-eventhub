import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router';
import Logo from '../../components/header/Logo';
import { useRedux } from '../../hooks/useRedux.jsx';
import { changePasword, checkEmail } from '../../redux/slice/users.js';

function ForgotPasword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onblur' });
  const navigate = useNavigate();
  const { state, dispatch } = useRedux();

  const [disable, setDisable] = useState({
    isActive: false,
    value: null,
  });

  const [show, setShow] = useState({
    password: {
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

  const passwordShow = () => {
    setShow((prevState) => ({
      ...prevState,
      password: {
        value: !prevState.password.value,
        type: prevState.password.value ? 'password' : 'text',
      },
    }));
  };

  async function confirmEmail(e) {
    if (!disable.isActive) {
      console.log(e);
      setDisable({
        isActive: true,
        value: e.email,
      });
    } else {
      let payload = {
        email: disable.value,
        password: e.password,
      };
      console.log(payload);

      try {
        await dispatch(changePasword(payload)).unwrap();
        navigate('/auth/success');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-8/10 md:w-6/10">
        <div className="flex md:hidden">
          <Logo />
        </div>

        <div className="pt-32 w-full">
          <span className="text-2xl font-bold text-dark-primary">
            Reset your password
          </span>
          <div className="pt-4">
            <span className="f-14 text-font-forthy">
              Enter your email and we'll send a link.{' '}
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(confirmEmail)}
          className="pt-20"
        >
          <div className="flex flex-col gap-6">
            <label
              className="f-14 text-font-fivethy"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="bg-light rounded-lg border border-border-header py-10 px-12 f-14 text-font-secondary outline-none"
              type="email"
              {...register('email', {
                disabled: disable.isActive,
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Format email tidak valid',
                },
                validate: async (value) => {
                  try {
                    dispatch(checkEmail(value));
                    const { isError, message } = state.getState().users;
                    if (isError) {
                      return message;
                    }
                    return true;
                  } catch (error) {
                    console.log(error);
                  }
                },
              })}
              id="email"
              placeholder="alex@example.com"
            />
            <span
              className={`${errors?.email ? 'opacity-100' : 'opacity-0'} text-font-error text-xs`}
            >
              {errors.email?.message || 'error'}
            </span>
          </div>

          {disable.isActive && (
            <>
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
                      validate: (value, formValues) =>
                        value === formValues.password ||
                        'Password do not match',
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
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary py-12 w-full my-center rounded-lg f-14 text-light font-semibold cursor-pointer"
          >
            {isSubmitting
              ? 'Checking...'
              : disable.isActive
                ? 'Kamu Reset Password'
                : 'Check Email'}
          </button>

          <Link
            to="/auth/signin"
            className="f-14 text-primary border py-2 px-8 flex w-fit mx-auto mt-24 rounded-md"
          >
            Back to sign in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasword;
