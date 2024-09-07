import { UPDATED_HEADER_TYPE } from "./components/TableHeader/__type";
import { TABLE_BODY_ROW } from "./components/TableBody/__type";
import { AxiosError } from "axios";
import { ErrorResponseType } from "Types/list";

export type TABLE_PROPS_TYPE = {
  IsLoading: boolean;
  ErrorResponse?: AxiosError | ErrorResponseType | null;
  Data: any;
  PageSize: number;
  PageNumber: number;
  searchedData: string;
  setSearchedData: React.Dispatch<React.SetStateAction<string>>;
  settingIconList: React.ReactNode;
  LinkList?: { key: string; action: (id: string) => void }[];
  /**
   * action
   */
  handleOnChangePageSize: (
    pageSize: { id: number; value: number },
    pageNo?: number
  ) => void;
  handleOnChangePagination: (pageNo: number, type?: string) => void;
  handleSearching: (value: string) => void;
  handleUpdateModal: (id: string) => void;
  handleOnRouteConnection: (nodeId: string | number | boolean) => void;
  handleOnDelete: (nodeId: string | number | boolean) => void;
};

export interface UPDATE_TABLE_DATA_MODAL {
  HeadingColumn: UPDATED_HEADER_TYPE;
  DataRow: TABLE_BODY_ROW[];
  page: number;
  limit: number;
  count: number;
}

export type DeleteDataType = {
  isShow: boolean;
  nodeId: string | number | boolean;
  subNodes: string | number | boolean;
  id: string;
  nodeType: string;
};
