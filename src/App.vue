<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './components/templates/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
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

<style>
#app {
  overflow-x: hidden;
}
</style>
