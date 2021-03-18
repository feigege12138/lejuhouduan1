<template>
  <div style="padding:30px;background-color:#f0f2f5;">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>条件查询</span>
      </div>
      <el-form :inline="true" :model="form" size="small" class="demo-form-inline">
        <el-form-item label="订单编号">
          <el-input v-model="form.orderSn" placeholder="请填写订单编号"></el-input>
        </el-form-item>
        <el-form-item label="退单状态">
          <el-select v-model="form.status" placeholder="退单状态">
            <el-option v-for="item in state" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search()">查询</el-button>
          <el-button type="primary" plain @click="reset()">重置</el-button>
        </el-form-item>
      </el-form>


    </el-card>
    <div style="width:100%;height:30px;background-color:#f0f2f5"></div>
    <el-table :data="chargebackList" border style="width: 100%" v-loading="loading">
      <el-table-column fixed type="index" label="#" width="50" align="center">
      </el-table-column>
      <el-table-column align="center" prop="orderSn" label="订单编号" width="240">
      </el-table-column>
      <el-table-column align="center" label="退单状态" width="240">
        <template slot-scope="scope">
          <div class="t" :class="scope.row.status==0?'t0':scope.row.status==1?'t1':scope.row.status==2?'t2':'t3'">
            {{scope.row.status==0?'待处理':scope.row.status==1?'退货中':scope.row.status==2?'已完成':'已拒绝'}}
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="description" label="描述" width="240">
      </el-table-column>
      <el-table-column align="center" prop="productName" label="商品名称" width="200">
      </el-table-column>
      <el-table-column align="center" prop="reason" label="退单原因" width="240">
      </el-table-column>
      <el-table-column align="center" prop="productAttr" label="商品属性" width="300">
      </el-table-column>
      <el-table-column align="center" prop="handleNote" label="商家备注备注" width="240">
      </el-table-column>

      <el-table-column align="center" prop="createTime" label="添加时间" width="240">
      </el-table-column>
      <el-table-column align="center" fixed="right" label="操作" width="240">
        <template slot-scope="scope">
          <el-button @click="goInfo(scope.row)" type="text" size="small">查看退单详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import mixins from '@/mixins/index'
  import order from '@/api/order/index'
  export default {
    mixins: [mixins],
    data() {
      return {
        chargebackList: [],
        chargebackInfo: {},
        form: {},
        loading: false,
        state: [{
            name: '待处理',
            id: 0
          },
          {
            name: '退货中',
            id: 1
          },
          {
            name: '已完成',
            id: 2
          },
          {
            name: '已拒绝',
            id: 3
          },

        ]
      }
    },
    created() {
      this.getInfo()
    },
    methods: {
      getInfo() {
        this.loading = true
        order.findReturnApply(this.page, this.num, this.form).then(res => {
          this.chargebackList = res.data.rows
          console.log(res)
          this.total = res.data.total
          this.loading = false



        })
      },
      //-------------------------------------------------分页器
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.num=val
        this.getInfo()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
         this.page=val
        this.getInfo()
      },

      search() {
        this.getInfo()
      },
      reset() {
        this.form = {},
          this.getInfo
      },

      goInfo(res) {
        console.log(res.id)
        this.$router.push({
          name: 'chargeBackInfo',
          query: {
            id: res.id
          }
        })
      }


    }
  }

</script>

<style>
  .t {
    border: 1px solid black;
    text-align: center;
    line-height: 30px;
    width: 60px;
    height: 30px;
    margin: 0 auto;
    border-radius: 5px;
    font-size: 13px;
  }

  .t0 {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }

  .t1 {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }

  .t2 {
    background-color: #ecf5ff;
    border-color: #d9ecff;
    color: #409eff;
  }

  .t3 {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
  }

</style>
