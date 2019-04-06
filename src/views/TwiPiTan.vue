<template>
  <div class="TwiPiTan m-3">
    <div class="row m-2">
      <BarAndNumber class="w-50 p-3 border" max="60" value="60" label="Time"/>
      <BarAndNumber class="w-50 p-3 border" max="100" value="0" label="Point"/>
    </div>

    <b-form-input class="mt-3 mb-3" v-model="text"></b-form-input>

    <div class="container pl-3 pr-3 mt-4 mb-4">
      <div class="row m-0" v-for="row in rows" v-bind:key="row">
        <CharButton class="col-2 p-0" v-for="col in row" v-bind:key="col" v-bind:char="col.char"></CharButton>
      </div>
    </div>

    <div class="row m-2">
      <div class="w-50 p-1">
        <b-button class="w-100" variant="primary">ヒント</b-button>
      </div>
      <div class="w-50 p-1">
        <b-button class="w-100" variant="primary">こたる</b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BarAndNumber from "@/components/BarAndNumber.vue";
import CharButton from "@/components/CharButton.vue";

@Component({
  components: {
    BarAndNumber,
    CharButton
  }
})
export default class HoTwiPiTanme extends Vue {
  rows = [
    [
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" }
    ],
    [
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" }
    ],
    [
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" }
    ],
    [
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" }
    ],
    [
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" }
    ],
    [
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" },
      { char: "　" }
    ]
  ];
}
</script>

<style>
.col-2 {
  position: relative;
}
.col-2:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: 100%;
}
.col-2 button {
  width: 95%;
  height: 95%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 5%;
  padding: 0;
}
</style>
