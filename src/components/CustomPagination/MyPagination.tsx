import React, {useState, useEffect, Fragment} from "react";

const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
};

const Pagination = (props: { totalRecords: any; pageLimit: any; pageNeighbours: any; onPageChanged: any; currentPage: any; }) => {
    const {
        totalRecords,
        pageLimit,
        pageNeighbours,
        onPageChanged,
        currentPage
    } = props;
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        setTotalPages(Math.ceil(totalRecords / pageLimit));
    }, [setTotalPages]);

    const fetchPageNumbers = () => {
        const totalNumbers = pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

            let pages = range(startPage, endPage);
            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);
    };

    const pages = fetchPageNumbers() ;
    return (
        <Fragment>
            <nav>
                <ul className="pagination">
                    {pages.map((page, index) => {

                        return (
                            <li
                                key={index}
                                className={`page-item${currentPage === page ? " active" : ""}`}
                            >
                                <a
                                    className="page-link"
                                    href="/"
                                    onClick={(e) => onPageChanged(e, page)}
                                >
                                    {page}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </Fragment>

    );
};

export default Pagination;