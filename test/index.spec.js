import {
  mount
} from '@vue/test-utils'
import Index from '@/pages/index'

describe('Index', () => {
  describe('component', () => {
    test('Display Header', () => {
      let wrapper = mount(Index)
      expect(wrapper.vm).toBeTruthy;
    });
    test('Display Prefectures', () => {
      let wrapper = mount(Index)
      expect(wrapper.vm).toBeTruthy;
    });
    test('Feach Prefectures From RESAS API', () => {
      let wrapper = mount(Index)
      expect(wrapper.vm.$props);
    });
  });
});
