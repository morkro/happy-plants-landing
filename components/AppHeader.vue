<template>
  <header id="app-header">
    <nav class="app-header-inner">
      <ul>
        <li>
          <a ref="appChangelogEl" class="app-changelog">
            Changelog
            <div class="app-changelog-dot" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    mounted () {
      if ('Headway' in window && process.env.HEADWAY_ACCOUNT) {
        window.Headway.init({
          selector: '.app-changelog-dot',
          trigger: '.app-changelog',
          account: process.env.HEADWAY_ACCOUNT,
          enabled: true
        })
      } else {
        const $changelog = this.$refs.appChangelogEl
        $changelog.setAttribute('href', 'https://headwayapp.co/happyplants-changelog')
        $changelog.setAttribute('target', '_blank')
      }
    }
  }
</script>


<style lang="postcss" scoped>
  #app-header {
    width: 100vw;
    position: absolute;
    z-index: 1;
    border-bottom: 1px solid var(--brand-green-dark);

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
      padding: calc(var(--base-gap) / 4) 0;
      cursor: pointer;
      font-weight: 500;
      font-size: var(--text-size-xsmall);
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
</style>
