import {
  mount
} from '@vue/test-utils';
import Prefectures from '@/components/prefectures';
import {
  prefectures,
} from './sample/prefecture';

let wrapper

beforeAll(() => {
  wrapper = mount(Prefectures, {
    mocks: {
      $axios: {
        $get: jest.fn()
      }
    },
    propsData: {
      prefectures: prefectures
    }
  })
  window.alert = jest.fn()
})


describe('Prefectures', () => {
  test('Display Title', () => {
    const ttl = wrapper.find('.prefectures_ttl').text();
    expect(ttl).toBe('都道府県');
  });

  test('Display Prefectures', () => {
    const labels = wrapper.findAll('.prefecture__label');
    expect(labels.length).toBe(47);
  });

  test('Display Prefecture Name', () => {
    const label = wrapper.find('.prefecture');
    expect(label.text()).toBe(prefectures[0].name);
  });

  it('Should Access RESAS API Endpoint', async () => {
    await wrapper.find('.prefecture__label').trigger('click');
    expect(wrapper.vm.$axios.$get).toHaveBeenCalledWith(
      `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefectures[0].id}`
    );
  });
});
