import { useState } from "react";
import { commentThreadData } from "./data";

export default function CommentList() {
  const [comments, setComments] = useState<Comment[]>(commentThreadData);

  function handleDelete(id: number){
    function deleteComment(comments: Comment[]): Comment[]{
       return comments.map((comment)=>{
            if(comment.id === id){
                return null;
            }
            const updatedReplies = deleteComment(comment.replies)
            return {...comment, replies: updatedReplies}
        }).filter(nonNullable) as Comment[];
    }

    const updated = deleteComment(comments);
    setComments(updated);
  }

  function nonNullable<Comment>(comment: Comment): comment is NonNullable<Comment>{
    return comment !== null;
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul>
       {comments.map((comment)=>{
        console.log('in here 1', comment.id);
        
        return <Comment key={comment.id} comment={comment} onDelete={handleDelete}/>
       })}
      </ul>
    </div>
  );
}

type Comment = {
  id: number;
  author: string;
  text: string;
  likes: number;
  timestamp: string;
  replies: Comment[];
};

function Comment({ comment, onDelete }: { comment: Comment,
    onDelete: (id: number) => void
 }) {
  return (
    <>
      <li>{comment.text}</li>
      <span>{comment.timestamp.split("T")[0]}</span>
      <button onClick={()=> onDelete(comment.id)}>Delete</button>
      <br />
      <span>{comment.author} </span>

      <span>Likes: {comment.likes}</span>

    {comment.replies.length > 0 && 
        <ul>
           
            {comment.replies.map((reply)=>{
                console.log('in here 2', reply.id);
                
                return <Comment key={reply.id} comment={reply} onDelete={onDelete}/>
            })}
        </ul>
    }
    </>
  );
}
