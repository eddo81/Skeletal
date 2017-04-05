<template>
  <div id="Skeletal_home">
      <section>
          <h1>Hej</h1>
      </section>
  </div>
</template>

<script>

  export default {

    mounted: function() {

    },

    data: function() {
      return {

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
