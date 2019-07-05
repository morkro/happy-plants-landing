<template>
  <div>
    <header id="app-header">
      <div class="app-header-inner">
        <h1 class="app-header-logo">
          <a href="/">
            <img
              src="~/assets/happyplants-logo.svg"
              alt="HappyPlants logo"
              title="HappyPlants logo"
            >
          </a>
        </h1>

        <nav>
          <ul>
            <li><a href="/changelog">Changelog</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="app-content">
      <nuxt />
    </main>

    <footer id="app-footer">
      <div class="app-footer-inner">
        <a href="mailto:happyplants@moritz.berlin">Contact</a>  
        <a href="https://github.com/morkro/happy-plants" target="_blank">Roadmap</a>
        <a href="https://github.com/morkro/happy-plants/issues/new" target="_blank">Bug reporting</a>
        <a href="https://happyplants.app">© {{ currentYear }} HappyPlants</a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      currentYear: new Date().getFullYear()
    })
  }
</script>

<style lang="postcss">
  :root {
    --max-page-width: 1024px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  #app-header {
    width: 100vw;

    & .app-header-inner {
      width: 100%;
      max-width: var(--max-page-width);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }

    & .app-header-logo {
      & img {
        width: 250px;
        height: auto;
      }
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
