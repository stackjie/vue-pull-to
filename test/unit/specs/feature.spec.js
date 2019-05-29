/* eslint-disable */
import { throttle } from '../../../src/utils';

describe('throttle', () => {
  it('should pass through its arguments', () => {
    const obj = { a: 1 };
    let run = false;
    try {
      throttle(function () {
        if (run == null) return; // do not interrupt other tests
        expect(this).to.equal(obj);
        expect(arguments.length).to.equal(42);
        run = true;
      }, 0, -Infinity).apply(obj, Array(42));
      expect(run).to.be.true;
    } finally {
      run = null;
    }
  });

  it('should be identity when delay == null', () => {
    function noop() {}
    expect(throttle(noop)).to.be.equal(noop);
    expect(throttle(noop, null)).to.be.equal(noop);
  });

  it('should correctly handle delay', (done) => {
    let state = 'pre';
    let to;
    const fn = throttle(function () {
      if (state == null) return;
      try {
        expect(state).to.equal('post');
        state = 'fired';
      } catch (e) {
        if (to != null) {
          clearTimeout(to);
          to = null;
        }
        done(e);
      }
    }, 0);
    for (let i = 0; i < 64; i++) fn();
    to = setTimeout(function () {
      to = null;
      try {
        expect(state).to.equal('fired');
      } catch (e) {
        done(e);
        return;
      }
      done();
    }, 100);
    state = 'post';
  });

  it('should correctly handle must-run delay', (done) => {
    let state = 'pre';
    let to;
    const fn = throttle(function () {
      switch (state) {
        case null: return;
        case 'post': state = '1-pre'; break;
        case '1-pre': state = '1-post'; break;
        default:
          try {
            expect.fail("unexpected state: " + state);
          } catch (e) {
            if (to != null) {
              clearTimeout(to);
              to = null;
            }
            done(e);
            break;
          }
          done();
      }
    }, 0, 3e-16);
    fn();
    to = setTimeout(function () {
      to = null;
      try {
        expect(state).to.be.equal('1-pre');
        fn();
        expect(state).to.be.equal('1-post');
      } catch (e) {
        done(e);
        return;
      }
      done();
    }, 100);
    state = 'post';
  });
});
