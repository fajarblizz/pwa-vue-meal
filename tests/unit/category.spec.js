import { mount } from '@vue/test-utils';
import Category from '@/components/Category.vue';

describe('category.vue', () => {
  it('render props untuk component category', () => {
    const wrapper = mount(Category)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})