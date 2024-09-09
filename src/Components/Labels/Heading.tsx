type HeadingType = {
  heading: string;
  subHeading: string;
};
const Heading = (props: HeadingType) => {
  const { heading, subHeading } = props;
  return (
    <h1 className="heading-font space-y-2">
      <p>{heading}</p>
      <p className="secondary-font">{subHeading}</p>
    </h1>
  );
};

export default Heading;
