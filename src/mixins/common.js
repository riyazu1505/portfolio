export default {
  methods: {
    $_open (url) {
      window.open(url, 'blank')
    },
    $_scrollIntoView (selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
    }
  }
}