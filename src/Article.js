export default function Article({articles}) {
    return (
        <main>
            {articles.map((article) => {
                return (
                    <article>
                        <time datetime={article.date}>{article.data}</time>
                        <h2>{article.title}</h2>
                        <img src={article.image} alt={article.alt} />
                        <p>{article.content}</p>
                        <a>Continues</a>
                    </article>
                )
            })}
        </main>
    )
}