import { createTest, waitFor, waitForSeq, touch } from '../utils';
import PullTo from '../../../src';

describe('event', () => {
  it('top pull', done => createTest({
    template: `
      <div style="height: 500px">
        <pull-to ref="pt"><div></div></pull-to>
      </div>
    `,
    components: { PullTo }
  }, true, done, ({ $refs: { pt } }, done) => {
    pt.$on('top-pull', waitFor(350, done, true));

    const elem = pt.$refs['scroll-container'];
    touch(elem, 'touchstart', 0);
    touch(elem, 'touchmove', 10);
  }));

  it('bottom pull', done => createTest({
    template: `
       <div style="height: 500px">
        <pull-to ref="pt"><div></div></pull-to>
      </div>
    `,
    components: { PullTo }
  }, true, done, ({ $refs: { pt } }, done) => {
    pt.$on('bottom-pull', waitFor(350, done, true));

    const elem = pt.$refs['scroll-container'];
    touch(elem, 'touchstart', 0);
    touch(elem, 'touchmove', -30);
  }));

  it('top pull negative', done => createTest({
    template: `
      <div style="height: 500px">
        <pull-to ref="pt" :is-top-bounce="false"><div></div></pull-to>
      </div>
    `,
    components: { PullTo }
  }, true, done, ({ $refs: { pt } }, done) => {
    pt.$on('top-pull', waitFor(350, done, false, true));

    const elem = pt.$refs['scroll-container'];
    touch(elem, 'touchstart', 0);
    touch(elem, 'touchmove', 10);
  }));

  it('bottom pull negative', done => createTest({
    template: `
       <div style="height: 500px">
        <pull-to ref="pt" :is-bottom-bounce="false"><div></div></pull-to>
      </div>
    `,
    components: { PullTo }
  }, true, done, ({ $refs: { pt } }, done) => {
    pt.$on('bottom-pull', waitFor(350, done, false, true));

    const elem = pt.$refs['scroll-container'];
    touch(elem, 'touchstart', 0);
    touch(elem, 'touchmove', -30);
  }));

  function testStateChange(which, isAsync, isBottomKeepScroll, loadedState, done) {
    let actionLoaded;
    return createTest({
      template: `
        <div style="height: 500px">
          <pull-to ref="pt"
                   :is-bottom-keep-scroll="keepScroll"
                   :top-config="{ loadedStayTime: 0 }"
                   :bottom-config="{ loadedStayTime: 0 }"
                   :top-load-method="load"
                   :bottom-load-method="load">
            <div></div>
          </pull-to>
        </div>
      `,
      components: { PullTo },
      computed: {
        keepScroll: () => isBottomKeepScroll
      },
      methods: {
        load(sf) {
          if (isAsync) {
            actionLoaded = sf;
          } else {
            sf(loadedState);
          }
        }
      }
    }, true, done, ({ $refs: { pt } }, done) => {
      const goal = waitForSeq(1e3, done, [
        'pull',
        'trigger',
        'loading',
        `loaded-${loadedState === undefined ? 'done' : loadedState}`,
        ''
      ]);
      expect(pt.state).to.be.equal('');
      expect(pt.direction).to.be.equal(0);
      pt.$on(which < 0 ? 'bottom-state-change' : 'top-state-change', (s) => {
        try {
          expect(pt.distance * which).to.not.be.below(0);
          expect(pt.direction).to.be.equal({
            '-1': 'up', 0: 0, 1: 'down'
          }[Math.sign(pt.distance)]);
          expect(pt.state).to.be.equal(s);
        } catch (e) {
          goal(null, e);
          return;
        }
        return goal(s);
      });
      pt.$on(which < 0 ? 'top-state-change' : 'bottom-state-change',
             () => goal(null, new Error(`unexpected ${which < 0 ? 'top' : 'bottom'} state`)));
      expect(pt.state).to.be.equal('');

      const elem = pt.$refs['scroll-container'];
      const trans = [
        [ 'touchstart', 0 ],
        [ 'touchend' ],
        [ 'touchstart', 0 ],
        [ 'touchmove', which ],
        [ 'touchmove', which * 32767 ],
        [ 'touchend' ]
      ];
      if (isAsync) {
        trans.push(
          [ 'touchstart', 0 ],
          [ 'touchmove', which * -60 ],
          [ 'touchmove', which * 60 ],
          [ 'touchmove', which * -32767 ],
          [ 'touchmove', which * 32767 ],
          [ 'touchmove', which * 50 ],
          [ 'touchmove', which * 50, 1000 ],
          [ 'touchmove', which * 50, -1000 ],
          [ 'touchmove', 0 ],
          [ 'touchend' ]);
      }
      let i = 0;
      (function next() {
        if (!(i < trans.length)) {
          if (actionLoaded) actionLoaded(loadedState);
          return;
        }
        touch(elem, ...trans[i++]);
        pt.$nextTick(next);
      })();
    });
  }

  [+1, -1].forEach((which) => {
    [false, true].forEach((isAsync) => {
      [false, true].forEach((isBottomKeepScroll) => {
        ['fail', 'done'].forEach((loadedState) => {
          const words = [`loadstate=${loadedState}`];
          if (isAsync) words.push('async');
          if (isBottomKeepScroll) words.push('keep-scroll');
          it(`${which < 0 ? 'bottom' : 'top'} state change (${words.join(', ')})`,
             done => testStateChange(which, isAsync, isBottomKeepScroll, loadedState, done));
        });
      });
    });
  });

  it('infinite scroll', done => createTest({
    template: `
       <div style="height: 500px">
        <pull-to ref="pt"><div></div></pull-to>
      </div>
    `,
    components: { PullTo }
  }, true, done, ({ $refs: { pt } }, done) => {
    pt.$on('infinite-scroll', waitFor(420, done, () => {}));

    const elem = pt.$refs['scroll-container'];
    elem.dispatchEvent(new Event('scroll', {
      bubbles: true, cancelable: true
    }));
  }));

  it('scroll', done => createTest({
    template: `
       <div style="height: 500px">
        <pull-to ref="pt"><div></div></pull-to>
      </div>
    `,
    components: { PullTo }
  }, true, done, ({ $refs: { pt } }, done) => {
    pt.$on('scroll', waitFor(200, done, true));

    const elem = pt.$refs['scroll-container'];
    elem.dispatchEvent(new Event('scroll', {
      bubbles: true, cancelable: true
    }));
  }));

  let id = 0;
  [false, true].forEach((isSensitive) => {
    function toggleTester(vm, done, events, wc, fn, endfn) {
      const myid = id++;
      const { $refs: { pt } } = vm;
      const elem = pt.$refs['scroll-container'];
      let waitCount = 0;
      let phase = 0;
      let flag = isSensitive;
      const goal = waitFor(200, done, function (x) {
        if (x != null) throw x;
      }, function () {
        if (phase < 1 || waitCount > 0) throw new Error('timeout');
      });
      function onTouch() {
        if (waitCount <= 0) {
          goal(new Error('unexpected touch event'));
          return;
        }
        if (--waitCount <= 0) {
          (phase === 1 ? goal : cont)();
        }
      }
      function cont() {
        phase = 1;
        if (flag && endfn) endfn(elem);
        vm.isSensitive = flag = !flag;
        vm.$nextTick(() => {
          waitCount = flag ? wc : 0;
          fn(elem);
        });
      }
      events.forEach(n => pt.$on(n, onTouch));

      waitCount = flag ? wc : 0;
      fn(elem);
      if (!flag && phase === 0) cont();
    }

    it(`touch sensitivity (initial=${isSensitive})`, done => createTest({
      template: `
        <div style="height: 500px">
          <pull-to ref="pt"
            :is-throttle-top-pull="false"
            :is-throttle-bottom-pull="false"
            :is-touch-sensitive="isSensitive"><div></div></pull-to>
        </div>
      `,
      data() {
        return { isThrottle: false, isSensitive };
      },
      components: { PullTo }
    }, true, done, (vm, done) => toggleTester(
      vm, done, ['top-pull', 'bottom-pull'], 2, (elem) => {
        touch(elem, 'touchstart', 0);
        touch(elem, 'touchmove', -1e4);
        touch(elem, 'touchmove', 1e4);
      }, elem => touch(elem, 'touchend'))
    ));

    it(`scroll sensitivity (initial=${isSensitive})`, done => createTest({
      template: `
         <div style="height: 500px">
          <pull-to ref="pt"
            :is-throttle-scroll="false"
            :is-scroll-sensitive="isSensitive"><div></div></pull-to>
        </div>
      `,
      data() {
        return { isSensitive };
      },
      components: { PullTo }
    }, true, done, (vm, done) => toggleTester(
      vm, done, ['scroll'], 1, (elem) => {
        elem.dispatchEvent(new Event('scroll', {
          bubbles: true, cancelable: true
        }));
      })
    ));
  });
});
