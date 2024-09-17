const Test = () => {
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
