import { TreeEntity } from '../models/MockData'

type props = {
  article: TreeEntity
}

const NavArticle = ({ article }: props) => {
  const navigate = () => {
    window.location.hash = `#${article.number}`
  }

  return (
    <>
      <li className={`${parent && 'pl-4'} py-2 flex flex-row relative group`}>
        <p>
          {article.number} {article.title}
        </p>

        <button
          onClick={navigate}
          className="ml-auto bg-gray-200 p-1 rounded opacity-0 group-hover:opacity-100"
        >
          Ga naar &rarr;
        </button>
      </li>

      <li className="pl-4">
        {article.children?.map((childArticle) => (
          <NavArticle key={article.id} article={childArticle} />
        ))}
      </li>
    </>
  )
}

export default NavArticle
