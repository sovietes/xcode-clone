<template>
  <section class="text-container">
    <h3 class="title">sobre a xcode</h3>
    <p class="text">
      A XCode é uma empresa independente que surgiu da necessidade tecnológica
      encontrada dentro do ramo policial do Habbo Hotel, em função de distribuir
      as ferramentas necessárias para alavancar a tecnologia e competitividade
      justa entre empresas sem que seja necessário um investimento financeiro
      alto em troca de um serviço profissional.<br /><br />
      Atualmente, com uma equipe de cinco sócios majoritários responsáveis por
      seus respectivos departamentos, a XCode atua no desenvolvimento de
      softwares, design, inteligência, arquitetura e consultoria de todas as
      empresas aliadas.
    </p>
    <div class="socials">
      <a href="#" class="social">
        <ion-icon name="logo-facebook"></ion-icon><span>@xcodesystems</span>
      </a>

      <a href="#" class="social">
        <ion-icon name="logo-behance"></ion-icon><span>nossos projetos</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.socials {
  display: flex;
}

.social {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  transition: all 1s ease 0s;
  margin-right: 30px;
}

a {
  text-decoration: none;
}

ion-icon {
  color: rgb(67, 180, 129);
  font-size: 35px;
  transition: all 1s ease 0s;
}

span {
  color: var(--font-dark);
  text-transform: uppercase;
  margin-left: 10px;
  transition: all 1s ease 0s;
}

.social:hover ion-icon,
.social:hover span {
  color: white;
}

.social:hover {
  background: rgb(67, 180, 129);
}

.text-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  color: var(--font-dark);
  text-transform: uppercase;
  font-size: 1.875rem;
  font-weight: 400;
  margin-bottom: 1.875rem;
}

.text {
  color: var(--font-white);
  margin-bottom: 1.5625rem;
  line-height: 1.5625rem;
  text-align: justify;
  font-weight: 200;
}

@media screen and (max-width: 1550px) {
  .text-container {
    width: 50%;
  }
}

@media screen and (max-width: 1100px) {
  .text-container {
    margin-top: 4rem;
    margin-bottom: 2rem;
    width: 70%;
  }

  .title {
    text-align: center;
    letter-spacing: none;
  }

  .socials {
    justify-content: center;
    flex-wrap: wrap;
  }

  .social {
    margin-right: 0;
  }
}
</style>
