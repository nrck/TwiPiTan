<template>
  <div>
    <b-progress :max="this.max" height="3rem">
      <b-progress-bar class="text-left" :value="this.value">{{ label }}: {{ value }}</b-progress-bar>
    </b-progress>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class BarAndNumber extends Vue {
  @Prop() public max!: number;
  @Prop() public value!: number;
  @Prop() public label!: string;
}
</script>