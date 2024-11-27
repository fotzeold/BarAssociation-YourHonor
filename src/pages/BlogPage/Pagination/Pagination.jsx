import React from 'react';
import './Pagination.scss';

const Pagination = ({ totalPages, currPage, setCurrPage }) => {

	if (!totalPages || totalPages <= 1) return null

	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrPage(page);
		}
	};

	const renderPageNumbers = () => {
		if (totalPages <= 7) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const pageNumbers = [];

		pageNumbers.push(1);

		if (currPage <= 4) {
			pageNumbers.push(2, 3, 4, 5, 'ellipsis', totalPages);
		} else if (currPage >= totalPages - 3) {
			pageNumbers.push('ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
		} else {
			pageNumbers.push('ellipsis', currPage - 1, currPage, currPage + 1, 'ellipsis', totalPages);
		}

		return pageNumbers;
	};

	return (
		<div className="pagination">
			{renderPageNumbers().map((page, index) => {
				if (page === 'ellipsis') {
					return (
						<span key={`ellipsis-${index}`} className="pagination__ellipsis">
							...
						</span>
					);
				}

				return (
					<button
						key={`page-${page}`}
						className={`pagination__button ${currPage === page ? "active" : ""}`}
						onClick={() => handlePageChange(page)}
					>
						{page}
					</button>
				);
			})}
		</div>
	);
};

export default Pagination;