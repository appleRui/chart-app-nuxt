import {
  mount
} from '@vue/test-utils';
import Index from '@/pages/index';

const wrapper = mount(Index)

describe('Index', () => {
  describe('component', () => {
    test('Display Header', () => {
      expect(wrapper.vm).toBeTruthy;
    });
    test('Display Prefectures', () => {
      expect(wrapper.vm).toBeTruthy;
    });
    test('Feach Prefectures From RESAS API', () => {
      expect(wrapper.vm.$props);
    });
  });
});
