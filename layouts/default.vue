<template>
  <div>
    <header id="app-header">
      <nav class="app-header-inner">
        <ul>
          <li class="app-changelog">
            <a>Changelog</a>
          </li>
        </ul>
      </nav>
    </header>

    <main id="app-content">
      <nuxt />
    </main>

    <footer id="app-footer">
      <div class="app-footer-inner">
        <a href="mailto:happyplants@moritz.berlin">Contact</a>  
        <a href="https://github.com/morkro/happy-plants/projects/5" target="_blank">Roadmap</a>
        <a href="https://github.com/morkro/happy-plants/issues" target="_blank">Bug reporting</a>
        <a href="https://happyplants.app">© {{ currentYear }} HappyPlants</a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      currentYear: new Date().getFullYear()
    }),

    mounted () {
      if ('Headway' in window && process.env.HEADWAY_ACCOUNT) {
        window.Headway.init({
          selector: ".app-changelog",
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
    font-weight: 400;
    color: var(--text-color-base);
    line-height: 120%;
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

  #app-header {
    width: 100vw;
    position: absolute;
    background: var(--transparency-black-light);

    & .app-header-inner {
      width: 100%;
      max-width: var(--max-page-width);
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
    }

    & a {
      color: var(--text-color-inverse);
      display: flex;
      padding: calc(var(--base-gap) / 2);
      cursor: pointer;
      font-weight: 500;
    }

    & ul {
      list-style: none;
    }

    & #HW_badge_cont {
      position: absolute;
    }
  }

  #app-footer {
    width: 100vw;

    & .app-footer-inner {
      width: 100%;
      max-width: var(--max-page-width);
      margin: 0 auto;
    }
  }
</style>
