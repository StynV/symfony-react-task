import React from 'react'

import { TreeEntity } from '../../models/MockData'

type props = {
  article: TreeEntity
}

const ContentArticle = ({ article }: props) => {
  console.log(article)
  return (
    <>
      <article className="mb-2">
        <article className="mb-4 p-4 bg-blue-200 rounded" id={article.number}>
          {article.number} {article.title}
        </article>

        <p>content</p>
      </article>

      {article.children?.map((childArticle) => (
        <ContentArticle key={childArticle.id} article={childArticle} />
      ))}
    </>
  )
}

export default ContentArticle
