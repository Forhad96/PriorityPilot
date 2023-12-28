import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

export function CardSelect() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(e);
  };
  console.log(selectedValue);

  return (
    <div className="w-72">
      <Select
        label="Select Version"
        onChange={handleSelectChange}
        value={selectedValue}
      >
        <Option value="selected">Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>

      <p className="mt-4">Selected Value: {selectedValue}</p>
    </div>
  );
}
