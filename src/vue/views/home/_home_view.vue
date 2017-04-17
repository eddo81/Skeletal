<template>
  <div id="Skeletal_home">
      <section>
          <h1>{{msg}}</h1>
      </section>
  </div>
</template>

<script>

  export default {

    mounted: function() {

    },

    data: function() {
      return {
        msg: 'Skeletal Vue'
      };
    },

    methods: {

    },

    computed: {
      isAppLoaded: function() {
        return this.$store.getters.appLoaded;
      }

    }
  };
</script>

<style>

</style>
