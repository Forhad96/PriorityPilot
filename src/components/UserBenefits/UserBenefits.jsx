// BenefitsComponent.jsx

import React from "react";
import { Card, CardBody, Typography, CardFooter, Button } from "@material-tailwind/react";
import { AcademicCapIcon, BriefcaseIcon, ChartBarIcon, CodeBracketIcon, PaintBrushIcon } from "@heroicons/react/24/solid";

const UserBenefits = () => {
const benefitsData = [
  {
    title: "Developers",
    icon: <CodeBracketIcon className="h-8 w-8 text-primary" />,
    description:
      "PriorityPilot is tailored for developers who juggle multiple tasks, projects, and deadlines. Stay organized, prioritize coding tasks efficiently, and enhance collaboration with team members.",
  },
  {
    title: "Corporate Professionals",
    icon: <BriefcaseIcon className="h-8 w-8 text-primary" />,
    description:
      "Streamline your workflow and manage projects seamlessly with PriorityPilot. Corporate professionals can effortlessly prioritize tasks, set deadlines, and ensure that team members are on the same page, promoting a more efficient work environment.",
  },
  {
    title: "Students",
    icon: <AcademicCapIcon className="h-8 w-8 text-primary" />,
    description:
      "Students can keep track of assignments, projects, and deadlines with PriorityPilot. The intuitive dashboard allows for effective time management, helping students balance academics and extracurricular activities.",
  },
  {
    title: "Freelancers",
    icon: <BriefcaseIcon className="h-8 w-8 text-primary" />,
    description:
      "Freelancers can boost their productivity by efficiently managing client tasks, deadlines, and project timelines. PriorityPilot provides a clear overview of ongoing projects, ensuring freelancers stay on track.",
  },
  {
    title: "Small Business Owners",
    icon: <BriefcaseIcon className="h-8 w-8 text-primary" />,
    description:
      "Small business owners can benefit from PriorityPilot's user-friendly task management. Easily organize and prioritize tasks related to operations, customer management, and growth initiatives, helping you focus on what matters most.",
  },
  {
    title: "Entrepreneurs",
    icon: <BriefcaseIcon className="h-8 w-8 text-primary" />,
    description:
      "Entrepreneurs can stay on top of their entrepreneurial journey with PriorityPilot. Manage tasks, track milestones, and achieve business goals effectively.",
  },
  {
    title: "Project Managers",
    icon: <BriefcaseIcon className="h-8 w-8 text-primary" />,
    description:
      "Project managers can streamline project workflows, allocate resources efficiently, and ensure timely completion of tasks using PriorityPilot.",
  },
  {
    title: "Creatives",
    icon: <PaintBrushIcon className="h-8 w-8 text-primary" />,
    description:
      "Creatives, such as designers and artists, can use PriorityPilot to manage their creative projects, track design iterations, and meet client deadlines.",
  },
  {
    title: "Marketing Professionals",
    icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
    description:
      "Marketing professionals can organize marketing campaigns, track analytics, and collaborate seamlessly using PriorityPilot.",
  },
  {
    title: "Researchers",
    icon: <AcademicCapIcon className="h-8 w-8 text-primary" />,
    description:
      "Researchers can stay organized in their studies, manage research tasks, and meet project milestones efficiently with PriorityPilot.",
  },
  // Add more entries for different user groups as needed
];

    return (
      <div className="container mx-auto mt-16">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Who Can Benefit from Our Task Management Platform?
        </h2>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <Card key={index} className="mt-6 ">
              <CardBody>
                {benefit.icon}
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {benefit.title}
                </Typography>
                <Typography>{benefit.description}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href="#" className="inline-block">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
};
export default UserBenefits;