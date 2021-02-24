const Articles = ({datas}) => {
    return (
        <>
            {datas.map((post) => {
                const { id, title, article, hashtag } = post;
                return (
                    <div className="articles" key="id">
                        <article>
                            <h2>{title}</h2>
                            <p>{article}</p>
                            <br />
                            <a>#{hashtag}</a>
                        </article>
                    </div>
                )
            })}
        </>
    )
}

export default Articles
