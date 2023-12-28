import { BellIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineConnector,
  TimelineHeader,
  Typography,
  Chip,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { convertTime } from "../../../utils/convertTime";
import toast from "react-hot-toast";
import swal from "sweetalert";
import useXiosSecure from "../../../hooks/secure/useXiosSecure";


// component start
const TaskView = ({ task,refetch }) => {
const axiosSecure = useXiosSecure()
  const apiUrl = "/tasks/";
    const handleDelete = async () => {
      try {
        let willDelete = await swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });

        if (willDelete) {
          const res = await axiosSecure.delete(apiUrl + task._id);
          console.log(res);

          if (res.data.deletedCount > 0) {
            toast.success("successfully Removed");
            await swal("Poof! Booking cancel successful", {
              icon: "success",
            });
            refetch();
          }
        } else {
          await swal("Your imaginary file is safe!");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };
  return (
    <TimelineItem className="h-28">
      <TimelineConnector className="!w-[78px]" />
      <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
        <TimelineIcon onClick={handleDelete} className="p-3 cursor-pointer" variant="outlined">
          <XMarkIcon className="h-5 w-5 hover:animate-spin" />
        </TimelineIcon>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <Typography variant="h6" color="blue-gray">
              {task?.title}
            </Typography>

            <div className="flex gap-2">
              <Chip size="sm" value={task?.deadline_date} />
              <Chip size="sm" value={convertTime(task?.deadline_time)} />
            </div>
          </div>
          <div className="space-y-1">
            <div className="w-max text-white">
              <Chip
                className="text-white"
                color={ task?.status?
                  (task?.status === "todo" && "blue") ||
                  (task?.status === "ongoing" && "pink") ||
                  (task?.status === "complete" && "teal"):'red'
                }
                value={task?.status?task?.status:'Not set'}
              />
            </div>

            <div className="w-max">
              <Chip
                className=""
                color={
                  task?.priority?
                  (task?.priority === "high" && "red") ||
                  (task?.priority === "moderate" && "lime") ||
                  (task?.priority === "low" && "blue-gray"):'red'
                }
                value={task?.priority?task?.priority:'Not set'}
              />
            </div>
          </div>
        </div>
      </TimelineHeader>
    </TimelineItem>
  );
};



TaskView.propTypes = {
    task: PropTypes.object,
    refetch: PropTypes.func,
};
export default TaskView;
