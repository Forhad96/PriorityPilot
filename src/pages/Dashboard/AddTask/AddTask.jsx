import { BellIcon } from "@heroicons/react/24/solid";
import {
  Input,
  Textarea,
  Select,
  Button,
  Option,
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineConnector,
  TimelineHeader,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
const AddTask = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-between gap-5">
      <form
        className="space-y-6 mt-4 max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="my-2">
            <label htmlFor="title" className="text-gray-700 text-sm font-bold">
              Title
            </label>
            <Input color="teal" label="Title" />
          </div>
          <Select color="teal" label="Select priority">
            <Option>High</Option>
            <Option>Moderate</Option>
            <Option>Low</Option>
          </Select>
        </div>
        <div>
          <Textarea color="teal" label="Enter your task description" />
          {/* Deadline starts here */}
          <div className="flex space-x-4 mt-5">
            <div>
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
                required
              />
            </div>
            <div>
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
            </div>
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
      <Timeline>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-3" variant="ghost">
              <BellIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                $2400, Design changes
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                22 DEC 7:20 PM
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
export default AddTask;
