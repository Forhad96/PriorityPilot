import { Input, Textarea, Select, Button, Option } from "@material-tailwind/react";
const AddTask = () => {
  return (
    <form className="space-y-6 mt-4 max-w-md" onSubmit={"handleAddTask"}>
      <div>
        <div className="my-2">
          <label htmlFor="title" className="text-gray-700 text-sm font-bold">
            Title
          </label>
          <Input color="teal" label="Title" />
        </div>
        <Select color="teal" label="Select Version">
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
              outline
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
              outline
            />
          </div>
        </div>
        {/* Deadline ends here */}
      </div>
      <div>
        <Button
          type="submit"
          color="teal"
          buttonType="filled"
          size="lg"
          rounded={true}
          block={true}
          ripple="light"
        >
          Add
        </Button>
      </div>
    </form>
  );
};
export default AddTask;
