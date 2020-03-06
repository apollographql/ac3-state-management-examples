import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Footer from './Footer'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../models/VisibilityFilter';

const setup = (propOverrides?: any) => {
  const props = Object.assign({
    completedCount: 0,
    activeCount: 0,
    onClearCompleted: jest.fn(),
  }, propOverrides)

  const renderer = createRenderer()
  renderer.render(<Footer {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output
  }
}

const getTextContent = (elem: any) => {
  const children = Array.isArray(elem.props.children) ?
    elem.props.children : [ elem.props.children ]

  return children.reduce((out: any, child: any) =>
    // Concatenate the text
    // Children are either elements or text strings
    out + (child.props ? getTextContent(child) : child)
  , '')
}

describe('components', () => {
  describe('Footer', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('footer')
      expect(output.props.className).toBe('footer')
    })

    it('should display active count when 0', () => {
      const { output } = setup({ activeCount: 0 })
      const [ count ] = output.props.children
      expect(getTextContent(count)).toBe('No items left')
    })

    it('should display active count when above 0', () => {
      const { output } = setup({ activeCount: 1 })
      const [ count ] = output.props.children
      expect(getTextContent(count)).toBe('1 item left')
    })

    it('should render filters', () => {
      const todoFilters = [
        VisibilityFilters.SHOW_ALL, 
        VisibilityFilters.SHOW_ACTIVE, 
        VisibilityFilters.SHOW_COMPLETED
      ]
      const { output } = setup()
      const [ , filters ] = output.props.children
      expect(filters.type).toBe('ul')
      expect(filters.props.className).toBe('filters')
      expect(filters.props.children.length).toBe(3)
      filters.props.children.forEach(function checkFilter(filter: any, i: number) {
        expect(filter.type).toBe('li')
        const a = filter.props.children

        console.log(a)

        expect(a.type).toBe(FilterLink)
        expect(a.props.filter).toBe(todoFilters[i])        
        expect(a.props.children).toBe(filterTitles[i])        
      })
    })

    it('shouldnt show clear button when no completed todos', () => {
      const { output } = setup({ completedCount: 0 })
      const [ , , clear ] = output.props.children
      expect(clear).toBe(false)
    })

    it('should render clear button when completed todos', () => {
      const { output } = setup({ completedCount: 1 })
      const [ , , clear ] = output.props.children
      expect(clear.type).toBe('button')
      expect(clear.props.className).toBe('clear-completed')
      expect(clear.props.children).toBe('Clear completed')
    })

    it('should call onClearCompleted on clear button click', () => {
      const { output, props } = setup({ completedCount: 1 })
      const [ , , clear ] = output.props.children
      clear.props.onClick({})
      expect(props.onClearCompleted).toBeCalled()
    })
  })
})
