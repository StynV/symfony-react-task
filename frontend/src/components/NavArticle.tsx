import { TreeEntity } from '../models/MockData'

type props = {
  article: TreeEntity
}

const NavArticle = ({ article }: props) => (
  <>
    <li className={`${parent && 'pl-4'}`}>
      {article.number} {article.title}
    </li>

    <li className="pl-4">
      {article.children?.map((childArticle) => (
        <NavArticle key={article.id} article={childArticle} />
      ))}
    </li>
  </>
)

export default NavArticle
