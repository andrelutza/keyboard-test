import HelloWorld from '@/components/HelloWorld.vue'
import { mount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()

/* eslint-env mocha */
describe('Connecting', () => {
  it('Correct connection status is shown', () => {
    const wrapper = mount(HelloWorld, { localVue })
    expect(wrapper.html().includes("Check this")).toBe(true)

  })
})