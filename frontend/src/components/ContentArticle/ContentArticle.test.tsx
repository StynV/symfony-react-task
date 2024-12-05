import { render } from '@testing-library/react'
import React from 'react'

import ContentArticle from './ContentArticle'
import data from './project.json'

describe('ContentArticle', () => {
  it('renders correctly based on the JSON data.', () => {
    const { asFragment, container } = render(
      <ContentArticle article={data.defaultSpecification.tree[0]} />
    )

    expect(asFragment()).toMatchSnapshot()

    const firstArticleElement = container.querySelector('article')
    expect(firstArticleElement).toBeVisible()
  })
})
