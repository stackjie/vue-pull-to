/* eslint-disable */
export function topPull() {
  this.topState = 'pull';
  this.topText = this.topConfig.pullText;
}

export function topTrigger() {
  this.topState = 'trigger';
  this.topText = this.topConfig.triggerText;
}

export function topLoading() {
  this.topState = 'loading';
  this.topText = this.topConfig.loadingText;
  this.scrollTo(this.topConfig.stayDistance);
  this.topLoadMethod(this.topLoaded);
}

export const topLoaded = (loadState = 'done') => {
  this.topState = `loaded-${loadState}`;
  this.topText = loadState === 'done'
    ? this.topConfig.doneText
    : this.topConfig.failText;
  setTimeout(() => {
    this.scrollTo(0);

    // reset state
    setTimeout(() => {
      this.topState = '';
    }, 200);
  }, this.topConfig.loadedStayTime);
};

export function bottomPull() {
  this.bottomState = 'pull';
  this.bottomText = this.bottomConfig.pullText;
}

export function bottomTrigger() {
  this.bottomState = 'trigger';
  this.bottomText = this.bottomConfig.triggerText;
}

export function bottomLoading() {
  this.bottomState = 'loading';
  this.bottomText = this.bottomConfig.loadingText;
  this.scrollTo(-this.bottomConfig.stayDistance);
  this.bottomLoadMethod(this.bottomLoaded);
}

export function bottomLoaded(loadState = 'done') {
  this.bottomState = `loaded-${loadState}`;

  this.bottomText = loadState === 'done'
    ? this.bottomConfig.doneText
    : this.bottomConfig.failText;
  setTimeout(() => {
    this.scrollTo(0);

    // reset state
    setTimeout(() => {
      this.bottomState = '';
    }, 200);
  }, this.bottomConfig.loadedStayTime);
}
