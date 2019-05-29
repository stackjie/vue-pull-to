<script type="text/babel">
  import routes from '../routes';

  export default {
    name: 'router-view',
    props: {
      currentRoute: String,
      defaultRoute: String
    },
    render(h) {
      return h(routes[this.currentRoute] ||
               routes[this.defaultRoute] || 'div');
    }
  };
</script>
