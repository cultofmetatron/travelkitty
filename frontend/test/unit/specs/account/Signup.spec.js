
import Vue from 'vue'
import Signup from '@/pages/account/Signup'

describe('Signup.vue', () => {
  
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Signup)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Signup')
  })
  
})
