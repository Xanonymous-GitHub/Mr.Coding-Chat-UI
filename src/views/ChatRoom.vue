<template>
  <v-app id="chat-room" class="flex-column">
    <BottomController :isDarkMode="isDarkMode" class="pa-3 bottom fixed" />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BottomController from "@/components/ChatRoom/BottomController.vue";
import appModule from "@/store/modules/app";

@Component({
  components: {
    BottomController,
  },
})
export default class ChatRoom extends Vue {
  get isDarkMode() {
    return appModule.isDarkMode;
  }
}
</script>
