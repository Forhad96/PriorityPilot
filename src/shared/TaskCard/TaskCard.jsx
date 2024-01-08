import {
  CheckCircleIcon,
  PencilIcon,
  RectangleStackIcon,
  RocketLaunchIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Option,
  Select,
  Tooltip,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import { convertTime } from "../../utils/convertTime";
import PropTypes from "prop-types";
import useXiosSecure from "../../hooks/secure/useXiosSecure";
import toast from "react-hot-toast";
import { Modal } from "../Modal/Modal";
import UpdateTask from "../../pages/Dashboard/UpdateTask/UpdateTask";

const getApiUrl = "/tasksStatus/";
//components starts

export function TaskCard({ task, refetch }) {
  const axiosSecure = useXiosSecure();
  const [open, setOpen] = useState(false);
  const [statusValue, setStatusValue] = useState("");

  const {
    _id,
    title,
    description,
    status,
    priority,
    deadline_date,
    deadline_time,
    createdBy,
  } = task || "";

  const handleDelete = async () => {
    try {
      const res = await axiosSecure.put("/moveToTrash", { id: _id });
      if (res.data.modifiedCount > 0) {
        toast.success("your tasks move to trash");
        refetch();
      }
    } catch (error) {
      console.log(error);
    }

    // try {
    //   let willDelete = await swal({
    //     title: "Are you sure?",
    //     text: "Once deleted, you will not be able to recover this imaginary file!",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    //   });

    //   if (willDelete) {

    //     const res = await axiosSecure.delete(`/tasks/${_id}`);
    //     console.log(res);

    //     if (res.data.deletedCount > 0) {
    //       toast.success("successfully Removed");
    //       await swal("Poof! Booking cancel successful", {
    //         icon: "success",
    //       });
    //       refetch();
    //     }
    //   } else {
    //     await swal("Your imaginary file is safe!");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error(error.message);
    // }
  };

  useEffect(() => {
    const postData = async () => {
      try {
        const newStatus = statusValue;
        if (
          newStatus === "todo" ||
          newStatus === "complete" ||
          newStatus === "ongoing"
        ) {
          const res = await axiosSecure.put(getApiUrl + _id, { newStatus });
          refetch();
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  }, [statusValue, _id, refetch, axiosSecure]);

  return (
    <>
      <Card className="mt-6 w-80">
        <CardBody>
          <div className="flex items-center justify-between ">
            {(status === "todo" && (
              <RectangleStackIcon
                color=""
                className="w-10 text-light-blue-600"
              />
            )) ||
              (status === "ongoing" && (
                <RocketLaunchIcon color="" className="w-10 text-pink-600" />
              )) ||
              (status === "complete" && (
                <CheckCircleIcon color="teal" className="w-10" />
              ))}
            <div className="w-max text-white">
              <Chip
                className="text-white"
                color={
                  (status === "todo" && "blue") ||
                  (status === "ongoing" && "pink") ||
                  (status === "complete" && "teal")
                }
                value={status}
              />
            </div>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{description ? description : ""}</Typography>
          <div className="w-max flex justify-between gap-3">
            <Chip
              size="sm"
              color={
                (priority === "high" && "red") ||
                (priority === "moderate" && "lime") ||
                (priority === "low" && "blue-gray")
              }
              value={priority}
            />
            <Chip size="sm" value={deadline_date} />
            <Chip size="sm" value={convertTime(deadline_time)} />
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex  justify-evenly">
          <select
            value={"change"}
            name="status"
            onChange={(e) => setStatusValue(e.target.value)}
            className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          >
            <option>Change Status</option>
            <option value="todo">Todo</option>
            <option value="ongoing">Ongoing</option>
            <option value="complete">Complete</option>
          </select>

          <Tooltip content="Edit Task">
            <IconButton onClick={() => setOpen(true)} variant="text">
              <PencilIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Delete Task">
            <IconButton onClick={handleDelete} variant="text">
              <TrashIcon color="red" className="h-4 w-4" />
            </IconButton>
          </Tooltip>
        </CardFooter>
      </Card>

      <Modal open={open} setOpen={setOpen}>
        <UpdateTask setOpen={setOpen} taskId={_id} />
      </Modal>
    </>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  refetch: PropTypes.func,
};
