<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
  html {
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }
  html::-webkit-scrollbar {
    display: none;
  }
  .cursor-pointer {
    cursor: pointer;
  }
</style>
