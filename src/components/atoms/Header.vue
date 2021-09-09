<template>
  <div class="container">
    <transition
      enter-active-class="animate__animated animate__zoomInRight animate__slow"
      appear
    >
      <span>xcode</span>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: var(--bg-dark);
  color: var(--font-dark);
  padding: 0 10px;
}

.container span {
  font-size: 0.96rem;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
