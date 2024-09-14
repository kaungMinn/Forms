type CheckboxInputType = {
  isChecked: boolean;
  label?: string;
  /*
    Action
  */
  handleIsChecked: () => void;
};
const CheckboxInput = (props: CheckboxInputType) => {
  const { isChecked, label = "", handleIsChecked } = props;

  return (
    <div>
      <div className="flex flex-col items-center gap-1  ">
        <div
          className={`${
            isChecked ? "border-2" : "bg-green-500 border-2"
          } cursor-pointer w-4 h-4 rounded-full`}
          onClick={() => handleIsChecked()}
        />
        <div>{label && label}</div>
      </div>
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={() => {
          //   AvoidWarning
        }}
      />
    </div>
  );
};

export default CheckboxInput;
