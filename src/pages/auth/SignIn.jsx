import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router';
import Logo from '../../components/header/Logo.jsx';
import { useRedux } from '../../hooks/useRedux.jsx';
import { authLogin, resetLogin } from '../../redux/slice/auth.js';

function SignIn() {
  const example = {
    email: 'almarufhidayat99@gmail.com',
    password: 'Admin@1234',
  };
  // Redux Persist
  const {
    dispatch,
    auth: {
      auth: { token },
      login: { isRejected, message },
    },
  } = useRedux();

  // state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const [show, setShow] = useState({ value: false, type: 'password' });

  // navigate
  const navigate = useNavigate();

  const passwordShow = () => {
    setShow((prevState) => ({
      ...prevState,
      ...{
        value: !prevState.value,
        type: prevState.value ? 'password' : 'text',
      },
    }));
  };

  const deletMessage = () => {
    if (isRejected) {
      dispatch(resetLogin());
    }
  };

  function sign(e) {
    dispatch(authLogin(e));
  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-8/10 md:w-6/10">
        <div className="flex md:hidden">
          <Logo />
        </div>

        <div className="pt-32 w-full">
          <span className="text-2xl font-bold text-dark-primary">
            Welcome back
          </span>
          <div className="pt-4">
            <span className="f-14 text-font-forthy">
              Don't have an account?{' '}
            </span>
            <Link
              className="f-14 text-primary font-medium"
              to="/auth/signup"
            >
              Sign up
            </Link>
          </div>
        </div>

        <div className="flex pt-28 justify-between gap-12">
          <div className="my-center gap-8 f-14 text-font-fivethy px-16 py-10 border rounded-lg border-border-header w-full">
            <FaGoogle />
            <span>Google</span>
          </div>
          <div className="my-center gap-8 f-14 text-font-fivethy px-16 py-10 border rounded-lg border-border-header w-full">
            <FaGithub />
            <span>GitHub</span>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-12 pt-20">
          <div className="w-full border-t h-0 border-border-header"></div>
          <span className="text-xs text-font-secondary whitespace-nowrap">
            or continue with email
          </span>
          <div className="w-full border-t h-0 border-border-header"></div>
        </div>

        <form
          className="pt-20"
          onSubmit={handleSubmit(sign)}
        >
          <div className="flex flex-col gap-6">
            <label
              className="f-14 text-font-fivethy"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="bg-light border border-border-header py-10 px-12 f-14 text-font-secondary outline-none rounded-lg"
              type="email"
              onInput={() => {
                deletMessage;
              }}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Format email tidak valid',
                },
              })}
              id="email"
              placeholder="alex@example.com"
              defaultValue={example.email}
            />
            <span
              className={`${errors?.email ? 'opacity-100' : 'opacity-0'} text-font-error text-xs`}
            >
              {errors.email?.message || 'error'}
            </span>
          </div>

          <div className="flex flex-col gap-6 py-12">
            <div className="flex justify-between items-center">
              <label
                onInput={deletMessage}
                className="f-14 text-font-fivethy"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                className="text-xs text-primary"
                to="/auth/password"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex border border-border-header items-center justify-between rounded-lg overflow-hidden px-12">
              <input
                onInput={deletMessage}
                className="bg-light py-10 f-14 text-font-secondary w-full outline-none"
                type={show.type}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password minimal 8 karakter',
                  },
                })}
                id="password"
                placeholder="Enter your password"
                defaultValue={example.password}
              />
              <div
                onClick={passwordShow}
                className="cursor-pointer"
              >
                {show.value ? <LuEye /> : <LuEyeClosed />}
              </div>
            </div>
            <span
              className={`${errors?.password ? 'opacity-100' : 'opacity-0'} text-font-error text-xs`}
            >
              {errors.password?.message || 'error'}
            </span>
            <span
              className={`${isRejected ? 'opacity-100' : 'opacity-0'} text-font-error text-md flex justify-center mb-8`}
            >
              {message || 'error'}
            </span>
          </div>

          <button className="bg-primary py-12 w-full my-center rounded-lg f-14 text-light font-semibold cursor-pointer -mt-10">
            Sign in
          </button>
        </form>

        <div className="my-center gap-5 pt-16">
          <span className="text-xs text-font-secondary">Just browsing?</span>
          <Link
            className="text-xs text-font-secondary underline"
            to="/"
          >
            Continue as guest →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
