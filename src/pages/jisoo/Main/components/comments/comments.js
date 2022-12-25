const Comments = props => {
  return (
    <>
      <span key={props.comment.id} className="userName">
        {props.comment.user}
      </span>
      <span key={props.comment.id} className="comment_content">
        {props.comment.content}
      </span>
    </>
  );
};

export default Comments;
