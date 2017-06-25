const topAction = {
  pull(scope) {
    scope.topState = 'pull';
    scope.topText = scope.topConfig.pullText;
  },

  pullCancel(scope) {
    scope.scrollTo(0);
  },

  trigger(scope) {
    scope.topState = 'trigger';
    scope.topText = scope.topConfig.triggerText;
  },

  loading(scope) {
    scope.topState = 'loading';
    scope.topText = scope.topConfig.loadingText;
    scope.scrollTo(scope.topConfig.stayDistance);
    scope.$emit('top-load', scope.topLoaded);
  },

  loaded(scope, loadState) {
    scope.topState = 'loaded';

    scope.topText = loadState === 'done'
      ? scope.topConfig.doneText
      : scope.topConfig.failText;
    setTimeout(() => {
      scope.scrollTo(0);
    }, scope.topConfig.loadedStayTime)
  }
};

const bottomAction = {
  pull(scope) {
    scope.bottomState = 'pull';
    scope.bottomText = scope.bottomConfig.pullText;
  },

  pullCancel(scope) {
    scope.scrollTo(0);
  },

  trigger(scope) {
    scope.bottomState = 'trigger';
    scope.bottomText = scope.bottomConfig.triggerText;
  },

  loading(scope) {
    scope.bottomState = 'loading';
    scope.bottomText = scope.bottomConfig.loadingText;
    scope.scrollTo(-scope.bottomConfig.stayDistance);
    scope.$emit('top-load', scope.topLoaded);
  },

  loaded(scope, loadState) {
    scope.bottomState = 'loaded';

    scope.bottomText = loadState === 'done'
      ? scope.bottomConfig.doneText
      : scope.bottomConfig.failText;
    setTimeout(() => {
      scope.scrollTo(0);
    }, scope.bottomConfig.loadedStayTime)
  }
}

export { topAction, bottomAction };
