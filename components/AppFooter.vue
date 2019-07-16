<template>
  <footer id="app-footer">
    <div class="app-footer-inner">
      <div class="app-footer-contact">
        <v-text variant="subline">
          Having a question or a problem? Don't hesitate to reach out!
        </v-text>

        <div class="app-footer-contact-btn">
          <v-button 
            v-if="hideContactDetails"
            color="grey"
            @click.native="onShowContactDetails"
          >
            Contact
          </v-button>

          <div>
            <v-text>{{ email }}</v-text>

            <ul class="app-footer-contact-actions">
              <li>
                <v-button
                  color="transparent"
                  type="small"
                  @click.native="onCopyEmail"
                >
                  Copy
                </v-button>  
              </li>
              <li>
                <v-button
                  tag="a"
                  color="transparent"
                  type="small"
                  :href="`mailto:${email}`"
                >
                  Open
                </v-button>  
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="app-footer-navigation">
        <ul>
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
        <v-text>
          © {{ currentYear }} HappyPlants
        </v-text>
      </div>
    </div>
  </footer>
</template>

<script>
  import Button from '~/components/Button'
  import Typography from '~/components/Typography'

  export default {
    components: {
      'v-button': Button,
      'v-text': Typography,
      'feather-map': () => import('vue-feather-icons/icons/MapIcon'),
      'feather-alert': () => import('vue-feather-icons/icons/AlertCircleIcon')
    },

    data: () => ({
      email: 'happyplants@moritz.berlin',
      currentYear: new Date().getFullYear(),
      hideContactDetails: true
    }),

    methods: {
      onShowContactDetails () {
        this.hideContactDetails = false
      },
      onCopyEmail () {
        /* Workaround for Safari */
        const range = document.createRange()
        range.selectNodeContents(document.body)
        document.getSelection().addRange(range)
        
        const copy = event => {
          event.clipboardData.setData('text/plain', this.email)
          event.preventDefault()
        }

        document.addEventListener('copy', copy)
        document.execCommand('copy')
        document.removeEventListener('copy', copy)
        document.getSelection().removeAllRanges()
      }
    }
  }
</script>


<style lang="postcss" scoped>
  #app-footer {
    width: 100vw;
    background: var(--custom-black);
    color: var(--grey);

    & a svg {
      filter: none;
    }
  }

  .app-footer-inner {
    width: 100%;
    max-width: var(--max-page-width);
    margin: 0 auto;
    padding:
      calc(3 * var(--base-gap))
      0
      calc(2 * var(--base-gap))
      0;
  }

  .app-footer-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .app-footer-contact-btn {
    background: black;
    border-radius: var(--border-radius);
    position: relative;
    margin: calc(3 * var(--base-gap)) 0;

    & > button {
      --button-shadow: black;
      --button-background: black;
      --button-padding: calc(var(--base-gap) / 1.5);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;

      &::after {
        transform: none;
      }
    }

    & > div {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 0;
    }

    & p {
      margin: 0 calc(2 * var(--base-gap));
    }
  }

  .app-footer-contact-actions {
    --border: 2px solid var(--custom-black);
    border-left: var(--border);
    list-style: none;

    & li:first-child {
      border-bottom: var(--border);
    }

    & a,
    & button {
      --button-font-size: var(--text-size-xsmall);
    }
  }

  .app-footer-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--transparency-white-light);
    padding-top: calc(2 * var(--base-gap));

    & ul {
      list-style: none;
      display: flex;

      & li:not(:last-child) {
        margin-right: var(--base-gap);
      }
    }
  }
</style>
