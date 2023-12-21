import { Input, Textarea, Select, Button } from "@material-tailwind/react";
const AddTask = () => {
  return (
    <form className="space-y-6 mt-4" onSubmit={"handleAddTask"}>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="title" className="text-gray-700 text-sm font-bold">
            Title
          </label>
          {/* <Priority
            handlePrioritySelect={handlePrioritySelect}
            selectedPriority={selectedPriority}
          /> */}
        </div>
        <div className="mt-1 border-b-1 border-b-[#80808082]">
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your task title"
            required
            outline
          />
        </div>
      </div>
      <div>
        <div className="mt-1">
          <div className="w-full flex flex-col gap-2">
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your task description"
            />
          </div>
        </div>
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
