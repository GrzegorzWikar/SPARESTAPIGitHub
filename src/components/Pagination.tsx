import { IPagination } from "../models";
import PostPerPage from "./PostPerPage";

const Pagination  = ({totalPosts, numberOfPosts, paginate, postPerPage} : IPagination) => {

    const pageNumber: number[] = []
    
    for(let i : number = 1 ; i <= Math.ceil(totalPosts / numberOfPosts);i++){
        pageNumber.push(i);

    }

    return (
        <>
        <PostPerPage postsNumber={postPerPage}/>
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
        </>
    )
}

export default Pagination