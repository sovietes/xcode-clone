<template>
  <div>
    <div class="img">
      <img src="../../assets/img/logo.png" />
    </div>
    <vue-typed-js
      :strings="[
        'CRIAÇÃO DE SYSTEMS',
        'APLICADOR DE AULAS',
        'EQUIPE DE MARKETING',
        'SETOR DE INTELIGÊNCIA',
        'CONSTRUÇÃO DE BASES'
      ]"
      :typeSpeed="100"
      :backSpeed="80"
      :loop="true"
    >
      <span class="typing"></span>
    </vue-typed-js>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.img {
  width: 250px;
  margin-bottom: 250px;
}

.img img {
  max-width: 100%;
  display: block;
}
</style>
