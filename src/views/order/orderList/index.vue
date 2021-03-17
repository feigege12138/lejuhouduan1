<template>
  <div style="padding:30px;background-color:#f0f2f5;">
    <el-card class="box-card" shadow="nerve">
      <div slot="header" class="clearfix">
        <span>条件查询</span>
      </div>
      <el-form ref="form" :model="form" label-width="80px" size="small">
        <el-row>
          <el-col :span="6">
            <el-form-item label="订单编号">
              <el-input v-model="form.orderSn"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单类型" size="small">
              <el-select v-model="form.orderType " placeholder="请选择">
                <el-option v-for=" item in orderType" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="支付方式" size="small">
              <el-select v-model="form.payType" placeholder="请选择">
                <el-option v-for="item in payType" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单状态" size="small">
              <el-select v-model="form.status " placeholder="请选择">
                <el-option v-for="item in status" :label="item.name" :key="item.id" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10" :push="18">
            <el-form-item style="margin-top:30px">
              <el-button type="primary" @click="search(0)">搜索</el-button>
              <el-button @click="search(1)">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-table :data="orderList" border style="width: 100%" v-loading="loading">
        <el-table-column fixed label="#" type="index" width="50" align="center">
        </el-table-column>
        <el-table-column prop="orderSn" label="订单编号" width="240" align="center">
        </el-table-column>
        <el-table-column prop="payType" label="支付方式" width="160" align="center">
          <template slot-scope="scope">
            <div v-show="scope.row.payType==0" style=" border-radius: 5px; margin:0 auto; font-size:12px; background-color: #f4f4f5;
  background-color: #909399;
    border-color: #909399;
    color: #fff; width:60px;line-height:30px;text-alert:center;">
              未支付</div>
            <div v-show="scope.row.payType==1" style="margin:0 auto; width:50px;height:40px"><img
                style="width:50px;height:40px"
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd-image.i4.cn%2Fimage%2Ficon%2F2020%2F03%2F26%2F14%2F333206289%2Fz1585204561832_963622.jpg&refer=http%3A%2F%2Fd-image.i4.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618128460&t=251c88f267fae8671a6ee239c17aa6ee"
                alt=""></div>
            <div v-show="scope.row.payType==2" style="margin:0 auto; width:50px;height:40px"><img
                style="width:50px;height:40px"
                src="data:image/jpeg;base64,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"
                alt=""></div>

          </template>
        </el-table-column>
        <el-table-column label="订单状态" width="160" align="center">
          <template slot-scope="scope">
            <div class="t"
              :class="scope.row.status==0?'t0':scope.row.status==1?'t1':scope.row.status==2?'t2':scope.row.status==3?'t3':scope.row.status==4?'t4':'t5'">
              {{scope.row.status==0?'待付款':scope.row.status==1?'代发货':scope.row.status==2?'已发货':scope.row.status==3?'已完成':scope.row.status==4?'已关闭':'无效订单'}}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="添加时间" width="240" align="center">
        </el-table-column>
        <el-table-column prop="memberUsername" label="用户账号" width="200" align="center">
        </el-table-column>
        <el-table-column label="订单类型" width="200" align="center">
          <template slot-scope="scope">
            <div class="c" :class="scope.row.orderType==null?'a':'b'">{{scope.row.orderType==0?"正常订单":"秒杀订单"}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="zip" label="备注" width="200" align="center">

        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button size="small" type="primary" icon="el-icon-edit" @click="orderInfo(scope.row)">查看订单</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>

    </el-card>

    <div style="height:30px;width:10px"></div>

  </div>
</template>

<script>
  import mixins from '@/mixins/index'
  import order from '@/api/order/index'
  //搜索列表渲染数据

  export default {
    mixins: [mixins],
    data() {
      return {
        form: {},

        orderList: [],
        currentPage4: 1
      }
    },

    methods: {
      //------------------------------------------------------------------------------------获取列表数据
      getOrderTable() {
        this.loading=true
        order.findOrdersByPage(this.page, this.num, this.form).then(res => {
          this.orderList = res.data.rows
          this.total = res.data.total
          this.loading=false

        })
      },
      //-----------------------------------------------------------------------------------搜索
      search(res) {
        if (res == 0) {

        } else {
          this.form = {}
          console.log('重置')
        }
        this.getOrderTable()
      },
      //---------------------------------------------------------------------------查看订单详情
      orderInfo(res) {
        this.$router.push({
          name:"orderInfo",
          query:{
            id:res.id
          }
        })
        console.log(res)
      },
      //----------------------------------------------------分页
      handleSizeChange(val) {
        this.num = val
        this.getOrderTable()
      },
      handleCurrentChange(val) {
        this.page = val
        this.getOrderTable()

      }
    },

    created() {
      this.getOrderTable()

    }

  }

</script>

<style>
@import './index.css'

</style>
