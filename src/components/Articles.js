const Articles = ({posts}) => {
    return (
        <>
            {posts.map((post) => {
                const { id, title, content, tags } = post;
                return (
                    <div className="articles" key="id">
                        <article>
                            <h2>{title}</h2>
                            <p>{content}</p>
                            <br />
                            <a>#{tags}</a>
                        </article>
                    </div>
                )
            })}
        </>
    )
}

export default Articles
