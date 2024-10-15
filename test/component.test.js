import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import AddUser from '../src/views/demo/AddUser.vue';

describe('component of LoginPage.vue', () => {
  it('should render', () => {
    const wrapper = mount(AddUser);
    expect(wrapper.text()).toContain('Username');
    expect(wrapper.text()).toContain('Password');

    // to check the component html is match snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be interactive', async () => {
    const wrapper = mount(AddUser);
    expect(wrapper.find('.username').exists()).toBe(true);
    expect(wrapper.find('.password').exists()).toBe(true);

    const usernameInput = wrapper.find('.username .vue-input__inner');
    await usernameInput.setValue('admin');

    const passwordInput = wrapper.find('.password .vue-input__inner');
    await passwordInput.setValue('123456');

    expect(wrapper.vm.form.username).toBe('admin');
    expect(wrapper.vm.form.password).toBe('123456');

    await wrapper.get('button').trigger('click');
  });
});
