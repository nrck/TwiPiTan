<template>
  <div class="TwiPiTan m-3">
    <div class="row m-2">
      <BarAndNumber class="w-50 p-3 border" max="60" :value="lastTime" label="Time"/>
      <BarAndNumber class="w-50 p-3 border" max="100" :value="point" label="Point"/>
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
        <b-button class="w-100" variant="primary" @click="onClickShowHint" v-b-modal.TwitterHint>ヒント</b-button>
      </div>
      <div class="w-50 p-1">
        <b-button class="w-100" variant="primary" @click="onClickAnswerButton">こたる</b-button>
      </div>
    </div>

    <b-modal id="TwitterHint" title="ヒント" ok-only>
      <p class="p-1 mt-1">{{ this.hint.tweet }}</p>
      <p class="p-1 mb-1 text-right">by {{ this.hint.screenName }}</p>
    </b-modal>
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
  public isStart = false;
  public lastTime = 0;
  public point = 0;
  public hint = {
    screenName: "",
    tweet: ""
  };
  private baseApiUrl = "http://127.0.0.1/";
  private answers = [
    "とうきょう",
    "いけぶくろ",
    "しんじゅく",
    "しながわ",
    "うえの"
  ];
  rows = [
    [
      { char: "と" },
      { char: "う" },
      { char: "き" },
      { char: "ょ" },
      { char: "う" },
      { char: "　" }
    ],
    [
      { char: "い" },
      { char: "け" },
      { char: "ぶ" },
      { char: "く" },
      { char: "ろ" },
      { char: "　" }
    ],
    [
      { char: "し" },
      { char: "ん" },
      { char: "じ" },
      { char: "ゅ" },
      { char: "く" },
      { char: "　" }
    ],
    [
      { char: "　" },
      { char: "し" },
      { char: "な" },
      { char: "が" },
      { char: "わ" },
      { char: "　" }
    ],
    [
      { char: "　" },
      { char: "う" },
      { char: "　" },
      { char: "え" },
      { char: "　" },
      { char: "の" }
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

  public created() {
    this.lastTime = 60;
  }

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
    if (!this.isStart) {
      this.isStart = true;
      this.countDownTimer();
      console.log("start");
    }
    this.answer += value;
    console.log("add   :" + value);
    callback(true);
  }

  private countDownTimer() {
    this.lastTime--;
    if (this.lastTime != 0) {
      setTimeout(() => {
        this.countDownTimer();
      }, 1000);
    }
  }

  public onClickAnswerButton() {
    this.answers.forEach((item, index) => {
      if (item == this.answer) {
        this.point += this.lastTime * item.length;
        this.answer = "";
        console.log("正解");
        this.answers.splice(index, 1);
      }
    });

    if (this.answers.length == 0) {
      console.log("終了！：" + this.point);
    }
  }

  public onClickShowHint() {
    this.hint.tweet = "ひんとひんと";
    this.hint.screenName = "@hogehoge";
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
