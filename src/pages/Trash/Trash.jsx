import {
  EyeIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Checkbox,
} from "@material-tailwind/react";
import useGetSecureData from "../../hooks/secure/useGetSecureData";
import { useEffect, useState } from "react";
const Trash = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false);
  const apiUrl = "/tasks/all";
  const key = "tasks";
  const { data: tasks } = useGetSecureData(apiUrl, key);

  useEffect(() => {
    if (selectAll) {
      const ids = tasks?.map((task) => task._id);
      setSelected(ids);
    } else {
      setSelected([]);
    }
  }, [tasks, selectAll]);

  function handleSelect(e) {
    const isChecked = e.target.checked;
    const value = e.target.value;
    if (isChecked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  }

  console.log(selected);

  const handleSelectAll = () => {
    // setSelectAll(true)
  };
  handleSelectAll();
  const TABLE_HEAD = [
    {
      key: "checkbox",
      label: (
        <Checkbox
          color="red"
          checked={selectAll}
          onChange={() => setSelectAll(!selectAll)}
        />
      ),
    },
    "Title",
    "Deadline date",
    "Deadline time",
    "Status",
    "Action",
  ];
  return (
    <Card className="h-full w-full my-5">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Todos list
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3" size="sm">
              <PlusIcon strokeWidth={2} className="h-4 w-4" /> Recover
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
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
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={task._id}>
                  <td className={classes}>
                    <Checkbox
                      value={task._id}
                      checked={selected.includes(task._id)}
                      onChange={handleSelect}
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
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default Trash;
