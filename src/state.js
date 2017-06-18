export const topState = {
  currentState: '',
  actions: {
    pull(payload) {
      this.currentState = 'pull';
    },

    trigger(payload) {
      this.currentState = 'trigger';
    },

    loading(payload) {
      this.currentState = 'loading';
    },

    loaded(payload) {
      this.currentState = 'loaded';
    }
  }
};

export const bottomState = {
  currentState: '',
  actions: {
    pull(payload) {
      this.currentState = 'pull';
    },

    trigger(payload) {
      this.currentState = 'trigger';
    },

    loading(payload) {
      this.currentState = 'loading';
    },

    loaded(payload) {
      this.currentState = 'loaded';
    }
  }
}


