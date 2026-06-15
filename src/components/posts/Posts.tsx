import PostCard from "../postCard/PostCard"
import { useState } from "react"

const postsData = [
    {
        id: 1,
        title: "Rockets",
        body: "Rockets description"
    },
    {
        id: 2,
        title: "Light Missile",
        body: "Light Missile description"
    },
    {
        id: 3,
        title: "Heavy Missile",
        body: "Heavy Missile description"
    },
    {
        id: 4,
        title: "Heavy Assault Missile",
        body: "Heavy Assault Missile description"
    }
]

const Posts = () => {
    const [search, setSearch] = useState('ddd');
  return (
    <div className="container">
        <h2>Welcome</h2>
        <input
            type="text"
            placeholder='search...'
            className='search-input'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <section className='posts'>
            {postsData && postsData.length > 0 ? postsData.map((post) => (
                <PostCard 
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    setSearch={setSearch} />
            )) : (
                <p>No posts found.</p>
            )}
        </section>
    </div>
    )
}

export default Posts