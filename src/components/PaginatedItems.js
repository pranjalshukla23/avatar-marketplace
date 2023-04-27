import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import CardItems from "./CardItems";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

function PaginatedItems({ itemsPerPage }) {
  const { avatars: avatarsArr } = useContext(UserContext);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = avatarsArr.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(avatarsArr.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % avatarsArr.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className='w-full'>
      <CardItems avatarsArr={currentItems} />
      <ReactPaginate
        className='flex justify-center items-center text-lg font-medium gap-4 my-4'
        activeClassName='bg-slate-200 p-2'
        breakLabel='...'
        nextClassName='font-bold'
        previousClassName='font-bold'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='<'
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default PaginatedItems;
