<template>
  <div class="TwiPiTan m-3">
    <div class="row m-2">
      <BarAndNumber class="w-50 p-3 border" max="60" value="60" label="Time"/>
      <BarAndNumber class="w-50 p-3 border" max="100" value="0" label="Point"/>
    </div>

    <b-form-input class="mt-3 mb-3" :value="this.answer"></b-form-input>

    <div class="container pl-3 pr-3 mt-4 mb-4">
      <div class="row m-0" v-for="row in rows">
        <CharButton
          class="col-2 p-0"
          v-for="col in row"
          v-bind:char="col.char"
          @onAddChar="addChar"
          @onDeleteChar="deleteChar"
        ></CharButton>
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
  public answer = "";
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

  public deleteChar(value: string, callback: Function) {
    var char = this.answer.charAt(this.answer.length - 1);
    if (char != value) {
      callback(false);
      return;
    }
    this.answer = this.answer.slice(0, this.answer.length - 1);
    console.log("delete:" + value);
    callback(true);
  }

  public addChar(value: string, callback: Function) {
    this.answer += value;
    console.log("add   :" + value);
    callback(true);
  }
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
