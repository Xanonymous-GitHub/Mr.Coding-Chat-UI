<template>
  <div class="" id="chat-room">
    <BottomController :isDarkMode="isDarkMode" />
  </div>
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
