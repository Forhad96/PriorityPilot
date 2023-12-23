import {
  Button,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { TaskCard } from "../../../components/TaskCard/TaskCard";
import { PlusIcon } from "@heroicons/react/24/solid";
import useGetSecureData from "../../../hooks/secure/useGetSecureData";
import Loading from "../../../shared/Loading/Loading";
import { useState } from "react";
import { Modal } from "../../../shared/Modal/Modal";
import CreateTodo from "../CreateTodo/CreateTodo";

const Ongoing = () => {

  const [open, setOpen] = useState(false);
  const apiUrl = `/tasks/ongoing`;
  const key = "tasks";
  const { data: tasks, isLoading, refetch } = useGetSecureData(apiUrl, key);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <Typography variant="h5" color="blue-gray">
            Ongoing Todo list
          </Typography>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              onClick={() => setOpen(true)}
              className="flex items-center gap-3"
              size="sm"
            >
              <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Todo
            </Button>
          </div>
        </div>
      </CardHeader>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tasks?.map((task) => (
          <TaskCard refetch={refetch} key={task._id} task={task} />
        ))}
      </div>
      <Modal open={open} setOpen={setOpen}>
        <CreateTodo setOpen={setOpen} />
      </Modal>
    </>
  );
};
export default Ongoing;
