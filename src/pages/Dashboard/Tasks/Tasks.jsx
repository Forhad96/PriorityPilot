import {
  Button,
  CardHeader,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { TaskCard } from "../../../components/TaskCard/TaskCard";
import { PlusIcon } from "@heroicons/react/24/solid";
import useGetSecureData from "../../../hooks/secure/useGetSecureData";
import Loading from "../../../shared/Loading/Loading";
import { useEffect, useState } from "react";

const Tasks = () => {
  const [status, setStatus] = useState("");
  // const [tasks,setTasks] = useState()
  const apiUrl = `/tasks/${status}`;
  const key = "tasks";
  const { data: tasks, isLoading, refetch } = useGetSecureData(apiUrl, key);
  console.log(status);

  if (isLoading) {
    return <Loading />;
  }

  const handleTab = (status) => {
    setStatus(status);
    refetch();
  };
  return (
    <div>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Todos list
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3" size="sm">
              <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Todo
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value, status }) => (
                <Tab key={value} onBlur={() => handleTab(status)} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72"></div>
        </div>
      </CardHeader>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tasks?.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};
export default Tasks;
const TABS = [
  {
    label: "All",
    value: "all",
    status: "",
  },
  {
    label: "Ongoing",
    value: "ongoing",
    status: "ongoing",
  },
  {
    label: "Complete",
    value: "complete",
    status: "complete",
  },
];
