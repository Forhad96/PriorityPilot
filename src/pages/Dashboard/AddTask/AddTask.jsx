
import {
  Input,
  Textarea,
  Select,
  Button,
  Option,
  Timeline,

} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import TaskView from "./TaskView";
import useAuth from "../../../hooks/Auth/UseAuth";
import usePostSecureData from "../../../hooks/secure/usePostSecureData";
const AddTask = () => {
  const apiUrl = '/task'
  const mutationKey = 'task'
  const {user} = useAuth()
  const { mutate, data, isLoading, isError } = usePostSecureData(
    apiUrl,
    mutationKey
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data)
const {title,priority,deadline_date,deadline_time} = data;

    try {
      const task = {
        createdBy: user?.email,
        title,
        priority,
        deadline_date,
        deadline_time,
      };
      await mutate(task)

      // const res = await 
    } catch (error) {
      console.log(error);
      
    }
  };

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (isError) {
      return <p>Error occurred</p>;
    }

  return (
    <div className="grid md:grid-cols-2 gap-5 mt-4">
      <form
        className="space-y-6 max-w-md max-h-[480px] shadow-lg border-2 p-4 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="my-2">
            <label htmlFor="title" className="text-gray-700 text-sm font-bold">
              Title
            </label>
            <Input
              {...register("title",)}
              color="teal"
              label="Title"
            />
          </div>
          <Select
            {...register("priority",)}
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
            {/* <div>
              <label
                htmlFor="deadline-date"
                className="text-gray-700 text-sm font-bold"
              >
                Deadline Date
              </label>
              <Input
                type="date"
                id="deadline-date"
                name="deadline-date"
                {...register("deadline-date",)}
                required
              />
            </div> */}
            <Input
              {...register("deadline_date",)}
              color="teal"
              label="Deadline date"
              type="date"
            />
            {/* <div>
              <label
                htmlFor="deadline-time"
                className="text-gray-700 text-sm font-bold"
              >
                Deadline Time
              </label>
              <Input
                type="time"
                id="deadline-time"
                name="deadline-time"
                required
              />
            </div> */}
            <Input
              {...register("deadline_time",)}
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

      <Timeline className=" overflow-y-scroll">
        {tasks?.map((task,idx) => (
          <TaskView task={task} key={task.id} />
        ))}
      </Timeline>
    </div>
  );
};
export default AddTask;


const tasks = [{
  "id": "1",
  "title": "Create wireframes",
  "description": "Create initial wireframes and mockups for new website design in Figma",
  "status": "todo",
  "priority": "high",
  "deadline": "2023-01-15T14:00:00",
  "createdBy": "23472834", 
  "assignedTo": ["1234839", "8743289"]  
},

{
  "id": "2",  
  "title": "Write blog post",
  "description": "Write a blog post about latest product features to publish", 
  "status": "inprogress",
  "priority": "moderate",
  "deadline": "2023-01-22T09:00:00",
  "createdBy": "8743289",
  "assignedTo": ["8743289"]
},
{
  "id": "3",  
  "title": "Write blog post",
  "description": "Write a blog post about latest product features to publish", 
  "status": "inprogress",
  "priority": "moderate",
  "deadline": "2023-01-22T09:00:00",
  "createdBy": "8743289",
  "assignedTo": ["8743289"]
},
{
  "id": "4",  
  "title": "Write blog post",
  "description": "Write a blog post about latest product features to publish", 
  "status": "inprogress",
  "priority": "moderate",
  "deadline": "2023-01-22T09:00:00",
  "createdBy": "8743289",
  "assignedTo": ["8743289"]
},
{
  "id": "5",  
  "title": "Write blog post",
  "description": "Write a blog post about latest product features to publish", 
  "status": "inprogress",
  "priority": "moderate",
  "deadline": "2023-01-22T09:00:00",
  "createdBy": "8743289",
  "assignedTo": ["8743289"]
},
{
  "id": "6",  
  "title": "Write blog post",
  "description": "Write a blog post about latest product features to publish", 
  "status": "inprogress",
  "priority": "moderate",
  "deadline": "2023-01-22T09:00:00",
  "createdBy": "8743289",
  "assignedTo": ["8743289"]
},
{
  "id": "7",  
  "title": "Write blog post",
  "description": "Write a blog post about latest product features to publish", 
  "status": "inprogress",
  "priority": "moderate",
  "deadline": "2023-01-22T09:00:00",
  "createdBy": "8743289",
  "assignedTo": ["8743289"]
},
{
  "id": "8",  
  "title": "Write blog post",
  "description": "Write a blog post about latest product features to publish", 
  "status": "inprogress",
  "priority": "moderate",
  "deadline": "2023-01-22T09:00:00",
  "createdBy": "8743289",
  "assignedTo": ["8743289"]
},
{
  "id": "9",  
  "title": "Write blog post",
  "description": "Write a blog post about latest product features to publish", 
  "status": "inprogress",
  "priority": "moderate",
  "deadline": "2023-01-22T09:00:00",
  "createdBy": "8743289",
  "assignedTo": ["8743289"]
},
{
  "id": "10",  
  "title": "Write blog post",
  "description": "Write a blog post about latest product features to publish", 
  "status": "inprogress",
  "priority": "moderate",
  "deadline": "2023-01-22T09:00:00",
  "createdBy": "8743289",
  "assignedTo": ["8743289"]
},

{
  "id": "11",
  "title": "Update servers",
  "description": "Update packages and deploy new code to production servers",
  "status": "todo", 
  "priority": "critical",
  "deadline": "2023-01-30T00:00:00",
  "createdBy": "1234839",
  "assignedTo": ["1234839","23472834"]
}
]