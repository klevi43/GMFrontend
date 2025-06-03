import React, { type Dispatch, type SetStateAction } from "react";
import PageSelectorButton from "./PageSelectorButton";

interface Props {
  totalPages: number;
  pageNo: number;
  setPageNo: Dispatch<SetStateAction<number>>;
}
const PageSelector = ({ totalPages, pageNo, setPageNo }: Props) => {
  const goNext = () => {
    setPageNo(pageNo + 1);
  };
  const goPrev = () => {
    setPageNo(pageNo - 1);
  };
  const goToPage = (pageNo: number) => {
    setPageNo(pageNo);
  };
  return (
    <div>
      <div className="flex justify-center items-baseline text-text text-[1.7rem] ">
        {pageNo !== 1 && (
          <span className="pr-4">
            <PageSelectorButton action={goPrev} text="Prev" />
          </span>
        )}
        {pageNo - 1 > 1 && (
          <span className="pr-4">
            {pageNo - 1 > 1 && <span>...</span>}
            <PageSelectorButton
              action={() => goToPage(pageNo - 1)}
              text={(pageNo - 1).toString()}
            />
          </span>
        )}

        <span className="text-white  pr-4 font-semibold">
          <p>{pageNo}</p>
        </span>
        {pageNo + 1 <= totalPages && (
          <span className="pr-4">
            <PageSelectorButton
              action={() => goToPage(pageNo + 1)}
              text={(pageNo + 1).toString()}
            />
            {pageNo + 1 < totalPages && <span className="">...</span>}
          </span>
        )}

        {pageNo !== totalPages && (
          <PageSelectorButton action={goNext} text="Next" />
        )}
      </div>
    </div>
  );
};

export default PageSelector;
