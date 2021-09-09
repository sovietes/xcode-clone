<template>
  <section class="container">
    <div class="partners" v-scroll-reveal.origin="{ origin: 'top' }">
      <h3>Nossos parceiros</h3>
      <div class="partner">
        <div class="img">
          <img src="../../assets/img/goph.png" alt="Logo GOPH" />
        </div>
        <div class="text">
          <p class="name">goph - grupo organizado de polícia habbiana</p>
          <p class="description">Maior organização policial do Habbo hotel.</p>
          <a href="#">Ir ao site da GOPH</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  height: calc(100vh - 30px);
  background-color: var(--bg-white);
}

.partners {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.partner {
  width: 40%;
  background-color: var(--bg-dark);
  border-radius: 5px;
  display: flex;
  padding: 30px 20px;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
}

img {
  margin-right: 2rem;
  border-radius: 5px;
}

h3 {
  text-transform: uppercase;
  color: var(--font-dark);
  font-weight: 400;
  font-size: 1.875rem;
  letter-spacing: 5px;
  text-align: center;
}

.name {
  text-transform: uppercase;
  color: var(--font-white);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 25px;
}

.description {
  text-align: justify;
  color: var(--font-dark);
}

a {
  display: inline-flex;
  text-decoration: none;
  background-color: rgb(67, 180, 129);
  color: var(--font-white);
  cursor: pointer;
  padding: 10px 20px;
  border: 0;
  margin-top: 25px;
  border-radius: 5px;

  transition: all 0.5s ease 0s;
}

a:hover {
  background: rgb(39, 106, 76);
}

@media screen and (max-width: 1100px) {
  .container {
    padding: 1rem;
  }

  .partner {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 80%;
  }

  img {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .description {
    text-align: center;
  }
}

@media screen and (max-width: 576px) {
  .container {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  h3 {
    font-size: 1.35rem;
  }
}
</style>
