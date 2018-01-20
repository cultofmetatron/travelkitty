import Vue from 'vue'
import Signin from '@/pages/account/Signin'

describe('Signin.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Signin)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Signin')
  })
})
