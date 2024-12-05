import GroupedArticles from '../models/GroupedArticles'
import { ArticlesEntity } from '../models/MockData'

type props = {
  parent: ArticlesEntity
  children: ArticlesEntity[]
  groupedArticles: GroupedArticles
}

const NavigationArticle = ({ parent, children, groupedArticles }: props) => (
  <ul className="my-2">
    <li>
      <a href={`#${parent.number}`}>
        {parent.number} {parent.title}
      </a>
    </li>
    {children.map((child) => (
      <li key={child.id} className="pl-4">
        {groupedArticles[child.number] &&
          groupedArticles[child.number].length > 0 && (
            <NavigationArticle
              parent={child}
              children={groupedArticles[child.number]}
              groupedArticles={groupedArticles}
            />
          )}
      </li>
    ))}
  </ul>
)

export default NavigationArticle
