const topAction = {
  scope: this,
  pull(payload) {
    const scope = this.scope;
    scope.topState = 'pull';
    scope.distance = (scope.currentY - scope.startY) / scope.distanceIndex;
  },

  trigger(payload) {
    this.topState = 'trigger';
  },

  loading(payload) {
    this.topState = 'loading';
  },

  loaded(payload) {
    this.topState = 'loaded';
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
