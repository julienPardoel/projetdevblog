import { Link } from 'react-router-dom'

const Articles = ({ posts }) => {
    return (
        <>
            {posts.map((post) => {
                const { id, title, content, tags } = post;
                return (
                    <Link to={`/blog/${title}`}>
                        <div className="articles" key="id">
                            <article>
                                <h2>{title}</h2>
                                <p>{content}</p>
                                <br />
                                <a>#{tags}</a>
                            </article>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default Articles
