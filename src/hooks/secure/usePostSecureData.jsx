import { useMutation } from "@tanstack/react-query";
import useXiosSecure from "./useXiosSecure";

const usePostSecureData = (endpoint, key) => {
  const axiosSecure = useXiosSecure();

  const postSecureData = async (data) => {
    const response = await axiosSecure.post(endpoint, data);
    return response.data;
  };

  const mutationConfig = {
    mutationKey: [key],
    mutationFn: postSecureData,
  };

  const mutationResult = useMutation(mutationConfig);

  return mutationResult;
};

export default usePostSecureData;
