import { render, within } from '@testing-library/react'

import data from '../../mocks/project.json'
import NavArticle from './NavArticle'

describe('NavArticle', () => {
  it('renders correctly based on the JSON data.', () => {
    const { asFragment, container } = render(
      <NavArticle article={data.defaultSpecification.tree[0]} />
    )

    expect(asFragment()).toMatchSnapshot()

    const firstArticleElement = container.querySelectorAll('li')
    expect(firstArticleElement[0]).toBeVisible()

    const firstSVGElement = container.querySelectorAll('svg')
    expect(firstArticleElement[0]).toContainElement(firstSVGElement[0])
    expect(firstArticleElement[0]).toHaveTextContent('0. AANNEMING WERF')
    expect(firstArticleElement[0]).toHaveClass(
      'pl-4 py-2 flex flex-row relative group cursor-pointer'
    )

    const firstPathElement = container.querySelectorAll('path')
    expect(firstArticleElement[0]).toContainElement(firstPathElement[0])

    const firstButtonElement = container.querySelectorAll('button')
    expect(firstArticleElement[0]).toContainElement(firstButtonElement[0])
    expect(firstButtonElement[0]).toHaveTextContent('Ga naar →')
    expect(firstButtonElement[0]).toHaveClass(
      'ml-auto bg-gray-200 p-1 rounded opacity-0 group-hover:opacity-100'
    )
  })
})
