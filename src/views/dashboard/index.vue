<template>
  <div ref="dashboard_main" style="background-color:#0a1631;">

    <div class="main" style="z-index:999;">

      <div class="title">
        <Title />
      </div>

      <div class="centent">
        <div class="centent-left">
          <div class="top">

            <div class="left">
              <ShellData/>
            </div>

            <div class="right">
              <BarEchartsBox style="width:100%:height:100%" />
            </div>

          </div>

          <div class="bottom">
            <div class="b a">
              <EchartsBox style="width:100%;heigth:100%;overflow: hidden;" />
            </div>
            <div class="a ">
              <MapEchartsBox />
            </div>
            <div class=" a ">
              <PieEchartsBox />
            </div>
          </div>
        </div>
        <div class="centent-right">
          <Right/>
        </div>
      </div>

    </div>




    <!-- canvas背景-->
    <div class="canvasbg">

      <canvasBg />
    </div>
  </div>
</template>

<script>
  import canvasBg from '@/views/dashboard/components/canvasBg'
  import BarEchartsBox from './components/barEchartsBox'
  import PieEchartsBox from './components/pieEchartsBox'
  import EchartsBox from './components/EchartsBox'
  import Title from './components/title'
  import MapEchartsBox from './components/mapEchartsBox'
  import screenfull from 'screenfull'
  import ShellData from'./components/shellData'
  import Right from './components/right'


  export default {
    data() {
      return {

      }
    },
    components: {
      //背景图
      canvasBg,
      //树状图
      BarEchartsBox,
      // 圆饼图
      PieEchartsBox,
      // 云子符
      EchartsBox,

      Title,
      // 地图
      MapEchartsBox,
      //左上
      ShellData,
      Right
    },
    methods: {
      fullScreen() {
        console.log(123)
        console.log(screenfull)
        if (screenfull.isEnabled) {
          // 控制是否全屏的按钮
          screenfull.toggle(this.$refs.dashboard_main)
        }
      },
    }
  }

</script>

<style lang="scss" scoped>
  .str {
    font-size: 22px;
    margin-left: 10px;
    margin-top: -35px;
        color: #9aa8d4;
  }

  .main {
    background-color: #0a1631;

    height: 730px;

    .title {
      width: 100%;
      height: 100px;
    }

    .centent {
      width: 100%;
      height: 700px;
      display: flex;
      z-index: 999;
      position: absolute;

      .centent-left {
        width: 75%;
        height: 100%;

        .top {
          width: 100%;
          height: 50%;
          display: flex;

          .left {
            width: 33.33%;
            height: 100%;

          }

          .right {
            width: 66.66%;
            height: 100%;

          }

        }

        .bottom {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: space-between;

          .a {
            width: 33.3333%;
            height: 100%;
          }

          .b {
            height: fit-content;
          }

        }
      }
      .centent-right {
        width: 25%;
        height: 100%;
        z-index: 99999;
        padding: 10px;
      }
    }
  }
  .canvasbg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 250px;
  }

</style>
