import { TreeEntity } from '../models/MockData'

type props = {
  article: TreeEntity
}

const ContentArticle = ({ article }: props) => (
  <>
    <article className="mb-4 p-4 bg-blue-200 rounded">
      {article.number} {article.title}
    </article>

    {article.children?.map((childArticle) => (
      <ContentArticle key={childArticle.id} article={childArticle} />
    ))}
  </>
)

export default ContentArticle
