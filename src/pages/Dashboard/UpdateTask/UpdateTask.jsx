import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/Auth/UseAuth";
import { useState } from "react";
import useXiosSecure from "../../../hooks/secure/useXiosSecure";
import SelectPriority from "../../../components/SelectPriority/SelectPriority";

const UpdateTask = ({ setOpen, taskId }) => {
  const [priority, setPriority] = useState("");
  const axiosSecure = useXiosSecure();
  const { user } = useAuth();
  const apiUrl = `/task/${taskId}`;
  const key = 'task'
  const {data:task} = useGetSecureData(apiUrl,key)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { title, deadline_date, deadline_time } = data;
    console.log(data);
    const task = {
      createdBy: user?.email,
      createdAt: new Date(),
      title,
      status: "todo",
      priority,
      deadline_date,
      deadline_time,
    };

    try {
      // const res = await axiosSecure.post(apiUrl, task);
      if (res.acknowledged) {
        toast.success("Todo Created");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
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
            <Input {...register("title")} value={task?.title} color="teal" label="Title" />
          </div>
          <SelectPriority setPriority={setPriority} defaultValue={task?.priority} />
        </div>
        <div>
          <Textarea color="teal" value={task?.description} label="Enter your task description" />
          {/* Deadline starts here */}
          <div className="flex space-x-4 mt-5">
            <Input
              {...register("deadline_date")}
              color="teal"
              label="Deadline date"
              value={task?.deadline_date}
              type="date"
            />

            <Input
              {...register("deadline_time")}
              color="teal"
              label="Deadline time"
              value={task?.deadline_time}
              type="time"
            />
          </div>
          {/* Deadline ends here */}
        </div>
        <div>
          <Button
            type=""
            onClick={() => setOpen(false)}
            className="me-2"
            color="red"
            size="lg"
          >
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

import PropTypes from "prop-types";
import useGetSecureData from "../../../hooks/secure/useGetSecureData";

UpdateTask.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
export default UpdateTask;
