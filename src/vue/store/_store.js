/**
 *  _store.js
 *  =========
 *  Manage application-wide state.
 *
 */

import Vue from 'vue';
import Vuex from 'vuex';

// Instantiate the Store
Vue.use(Vuex);

let store = new Vuex.Store({

  state: {

    app: {
      loaded: false
    },

    page: {
      title: 'Skeletal-vue'
    }
  },

  mutations: {

    SET_PAGE_TITLE: function(state, titleSuffix) {
      let pageTitleSuffix = (titleSuffix !== undefined) ? ' | ' + titleSuffix : '';
      state.page.title = `Skeletal-vue ${pageTitleSuffix}`;
    },

    SET_APP_LOADED_STATE: function(state, isAppLoaded) {
      state.app.loaded = (state.app.loaded === false && isAppLoaded === true) ? true : false;
    }

  },

  actions: {

    setPageTitle: function(store, titleSuffix) {
      let commit = store.commit;
      commit('SET_PAGE_TITLE', titleSuffix);
    },

    setAppLoadedState: function(store, isAppLoaded) {
      let commit = store.commit;
      commit('SET_APP_LOADED_STATE', isAppLoaded);
    }

  },

  getters: {
    pageTitle: state => state.page.title,
    appLoaded: state => state.app.loaded
  }

});

export default store;