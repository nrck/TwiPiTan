<template>
  <div>
    <b-button variant="primary">
      <span class="flex-text">{{ char }}</span>
    </b-button>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class BarAndNumber extends Vue {
  @Prop() public char!: string;
}
</script>

<style>
.flex-text {
  font-size: 5vw;
}
</style>
