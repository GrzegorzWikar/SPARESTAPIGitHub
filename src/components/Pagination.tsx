import { IPagination } from "../models";

const Pagination  = ({postPerPage, totalPosts, paginate} : IPagination) => {

    const pageNumber: number[] = []

    for(let i : number = 1 ; i <= Math.ceil(totalPosts / postPerPage);i++){
        pageNumber.push(i);

    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => [
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)}  className="page-link">
                            {number}
                        </button>
                    </li>
                ])
                }
            </ul>
        </nav>
    )
}

export default Pagination