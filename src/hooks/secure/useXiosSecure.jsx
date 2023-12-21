import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import useAuth from "../Auth/UseAuth";

const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
    withCredentials: true,
  });
};

const useXiosSecure = (baseURL) => {
  const goTo = useNavigate();
  const { logOut } = useAuth();

  const axiosSecure = createAxiosInstance(baseURL);

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        const status = error.response.status;

        if (status === 401 || status === 403) {
          goTo("/login");
          await logOut();
        }

        return Promise.reject(error);
      }
    );

    return () => {
      // Remove the interceptor when the component unmounts
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [axiosSecure, goTo, logOut]);

  return axiosSecure;
};

export default useXiosSecure;
