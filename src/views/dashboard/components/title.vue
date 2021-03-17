<template>
    <div class="title">
      <div class="left">
        <svg-icon @click="screen()" icon-class="full" class-name='custom-class' style="font-size:30px;color:#666;margin-left:10px" />
      </div>
      <div class="center">
        不凡数据大屏
      </div>
      <div class="right">
        {{time}}
      </div>
    </div>
</template>

<script>

  import {
    getNowDate 
  } from '@/views/dashboard/nowItem'
  export default {
    data() {
      return {
        time: ''
      }
    },
    created() {
      console.log(123)
       setInterval(res => {
        this.time = getNowDate()
      
      }, 1000)
    },
    methods:{
      screen(){

        this.$parent.fullScreen();
      }
    }

  } 

</script>

<style lang="scss" scoped>
  .title {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
      background: url(http://shen_hao222.gitee.io/test_page/static/img/titleBG.a4cdf1b6.png) no-repeat center ;
       background-size: 80% 100px;
    .left {
      width: 20%;
      height: 100px;
      display: flex;
      align-items: center;
    }

    .center {
      width: 60%;
      height: 100px;
      text-shadow: #fff 1px 0 10px;
      color: #fff;
      font-size: 35px;
      text-align: center;
      line-height: 100px;
      font-weight: 700;


    }

    .right {
      width: 20%;
      height: 100px;
      font-size:20px ;
      line-height: 100px;
      color: #fff;
    }
  }

</style>
