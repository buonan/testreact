import React from 'react'
import { mount, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Home from '../home'

configure({adapter: new Adapter()});
describe('Home tests', ()=> {
  it('props test', ()=>{
    const component = mount(<Home name='Chris' />)
    expect(component.find('Home').exists()).toBe(true)
    expect(component.props().name).toBe('Chris')
  })

  it('should match snapshot and styles for default props', ()=>{
    const component = mount(<Home name='Bob' />)
    console.log(component)
    expect(component).toMatchSnapshot()
  })
})