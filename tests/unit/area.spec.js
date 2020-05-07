import { mount } from '@vue/test-utils';
import Area from '@/components/Area.vue';

describe('area.vue', () => {
  it('render props untuk component area', () => {
    const wrapper = mount(Area)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})