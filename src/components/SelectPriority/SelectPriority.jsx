import { Option, Select } from "@material-tailwind/react";

const SelectPriority = ({setPriority}) => {
    return (
      <div>
        <Select
          onChange={(value) => setPriority(value)}
          color="teal"
          label="Select priority"
        >
          <Option value="high">High</Option>
          <Option value="moderate">Moderate</Option>
          <Option value="low">Low</Option>
        </Select>
      </div>
    );
};
export default SelectPriority;