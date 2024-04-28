import React, { useEffect, useState } from 'react';

import { BackwardIcon, ForwardIcon } from '../../../assets/icon';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

const Pagination = ({ pageCount, onPageChange }) => {
	const handlePageClick = (data) => {
		const selectedPage = data.selected + 1;
		onPageChange(selectedPage);
	};

	return (
		<section className="Pagination">
			<ReactPaginate
				nextLabel={<BackwardIcon />}
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				marginPagesDisplayed={2}
				pageCount={pageCount}
				previousLabel={<ForwardIcon />}
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item break"
				breakLinkClassName="page-link"
				containerClassName="pagination"
				activeClassName="active"
				renderOnZeroPageCount={null}
				className="Pagination--ButtonPage"
				// forcePage={page - 1}
			/>
		</section>
	);
};

export default Pagination;
