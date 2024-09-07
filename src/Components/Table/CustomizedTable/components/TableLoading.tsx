import DashboardLoading from "../../../Loadings/DashboardLoading";

const TableLoading = ({ numberOfColumn }: { numberOfColumn: number }) => {
  return (
    <tbody className="h-[10rem] w-full tablet:h-[15rem] laptop:h-[20rem]">
      <tr>
        <td colSpan={numberOfColumn + 1}>
          <DashboardLoading />
        </td>
      </tr>
    </tbody>
  );
};

export default TableLoading;
