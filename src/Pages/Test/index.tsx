import { useState } from "react";

type DefaultTestDataTypes = {
  toggledData: string;
  one: string;
  two: string;
};
const DEFAULT_TEST_DATA: DefaultTestDataTypes = {
  toggledData: "",
  one: "",
  two: "",
};

const Test = () => {
  const [testData, setTestData] =
    useState<DefaultTestDataTypes>(DEFAULT_TEST_DATA);

  const buttons = ["one", "two"];
  return (
    <div>
      <div className="flex items-center gap-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 text-sm rounded-lg"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Test;
