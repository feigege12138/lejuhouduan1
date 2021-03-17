<template>
  <div class="mains">
    
    <div class="top">
      <span style="font-size:22px;    color: #9aa8d4;">电商数据 </span>
      <span style="font-size:20px;    color:#404d69;"> Shell Data</span>
    </div>
    <div class="num" >
      <div>销售量</div>
      <div>万元</div>
    </div>
    <div class="num-c">
      <div class="item" v-for="(item,index) in num " :key="index">
        {{item}}
      </div>
      
    </div>
     <div class="num" >
      <div>完成百分比</div>
    </div>
    <div class="pgs">
      <el-progress :text-inside="true" :stroke-width="24" :percentage="percentage" ></el-progress>

    </div>
     <div class="top" style="margin-top:20px">
      <span style="font-size:22px;    color: #9aa8d4;">热门搜索词 </span>
      <span style="font-size:20px;    color:#404d69;"> Top Search</span>
    </div>
    <div class="hot">


       
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

        num:[1,4,3,2,5,3,2,".",3,],
         percentage: 55,
      }
    },
    created(){
      setInterval(() => {
          this.percentage=88
      }, 3000);

       setInterval(()=>{
        if(this.num[3]==9){
          return
        }else if(this.num[5]==7){
          return
        }else if(this.num[6]==9){
          return
        }else{
          this.num[3]++
         this.num[5]++
          this.num[6]++
        }
      },1000)
    }
  }

</script>

<style lang="scss" scoped>
::v-deep .el-progress-bar__inner {
  background-color: unset;
  background-image: linear-gradient(90deg, #24cbff 30%, #9000ff); }
  .mains {
   padding:10px;
    width: 100%;
    height: 350px;
    color: #fff;
    // background-color: red;
    .num{
      display: flex;
      justify-content: space-between;
      font-size:16px;
      color: #9aa8d4;
      margin-top: 20px;
  
    }
    .num-c{
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      .item{
        width: 9%;
        height: 60px;
        background-color: #0f396b;
        text-align: center;
        line-height: 60px;
        font-size: 50px;
        font-weight: 700;
      }
    }
    .pgs{
      margin-top: 30px;
    }
  }

</style>
