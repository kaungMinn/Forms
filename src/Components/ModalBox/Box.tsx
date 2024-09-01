import React, { ReactNode } from "react";

// icons
import { RxCross2 } from "react-icons/rx";

interface PrimaryModalBoxType {
  children: ReactNode;
  open: boolean;
  titleLabel?: string;
  /**
   * action
   */
  onCloseModal?: () => void;
}

const Box: React.FC<PrimaryModalBoxType> = ({
  children,
  open,
  titleLabel,
  /**
   * action
   */
  onCloseModal,
}) => {
  return (
    <div className={`fixed inset-0 z-30  ${open ? "" : "pointer-events-none"}`}>
      {/* BackDrop */}
      <div
        className={`fixed inset-0 ${
          open ? "bg-black/20 backdrop-blur-sm" : "pointer-events-none"
        }`}
      />
      {/* content */}
      <div
        className={`fixed left-[50%] top-[55%] z-10 h-auto max-h-[90%] max-w-[90%] translate-x-[-50%] translate-y-[-50%] space-y-4 rounded-lg bg-default p-6 shadow-md ${
          open
            ? "scale-100 overflow-y-auto opacity-100"
            : "pointer-events-none scale-0"
        } duration-300`}
      >
        <div className="flex items-center justify-between">
          <p className="body-font font-semibold text-base_light">
            {titleLabel}
          </p>
          {onCloseModal && (
            <RxCross2
              className="h-auto w-5 text-default_dark duration-200 laptop:cursor-pointer laptop:hover:rotate-90 laptop:hover:text-base_light"
              /**
               * action
               */
              onClick={onCloseModal}
            />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

Box.defaultProps = {
  titleLabel: "",
  open: false,
};

export default Box;
