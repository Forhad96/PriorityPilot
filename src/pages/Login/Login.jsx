import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/Auth/UseAuth";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";

export function Login() {
  const { signIn } = useAuth();
  const goTo = useNavigate()
    const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
try {
  console.log(location);

  const {email,password} = data
  const res = await signIn(email,password)

  if(res.user){
    toast.success('Login Successful')
    goTo(location.pathname?location.state:'/')
  }
} catch (error) {
  console.log(error);
  
}
    console.log(data)
  
  };
  return (
    <Card
      className="flex items-center justify-center h-screen"
      color="transparent"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Welcome Back! Enter your Email and Password.
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            {...register("email")}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            {...register("password")}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Create an account?
          <Link to="/register" className="font-medium text-gray-900">
            Register
          </Link>
        </Typography>
      </form>
      <SocialLogin />
    </Card>
  );
}
