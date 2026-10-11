import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Header from '../components/header/Header.jsx';
import { getUser } from '../redux/slice/auth.js';

function MainLayout() {
  const token = useSelector((state) => state.auth.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [token, dispatch]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
