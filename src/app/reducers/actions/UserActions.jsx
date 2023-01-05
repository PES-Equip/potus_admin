import APIService from "../../services/APIService";
import { getUserPending, getUserSuccess, getUserFail } from "../UserSlice";

export const getUserProfile = () => async (dispatch) => {
    try {
      dispatch(getUserPending());
  
      APIService("/user/profile",'GET').then((response) => {

        console.log(response)
        if(response.user && response.user.admin){
            dispatch(getUserSuccess(response.user))
        }

        else{
            localStorage.removeItem("token");
            dispatch(getUserFail("User is not admin"));
        }
    });
    } catch (error) {
      dispatch(getUserFail(error));
    }
  };
