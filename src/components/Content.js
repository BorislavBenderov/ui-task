import './Content.css';
import { ContentCard } from './ContentCard';

export const Content = ({ articles }) => {
    return (
        <section className="content__container">
            {articles.map(article => <ContentCard key={article.id} article={article} />)}
        </section>
    );
}