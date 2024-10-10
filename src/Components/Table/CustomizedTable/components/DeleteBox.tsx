import { IoWarningOutline } from "react-icons/io5";
import { TbTrash } from "react-icons/tb";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import Box from "../../../ModalBox/Box";
import SecondaryButton from "../../../Buttons/SecondaryButton";

type DeleteBoxType = {
  isShow: boolean;
  nodeId: string | number | boolean;
  subNodes: string | number | boolean;
  /**
   * action
   */
  handleClose: () => void;
  handleRouteConnection: (nodeId: string | number | boolean) => void;
  handleDeleteNode: () => void;
};

const DeleteBox = (props: DeleteBoxType) => {
  const {
    isShow,
    nodeId,
    subNodes,
    /**
     * action
     */
    handleClose,
    handleRouteConnection,
    handleDeleteNode,
  } = props;

  const icon =
    Number(subNodes) > 0 ? (
      <div>
        <IoWarningOutline className="h-auto w-7 text-warning duration-300 laptop:group-hover:-translate-y-2 laptop:group-hover:rotate-[60deg]" />
      </div>
    ) : (
      <div>
        <TbTrash className="h-auto w-7 text-danger duration-300 laptop:group-hover:-translate-y-2 laptop:group-hover:rotate-[60deg]" />
      </div>
    );

  const textLabel =
    Number(subNodes) > 0 ? (
      <div className="space-y-1">
        <p className="sub-heading-font text-center font-semibold text-warning">
          Ooops..!
        </p>
        <p className="body-font text-center font-semibold text-base_light">
          You can't delete this node. It connect child nodes.
        </p>
        <p className="body-font text-center font-semibold">
          Please disconnect child nodes first!
        </p>
      </div>
    ) : (
      <div className="space-y-1">
        <p className="body-font text-center ">Are you sure to delete?</p>
        <p className="caption-font text-center ">
          If you delete this, you can't recover it.
        </p>
      </div>
    );

  const confirmButton =
    Number(subNodes) > 0 ? (
      <PrimaryButton
        label="Go To Disconnect"
        /**
         * action
         */
        handleClickOn={() => handleRouteConnection(nodeId)}
      />
    ) : (
      <PrimaryButton
        label="Confirm"
        /**
         * action
         */
        handleClickOn={() => handleDeleteNode()}
      />
    );

  return (
    <Box open={isShow} onCloseModal={() => handleClose()}>
      <div className="h-auto w-[14rem] space-y-5 tablet:w-[25rem]">
        <div className="flex justify-center">
          <div className="group flex h-16 w-16 items-center justify-center rounded-full border bg-default_light shadow-lg shadow-primary_light">
            {icon}
          </div>
        </div>
        <div>{textLabel}</div>
        <div className="grid grid-cols-2 space-x-2">
          <div className="col-span-1">
            <SecondaryButton
              label="Cancel"
              handleClickOn={() => handleClose()}
            />
          </div>
          <div className="col-span-1">{confirmButton}</div>
        </div>
      </div>
    </Box>
  );
};

export default DeleteBox;
