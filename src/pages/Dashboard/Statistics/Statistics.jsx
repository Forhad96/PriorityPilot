import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { ChartPieIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";
import useGetSecureData from "../../../hooks/secure/useGetSecureData";
import Loading from "../../../shared/Loading/Loading";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

  const chartConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: [55, 13, 43, 22],
    // series: [totalOngoing, totalComplete, allData, totalTodo],

    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: false,
      },
    },
  };

export default function Statistics() {
  const { data ,isLoading} = useGetSecureData("/adminStatistics", "statistics");
  // const {  totalTodo, totalOngoing, totalComplete } = statistics;

  if(isLoading){
    return <Loading/>
  }

console.log(data.allData);
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-cyan-600 p-5 text-white">
          <ChartPieIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Priority-Pilot Statistics
          </Typography>
        </div>
      </CardHeader>

      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} />
        <div>
          <Typography
            variant="h5"
            color="gray"
            className="max-w-sm font-normal"
          >
            Total Task:
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
