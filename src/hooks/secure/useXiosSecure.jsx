import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import useAuth from "../Auth/UseAuth";
const baseURL = import.meta.env.VITE_BASE_URL;
const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
    withCredentials: true,
  });
};

const useXiosSecure = () => {
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




// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../Auth/UseAuth";
// import { useEffect } from "react";

// const axiosSecure = axios.create({
//   // baseURL: "http://localhost:5000",
//   baseURL: import.meta.env.VITE_BASE_URL,
//   withCredentials: true,
// });
// const useXiosSecure = () => {
//   const goTo = useNavigate();
//   const { logOut } = useAuth();

//   useEffect(() => {
//     axiosSecure.interceptors.response.use(
//       function (response) {
//         return response;
//       },
//       async function (error) {
//         const status = error.response.status;
//         // console.log('status error in the interceptor',status);
//         //  console.log("error tracked in the interceptor", error.response);
//         if (status === 401 || status === 403) {
//           goTo("/login");
//           await logOut();
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [goTo, logOut]);

//   return axiosSecure;
// };

// export default useXiosSecure;
