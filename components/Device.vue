<template>
  <div :class="['device', `device-${type}`]">
    <div class="device-windowbar">
      <div />
      <div />
      <div />
    </div>

    <div class="device-screen">
      <slot />
    </div>
  </div>
</template>


<script>
  const devices = ['phone', 'laptop']
  export default {
    name: 'Device',

    props: {
      type: { type: String, default: 'phone', validator: v => devices.includes(v) }
    }
  }
</script>

<style lang="postcss" scoped>
  .device {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    overflow: hidden;
  }

  .device-phone {
    padding: 0 calc(var(--base-gap) / 3) 40px;
    background: var(--custom-black);
    border-radius: 20px;

    & .device-windowbar {
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
  }
</style>
