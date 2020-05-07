<template>
  <v-app class="flex-column" id="chat-room">
    <MsgArea :isDarkMode="isDarkMode" ref="msgArea" />
    <BottomController
      :isDarkMode="isDarkMode"
      class="pa-3 bottom fixed"
      ref="bottomController"
    />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BottomController from "@/components/ChatRoom/BottomController.vue";
import appModule from "@/store/modules/app";
import MsgArea from "@/components/ChatRoom/MsgArea.vue";

interface RefElement extends Element {
  $el?: {
    clientHeight: number;
    setAttribute: Function;
  };
}

@Component({
  components: {
    BottomController,
    MsgArea,
  },
})
export default class ChatRoom extends Vue {
  private changedMsgAreaHeight!: number;

  get isDarkMode() {
    return appModule.isDarkMode;
  }

  public mounted() {
    this.setMsgAreaHeight();
  }

  private calculateMsgAreaHeight() {
    const [msgArea, bottomController]: Array<RefElement> = [
      this.$refs.msgArea as RefElement,
      this.$refs.bottomController as RefElement,
    ];
    return (
      (msgArea.$el?.clientHeight as number) -
      (bottomController.$el?.clientHeight as number)
    );
  }

  private setMsgAreaHeight() {
    const msgArea = this.$refs.msgArea as RefElement;
    msgArea.$el?.setAttribute(
      "style",
      `height:${this.calculateMsgAreaHeight()}px`
    );
  }
}
</script>
