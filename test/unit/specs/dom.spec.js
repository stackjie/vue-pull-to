/* eslint-disable */
import {createTest, createVue} from '../utils';
import PullTo from '../../../src';

describe('dom', () => {
  let vm;
  it('create', () => {
    vm = createTest(PullTo, true);
    const elem = vm.$el;
    expect(elem.classList.contains('vue-pull-to-wrapper')).to.be.ok;
    expect(vm.$refs['scroll-container'].classList.contains('scroll-container')).to.be.true;
  });

  it('create action block', () => {
    vm = createTest(PullTo, {
      topLoadMethod: () => {},
      bottomLoadMethod: () => {}
    }, true);
    const elem = vm.$el;
    expect(elem.querySelectorAll('.action-block').length).to.be.equal(2);
  });

  it('set prop BlockHeight', () => {
    vm = createTest(PullTo, {
      topLoadMethod: () => {},
      bottomLoadMethod: () => {},
      topBlockHeight: 60,
      bottomBlockHeight: 60
    }, true);
    const elems = vm.$el.querySelectorAll('.action-block');
    expect(elems[0].style.height).to.be.equal('60px');
    expect(elems[0].style.marginTop).to.be.equal('-60px');
    expect(elems[1].style.height).to.be.equal('60px');
    expect(elems[1].style.marginBottom).to.be.equal('-60px');
  });

  it('set wrapperHeight', () => {
    vm = createTest(PullTo, {
      wrapperHeight: '80%'
    }, true);
    expect(vm.$el.style.height).to.be.equal('80%');
  });
});
