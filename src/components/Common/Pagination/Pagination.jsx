import React, { useEffect, useState } from 'react';

import { ArrowLeft, ArrowRight, BackwardIcon, ForwardIcon } from '../../../assets/icon';
import ReactPaginate from 'react-paginate';

// import Input from '../Input/Input';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';

import './Pagination.scss';
import { paginationLimit } from '../../../constant';

const Pagination = (props) => {
	const {
		goTo,
		page,
		isError,
		isLoading,
		totalItems,
		isDisabled,
		updatePage,
		updateGoTo,
		maxPageLimit = 10,
		totalItemsFound,
	} = props;

	const [upperItemCount, setUpperItemCount] = useState(null);
	const [lowerItemCount, setLowerItemCount] = useState(1);

	const showItemsLimit = (updatedPageCount) => {
		const upperLimit = paginationLimit * updatedPageCount;
		const lowerLimit = paginationLimit * updatedPageCount - (paginationLimit - 1);

		if (upperLimit > totalItems) {
			setUpperItemCount(totalItems);
		} else {
			setUpperItemCount(upperLimit);
		}
		setLowerItemCount(lowerLimit);
	};

	const handlePageClick = (e) => {
		const count = e.selected + 1;
		showItemsLimit(count);
		updatePage(count);
	};

	useEffect(() => {
		if (totalItems && !upperItemCount) {
			const initialUpperItemCount = paginationLimit > totalItems ? totalItems : paginationLimit;
			setUpperItemCount(initialUpperItemCount);
		}
	}, [totalItems]);

	return (
		<section className="Pagination">
			<div className="Pagination--Actions">
				<Typography className="Pagination--TotalPageCount">
					Showing{' '}
					<span>
						{' '}
						{lowerItemCount} - {upperItemCount}
					</span>{' '}
					out of <span>{totalItems}</span>
				</Typography>

				<div className="Pagination--PageNavigator">
					{/* <Button
						className="Pagination--Navigator"
						icon={<ArrowLeft />}
						onClick={handlePreviousPage}
						isDisabled={isLoading}
					/>
					<div className="Pagination--Navigator Pagination--ShowCurrentPage">{page}</div>
					<Button
						className="Pagination--Navigator"
						icon={<ArrowRight />}
						onClick={handleNextPage}
						isDisabled={isLoading || isDisabled || totalItemsFound === 0 || isError}
					/> */}

					{/* <ReactPaginate
						breakLabel="..."
						nextLabel="next >"
						// onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={1}
						previousLabel="< previous"
						renderOnZeroPageCount={null}
					/> */}
					<ReactPaginate
						nextLabel={<BackwardIcon />}
						onPageChange={handlePageClick}
						pageRangeDisplayed={2}
						marginPagesDisplayed={2}
						pageCount={maxPageLimit}
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
					/>
				</div>

				{/* <div className="Pagination--GoToPage">
					<div>Go to</div>
					<Input
						className="Pagination--Navigator Pagination--InputGoToPage"
						type="number"
						value={goTo}
						onChange={handleGoToPage}
						isDisabled={isLoading || isError}
					/>
				</div> */}
			</div>
		</section>
	);
};

export default Pagination;
