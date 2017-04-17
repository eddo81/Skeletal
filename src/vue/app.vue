<template>
  <main id="app">
    <transition name="fade" v-on:after-enter="afterEnter">
      <router-view v-if="loaded"></router-view>
    </transition>
  </main>
</template>

<script>

  export default {

    created: function() {

    },

    mounted: function() {
      this.loaded = true;
    },

    destroyed: function() {

    },

    data: function() {
      return {
        loaded: false
      };
    },

    methods: {
      afterEnter: function() {
        this.$store.dispatch('setAppLoadedState', true);
      }
    },

    computed: {

    }
  };
</script>