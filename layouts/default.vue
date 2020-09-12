<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title>Ak1nat0r</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer absolute fixed app>
      <span>&copy; {{ new Date().getFullYear() }} Yuta Tsumori</span>
    </v-footer>
  </v-app>
</template>
