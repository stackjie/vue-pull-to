<template>
  <div class="pull-wrap">
    <slot name="top-info">

    </slot>
    <slot name="content">

    </slot>
  </div>
</template>

<style>
  .pull-wrap {
    position: relative;
  }
</style>

<script type="text/babel">
  export default {
    name: 'pulldown-pullup',
    props: {
    },
    data() {
      return {

      };
    },
    watch: {

    },
    methods: {
    },
    mounted() {
      this.init();
    }
  };
</script>

