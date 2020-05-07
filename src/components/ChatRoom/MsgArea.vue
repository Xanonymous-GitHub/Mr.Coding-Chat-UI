<template>
  <div
    id="MsgArea"
    :class="{ darkBackground: isDarkMode }"
    class="full-height"
  ></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class MsgArea extends Vue {
  @Prop({ required: false })
  private isDarkMode!: boolean;
}
</script>
