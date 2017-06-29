<script type="text/babel">
  import routes from '../routes'

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
        console.log('哈哈哈')
        this.currentRoute = window.location.pathname
      })
    }
  }
</script>
