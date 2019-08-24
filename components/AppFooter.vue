<template>
  <footer id="app-footer" role="contentinfo">
    <wave-border color="black" />
    
    <div class="app-footer-inner">
      <div class="app-footer-contact">
        <v-box class="about-content-photo">
          <lazy-image
            :source="require('~/assets/moritz.jpg')"
            alt="Photo of Moritz Kröger"
          />
        </v-box>

        <v-typography>
          My name is Moritz Kröger, I'm an open source engineer and plant enthusiast from Berlin.
          <br>
          I created HappyPlants because I wanted an easy and visual way of documenting my houseplants.
          I started off with an Excel sheet but soon hit its limits, so I slowly created my own
          web application.
        </v-typography>

        <ul class="about-content-socialmedia">
          <li>
            <a
              href="https://www.instagram.com/morkro/"
              target="_blank"
              rel="noopener"
              aria-label="Link to Instagram"
            >
              <feather-instagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.moritz.berlin"
              target="_blank"
              rel="noopener"
              aria-label="Personal website"
            >
              <feather-home />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/morkro"
              target="_blank"
              rel="noopener"
              aria-label="Link to GitHub"
            >
              <feather-github />
            </a>
          </li>
        </ul>

        <v-text variant="subline">
          Having a question or a problem?<br>Don't hesitate to reach out!
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
            <a
              href="https://twitter.com/morkro"
              target="_blank"
              rel="noopener"
            >
              <feather-twitter />
              Follow for updates
            </a>
          </li>
          <li>
            <a
              href="https://github.com/morkro/happy-plants/projects/5"
              target="_blank"
              rel="noopener"
            >
              <feather-map />
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="https://github.com/morkro/happy-plants/issues"
              target="_blank"
              rel="noopener"
            >
              <feather-alert />
              Bug reporting
            </a>
          </li>
          <li>
            <a
              href="https://github.com/morkro/happy-plants-website"
              target="_blank"
              rel="noopener"
            >
              <feather-github />
              View Source
            </a>
          </li>
          <li>
            <a
              href="#"
              rel="noopener"
            >
              <feather-watch />
              Privacy Policy
            </a>
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
  import {
    TwitterIcon,
    MapIcon,
    AlertCircleIcon,
    GithubIcon,
    WatchIcon,
    InstagramIcon,
    HomeIcon
  } from 'vue-feather-icons'
  import Button from '~/components/Button'
  import Typography from '~/components/Typography'

  export default {
    components: {
      'v-button': Button,
      'v-text': Typography,
      'feather-twitter': TwitterIcon,
      'feather-map': MapIcon,
      'feather-alert': AlertCircleIcon,
      'feather-github': GithubIcon,
      'feather-watch': WatchIcon,
      'feather-instagram': InstagramIcon,
      'feather-home': HomeIcon,
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
    position: relative;

    & a svg {
      filter: none;
    }
  }

  .app-footer-inner {
    width: 100%;
    max-width: var(--max-page-width);
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding:
      calc(var(--base-gap) * 6)
      var(--base-gap);
  }

  .app-footer-contact-btn {
    display: inline-block;
    background: black;
    border-radius: var(--border-radius);
    position: relative;
    margin: calc(2 * var(--base-gap)) 0 0;

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
    text-align: right;

    &,
    & p {
      font-size: var(--text-size-small);
    }

    & ul {
      list-style: none;
      line-height: 170%;
      margin-bottom: var(--base-gap);
    }

    & a {
      color: var(--text-color-inverse);
      display: inline-flex;
      align-items: center;

      & svg {
        width: var(--text-size-base);
        height: var(--text-size-base);
        margin-right: calc(var(--base-gap) / 2);
      }
    }
  }
</style>
