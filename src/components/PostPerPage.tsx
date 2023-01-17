import { IPostPerPage } from "../models";

const PostPerPage = ({postsNumber} : IPostPerPage) => {
    return (
        <div>
            <h6>Post per page: </h6>
            <input type="text" onChange={(event) => postsNumber(Number(event.target.value))}/>
        </div>
    )
}

export default PostPerPage