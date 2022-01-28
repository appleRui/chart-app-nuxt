import {
  mount
} from '@vue/test-utils'
import Prefectures from '@/components/prefectures'

describe('Prefectures', () => {
  test('display title', () => {
    let wrapper = mount(Prefectures);
    const ttl = wrapper.find('.prefectures_ttl').text();
    expect(ttl).toBe('都道府県');
  });

  test('Init Prefectures', () => {
    let wrapper = mount(Prefectures);
    console.log(wrapper.vm.prefectures.length);
    // expect(wrapper.vm.prefectures).toBeTruthy;
  });
});
