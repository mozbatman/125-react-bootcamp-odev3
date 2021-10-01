import Card from "./Card";

function CardWrapper({ posts, deletePost, editPost }) {
  return (
    <div className="card-wrapper">
      {
        posts.map(post => {
          return(<Card post={post} key={post.id} deletePost={deletePost} editPost={editPost}/>)
        })
      }
    </div>
  )
}

export default CardWrapper;