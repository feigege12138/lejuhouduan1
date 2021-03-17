<template>
  <div style="padding:30px;background-color:#f0f2f5">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button size="small" type="warning">初始化菜单</el-button>
        <el-button size='small' type="primary">新增菜单</el-button>
      </div>
      <el-table :data="resourceList" style="width: 100%;margin-bottom: 20px;" row-key="id" border
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="title" label="菜单名称" width="180">
        </el-table-column>
        <el-table-column label="icon" width="180" align="center">
          <template slot-scope="scope">
            <i :class="scope.row.icon"></i>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="分类名字" align="center">
        </el-table-column>
        <el-table-column prop="sort" label="排序" align="center">
        </el-table-column>
        <el-table-column label="状态显示" align="center">
          <template slot-scope="scope">
            <div>{{scope.row.showStatus==0?'不显示':'显示'}}</div>
          </template>
        </el-table-column> 
        <el-table-column label="导航栏显示" align="center">
          <template slot-scope="scope">
            <div>{{scope.row.level==0?'不展示':'展示'}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" align="center">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import power from '@/api/power/index'
  export default {
    data() {
      return {
        resourceList: []
      }
    },
    created() {
      power.findAllPermissions().then(res => {
        console.log(res)
        this.resourceList = res.data.menus
      })
    },
    methods: {

    }
  }

</script>

<style>

</style>
