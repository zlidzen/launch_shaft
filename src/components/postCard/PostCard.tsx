const PostCard = (props: { title: string; body: string; setSearch: (search: string) => void }) => {
  return (
    <article className='post-card'>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <a href="#" onClick={(e) => {
            e.preventDefault();
            props.setSearch(props.title);
        }}>
            More
        </a>
    </article>
    )
}

export default PostCard