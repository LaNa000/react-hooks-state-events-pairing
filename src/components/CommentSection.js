import {useState} from "react";

function CommentSection({comments}) {

    const [hideComments, setHideComments] = useState(true);

    return (
        <div>
        <button onClick={() => setHideComments(!hideComments)}>{hideComments ? "Hide" : "Show"} Comments</button>
        <hr />
                { hideComments ? 
                 <div><h3>{comments.length} Comments</h3>
                    {comments.map((comment) => (
                        <div key={comment.id}>
                        <h4>{comment.user}</h4>
                        <p>{comment.comment}</p>
                        </div>
                    ))}</div>
                     : null}
                
            </div>
    );
}
export default CommentSection;