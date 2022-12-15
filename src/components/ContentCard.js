export const ContentCard = ({article}) => {
    return (
        <article className="content__card">
            <img
                src={article.image}
                alt=""
            />
            <div className="text__content">
                <h3>{article.title}</h3>
                <p className="excerpt">
                    {article.excert}
                </p>
                <div className="category">
                    <p className="vl" />
                    <p className='category__title'>{article.category}</p>
                </div>
            </div>
        </article>
    );
}