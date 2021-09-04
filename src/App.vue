<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import { Header } from './components/organisms'

export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    document.title = 'XCode Clone'
  }
}
</script>

<style></style>
