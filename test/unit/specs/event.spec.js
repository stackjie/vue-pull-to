/* eslint-disable */
import {createTest, createVue, createEvent} from '../utils';
import PullTo from '../../../src';

describe('event', () => {
  it('top pull', (done) => {
    let res;
    const vm = createVue({
      template: `
        <div style="height: 500px">
          <pull-to ref="pt" @top-pull="onTopPull"><div></div></pull-to>
        </div>
      `,
      components: {PullTo},
      methods: {
        onTopPull(e) {
          res = e;
        }
      }
    }, true);

    let eTouchStart = createEvent('touchstart', true, true);
    eTouchStart.touches = [{clientY: 0}];
    let eTouchMove = createEvent('touchmove', true, true);
    eTouchMove.touches = [{clientY: 10}];

    const elem = vm.$refs.pt.$refs['scroll-container'];
    elem.dispatchEvent(eTouchStart);
    elem.dispatchEvent(eTouchMove);

    setTimeout(() => {
      expect(res).to.be.exist;
      done();
    }, 350);
  });

  it('bottom pull', (done) => {
    let res;
    const vm = createVue({
      template: `
         <div style="height: 500px">
          <pull-to ref="pt" @bottom-pull="onBottomPull"><div></div></pull-to>
        </div>
      `,
      components: {PullTo},
      methods: {
        onBottomPull(e) {
          res = e;
        }
      }
    }, true);

    let eTouchStart = createEvent('touchstart', true, true);
    eTouchStart.touches = [{clientY: 0}];
    let eTouchMove = createEvent('touchmove', true, true);
    eTouchMove.touches = [{clientY: -30}];

    const elem = vm.$refs.pt.$refs['scroll-container'];
    elem.dispatchEvent(eTouchStart);
    elem.dispatchEvent(eTouchMove);

    setTimeout(() => {
      expect(res).to.be.exist;
      done();
    }, 350);
  });

  it('top state change', (done) => {
    let res;
    const vm = createVue({
      template: `
         <div style="height: 500px">
          <pull-to ref="pt" @top-state-change="onTopStateChange" :top-load-method="onTopLoadMethod"><div></div></pull-to>
        </div>
      `,
      components: {PullTo},
      methods: {
        onTopLoadMethod() {},
        onTopStateChange(e) {
          res = e;
        }
      }
    }, true);

    let eTouchStart = createEvent('touchstart', true, true);
    eTouchStart.touches = [{clientY: 0}];
    let eTouchMove = createEvent('touchmove', true, true);
    eTouchMove.touches = [{clientY: 60}];

    const elem = vm.$refs.pt.$refs['scroll-container'];
    elem.dispatchEvent(eTouchStart);
    elem.dispatchEvent(eTouchMove);

    setTimeout(() => {
      expect(res).to.be.exist;
      done();
    }, 20);
  });

  it('bottom state change', (done) => {
    let res;
    const vm = createVue({
      template: `
         <div style="height: 500px">
          <pull-to ref="pt" @bottom-state-change="onBottomStateChange" :bottom-load-method="onBottomLoadMethod"><div></div></pull-to>
        </div>
      `,
      components: {PullTo},
      methods: {
        onBottomLoadMethod() {},
        onBottomStateChange(e) {
          res = e;
        }
      }
    }, true);

    let eTouchStart = createEvent('touchstart', true, true);
    eTouchStart.touches = [{clientY: 0}];
    let eTouchMove = createEvent('touchmove', true, true);
    eTouchMove.touches = [{clientY: -60}];

    const elem = vm.$refs.pt.$refs['scroll-container'];
    elem.dispatchEvent(eTouchStart);
    elem.dispatchEvent(eTouchMove);

    setTimeout(() => {
      expect(res).to.be.exist;
      done();
    }, 20);
  });

  it('infinite scroll', (done) => {
    let res = false;
    const vm = createVue({
      template: `
         <div style="height: 500px">
          <pull-to ref="pt" @infinite-scroll="onInfiniteScroll"><div></div></pull-to>
        </div>
      `,
      components: {PullTo},
      methods: {
        onInfiniteScroll(e) {
          res = true;
        }
      }
    }, true);

    let event = createEvent('scroll', true, true);
    const elem = vm.$refs.pt.$refs['scroll-container'];
    elem.dispatchEvent(event);

    setTimeout(() => {
      expect(res).to.be.ok;
      done();
    }, 420);
  });

  it('scroll', (done) => {
    let res;
    const vm = createVue({
      template: `
         <div style="height: 500px">
          <pull-to ref="pt" @scroll="onScroll"><div></div></pull-to>
        </div>
      `,
      components: {PullTo},
      methods: {
        onScroll(e) {
          res = e;
        }
      }
    }, true);

    let event = createEvent('scroll', true, true);
    const elem = vm.$refs.pt.$refs['scroll-container'];
    elem.dispatchEvent(event);

    setTimeout(() => {
      expect(res).to.be.exist;
      done();
    }, 200);
  });

  it('touch sensitivity', (done) => {
    let timeout;
    const vm = createVue({
      template: `
        <div style="height: 500px">
          <pull-to ref="pt" @top-pull="onTouch" @bottom-pull="onTouch"
                   @top-state-change="onTouch"
                   @bottom-state-change="onTouch"
                   :is-touch-sensitive="false"><div></div></pull-to>
        </div>
      `,
      components: {PullTo},
      methods: {
        onTouch(e) {
          if (timeout === null) return;
          if (timeout) clearTimeout(timeout);
          timeout = null;
          expect.fail();
          done();
        }
      }
    }, true);

    let eTouchStart = createEvent('touchstart', true, true);
    eTouchStart.touches = [{clientY: 0}];
    let eTouchMove = createEvent('touchmove', true, true);
    eTouchMove.touches = [{clientY: 10}];

    const elem = vm.$refs.pt.$refs['scroll-container'];
    elem.dispatchEvent(eTouchStart);
    elem.dispatchEvent(eTouchMove);

    if (timeout !== null) {
      timeout = setTimeout(() => {
        timeout = null;
        done();
      }, 350);
    }
  });

  it('scroll sensitivity', (done) => {
    let timeout;
    const vm = createVue({
      template: `
         <div style="height: 500px">
          <pull-to ref="pt" @scroll="onScroll" @infinite-scroll="onScroll"
                   :is-scroll-sensitive="false"><div></div></pull-to>
        </div>
      `,
      components: {PullTo},
      methods: {
        onScroll(e) {
          if (timeout === null) return;
          if (timeout) clearTimeout(timeout);
          timeout = null;
          expect.fail();
          done();
        }
      }
    }, true);

    let event = createEvent('scroll', true, true);
    const elem = vm.$refs.pt.$refs['scroll-container'];
    elem.dispatchEvent(event);

    if (timeout !== null) {
      timeout = setTimeout(() => {
        timeout = null;
        done();
      }, 200);
    }
  });
});
