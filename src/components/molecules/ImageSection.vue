<template>
  <section class="images-container">
    <div class="teste-one">
      <img src="../../assets/img/central.png" id="first-image" />
    </div>
    <div class="teste-two">
      <img src="../../assets/img/bp.png" id="second-image" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.images-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#first-image {
  transform: rotate(5deg);
}

#second-image {
  transform: rotate(-5deg);
}

img {
  display: block;
  max-width: 100%;
  width: 100%;
  border: 5px solid white;
}

@media screen and (max-width: 1100px) {
  .images-container {
    width: 50%;
    flex-direction: column;
    margin-top: 4rem;
  }

  img {
    border: none;
    border-radius: 5px;
  }

  img:first-child {
    margin-bottom: 1rem;
  }

  #first-image {
    transform: rotate(0deg);
    position: relative;
    display: flex;
    left: -10%;
  }

  .teste-one,
  .teste-two {
    width: 100%;
    position: relative;
  }

  .teste-one {
    z-index: 10;
  }

  .teste-one::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 90%;
    background-color: var(--bg-white);
    top: -7%;
    border-radius: 5px;
    left: -15%;
  }

  .teste-two::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 90%;
    background-color: var(--bg-white);
    bottom: -3%;
    border-radius: 5px;
    right: -15%;
  }

  #second-image {
    transform: rotate(0deg);
    position: relative;
    right: -10%;
  }
}

@media screen and (max-width: 650px) {
  .images-container {
    width: 100%;
  }

  #first-image {
    left: 0;
  }

  #second-image {
    right: 0;
  }

  .teste-one::before {
    right: 5%;
  }

  .teste-two::before {
    right: 5%;
  }
}
</style>
