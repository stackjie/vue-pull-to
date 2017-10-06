<template>
  <pull-to @top-pull="topPull" @bottom-pull="bottomPull" @scroll="scroll">
    <ul class="list">
      <li>
        (=ﾟωﾟ)ﾉ
      </li>
      <li>
        （/TДT)/
      </li>
      <li>
        π__π
      </li>
      <li>
        (´・ω・`)
      </li>
      <li>
        (☆ﾟ∀ﾟ)
      </li>
      <li>
        (╭￣3￣)╭♡
      </li>
      <li>
        (=ﾟωﾟ)ﾉ
      </li>
      <li>
        （/TДT)/
      </li>
      <li>
        π__π
      </li>
      <li>
        (´・ω・`)
      </li>
      <li>
        (☆ﾟ∀ﾟ)
      </li>
      <li>
        (╭￣3￣)╭♡
      </li>
      <li>
        (=ﾟωﾟ)ﾉ
      </li>
      <li>
        （/TДT)/
      </li>
      <li>
        π__π
      </li>
      <li>
        (´・ω・`)
      </li>
      <li>
        (☆ﾟ∀ﾟ)
      </li>
      <li>
        (╭￣3￣)╭♡
      </li>
      <li>
        (=ﾟωﾟ)ﾉ
      </li>
      <li>
        （/TДT)/
      </li>
      <li>
        π__π
      </li>
      <li>
        (´・ω・`)
      </li>
      <li>
        (☆ﾟ∀ﾟ)
      </li>
      <li>
        (╭￣3￣)╭♡
      </li>
      <li>
        (=ﾟωﾟ)ﾉ
      </li>
      <li>
        （/TДT)/
      </li>
      <li>
        π__π
      </li>
      <li>
        (´・ω・`)
      </li>
      <li>
        (☆ﾟ∀ﾟ)
      </li>
      <li>
        (╭￣3￣)╭♡
      </li>
    </ul>
  </pull-to>
</template>

<style scoped rel="stylesheet/less" lang="less">
</style>

<script type="text/babel">
  import PullTo from '@/vue-pull-to';

  export default {
    name: 'bounce-scroll',
    components: {
      PullTo
    },
    methods: {
      topPull() {
        console.log(123);
      },
      bottomPull() {
        console.log(123);
      },
      scroll(e) {
        console.log(e);
      }
    }
  };
</script>
