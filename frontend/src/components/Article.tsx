import GroupedArticles from '../models/GroupedArticles'
import { ArticlesEntity } from '../models/MockData'

type props = {
  parent: ArticlesEntity
  children: ArticlesEntity[]
  groupedArticles: GroupedArticles
}

const Article = ({ parent, children, groupedArticles }: props) => {
  console.log(groupedArticles)
  return (
    <ul>
      <li>
        {parent.number} {parent.title}
      </li>
      {children.map((child) => (
        <li key={child.id} className="pl-4">
          {groupedArticles[child.number] &&
            groupedArticles[child.number].length > 0 && (
              <Article
                parent={child}
                children={groupedArticles[child.number]}
                groupedArticles={groupedArticles}
              />
            )}
        </li>
      ))}
    </ul>
  )
}

export default Article
