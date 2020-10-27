import main from '../main'

describe('Main tests', ()=> {
  it('True', ()=>{
    let r = main({doit:true})
    expect(r).toEqual(true)
  })
  it('False', ()=>{
    let r = main({doit:false})
    expect(r).toEqual(false)
  })
  it('Undefined', ()=>{
    let r = main(null)
    expect(r).toEqual(undefined)
  })
})