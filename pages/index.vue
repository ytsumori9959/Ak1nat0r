<template>
  <v-container fluid fill-height>
    <v-layout column justify-center align-center>
      <h1 class="display-4 text-center">Ak1nat0r</h1>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Player Name"
          placeholder="Akinator"
          outlined
          v-model="playerName"
        ></v-text-field>
      </v-col>
      <v-btn @click="signIn">PLAY</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from '~/plugins/firebase'
const firestore = firebase.firestore()

export default {
  data: () => ({
    playerName: '',
  }),
  methods: {
    signIn() {
      firebase
        .auth()
        .signInAnonymously()
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message

          console.error(error)
        })
        .then((userCredential) => this.savePlayerName(userCredential))
    },
    savePlayerName(userCredential) {
      if (this.playerName == '') this.playerName = 'Akinator'
      firestore
        .collection('users')
        .doc(userCredential.user.uid)
        .set({ playerName: this.playerName })
        .then(() => console.log('You just logged in'))
    },
  },
}
</script>
