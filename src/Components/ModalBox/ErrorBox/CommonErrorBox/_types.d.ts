type ErrorBoxLayoutPropsType = {
  icon: React.ReactNode;
  title: string;
  bodyText?: string;
};

type ErrorResponsePropsType = {
  isError: boolean;
  errorMessage?: string;
};

type ErrorBoxPropsType = {
  children: React.ReactNode;
};

export { ErrorBoxLayoutPropsType, ErrorResponsePropsType, ErrorBoxPropsType };
