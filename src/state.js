export const topState = {
  state: '',
  actions: {
    pull(payload) {
      this.state = 'pull';
    },

    trigger(payload) {
      this.state = 'trigger';
    },

    loading(payload) {
      this.state = 'loading';
    },

    loaded(payload) {
      this.state = 'loaded';
    }
  }
};

export const bottomState = {
  state: '',
  actions: {
    pull(payload) {
      this.state = 'pull';
    },

    trigger(payload) {
      this.state = 'trigger';
    },

    loading(payload) {
      this.state = 'loading';
    },

    loaded(payload) {
      this.currentState = 'loaded';
    }
  }
}


