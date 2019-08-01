/* eslint-disable */
import { createTest, touch } from '../utils';
import PullTo from '../../../src';

describe('dom', () => {
  it('create', () => createTest(PullTo, true, (vm) => {
    expect(vm.$el.classList.contains('vue-pull-to-wrapper')).to.be.ok;
    expect(vm.$refs['scroll-container'].classList.contains('scroll-container')).to.be.true;
  }));

  it('create action block', () => createTest(PullTo, {
    topLoadMethod() {},
    bottomLoadMethod() {}
  }, true, (vm) => {
    expect(vm.$refs['action-block-top'].classList.contains('action-block')).to.be.true;
    expect(vm.$refs['action-block-bottom'].classList.contains('action-block')).to.be.true;
  }));

  it('set prop BlockHeight', () => createTest(PullTo, {
    topLoadMethod() {},
    bottomLoadMethod() {},
    topBlockHeight: 60,
    bottomBlockHeight: 60
  }, true, (vm) => {
    expect(vm.$refs['action-block-top'].style).to.be.a('CSSStyleDeclaration')
      .but.not.an('array').that.includes({ height: '60px', marginTop: '-60px' });
    expect(vm.$refs['action-block-bottom'].style).to.be.a('CSSStyleDeclaration')
      .but.not.an('array').that.includes({ height: '60px', marginTop: '-60px' });
  }));

  it('set wrapperHeight', () => createTest(PullTo, {
    wrapperHeight: '80%'
  }, true, (vm) => {
    expect(vm.$el.style).to.be.a('CSSStyleDeclaration')
      .but.not.an('array').that.includes({ height: '80%' });
  }));

  it('set useTransform false', () => createTest(PullTo, {
    useTransform: false,
    distanceIndex: 2
  }, true, (vm) => {
    expect(vm.$el.style).to.be.a('CSSStyleDeclaration')
      .but.not.an('array').that.includes({ position: 'relative' });

    const elem = vm.$refs['scroll-container'];
    touch(elem, 'touchstart', 0);
    touch(elem, 'touchmove', 200);

    expect(vm.$el.style.top).toBe('-100px');
  }));
});
