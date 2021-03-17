<template>
  <div class="main">


    <el-card class="box-card" body-style="padding:0px">
      <div slot="header" class="clearfix">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="商品介绍" name="1">
            <div>商品管理模块可以对客户端的商品进行增删改查等相关操作,来控制客户端商品的列表展示和商品详情</div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <div class="main-c" style="padding:30px;background-color:#f0f2f5">
        <el-card class="box-card" body-style="padding:0px" shadow="never">
          <div slot="header" class="clearfix">
            <el-collapse v-model="activeNamesInfo">
              <el-collapse-item title="条件查询" name="1">
                <div>

                  <el-form :inline="true" :model="search" class="demo-form-inline">
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <el-form-item label="商品名称" size="mini">
                          <el-input v-model="search.name" placeholder="商品名称/模糊查询"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="商品货号" size="mini">
                          <el-input v-model="search.id" placeholder="审批人"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="品牌" size="mini">
                          <el-select v-model="search.brandId  " placeholder="品牌">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="上架状态" size="mini">
                          <el-select v-model="search.publishStatus" placeholder="上架状态">
                            <el-option label="未上架" value="0"></el-option>
                            <el-option label="上架" value="1"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="审核状态" size="mini">
                          <el-select v-model="search.verifyStatus" placeholder="活动区域">
                            <el-option label="未审核" value="0"></el-option>
                            <el-option label="审核" value="1"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="18">
                        <el-form-item style="margin-left:80%">
                          <el-button type="primary" size="mini" @click="Reset()">重置</el-button>
                          <el-button type="primary" size="mini" @click="searchs()">搜索</el-button>
                        </el-form-item>
                      </el-col>
                    </el-row>





                  </el-form>



                </div>
              </el-collapse-item>
            </el-collapse>
          </div>

          <div class="line"></div>



          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <el-button type="primary" size="small" @click="goAddGoods()">新增</el-button>
              <el-button type="primary" size="small" @click="excel()">导出商品列表excel文件</el-button>

            </div>

            <el-table :data="tableList" border style="width: 100%" v-loading="loading">
              <el-table-column fixed type="index" label="#" width="40">
              </el-table-column>
              <el-table-column prop="date" label="商品图片" width="200" align="center">
                <template slot-scope="scope">
                  <div style="width:100px;height:100px" v-if="scope.row.pic==''"></div>
                  <img style="width:100px;height:100px" :src="scope.row.pic" alt="">
                </template>
              </el-table-column>
              <el-table-column prop="name" label="商品名称" width="240" align="center">
              </el-table-column>
              <el-table-column label="商品价格" width="180" align="center">
                <template slot-scope="scope">
                  <div>原价:{{scope.row.originalPrice}}</div>
                  <div>促销价格:{{scope.row.price}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="productCategoryName" label="商品类别" width="120" align="center">
              </el-table-column>
              <el-table-column prop="address" label="标签" width="120" align="center">
                <template slot-scope="scope">
                  <div>
                    <el-switch v-model="scope.row.newStatus" inactive-text="最新" :active-value="1" :inactive-value="0"
                      @change="newStatus(scope.row)">
                    </el-switch>
                  </div>
                  <div>
                    <el-switch v-model="scope.row.recommendStatus" inactive-text="推荐"
                      @change="recommendStatus(scope.row)" :active-value="1" :inactive-value="0">
                    </el-switch>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="address" label="标签2" width="120" align="center">
                <template slot-scope="scope">
                  <div>
                    <el-switch v-model="scope.row.publishStatus" inactive-text="发布" @change="publishStatus(scope.row)"
                      :active-value="1" :inactive-value="0">
                    </el-switch>
                  </div>
                  <div>
                    <el-switch v-model="scope.row.verifyStatus" inactive-text="审核" @change="verifyStatus(scope.row)"
                      :active-value="1" :inactive-value="0">
                    </el-switch>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="sku" width="180" align="center">
                <template slot-scope="scope">
                  <div>
                    <el-button type="text" @click="getSku(scope.row.id)">编辑sku</el-button>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="weight" label="重量" width="240" align="center">
              </el-table-column>
              <el-table-column prop="sort" label="排序" width="240" align="center">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100" align="center">
                <template slot-scope="scope">
                  <el-button @click="edit(scope.row.id)" type="text" size="small">编辑</el-button>
                  <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="100"
              layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
          </el-card>
        </el-card>
      </div>



      <sku ref="getSku" />

    </el-card>
  </div>
</template>

<script>
  import goodsManage from '@/api/goodsManage/index'
  import sku from './sku/index'
  export default {
    data() {
      return {

        // 搜索
        options: [{
            value: '1349640102272376833',
            label: '樱花哦'
          }, {
            value: '1328964991345328130',
            label: '家乐名品(JLVP)'
          }, {
            value: '1350061996314271745',
            label: '剑圣'
          }, {
            value: '1364542551600779265',
            label: 'TankMan'
          },
          {
            value: '1328990701308968962',
            label: '雷士照明'
          },
          {
            value: '1328988221644832769',
            label: '东易日盛'
          },



        ],
        search: {

        },
        loading: false,
        activeNames: ['0'],
        activeNamesInfo: ['0'],
        tableList: [],
        // 分页
        page: 1,
        num: 10,
        total: 1,
        currentPage4: 1,
      }
    },
    components: {
      sku
    },
    methods: {
      //--------------------------------------------导出exel
      excel() {
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['商品名称', '商品价格', '商品类别', '重量', '排序']
          const keys = ['brandName','price','keywords','weight','sort']
          console.log(this.tableList)
          const data=this.filterData(keys)
          console.log(data)
          excel.export_json_to_excel({
            header: tHeader, //表头 必填
            data, //具体数据 必填
            filename: 'excel-list', //非必填
            autoWidth: true, //非必填
            bookType: 'xlsx' //非必填
          })
        })
      },
      filterData(res){
        var data=this.tableList.map(item=>{
          return res.map(key=>{
            return item[key]
          })
        })
        return data
      },

      //获取sku列表数据
      getSku(res) {
        console.log(res)
        goodsManage.dproductSkusDetailel(res).then(ref => {
          this.$refs.getSku.skuShow(ref.data.skus);
        })
      },
      //新增
      goAddGoods() {
        this.$router.push({
          name: 'addGoods',
          query: {
            id: 1
          }
        })
      },
      //搜索
      searchs() {
        console.log(this.search)
        this.getGoodsList()
      },
      //重置
      Reset() {
        this.search = {}
        this.getGoodsList()
      },
      getGoodsList() {
        this.loading = true
        goodsManage.productsByPage(this.page, this.num, this.search).then(res => {
          console.log(res)
          this.tableList = res.data.rows
          this.loading = false
          this.total = res.data.total

        })
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.num = val
        this.getGoodsList()

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page = val
        this.getGoodsList()
      },
      //修改状态
      newStatus(res) {
        var id = res.id
        var status = res.newStatus
        console.log(res)
        goodsManage.switchNewStatus({
          "productId": id,
          "status": status
        }).then(ref => {
          if (ref.success) {
            this.$message.success('修改状态成功')
          } else {
            this.$message.error('修改状态失败')
          }
        })
      },
      //修改推荐状态
      recommendStatus(res) {
        var id = res.id
        var status = res.newStatus
        console.log(res)
        goodsManage.switchRecommandStatus({
          "productId": id,
          "status": status
        }).then(ref => {
          if (ref.success) {
            this.$message.success('修改状态成功')
          } else {
            this.$message.error('修改状态失败')
          }
        })
      },
      //修改发布状态
      publishStatus(res) {
        var id = res.id
        var status = res.newStatus
        console.log(res)
        goodsManage.switchPublishStatus({
          "productId": id,
          "status": status
        }).then(ref => {
          if (ref.success) {
            this.$message.success('修改状态成功')
          } else {
            this.$message.error('修改状态失败')
          }
        })

      },
      //修改审核状态res
      verifyStatus(res) {
        var id = res.id
        var status = res.newStatus
        console.log(res)
        goodsManage.switchVerifyStatus({
          "productId": id,
          "status": status
        }).then(ref => {
          if (ref.success) {
            this.$message.success('修改状态成功')
          } else {
            this.$message.error('修改状态失败')
          }
        })

      },

      // 编辑删除
      edit(res) {

        this.$router.push({
          name: 'editGoods',
          query: {
            id: res
          }
        })
      },
      del(res) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          goodsManage.del(res.id).then(resf => {
            this.$message.success('删除成功')
            this.getGoodsList()
          })
        }).catch(() => {
          this.$message.info('已取消删除')
        });






      }
    },
    created() {
      this.getGoodsList()
    },

  }

</script>

<style>
  .line {
    width: 100%;
    height: 30px;
    background-color: #f0f2f5;
  }

</style>
