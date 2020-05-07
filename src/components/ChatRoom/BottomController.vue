<template>
  <v-app-bar :dark="isDarkMode">
    <MsgInput id="msg-input" />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MsgInput from "@/components/ChatRoom/MsgInput.vue";
@Component({
  components: {
    MsgInput,
  },
})
export default class BottomController extends Vue {
  @Prop({ required: false })
  private isDarkMode!: boolean;
  private bottomNav = "recent";
}
</script>
