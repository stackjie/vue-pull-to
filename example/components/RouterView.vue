<script type="text/babel">
  import routes from '../routers'

  export default {
    name: 'router-view',
    data() {
      return {
        currentRoute: window.location.pathname
      }
    },
    computed: {
      ViewComponent() {
        const matchingView = routes[this.currentRoute]
        if (matchingView) {
          return require('../pages/' + matchingView + '.vue')
        }
      }
    },
    render(h) {
      return h(this.ViewComponent)
    },
    created() {
      window.addEventListener('popstate', () => {
        this.currentRoute = window.location.pathname
      })
    }
  }
</script>
