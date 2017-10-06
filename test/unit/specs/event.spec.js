/* eslint-disable */
import {createTest, createVue} from '../utils';
import PullTo from '../../../src';

const vm = createVue({
  template: `
        <pull-to></pull-to>
      `,
  components: { PullTo }
}, true);

const elem = vm.$el;

describe('event', () => {
  it('top pull', (done) => {
    let res = false;
    vm.$on('top-pull', function () {
      res = true;
    });
    const event = document.createEvent('Events');
    event.initEvent('touchmove', true, true);
    console.log(event);
    elem.dispatchEvent(event);
  });
});
