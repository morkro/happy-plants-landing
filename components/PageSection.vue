<template>
  <section class="page-section">
    <svg
      v-if="waveBorder"
      class="page-section-border"
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
    >
      <path d="M0.00,49.98 C243.79,87.33 234.76,6.42 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
    </svg>
    <div class="page-section-inner">
      <slot />
    </div>
  </section>  
</template>

<script>
  export default {
    name: 'PageSection',

    props: {
      waveBorder: { type: Boolean, default: false }
    }
  }
</script>

<style lang="postcss" scoped>
  .page-section {
    width: 100vw;
    min-height: 30vh;
    position: relative;
    padding:
      calc(var(--base-gap) * 6)
      var(--base-gap);

    & .page-section-border {
      height: 150px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-54%);
      fill: white;
      stroke: none;
      z-index: 0;
    }

    & .page-section-inner {
      width: 100%;
      max-width: var(--max-page-width);
      margin: 0 auto;
      position: relative;
      z-index: 1;

      & h1 {
        text-align: center;
      }
    }
  }
</style>
