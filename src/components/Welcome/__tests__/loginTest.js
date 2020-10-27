import React, { useState as useMockState, useEffect as useMockEffect } from 'react'
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme'
import Login from '../login'

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe('Login Functional Component tests', () => {
  it('setLoggedIn test', () => {
    const setLoggedIn = jest.fn(isLoggedIn => console.log(`setLoggedIn ${isLoggedIn}!`))
    useMockState.mockImplementation(isLoggedIn => [isLoggedIn, setLoggedIn]);

    const component = mount(<Login />)
    expect(component.find('Login').exists()).toBe(true)
    const b = component.find('button')
    b.simulate('click')
    expect(setLoggedIn).toHaveBeenCalledWith(true)
  })

  it('setMounted test', () => {
    const setMounted = jest.fn(isMounted => console.log(`setMounted ${isMounted}!`))
    useMockState.mockImplementation(isMounted => [isMounted, setMounted]);

    const component = mount(<Login />)
    expect(component.find('Login').exists()).toBe(true)
    expect(setMounted).toHaveBeenCalledWith(true)
  })

})

describe('Login Functional Component tests', () => {
  it('useEffect test', () => {
    const useEffect = jest.spyOn(React, "useEffect");
    useEffect.mockImplementationOnce(console.log(`useMockEffect!`));
    const component = mount(<Login />)
    expect(useEffect).toHaveBeenCalled()
  })
})