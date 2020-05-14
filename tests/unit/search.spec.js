import { mount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

describe('search.vue', () => {
  it('render props untuk component search', () => {
    const wrapper = mount(Search)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})