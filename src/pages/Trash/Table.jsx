import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Typography,

  Chip,

  IconButton,
  Tooltip,
  Checkbox,
} from "@material-tailwind/react";
const Table = () => {
  return (
    <table className="mt-4 w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {TABLE_HEAD.map((head, index) => (
            <th
              key={index}
              className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {head.label || head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tasks?.map((task, index) => {
          const isLast = index === tasks.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={task._id}>
              <td className={classes}>
                <Checkbox
                  value={task._id}
                //   onChange={handleSelect}
                  color="red"
                />
              </td>
              <td className={classes}>
                <div className="flex items-center gap-3">
                  {/* <Avatar src={img} alt={name} size="sm" /> */}

                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {task?.title}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {task?.createdBy}
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {task?.deadline_date}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {task?.deadline_time}
                </Typography>
              </td>
              <td className={classes}>
                <div className="w-max">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={task?.status}
                    // color={online ? "green" : "blue-gray"}
                  />
                </div>
              </td>
              <td className={classes}>
                <Tooltip content="View Task">
                  <IconButton variant="text">
                    <EyeIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
                <Tooltip content="Edit Task">
                  <IconButton variant="text">
                    <PencilIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
                <Tooltip content="Delete Task">
                  <IconButton variant="text">
                    <TrashIcon color="red" className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
  const TABLE_HEAD = [
    {
      key: "checkbox",
      label: (
        <Checkbox
          color="red"
        //   checked={checked}
        //   onChange={() => setChecked(!checked)}
        />
      ),
    },
    "Title",
    "Deadline date",
    "Deadline time",
    "Status",
    "Action",
  ];