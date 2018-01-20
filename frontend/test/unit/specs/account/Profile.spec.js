import Vue from 'vue'
import Profile from '@/pages/account/Profile'

describe('Profile.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Profile)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Profile')
  })
})
