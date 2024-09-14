type DropDownLabelType = {
  label: string;
  isRequired: boolean;
};
const DropDownLabel = (props: DropDownLabelType) => {
  const { label = "", isRequired = false } = props;
  return (
    <>
      {label && (
        <div className="block caption-font">
          {label} {isRequired && <span className="text-red-500">**</span>}
        </div>
      )}
    </>
  );
};

export default DropDownLabel;
