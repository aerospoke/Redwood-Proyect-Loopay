import { render } from '@redwoodjs/testing/web'

import PruebaPage from './PruebaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PruebaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PruebaPage />)
    }).not.toThrow()
  })
})
