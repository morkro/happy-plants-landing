<template>
  <div>
    <header id="app-header">
      <nav class="app-header-inner">
        <ul>
          <li>
            <a class="app-changelog">
              Changelog
              <div class="app-changelog-dot" />
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main id="app-content">
      <nuxt />
    </main>

    <footer id="app-footer">
      <div class="app-footer-inner">
        <ul>
          <li>
            <v-button
              tag="a"
              color="transparent"
              type="small"
              href="mailto:happyplants@moritz.berlin"
            >
              <template v-slot:icon>
                <feather-mail />
              </template>
              Contact
            </v-button>
          </li>
          <li>
            <v-button
              tag="a"
              color="transparent"
              type="small"
              href="https://github.com/morkro/happy-plants/projects/5"
              target="_blank"
            >
              <template v-slot:icon>
                <feather-map />
              </template>
              Roadmap
            </v-button>
          </li>
          <li>
            <v-button
              tag="a"
              color="transparent"
              type="small"
              href="https://github.com/morkro/happy-plants/issues"
              target="_blank"
            >
              <template v-slot:icon>
                <feather-alert />
              </template>
              Bug reporting
            </v-button>
          </li>
        </ul>
        <span>© {{ currentYear }} HappyPlants</span>
      </div>
    </footer>
  </div>
</template>

<script>
  import Button from '~/components/Button'

  export default {
    components: {
      'v-button': Button,
      'feather-mail': () => import('vue-feather-icons/icons/MailIcon'),
      'feather-map': () => import('vue-feather-icons/icons/MapIcon'),
      'feather-alert': () => import('vue-feather-icons/icons/AlertCircleIcon')
    },

    data: () => ({
      currentYear: new Date().getFullYear()
    }),

    mounted () {
      if ('Headway' in window && process.env.HEADWAY_ACCOUNT) {
        window.Headway.init({
          selector: '.app-changelog-dot',
          trigger: '.app-changelog',
          account: process.env.HEADWAY_ACCOUNT
        })
      }
    }
  }
</script>

<style lang="postcss">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Asap", Open Sans, Helvetica, Arial, sans-serif;
    font-size: var(--text-size-base);
    font-weight: 500;
    color: var(--text-color-base);
    line-height: 150%;
    text-rendering: geometricPrecision;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  picture {
    display: block;
  }

  img {
    vertical-align: middle;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  #app-header {
    width: 100vw;
    position: absolute;
    z-index: 1;

    & .app-header-inner {
      width: 100%;
      max-width: var(--max-page-width);
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
      border-bottom: 2px solid var(--brand-green-dark);
    }

    & a {
      color: var(--text-color-inverse);
      display: flex;
      padding: calc(var(--base-gap) / 2) calc(var(--base-gap) / 3);
      cursor: pointer;
      font-weight: 500;
    }

    & ul {
      list-style: none;
    }

    & .app-changelog {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  #app-footer {
    width: 100vw;
    background: var(--custom-black);
    color: var(--grey);

    & .app-footer-inner {
      width: 100%;
      max-width: var(--max-page-width);
      margin: 0 auto;
      padding: calc(2 * var(--base-gap)) 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & ul {
      list-style: none;
      display: flex;

      & li:not(:last-child) {
        margin-right: var(--base-gap);
      }
    }

    & a {
      --text-color: var(--grey);

      & svg {
        filter: none;
      }
    }
  }
</style>
