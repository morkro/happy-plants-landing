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
        
        <v-text variant="headline">
          Your own houseplant database
        </v-text>

        <v-text variant="paragraph">
          HappyPlants is all about creating a visual and helpful collection of your houseplants.
          <br>
          <i>How much water does it need?</i>
          <i>During which seasons does it grow?</i>
          <i>When is it dormant? Does it require lots of sun?</i>
        </v-text>

        <span class="introduction-disclaimer">
          100% Open Source, no advertising, free to use, no "download my app", just a website.
        </span>

        <v-button
          color="yellow"
          tag="a"
          href="https://happyplants.garden"
          target="_blank"
        >
          <template v-slot:icon>
            <feather-smartphone />
          </template>
          Open application
        </v-button>
      </div>
    </page-section>

    <page-section class="section-features">
      <v-text variant="headline">
        Features
      </v-text>
    </page-section>

    <page-section class="section-faq">
      <v-text variant="headline">
        Frequently Asked Questions
      </v-text>
    </page-section>

    <page-section>
      <v-text variant="headline">
        Who's making HappyPlants?
      </v-text>
    </page-section>
  </div>
</template>

<script>
  import PageSection from '~/components/PageSection'
  import Button from '~/components/Button'
  import Typography from '~/components/Typography'
  export default {
    components: {
      'v-button': Button,
      'v-text': Typography,
      'page-section': PageSection,
      'feather-smartphone': () => import('vue-feather-icons/icons/SmartphoneIcon')
    }
  }
</script>

<style lang="postcss">
  .page-section.section-introduction {
    background: var(--brand-green);
    background-image: var(--background-pattern);

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 0;
      opacity: 0.3;
    }

    & .page-section-inner {
      display: flex;
      position: relative;
      z-index: 1;
    }

    & img {
      width: 100%;
      height: auto;
    }

    & .introduction-screenshot {
      width: 325px;
      flex: 0 0 auto;
      box-shadow: 0 5px 11px rgba(0, 0, 0, 0.6);
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
            width: 4px;
            height: 4px;
          }
        }
      }

      & picture {
        overflow: hidden;
        border-radius: var(--border-radius);
      }
    }

    & .introduction-content {
      padding-left: calc(var(--base-gap) * 4);
      font-weight: 500;

      & img {
        width: 80%;
        transform: translateX(-5%);
      }

      & h1 {
        margin: calc(2 * var(--base-gap)) 0;
        text-align: left;
      }

      & a {
        display: inline-flex;
        margin-top: calc(2 * var(--base-gap));
        box-shadow:
          0 0 8px 0 var(--brand-yellow),
          0 1px 2px 0 rgba(0, 0, 0, 0.4);
        --button-shadow: var(--brand-yellow);
      }
    }

    & .introduction-disclaimer {
      margin-top: var(--base-gap);
      display: block;
      font-size: var(--text-size-xsmall);
      font-style: italic;
      color: var(--transparency-black-medium);
    }
  }

  .section-faq {
    background: var(--brand-blue);
    color: var(--custom-white);
  }
</style>