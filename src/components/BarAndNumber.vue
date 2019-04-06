<template>
  <div>
    <span>{{ label }}：{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class BarAndNumber extends Vue {
  @Prop() public max!: number;
  @Prop() public value!: number;
  @Prop() public label!: string;
}
</script>