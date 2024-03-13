'use client'
import React, { SetStateAction, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

interface Props {
    itemsPerPage: number;
    items: any;
    setList: React.Dispatch<SetStateAction<any>>;
    data: any;
}

const Pagination = ({ itemsPerPage, items, setList, data }: Props) => {

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    // const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
  

    useEffect(() => {
        setList(data.slice(itemOffset, endOffset))
    }, [itemOffset, endOffset])



    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => handlePageClick(e)}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className='flex items-center space-x-2 bg-[#27272A] w-fit mx-auto px-4 rounded-2xl mt-5 py-2'
                pageClassName="flex items-center justify-center rounded-2xl text-white w-9 h-9"
                activeClassName="bg-primary w-9 h-9 rounded"
                previousClassName='text-white'
                nextClassName='text-white'
            />
        </div>
    )
}

export default Pagination;


function Items({ currentItems }: any) {
    return (
        <>
            {currentItems &&
                currentItems.map((item: any) => (
                    <div>
                        <h3>Item #{item.uuid}</h3>
                    </div>
                ))}
        </>
    );
}