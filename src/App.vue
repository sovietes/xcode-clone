<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import { Header, Main } from './components/organisms'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  created() {
    document.title = 'XCode Clone'
  },

  mounted() {
    let icons = document.createElement('script')
    icons.setAttribute('type', 'module')
    icons.setAttribute(
      'src',
      'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
    )
    document.body.appendChild(icons)
  }
}
</script>

<style></style>
