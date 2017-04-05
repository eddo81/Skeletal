<template>
  <main id="app">
    <transition name="fade" v-on:after-enter="afterEnter">
      <router-view v-if="loaded"></router-view>
    </transition>
  </main>
</template>

<style>
  
  .fade-enter-active, .fade-leave-active {
    /*transition: opacity ($transition--lg * 2) cubic-bezier(easing(12));*/
    transition: opacity 300ms ease-in-out;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

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