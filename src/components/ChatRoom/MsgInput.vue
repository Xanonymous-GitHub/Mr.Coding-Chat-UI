<template>
  <v-text-field filled placeholder="put some messages" rounded>
    <template #prepend-inner>
      <v-icon v-on="on">mdi-help-circle-outline</v-icon>
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MsgInput extends Vue {}
</script>
