const Comments = ({ comment: { user, content } }) => {
  return (
    <>
      <span className="user_name">{user}</span>
      <span className="comment_content">{content}</span>
    </>
  );
};

export default Comments;
