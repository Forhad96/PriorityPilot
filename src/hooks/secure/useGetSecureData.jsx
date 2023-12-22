import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth";
import useXiosSecure from "./useXiosSecure";

const useGetSecureData = (endpoint, key) => {
  const { user } = useAuth();
  const axiosSecure = useXiosSecure();

  const fetchSecureData = async () => {
    const response = await axiosSecure.get(endpoint);
    return response.data;
  };

  const queryConfig = {
    queryKey: [key],
    queryFn: fetchSecureData,
  };

  const queryResult = useQuery(queryConfig);

  return queryResult;
};

export default useGetSecureData;
