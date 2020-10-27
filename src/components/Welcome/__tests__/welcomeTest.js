import React from 'react'
import { mount, shallow, render } from 'enzyme'
import Welcome from '../welcome'

describe('Welcome Component tests', ()=> {
  it('state test', ()=>{
    const component = mount(<Welcome />)
    expect(component.find('Welcome').exists()).toBe(true)
    expect(component.state().isMounted).toBe(true)
    expect(component.state().isClicked).toBe(false)

    const b = component.find('button')
    b.simulate('click')
    expect(component.state().isClicked).toBe(true)
  })

  it('props test', ()=>{
    const component = mount(<Welcome name='Brian' />)
    expect(component.find('Welcome').exists()).toBe(true)
    expect(component.props().name).toBe('Brian')
  })

  it('should match snapshot and styles for default props', ()=>{
    const component = mount(<Welcome/>)
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot and styles for default props', ()=>{
    const component = render(<Welcome/>)
    console.log(component)
  })
})