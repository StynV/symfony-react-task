import GroupedArticles from '../models/GroupedArticles'
import { ArticlesEntity } from '../models/MockData'

type props = {
  parent: ArticlesEntity
  children: ArticlesEntity[]
  groupedArticles: GroupedArticles
}

const ContentArticle = ({ parent, children, groupedArticles }: props) => (
  <>
    <div className="bg-blue-200 p-4 rounded text-xl" id={parent.number}>
      <span className="flex flex-row gap-1">
        <p className="font-bold">{parent.number}</p>
        <p>{parent.title}</p>
      </span>
    </div>
    {children.map((child) => (
      <div className="pt-4 rounded" id={child.number}>
        {groupedArticles[child.number] &&
          groupedArticles[child.number].length > 0 && (
            <ContentArticle
              parent={child}
              children={groupedArticles[child.number]}
              groupedArticles={groupedArticles}
            />
          )}
      </div>
    ))}
  </>
)

export default ContentArticle
