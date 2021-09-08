<template>
  <div class="container">
    <ImageSection />
    <TextSection />
  </div>
</template>

<script>
import { ImageSection, TextSection } from '../molecules'

export default {
  components: { ImageSection, TextSection }
}
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: var(--bg-dark);
  display: flex;
  justify-content: space-around;
}

@media screen and (max-width: 1100px) {
  .container {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
}
</style>
