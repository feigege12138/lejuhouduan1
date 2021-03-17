<template>
  <div style="padding:30px;background-color:#f0f2f5">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
      <el-button size="small" type="warning">初始化菜单</el-button>
      <el-button size='small' type="primary">新增菜单</el-button>
  </div>


</el-card>
  </div>
</template>

<script>
import power from'@/api/power/index'
export default {
  data(){
    return{

    }
  },
  created(){
    power.findAllPermissions().then(res=>{
      console.log(res)
    })
  },
  methods:{

  }
}
</script>

<style>

</style>