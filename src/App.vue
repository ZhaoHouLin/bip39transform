<script>
import Transform from './components/Transform.vue'
export default {
  components: {
    Transform
  },
  setup() {
    return {

    }
  }
}
</script>

<template lang="pug">
Transform
</template>

<style lang="stylus">
* 
  margin 0
  padding 0
  box-sizing border-box

#app
  width 100%
  height 100vh
  display flex
  justify-content center
  align-items center
  // background-color orange
  background-color transparent

</style>
