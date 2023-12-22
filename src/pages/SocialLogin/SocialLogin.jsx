import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/Auth/UseAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
      const goTo = useNavigate();
      const { googleSignIn } = useAuth();
      const handleSocial = async (media) => {
        try {
          await media();
          toast.success("Login successful");
          goTo("/");
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      };
    return (
      <div>
        <Button
        //   size=""
        onClick={()=>handleSocial(googleSignIn)}
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3"
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>
      </div>
    );
};
export default SocialLogin;