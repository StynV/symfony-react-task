import { useState } from 'react'

import { TreeEntity } from '../../models/MockData'

type props = {
  article: TreeEntity
}

const NavArticle = ({ article }: props) => {
  const [active, setActive] = useState(true)

  const navigate = () => {
    window.location.hash = `#${article.number}`
  }

  return (
    <>
      <li
        className={`${parent && 'pl-4'} py-2 flex flex-row relative group cursor-pointer`}
        onClick={() => setActive((currentState) => !currentState)}
      >
        <svg
          className={`w-5 h-5 mr-2 transform transition-transform ${
            active ? 'rotate-90' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>

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

      {active && (
        <li className="pl-4 cursor-pointer">
          {article.children?.map((childArticle) => (
            <NavArticle key={article.id} article={childArticle} />
          ))}
        </li>
      )}
    </>
  )
}

export default NavArticle
