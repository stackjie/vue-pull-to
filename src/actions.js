const topAction = {
  pull(scope) {
    scope.topState = 'pull';
    scope.topText = scope.topConfig.pullText;
  },

  trigger(scope) {
    scope.topState = 'trigger';
    scope.topText = scope.topConfig.triggerText;
  },

  loading(scope) {
    scope.topState = 'loading';
    scope.topText = scope.topConfig.loadingText;
    scope.scrollTo(scope.topConfig.stayDistance);
    scope.topLoadMethod(scope.topLoaded);
  },

  loaded(scope, loadState) {
    scope.topState = `loaded-${loadState}`;

    scope.topText = loadState === 'done'
      ? scope.topConfig.doneText
      : scope.topConfig.failText;
    setTimeout(() => {
      scope.scrollTo(0);

      // reset state
      setTimeout(() => {
        scope.topState = '';
      }, 200);
    }, scope.topConfig.loadedStayTime);
  }
};

const bottomAction = {
  pull(scope) {
    scope.bottomState = 'pull';
    scope.bottomText = scope.bottomConfig.pullText;
  },

  trigger(scope) {
    scope.bottomState = 'trigger';
    scope.bottomText = scope.bottomConfig.triggerText;
  },

  loading(scope) {
    scope.bottomState = 'loading';
    scope.bottomText = scope.bottomConfig.loadingText;
    scope.scrollTo(-scope.bottomConfig.stayDistance);
    scope.bottomLoadMethod(scope.bottomLoaded);
  },

  loaded(scope, loadState) {
    scope.bottomState = `loaded-${loadState}`;

    scope.bottomText = loadState === 'done'
      ? scope.bottomConfig.doneText
      : scope.bottomConfig.failText;
    setTimeout(() => {
      scope.scrollTo(0);

      // reset state
      setTimeout(() => {
        scope.bottomState = '';
      }, 200);
    }, scope.bottomConfig.loadedStayTime);
  }
};

export { topAction, bottomAction };
