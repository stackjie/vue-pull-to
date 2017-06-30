<script type="text/babel">
  import routes from '../routes';

  export default {
    name: 'router-view',
    computed: {
      ViewComponent() {
        const matchingView = routes[this.$root.currentRoute];
        if (matchingView) {
          return require('../pages/' + matchingView + '.vue');
        }
      }
    },
    render(h) {
      return h(this.ViewComponent);
    }
  };
</script>
