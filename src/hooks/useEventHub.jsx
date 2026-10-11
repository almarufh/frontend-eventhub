import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  login,
  logout,
  tglDark,
  checkEmail,
  fetchData,
  getAllData,
  filterEvents
} from "../redux/slice/user.js";

export function useEventHub() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.eventHub.user);
  const actived = useSelector((state) => state.eventHub.actived);
  const userExist = useSelector((state) => state.eventHub.userExist);
  const isDark = useSelector((state) => state.eventHub.isDark);
  const data = useSelector((state) => state.eventHub.data);
  const filtered = useSelector((state) => state.eventHub.filtered);

  const handleRegister = (userData) => {
    dispatch(registerUser(userData));
  };

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleToggleDark = () => {
    dispatch(tglDark());
  };

  const handleCheckEmail = (identifier) => {
    dispatch(checkEmail(identifier));
  };
  
  const handleFilterEvents = (identifier) => {
    dispatch(filterEvents(identifier));
  };

  return {
    user,
    actived,
    userExist,
    isDark,
    data,
    filtered,

    fetchData,
    getAllData,

    handleRegister,
    handleLogin,
    handleLogout,
    handleToggleDark,
    handleCheckEmail,
    handleFilterEvents,
    dispatch,
  };
}