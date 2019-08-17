<template>
  <div>
    <page-section class="section-introduction" aria-labelledby="introduction-heading">
      <div class="introduction-screenshot">
        <v-device>
          <picture class="screenshot-overview">
            <img
              src="~/assets/app-screenshot-overview.png"
              alt="Screenshot of Overview screen"
            >
          </picture>

          <!-- <picture class="screenshot-plant">
            <img
              src="~/assets/app-screenshot-plant.png"
              alt="Screenshot of Plant screen"
            >
          </picture>

          <picture class="screenshot-settings">
            <img
              src="~/assets/app-screenshot-settings.png"
              alt="Screenshot of Settings screen"
            >
          </picture> -->
        </v-device>
      </div>

      <div class="introduction-content">        
        <v-typography id="introduction-heading" variant="headline">
          Your own houseplant database
        </v-typography>

        <v-typography>
          HappyPlants is all about creating a visual and helpful collection of your houseplants.
        </v-typography>

        <ul>
          <li>
            <feather-droplet />
            <v-typography>How much water does it need?</v-typography>
          </li>
          <li>
            <feather-moon />
            <v-typography>During which seasons does it grow? When is it dormant?</v-typography>
          </li>
          <li>
            <feather-sun />
            <v-typography>Does it require lots of sun?</v-typography>
          </li>
        </ul>

        <v-button
          color="yellow"
          tag="a"
          href="https://happyplants.garden"
          target="_blank"
          rel="noopener"
        >
          <template v-slot:icon>
            <feather-smartphone />
          </template>
          Open application
        </v-button>

        <v-typography variant="sidenote" class="introduction-disclaimer">
          Open Source, free to use, no "download my app", just a website.
        </v-typography>
      </div>
    </page-section>

    <page-section
      class="section-what"
      aria-labelledby="what-heading"
      :wave-border="true"
    >
      <div class="what-inner">
        <v-typography id="what-heading" variant="headline">
          What is HappyPlants?
        </v-typography>

        <v-typography>
          HappyPlants is ...
        </v-typography>
      </div>
    </page-section>

    <page-section
      class="section-features"
      aria-labelledby="features-heading"
    >
      <div class="features-inner">
        <v-typography id="features-heading" variant="headline">
          Features
        </v-typography>

        <div class="features-list">
          <div class="features-list-item feature-modules">
            <div class="features-list-description">
              <v-typography variant="subline">
                Different modules 
              </v-typography>
              <v-typography>
                Use modules to visualise your plants individual requirements.
              </v-typography>
            </div>
            <div class="features-list-preview">
              <module-sunshine
                :intensity="sunshine"
                @update-plant="updateSunshineModule"
              />

              <module-seasons
                :seasons="seasons"
                @update-plant="updateSeasonsModule"
              />

              <module-watering
                :amount="waterAmount"
                :frequency="waterFrequency"
                @update-plant="updateWateringModule"
              />
              
              <v-box>
                Notes
                <br>
              </v-box>
            </div>
          </div>

          <div class="features-list-item feature-gallery">
            <div class="features-list-description">
              <v-typography variant="subline">
                A gallery!
              </v-typography>
              <v-typography>
                Upload photos over time to track progress and growth of your plant.
                Or simply keep a gallery of beautiful shots.
              </v-typography>
            </div>
            <div class="features-list-preview">
              <ul>
                <li><v-box>image</v-box></li>
                <li><v-box>image</v-box></li>
                <li><v-box>image</v-box></li>
                <li><v-box>image</v-box></li>
                <li><v-box>image</v-box></li>
                <li><v-box>image</v-box></li>
                <li><v-box>image</v-box></li>
                <li><v-box>image</v-box></li>
              </ul>
            </div>
          </div>

          <div class="features-list-item feature-tags">
            <div class="features-list-description">
              <v-typography variant="subline">
                Use tags to group your houseplants
              </v-typography>
              <v-typography>
                The tagging system helps you to categorise and filter your plants.
              </v-typography>
            </div>
            <div class="features-list-preview">
              <v-box>
                foo
              </v-box>
            </div>
          </div>

          <div class="features-list-item features-cloud">
            <div class="features-list-description">
              <v-typography variant="subline">
                Backup your data in the cloud
              </v-typography>
              <v-typography>
                Enable the cloud feature and you'll be able to use your accounts across multiple devices.
              </v-typography>
            </div>
            <div class="features-list-preview">
              <v-device type="phone">
                <lazy-image
                  :source="require('~/assets/app-screenshot-overview.png')"
                  alt="Screenshot of application phone"
                />
              </v-device>
              
              <v-device type="laptop">
                <lazy-image
                  :source="require('~/assets/app-screenshot-desktop.png')"
                  alt="Screenshot of application on desktop"
                />
              </v-device>
            </div>
          </div> 
        </div>

        <div class="features-roadmap">
          <v-typography variant="subline">
            Interested to know what features are coming?
          </v-typography>
          <a
            href="https://github.com/morkro/happy-plants/projects/5"
            target="_blank"
            rel="noopener"
          >
            Check out the roadmap!
          </a>
        </div>
      </div>
    </page-section>

    <page-section class="section-faq" aria-labelledby="faq-heading">
      <v-typography id="faq-heading" variant="headline">
        Frequently Asked Questions
      </v-typography>

      <ul class="faq-list">
        <li>
          <v-typography variant="subline">
            Foo
          </v-typography>
          <v-typography>
            Description
          </v-typography>
        </li>

        <li>
          <v-typography variant="subline">
            Foo
          </v-typography>
          <v-typography>
            Description
          </v-typography>
        </li>
      </ul>
    </page-section>

    <page-section
      class="section-about"
      aria-labelledby="about-heading"
      :wave-border="true"
    >
      <v-typography id="about-heading" variant="headline">
        Who's making HappyPlants?
      </v-typography>

      <div class="about-content">
        <v-box class="about-content-photo">
          <lazy-image
            :source="require('~/assets/moritz.jpg')"
            alt="Photo of Moritz Kröger"
          />
        </v-box>

        <div class="about-content-info">
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
        </div>        
      </div>
    </page-section>
  </div>
</template>

<script>
  import {
    HomeIcon,
    InstagramIcon,
    GithubIcon,
    DropletIcon,
    SmartphoneIcon,
    SunIcon,
    MoonIcon
  } from 'vue-feather-icons'
  import ModuleSunshine from '~/components/ModuleSunshine'
  import ModuleSeasons from '~/components/ModuleSeasons'
  import ModuleWatering from '~/components/ModuleWatering'
  
  export default {
    components: {
      'module-sunshine': ModuleSunshine,
      'module-seasons': ModuleSeasons,
      'module-watering': ModuleWatering,
      'feather-smartphone': SmartphoneIcon,
      'feather-instagram': InstagramIcon,
      'feather-home': HomeIcon,
      'feather-github': GithubIcon,
      'feather-droplet': DropletIcon,
      'feather-sun': SunIcon,
      'feather-moon': MoonIcon
    },

    data: () => ({
      sunshine: 2,
      seasons: [
        'January', 'February', 'March',
        'April', 'Mai', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
      ].map(month => ({ month, growth: false })),
      waterAmount: 2,
      waterFrequency: 'weekly'
    }),

    methods: {
      updateSunshineModule (event) {
        this.sunshine = event.level
      },
      updateSeasonsModule (event) {
        this.seasons = this.seasons.map(season => {
          if (event.month === season.month) {
            season.growth = !season.growth
          }
          return season
        })
      },
      updateWateringModule (event) {
        console.log(event)
      }
    }
  }
</script>

<style lang="postcss">
  .page-section.section-introduction {
    background: var(--brand-green);
    background-image: var(--topography-pattern);
    color: var(--text-color-inverse);
    padding-top: calc(var(--base-gap) * 8);

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
      --screen-width: 310px;
      width: calc(var(--screen-width) + var(--base-gap) / 3 * 2);
      flex: 0 0 auto;
      position: relative;

      & .device {
        box-shadow: 0 5px 11px rgba(0, 0, 0, 0.6);
        position: absolute;
        width: 100%;
      }

      & .device-screen {
        height: calc(var(--screen-width) / 100 * 177.77);
        overflow: hidden;
      }

      & picture {
        position: absolute;
        overflow: hidden;
      }
    }

    & .introduction-content {
      padding-left: calc(var(--base-gap) * 4);
      font-weight: 500;

      & h1 {
        margin: 0 0 var(--base-gap);
        text-align: left;
      }

      & a {
        display: inline-flex;
        margin-top: calc(2 * var(--base-gap));
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
        text-shadow: none;
      }

      & ul {
        margin-top: var(--base-gap);
        list-style: none;
      }

      & ul li {
        font-style: italic;
        display: flex;
        align-items: center;
        line-height: 200%;
      }

      & ul li svg {
        margin-right: calc(var(--base-gap) / 2);
      }
    }

    & .introduction-disclaimer {
      margin-top: var(--base-gap);
      display: block;
      font-size: var(--text-size-xsmall);
      font-style: italic;
      color: var(--transparency-black-medium);
      text-shadow: none;
    }
  }

  .page-section.section-what {
    & h1 {
      margin-bottom: calc(4 * var(--base-gap));
      color: var(--brand-green);
      text-shadow: 0 3px 10px var(--brand-green-lighten);
    }
  }

  .page-section.section-features {
    & h1 {
      margin-bottom: calc(4 * var(--base-gap));
    }

    & .features-list-item {
      margin-bottom: calc(4 * var(--base-gap));
      display: flex;
      justify-content: space-evenly;

      &:nth-of-type(even) {
        flex-direction: row-reverse;
      }
    }

    & .features-list-preview {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        width: calc(100% + var(--base-gap));
        height: calc(100% + var(--base-gap));
        transform:
          translate(
            calc(-1 * var(--base-gap) / 2),
            calc(-1 * var(--base-gap) / 2)
          );
        border-radius: 50%;
        background: var(--transparency-black-light);
        box-shadow:
          0 0 10px white,
          0 0 30px var(--transparency-black-light);
      }
    }

    & .feature-gallery .features-list-preview ul {
      list-style: none;
      display: flex;
      width: 50%;
      flex-wrap: wrap;
      margin: 0 auto;

      & li {
        --preview-size: 80px;
        width: var(--preview-size);
        height: var(--preview-size);

        &:not(:last-child):not(:nth-last-of-type(2)) {
          margin-bottom: var(--base-gap);
        }

        &:not(:nth-child(4n)) {
          margin-right: var(--base-gap);
        }
      }
    }

    & .features-cloud .device img {
      width: 100%;
    }

    & .features-cloud .device-phone {
      width: 300px;
    }

    & .features-cloud .device-laptop {
      width: 300px;
    }
  }

  .section-faq {
    background: var(--brand-blue);
    color: white;

    & h1 {
      margin-bottom: calc(4 * var(--base-gap));
    }

    & .faq-list {
      list-style: none;

      & li:not(:last-child) {
        margin-bottom: calc(2 * var(--base-gap));
      }
    }
  }

  .section-about {
    & h1 {
      margin-bottom: calc(4 * var(--base-gap));
      color: var(--brand-green);
      text-shadow: 0 3px 10px var(--brand-green-lighten);
    }

    & .about-content {
      display: flex;
      justify-content: center;
    }

    & .about-content-photo {
      width: 250px;
      height: 250px;
      margin-right: calc(2 * var(--base-gap));
      box-shadow: 0 2px 9px 2px var(--brand-blue-low);

      & img {
        width: 100%;
      }
    }

    & .about-content-info {
      width: 50%;
    }

    & .about-content-socialmedia {
      list-style: none;
      display: flex;
      margin-top: var(--base-gap);

      & li:not(:last-child) {
        margin-right: var(--base-gap);
      }

      & svg {
        color: var(--link-color);

        &:hover {
          color: var(--brand-green);
        }
      }
    }
  }
</style>