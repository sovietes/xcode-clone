<template>
  <section class="partners">
    <h3>Nossos parceiros</h3>
    <img src="../../assets/img/goph.png" />
  </section>
</template>

<script>
import { partners } from '../../utils/db.json'

export default {
  computed: {
    $partners() {
      return partners
    }
  }
}
</script>

<style lang="css" scoped>
.partners {
  width: 100%;
  height: 100vh;
  background-color: var(--bg-white);
}
</style>
