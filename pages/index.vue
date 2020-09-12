<template>
  <v-container fluid fill-height>
    <v-layout column justify-center align-center>
      <h1 class="display-4 text-center">Ak1nat0r</h1>
      <v-btn @click="login">PLAY</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  methods: {
    login() {
      firebase
        .auth()
        .signInAnonymously()
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message

          console.error(error)
        })
      console.log('You just logged in')
    },
  },
}
</script>
