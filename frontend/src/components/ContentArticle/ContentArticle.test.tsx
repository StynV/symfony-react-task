import { render } from '@testing-library/react'

import data from '../../mocks/project.json'
import ContentArticle from './ContentArticle'

describe('ContentArticle', () => {
  it('renders correctly based on the JSON data.', () => {
    const { asFragment, container } = render(
      <ContentArticle article={data.defaultSpecification.tree[0]} />
    )

    expect(asFragment()).toMatchSnapshot()

    const firstArticleElement = container.querySelectorAll('article')
    expect(firstArticleElement[0]).toBeVisible()
    expect(firstArticleElement[0]).toHaveTextContent('0. AANNEMING WERF')
    expect(firstArticleElement[0]).toHaveClass('mb-4 p-4 bg-blue-200 rounded')
    expect(firstArticleElement[0]).toHaveAttribute('id', '0.')

    const secondArticleElement = container.querySelectorAll('article')
    expect(secondArticleElement[1]).toBeVisible()
    expect(secondArticleElement[1]).toHaveTextContent('00. ALGEMENE BEPALINGEN')
    expect(secondArticleElement[1]).toHaveClass('mb-4 p-4 bg-blue-200 rounded')
    expect(secondArticleElement[1]).toHaveAttribute('id', '00.')
  })
})
