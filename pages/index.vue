<template>
  <div>
    <page-section class="section-introduction">
      introduction with screenshot
    </page-section>

    <page-section>
      <h2>Features</h2>
    </page-section>

    <page-section>
      <h2>Frequently Asked Questions</h2>
    </page-section>

    <page-section>
      <h2>About</h2>
    </page-section>
  </div>
</template>

<script>
  import PageSection from '~/components/PageSection'
  export default {
    components: {
      'page-section': PageSection
    }
  }
</script>

<style lang="postcss" scoped>
  .section-introduction {
    background: var(--brand-green);
  }
</style>
