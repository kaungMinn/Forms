import React from "react";

// icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { DOTS, usePagination } from "../Hooks/usePagination";

// components

const CustomizedPagination = ({
  PageSizeComponent,
  totalCount,
  totalRowCount,
  siblingCount = 3,
  currentPage,
  pageSize,

  /**
   * action
   */
  onPageChange,
}: {
  PageSizeComponent?: React.ReactNode;
  totalCount: number;
  totalRowCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  /**
   * action
   */
  onPageChange: (pageNumber: number) => void;
}) => {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 1) {
    return null;
  }
  const onClickPrevious = () => {
    onPageChange(currentPage - 1);
  };
  const onClickNext = () => {
    onPageChange(currentPage + 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className=" grid grid-cols-2 space-y-2 pt-3 laptop:grid-cols-3 laptop:pt-0">
      <div className="order-2 col-span-1 laptop:order-none  laptop:col-span-1">
        <div className="flex items-center justify-start space-x-3">
          {PageSizeComponent}
          <p className="caption-font text-left font-semibold text-base_dark laptop:text-center">
            {currentPage} / {paginationRange.length}
          </p>
        </div>
      </div>
      <div className="order-1 col-span-2 laptop:order-none laptop:col-span-1">
        <div className="flex w-full items-center justify-center space-x-2">
          {/* Left navigation arrow */}
          <button
            type="button"
            className={`flex h-8 w-8 items-center  justify-center rounded-full duration-200 laptop:h-6 laptop:w-6 ${
              currentPage === 1
                ? "border bg-transparent text-default_dark"
                : "border bg-transparent text-base_light laptop:cursor-pointer laptop:hover:border-base_light laptop:hover:text-base_light laptop:hover:shadow-sm"
            }`}
            disabled={currentPage === 1}
            /**
             * action
             */
            onClick={() => onClickPrevious()}
          >
            <BiChevronLeft className="h-auto w-5" />
          </button>
          <div className="flex items-center space-x-1">
            {paginationRange.map((pageNumber: any) => {
              if (pageNumber === DOTS) {
                return <p key={pageNumber}> .... </p>;
              }
              return (
                <div
                  key={pageNumber}
                  className={`flex h-8 w-8 items-center  justify-center rounded-full duration-200 laptop:h-6 laptop:w-6 laptop:cursor-pointer ${
                    currentPage === pageNumber
                      ? "bg-primary text-white"
                      : "bg-transparent text-primary laptop:hover:bg-primary_light laptop:hover:shadow-md"
                  }`}
                  /**
                   * action
                   */
                  onClick={() => onPageChange(pageNumber)}
                >
                  <p className="caption-font"> {pageNumber}</p>
                </div>
              );
            })}
          </div>
          {/* Right navigation arrow */}
          <button
            type="button"
            className={`flex h-8 w-8 items-center  justify-center rounded-full duration-200 laptop:h-6 laptop:w-6 laptop:cursor-pointer ${
              currentPage === lastPage
                ? "border bg-transparent text-default_dark"
                : "border bg-transparent text-base_light laptop:cursor-pointer laptop:hover:border-base_light laptop:hover:text-base_light laptop:hover:shadow-sm"
            }`}
            disabled={currentPage === lastPage}
            /**
             * action
             */
            onClick={() => onClickNext()}
          >
            <BiChevronRight className="h-auto w-5" />
          </button>
        </div>
      </div>
      <div className="order-3 col-span-1 laptop:order-none laptop:col-span-1">
        <p className="caption-font ml-5 text-right font-medium text-base_dark laptop:text-end">
          {totalRowCount} of {totalCount}
        </p>
      </div>
    </div>
  );
};

export default CustomizedPagination;
