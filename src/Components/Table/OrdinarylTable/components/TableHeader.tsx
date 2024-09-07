import { useMemo } from "react";

// icons
import { BiChevronsRight } from "react-icons/bi";

// components
import {
  COLUMN_HEADER_TYPE,
  TABLE_HEADER_PROP_TYPE,
} from "Components/Table/CustomizedTable/components/TableHeader/__type";
import { editTableColumnLength } from "Components/Table/CustomizedTable/utils";
import React from "react";
import { HeaderColumn } from "Components/Table/CustomizedTable/components/TableHeader";

type TableHeaderPropsType = TABLE_HEADER_PROP_TYPE;

const TableHeader: React.FC<TableHeaderPropsType> = (props) => {
  const {
    data,
    isExpandAll,
    numberOfColumn,
    /**
     * action
     */
    handleClickOnAllExpand,
    handleChangeOnSort,
  } = props;

  const headerList: COLUMN_HEADER_TYPE[] = useMemo(
    () => editTableColumnLength(data, 0, numberOfColumn),
    [data, numberOfColumn]
  );

  if (headerList.length <= 0) return <></>;

  return (
    <thead>
      <tr>
        <th className="px-2">
          <BiChevronsRight
            className={`mx-auto h-auto w-5 cursor-pointer text-primary ${
              isExpandAll ? "rotate-90" : "rotate-0"
            } duration-200`}
            /**
             * action
             * */
            onClick={() => handleClickOnAllExpand()}
          />
        </th>
        {headerList.map((header: COLUMN_HEADER_TYPE) => (
          <HeaderColumn
            key={header.key}
            headerData={header}
            /**
             * action
             */
            onChangeSort={handleChangeOnSort}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
