import { useForm } from "react-hook-form";
import {
  Input,
  Textarea,
  Select,
  Button,
  Option,
  Timeline,
  Typography,
} from "@material-tailwind/react";
import useAuth from "../../../hooks/Auth/UseAuth";
import useXiosSecure from "../../../hooks/secure/useXiosSecure";
import toast from "react-hot-toast";
const CreateTodo = ({setOpen}) => {
  const { user } = useAuth();
  const apiUrl = "/tasksvv";
  const mutationKey = "tasks";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const axiosSecure = useXiosSecure()
  const onSubmit = async (data) => {
    const { title, priority, deadline_date, deadline_time } = data;
console.log(data);
    const task = {
      createdBy: user?.email,
      createdAt: new Date(),
      title,
      status:'todo',
      priority,
      deadline_date,
      deadline_time,
    };

    try {
        const res = await axiosSecure.post(apiUrl,task)
        if (res.acknowledged){
            toast.success('Todo Created')
        } 
        console.log(res);
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }
  };
  return (
    <div className="m-8">
        <Typography variant="h2" className="text-center">
            Create Todo
        </Typography>
      <form
        className="space-y-6 shadow-lg border-2 p-4 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="my-2">
            <label htmlFor="title" className="text-gray-700 text-sm font-bold">
              Title
            </label>
            <Input {...register("title")} color="teal" label="Title" />
          </div>
          <Select
            {...register("priority")}
            color="teal"
            label="Select priority"
          >
            <Option value="High">High</Option>
            <Option value="Moderate">Moderate</Option>
            <Option value="Low">Low</Option>
          </Select>
        </div>
        <div>
          <Textarea color="teal" label="Enter your task description" />
          {/* Deadline starts here */}
          <div className="flex space-x-4 mt-5">
            <Input
              {...register("deadline_date")}
              color="teal"
              label="Deadline date"
              type="date"
            />

            <Input
              {...register("deadline_time")}
              color="teal"
              label="Deadline time"
              type="time"
            />
          </div>
          {/* Deadline ends here */}
        </div>
        <div>
          <Button type="" onClick={()=>setOpen(false)} className="me-2" color="red" size="lg">
            Cancel
          </Button>
          <Button type="submit" color="teal" size="lg">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};
export default CreateTodo;
import PropTypes from 'prop-types';

CreateTodo.propTypes = {
    setOpen: PropTypes.bool.isRequired,
};