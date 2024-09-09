type DropDownLabelType = {
  label: string;
  isRequired: boolean;
};
const DropDownLabel = (props: DropDownLabelType) => {
  const { label = "", isRequired = false } = props;
  return (
    <>
      {label && (
        <label htmlFor="" className="block caption-font">
          {label} {isRequired && <span className="text-red-500">**</span>}
        </label>
      )}
    </>
  );
};

export default DropDownLabel;
