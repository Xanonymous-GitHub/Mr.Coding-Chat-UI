<template>
  <v-bottom-navigation
    :dark="isDarkMode"
    class="v-bottom-navigation--fixed pa-3"
    v-model="bottomNav"
    fixed
  >
    <MsgInput />
  </v-bottom-navigation>
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
