<template>
  <div>
    <page-section class="section-introduction">
      <div class="introduction-screenshot">
        <div class="screenshot-windowbar">
          <div />
          <div />
          <div />
        </div>
        <picture>
          <img
            src="~/assets/app-screenshot.png"
            alt="Screenshot of application"
          >
        </picture>
      </div>

      <div class="introduction-content">
        <img
          src="~/assets/happyplants-logo.svg"
          alt="HappyPlants logo"
          title="HappyPlants logo"
        >
        
        <h1>Your own houseplant database</h1>
        <p>
          HappyPlants is all about creating a visual and helpful collection of your houseplants.
          <i>How much water does it need?</i>
          <i>During which seasons does it grow?</i>
          <i>When is it dormant? Does it require lots of sun?</i>
        </p>

        <v-button
          color="yellow"
          tag="a"
          href="https://happyplants.garden"
          target="_blank"
        >
          <template v-slot:icon>
            <feather-smartphone />
          </template>
          Open the application
        </v-button>
      </div>
    </page-section>

    <page-section class="section-features">
      <h1>Features</h1>
    </page-section>

    <page-section class="section-faq">
      <h1>Frequently Asked Questions</h1>
    </page-section>

    <page-section>
      <h1>About</h1>
    </page-section>
  </div>
</template>

<script>
  import PageSection from '~/components/PageSection'
  import Button from '~/components/Button'
  export default {
    components: {
      'v-button': Button,
      'page-section': PageSection,
      'feather-smartphone': () => import('vue-feather-icons/icons/SmartphoneIcon')
    }
  }
</script>

<style lang="postcss">
  .section-introduction {
    padding: calc(var(--base-gap) * 4) 0;
    background: var(--brand-green);
    background-image: var(--background-pattern);

    & .page-section-inner {
      display: flex;
    }

    & img {
      width: 100%;
      height: auto;
    }

    & .introduction-screenshot {
      width: 325px;
      flex: 0 0 auto;
      box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
      padding: 0 calc(var(--base-gap) / 3) 40px;
      background: var(--custom-black);
      border-radius: 20px;

      & .screenshot-windowbar {
        border-top-right-radius: var(--border-radius);
        border-top-left-radius: var(--border-radius);
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        padding: 7px 10px;

        & > div {
          --control-background: var(--dark-grey);
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background: var(--control-background);

          &:nth-of-type(2) {
            --control-background: black;
            width: 100px;
            margin: 0 var(--base-gap);
            border-radius: var(--border-radius);
          }

          &:nth-of-type(3) {
            width: 6px;
            height: 6px;
          }
        }
      }

      & picture {
        overflow: hidden;
        border-radius: var(--border-radius);
      }
    }

    & .introduction-content {
      padding-left: calc(var(--base-gap) * 2);

      &:not(a) {
        color: var(--custom-white);
      }
    }
  }

  .section-faq {
    background: var(--custom-black);
    color: var(--custom-white);
  }
</style>
