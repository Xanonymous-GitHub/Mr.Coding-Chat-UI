<template>
  <div id="app">
    <v-app id="inspire">
      <router-view />
    </v-app>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import appModule from "@/store/modules/app";
import "@/assets/scss/app.scss";

@Component
export default class App extends Vue {
  protected detectSystemTheme(): string {
    if (!window.matchMedia) return "light";
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    return isDarkMode ? "dark" : "light";
  }

  protected detectLocalStorageTheme(): string {
    const availableValues = ["auto", "light", "dark"];
    let colorSchema = `${localStorage.getItem("colorSchema")}`;
    if (!availableValues.includes(colorSchema)) colorSchema = "auto";
    return colorSchema;
  }

  protected mounted() {
    this.detectTheme();
    // window
    //   .matchMedia("(prefers-color-scheme: dark)")
    //   .addEventListener(this.detectTheme());
  }

  private detectTheme() {
    let theme: string;
    const localStorageTheme = this.detectLocalStorageTheme();
    if (localStorageTheme === "auto") {
      theme = this.detectSystemTheme();
    } else {
      theme = localStorageTheme;
    }
    appModule.SET_THEME_MODE(theme);
  }
}
</script>
