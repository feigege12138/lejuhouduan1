<template>
  <div class="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button type="primary" size="small" @click="addList()">新增</el-button>
      </div>

      <el-table :data="getlist" border style="width: 100%" v-loading="loading">
        <el-table-column fixed type="index" label="#" align="center">
        </el-table-column>
        <el-table-column prop="date" label="商品图片" width="150" align="center">
          <template slot-scope="scope">
            <img style="width:100px;height:100px" :src="scope.row.pic">
          </template>
        </el-table-column>
        <el-table-column prop="name" label="活动时间" width="240" align="center">
          <template slot-scope="scope">
            <div>{{scope.row.promotionStartTime}}</div>
            <div>{{scope.row.promotionEndTime}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="province" label="是否过期" width="120" align="center">
          <template slot-scope="scope">
            <div>{{scope.row.promotionPerLimit==0?"已过期":"未过期"}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="240" align="center">
        </el-table-column>
        <el-table-column prop="brandName" label="品牌名称" width="120" align="center">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="120" align="center">
        </el-table-column>
        <el-table-column prop="productCategoryName" label="商品类别" width="240" align="center">
        </el-table-column>
        <el-table-column label="创建时间" width="120" align="center">、
          <template slot-scope="scope">
            <div>{{scope.row.createTime}}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button @click="remove(scope.row.recommendId)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>



    <!-- 新增弹出框 -->

    <el-dialog title="热销详情" :visible.sync="dialogVisible" width="80%">


      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>条件查询</span>
        </div>
        <el-form :inline="true" :model="search" class="demo-form-inline">

          <el-row :gutter="15">
            <el-col :span="4">
              <el-input placeholder="商品名称/模糊查询" size="small" v-model="search.name"></el-input>
            </el-col>
            <el-col :span="4">
              <el-input placeholder="商品货号" size="small" v-model="search.productSn   "></el-input>
            </el-col>
            <el-col :span="4">
              <el-form-item  size="mini">
                <el-select v-model="search.brandId  " placeholder="品牌">
                  <el-option v-for="item in optionss" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-select placeholder="上架状态" size="small" v-model="search.publishStatus">
                <el-option label="已上架" :value="1"></el-option>
                <el-option label="未上架" :value="0"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select placeholder="审核状态" v-model="search.verifyStatus ">
                <el-option label="已审核" :value="1"></el-option>
                <el-option label="未审核" :value="0"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-button size="small" @click="kong()">重置</el-button>
              <el-button size="small" type="primary" @click="sousuo()">搜索</el-button>
            </el-col>
          </el-row>
        </el-form>

      </el-card>

      <div class="line"></div>
      <el-card v-loading="loading">
        <div slot="header" class="clearfix">
          <span>商品列表</span>
        </div>

        <el-table :data="adList" height="500" border style="width: 100%">
          <el-table-column fixed type="index" label="#" align="center">
          </el-table-column>
          <el-table-column label="选择" width="120" lang="center">
            <template slot-scope="scope">
              <el-button @click="addHot(scope.row)">添加</el-button>
            </template>
          </el-table-column>
          <el-table-column label="商品图片" align="center" width="240">
            <template slot-scope="scope">
              <img style="width:100px;height:100px" :src="scope.row.pic" alt="">
            </template>
          </el-table-column>
          <el-table-column prop="name" label="商品名称" align="center" width="120">
          </el-table-column>
          <el-table-column prop="price" label="商品价格" align="center">
            <template slot-scope="scope">
              <div>原价{{scope.row.originalPrice}}</div>
              <div>现价{{scope.row.promotionPrice}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="productCategoryName" label="商品类别" align="center">
          </el-table-column>
          <el-table-column prop="weight" label="重量" align="center">
          </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage4" :page-sizes="[10, 15, 20, 25]" :page-size="100"
          layout="total, sizes, prev, pager, next, jumper" :total="Total">
        </el-pagination>
      </el-card>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="dix()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 内层弹出框 -->
    <el-dialog title="编辑限时活动" :visible.sync="dialogVisibleinfo" width="60%">



      <el-row :gutter="20">
        <el-col :span="12">
          <div>商品原价:{{goodsInfo.price}}</div>
        </el-col>
        <el-col :span="12">
          <div>商品名称:{{goodsInfo.brandName}}</div>
        </el-col>
        <el-col :span="12">
          <div>
            优惠价格
            <el-input-number v-model="goodsInfo.promotionPrice" :min="0"></el-input-number>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            排序:
            <el-input-number v-model="goodsInfo.sort " :min="0"></el-input-number>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="block">
            <span class="demonstration">促销开始时间</span>
            <el-date-picker v-model="goodsInfo.promotionStartTime " type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="block">
            <span class="demonstration">促销结束时间</span>
            <el-date-picker v-model="goodsInfo.promotionEndTime " type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            活动限购数量:
            <el-input-number v-model="goodsInfo.promotionPerLimit" :min="0"></el-input-number>
          </div>

        </el-col>
        <el-col :span="12">
          <template>
            <div> 商品图片：<img style="width:200px;height:200px" :src="goodsInfo.pic " alt=""></div>
          </template>
        </el-col>
      </el-row>

      <el-row :gutter="20">

      </el-row>


      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleinfo = false">取 消</el-button>
        <el-button type="primary" @click="addHots()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import marketing from '@/api/marketing/index'

  export default {
    data() {
      return {
        optionss: [{
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
        // 刷新动画
        loading: false,
        // 分页
        currentPage4: 1,
        page: '1',
        num: '10',
        Total: '1',
        // 审核
        getlist: [],
        goodsInfo: {},
        loading: false,
        dialogVisible: false,
        dialogVisibleinfo: false,
        adList: [],
        productId: '',
        search: {}
      }
    },
    created() {
      this.getList()
      this.getAddList()

    },

    methods: {
      //添加最热商品
      addHot(res) {
        this.dialogVisibleinfo = true
        this.productId = res.id
        this.goodsInfo = res
      },
      //确定提交坐热商品
      addHots() {
        marketing.addRecommend({
          productId: this.productId
        }).then(res => {
          if (res.success) {
            this.$message.success('添加成功')
            this.dialogVisibleinfo = false
            this.dialogVisible = false
            this.getList()

          }
        })
      },
      //重置
      kong() {
        this.search = {}
      },
      // 分页
      handleSizeChange(val) {
        this.num = val
        this.getAddList()
      },
      handleCurrentChange(val) {
        this.page = val
        this.getAddList()

      },
      //搜索
      sousuo() {
        this.getAddList()
      },
      aaaa(res) {},


      // 添加活动

      cancel() {
        this.dialogVisible = !this.dialogVisible
        this.$message.info('取消成功')
      },
      dix() {
        this.dialogVisible = !this.dialogVisible

        this.$message.success('添加成功')
      },
      // 打开添加弹框
      addList() {
        this.dialogVisible = !this.dialogVisible
      },

      //初始化获取添加列表和页面列表
      getAddList() {
        this.loading = true
        marketing.productsByPage(this.page, this.num, {
          ...this.search
        }).then(res => {
          this.adList = res.data.rows
          this.Total = res.data.total
          this.loading = false
        })
      },
      getList() {
        this.loading = true
        marketing.findAllRecommends().then(res => {
          this.getlist = res.data.items
          this.loading = false
        })
      },
      remove(res) {

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          marketing.delRecommend(res).then(ref => {
            this.$message.success('删除成功')
            this.getList()

          })
        }).catch(() => {
          this.$message.info('已取消删除')
        });

      }


    }
  }

</script>

<style>
  .main {
    padding: 30px;
    background-color: #f0f2f5;

  }

  .line {
    width: 100%;
    height: 30px;
  }

</style>
