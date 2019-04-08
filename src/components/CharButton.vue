<template>
  <div>
    <b-button :variant="this.variantValue" @click="onClick">
      <span class="flex-text">{{ char }}</span>
    </b-button>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class BarAndNumber extends Vue {
  @Prop() public char!: string;

  private variantValue = "primary";
  private isEnable = true;
  private isSelected = false;

  public onClick() {
    if (this.isSelected) {
      this.$emit("onDeleteChar", this.char, (res: Boolean) => {
        if (res) {
          this.isSelected = false;
          this.variantValue = "primary";
        }
      });
    } else {
      this.$emit("onAddChar", this.char, (res: Boolean) => {
        if (res) {
          this.isSelected = true;
          this.variantValue = "outline-info";
        }
      });
    }
  }
}
</script>

<style>
.flex-text {
  font-size: 5vw;
}
</style>
