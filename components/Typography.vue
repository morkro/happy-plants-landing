<template>
  <component :is="element" class="typography">
    <slot />  
  </component>  
</template>

<script>
  const variants = ['headline', 'paragraph']
  export default {
    name: 'Typography',

    props: {
      variant: {
        type: String,
        default: 'paragraph',
        validator: v => variants.includes(v)
      } 
    },

    computed: {
      element () {
        switch (this.variant) {
        case 'headline':
          return 'h1'
        case 'paragraph':
        default:
          return 'p'
        }
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .typography {
    --weight: 500;
    --size: var(--text-size-base);
    font-weight: var(--weight);
    font-size: var(--size);
  }

  h1.typography {
    --size: 220%;
    --weight: 600;
  }
</style>
