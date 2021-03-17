<template>
  <div class="main">

    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span>分类管理</span>
      </div>



      <div class="title">
        乐居分类:
      </div>

      <el-row :gutter="20">
        <el-col :span="6" v-for="item in sort" :key="item.id">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>{{item.name}}</span>

            </div>
            <img style="width:100%;height:300px" :src="item.icon" alt="">
          </el-card>
        </el-col>
      </el-row>
      <div class="title">
        全部分类:
      </div>
      <el-table :data="allList" style="width: 100%;margin-bottom: 20px;" row-key="id" border 
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}" >
        <el-table-column prop="name" label="菜单名称" width="180">
        </el-table-column>
        <el-table-column label="icon" width="180" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.icon" alt="" style="width:100px;height:100px;border:solid 1px black">
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
  import goodsManage from '@/api/goodsManage/index'
  export default {
    data() {
      return {
        sort: [],
        allSort: [],
        allList: []
      }
    },
    created() {
      console.log(123)
      console.log(goodsManage)
      goodsManage.getAllCategory().then(res => {
        console.log(res)
        this.sort = res.data.items[1].children
        this.allSort = res.data.items
        console.log(this.allSort)
        var allList = []
        for (var i = 0; i <= this.allSort.length - 1; i++) {
          this.allSort[i].category.children = this.allSort[i].children
          console.log(this.allSort[i].category)
          allList.push(this.allSort[i].category)
        }
        this.allList = allList
        console.log(allList)
      })
    },
    methods: {

    }
  }

</script>

<style>
  .main {
    padding: 30px;
    background-color: #f0f2f5;
  }

  .title {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    font-weight: 700
  }

</style>
