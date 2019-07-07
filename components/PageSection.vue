<template>
  <section class="page-section">
    <div class="page-section-inner">
      <slot />
    </div>
  </section>  
</template>

<script>
  export default {
    name: 'PageSection'
  }
</script>

<style lang="postcss" scoped>
  .page-section {
    width: 100vw;
    min-height: 30vh;

    & .page-section-inner {
      width: 100%;
      max-width: var(--max-page-width);
      margin: 0 auto;
    }
  }
</style>
