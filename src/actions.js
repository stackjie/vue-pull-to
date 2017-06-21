const topAction = {
  pull(scope) {
    scope.topState = 'pull';
    scope.topText = scope.topConfig.pullText;
    scope.distance = (scope.currentY - scope.startY) / scope.distanceIndex;
  },

  trigger(scope) {
    scope.topState = 'trigger';
    scope.topText = scope.topConfig.triggerText;
  },

  loading(scope) {
    scope.topState = 'loading';
    scope.topText = scope.topConfig.loadingText;
    scope.distance = scope.topConfig.stayDistance;
    scope.$emit('top-load', scope.topLoaded);
  },

  loaded(scope, loadState) {
    this.topState = 'loaded';

    scope.topText = loadState === 'done'
      ? scope.topConfig.doneText
      : scope.topConfig.failText;
    setTimeout(() => {
      scope.distance = 0;
    }, scope.topConfig.loadedStayTime)
  }
};

const bottomAction = {
  pull(payload) {
    this.bottomState = 'pull';
  },

  trigger(payload) {
    this.bottomState = 'trigger';
  },

  loading(payload) {
    this.bottomState = 'loading';
  },

  loaded(payload) {
    this.bottomState = 'loaded';
  }
}

export { topAction, bottomAction };
