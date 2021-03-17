<template>
  <div class="main">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <el-button type="primary" size="small" @click="add()">新增</el-button>
      </div>
      <el-table :data="brandList" border style="width: 100%" v-loading="loading">
        <el-table-column fixed type="index" label="#" width="50" align="center">
        </el-table-column>
        <el-table-column prop="name" label="品牌名称" width="150" align="center">
        </el-table-column>
        <el-table-column label="展示状态" width="180" align="center">
          <template slot-scope="scope">

            <el-switch v-model="scope.row.showStatus" inactive-text="是否展示" :active-value='1' :inactive-value="0"
              @change="showStatus(scope.row)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="logo" width="200" align="center">
          <template slot-scope="scope">


            <img :src="scope.row.logo" alt="" style="width:100px;height:100px">

          </template>
        </el-table-column>
        <el-table-column prop="city" label="专区大图" width="200" align="center">
          <template slot-scope="scope">

            <img :src="scope.row.bigPic" alt="" style="width:100px;height:100px">

          </template>
        </el-table-column>
        <el-table-column prop="brandStory" label="品牌故事" width="150" align="center">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="300" align="center">
        </el-table-column>
        <el-table-column prop="sort" label="排序" width="100" align="center">
        </el-table-column>
        <el-table-column prop="productCommentCount" label="产品评论数量" width="150" align="center">
        </el-table-column>
        <el-table-column prop="productCount" label="产品数量" width="150" align="center">
        </el-table-column>
        <el-table-column label="是否品牌制造商" width="150" align="center">
          <template slot-scope="scope">
            <div>{{scope.row.factoryStatus==0?'否':'是'}}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button @click="alter(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-card>

    <addAlter ref="mychild" />
  </div>
</template>

<script>
  import goodsManage from '@/api/goodsManage/index'
  import addAlter from './components/index'
  export default {


    data() {
      return {
        page: 1,
        num: 5,
        brandList: [],
        loading: false,
        dialogVisible: true,
        total: 1,
        currentPage4: 1
      }
    },
    components: {
      addAlter
    },
    created() {
      this.getBrandList()
    },
    methods: {
      ceshi() {},
      add() {
        this.$refs.mychild.remove(false);
        this.$refs.mychild.init(this.dialogVisible);
      },
      getBrandList() {
        this.loading = true
        goodsManage.findAllBrand(this.page, this.num).then(res => {
          this.brandList = res.data.rows
          this.loading = false
          this.total = res.data.total
        })
      },
      //编辑
      alter(res) {
        this.$refs.mychild.remove(res);

      },
      //删除
      del(res) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          goodsManage.delBrand(res).then(ref => {
            if (ref.success) {
              this.$message.success('删除成功')
              this.getBrandList()
            } else {
              this.$message.success('删除失败')
            }
          })
        }).catch(() => {
          this.$message.info('取消删除')
        });



      },
      showStatus(val) {

        goodsManage.switchShowStatus({
          id: val.id,
          status: val.showStatus
        }).then(res => {
          if (res.success) {

            this.$message.success('修改状态成功')
            this.getBrandList()
          } else {
            this.$message.error('修改状态失败')
          }
        })

      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);

        this.num = val
        this.getBrandList()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);

        this.page = val
        this.getBrandList()
      }
    }
  }

</script>

<style scoped>
  .main {
    padding: 30px;
    background-color: #f0f2f5;
  }

</style>
