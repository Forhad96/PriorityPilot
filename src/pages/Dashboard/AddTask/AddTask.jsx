import {
  Input,
  Textarea,
  Button,
  Timeline,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import TaskView from "./TaskView";
import useAuth from "../../../hooks/Auth/UseAuth";
import useXiosSecure from "../../../hooks/secure/useXiosSecure";

import toast from "react-hot-toast";
import useGetSecureData from "../../../hooks/secure/useGetSecureData";
import { useState } from "react";
import SelectPriority from "../../../components/SelectPriority/SelectPriority";
import Loading from "../../../shared/Loading/Loading";

const AddTask = () => {
  const [priority, setPriority] = useState("");
  const { user } = useAuth();
  const axiosSecure = useXiosSecure()
  const apiUrl = "/tasks/all";
  const mutationKey = "tasks";
  const { data: tasks,refetch,isLoading } = useGetSecureData(apiUrl, mutationKey);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if(isLoading){
    return <Loading/>
  }
  const onSubmit = async (data) => {
    const { title, deadline_date, deadline_time } = data;

    try {
      const task = {
        createdBy: user?.email,
        createdAt: new Date(),
        title,
        priority,
        status: "todo",
        deadline_date,
        deadline_time,
      };

      const res = await axiosSecure.post(apiUrl,task)
      console.log(res);
      if (res.data.insertedId){
        refetch()
        // Show toast notification on success
        toast.success("Post successful!");
      }

    } catch (error) {
      console.log(error);
      toast.error("Error during post");
    }
  };

  if (isLoading) {
    return <Loading/>;
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-4">
      
      <form
        className="space-y-6 max-w-md max-h-[480px] shadow-lg border-2 p-4 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h2 className="text-3xl text-center">Add Todo</h2>
          <div className="my-2">
            <Input {...register("title")} color="teal" label="Title" />
          </div>
          <SelectPriority setPriority={setPriority} />
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
          <Button type="submit" color="teal" size="lg">
            Add
          </Button>
        </div>
      </form>
      {/* right side components */}

      <Timeline className=" overflow-y-scroll max-h-[600px]">
        {tasks?.map((task) => (
          <TaskView task={task} refetch={refetch} key={task._id} />
        ))}
      </Timeline>
    </div>
  );
};
export default AddTask;


