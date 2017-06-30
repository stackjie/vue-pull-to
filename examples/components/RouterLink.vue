<template>
  <a
    v-bind:href="href"
    v-on:click="go">
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../routes';

  export default {
    props: {
      href: {
        type: String,
        required: true
      }
    },
    methods: {
      go (event) {
        event.preventDefault();
        this.$root.currentRoute = this.href;
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        );
      }
    }
  };
</script>
