import {useEffect } from "react";
import {useDispatch } from "react-redux";
import { logout } from "../reducers/AuthSlice";
import { getUserLogout } from "../reducers/UserSlice";


const useLogout = () => {

  const dispatch = useDispatch();


  useEffect(() => {
      localStorage.removeItem("user");
      dispatch(logout());
      dispatch(getUserLogout());
  }, [dispatch, logout, getUserLogout]);
};

export default useLogout;