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
  // pull(payload) {
  //   this.bottomState = 'pull';
  // },
  //
  // trigger(payload) {
  //   this.bottomState = 'trigger';
  // },
  //
  // loading(payload) {
  //   this.bottomState = 'loading';
  // },
  //
  // loaded(payload) {
  //   this.bottomState = 'loaded';
  // }
}

export { topAction, bottomAction };
