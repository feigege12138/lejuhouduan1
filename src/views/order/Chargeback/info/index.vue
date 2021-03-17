<template>
  <div style="padding:30px;background-color:#f0f2f5">
    <el-card shadow="nerve">
      <!-- --------------------------------------------------------------------------- 订单信息-->

      <el-row :gutter="20">
        <el-col :span="24">
          <div style="display:flex">
            <h4>订单信息:</h4>
            <div class="t" :class="form.status==0?'t0':form.status==1?'t1':form.status==2?'t2':'t3'">
              {{form.status==0?'待处理':form.status==1?'退货中':form.status==2?'已完成':'已拒绝'}}
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">订单：{{form.orderSn}}</div>
        </el-col>
        <el-col :span="6">
          <el-button type="text" @click="goOrderInfo(id)">查看订单</el-button>
        </el-col>
        <el-col :span="6">
          <div class="top">退单人姓名：{{form.returnName}}</div>
        </el-col>
        <el-col :span="6">
          <div class="top">退单理由：{{form.reason}}</div>
        </el-col>
        <el-col :span="6">
          <div class="top">退单描述：{{form.description}}</div>
        </el-col>
        <el-col :span="6">
          <div class="top">退单时间：{{form.createTime}}</div>
        </el-col>
        <el-col :span="24">
          <div>退单图片：</div>
          <img style="width:100px;height:100px" :src="form.proofPics" alt="">
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-divider></el-divider>
        <!-- --------------------------------------------------------------------------- 退货商品-->

        <el-col :span="24">
          <h4>退货商品</h4>
        </el-col>
        <el-table :data="arr" border>
          <el-table-column prop="date" label="商品图片" width="300" align="center">
            <template slot-scope="scope">
              <el-image style="width:150px;height:150px" :src="scope.row.productPic" fit="fill" :lazy="true"></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="productBrand" width="140" label="商品描述" align="center">
          </el-table-column>
          <el-table-column prop="productPrice" label="商品价格" align="center">
          </el-table-column>
          <el-table-column label="商品属性" align="center">
            <template>
              <div v-for="(item,index) in attribute" :key="index">
                {{item.key}}:{{item.value}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="productCount" label="商品数量" align="center">
          </el-table-column>
          <el-table-column prop="returnAmount" label="总价格" width="80" align="center">
          </el-table-column>
        </el-table>
      </el-row>
      <!-- --------------------------------------------------------------------------- 用户信息-->

      <el-row :gutter="20">
        <el-divider></el-divider>
        <el-col :span="24">
          <h4>用户信息：</h4>
        </el-col>
        <el-col :span="12">
          <span>联系人：</span>
          <span>{{form.returnName}}</span>
        </el-col>
        <el-col :span="12">
          <span>联系电话：</span>
          <span>{{form.returnPhone}}</span>
        </el-col>

      </el-row>
      <!-- --------------------------------------------------------------------------- 费用信息-->

      <el-row :gutter="20">
        <el-divider></el-divider>
        <el-col :span="24">
          <h4>费用信息：</h4>
        </el-col>
        <el-col :span="12">
          <span>退单金额：</span>
          <span style="color:red">{{form.returnAmount}}</span>
        </el-col>
        <el-col :span="12">
          <span>运费金额：</span>
          <span style="color:red">{{form.returnAmount}}</span>
        </el-col>

      </el-row>
      <el-row :gutter="20" v-if="status>=2">
        <el-divider></el-divider>
        <!-- --------------------------------------------------------------------------- 处理结果-->

        <el-col :span="24">
          <h4>处理结果：</h4>
        </el-col>
        <el-col :span="8">
          <span>处理人：</span>
          <span>{{form.handleMan}}</span>
        </el-col>
        <el-col :span="8">
          <span>处理备注：</span>
          <span>{{form.handleNote}}</span>
        </el-col>
        <el-col :span="8">
          <span>处理时间：</span>
          <span>{{form.handleTime}}</span>
        </el-col>
        <!-- ------------------------------------------------------------收货信息 -->
      </el-row>
      <el-row :gutter="20" v-if="status==2">
        <el-divider></el-divider>

        <el-col :span="24">
          <h4>收货信息：</h4>
        </el-col>
        <el-col :span="8">
          <span>退单收货人：</span>
          <span>{{form.receiveMan}}</span>
        </el-col>
        <el-col :span="8">
          <span>退单收货备注：</span>
          <span>{{form.receiveNote}}</span>
        </el-col>
        <el-col :span="8">
          <span>退单收货时间：</span>
          <span>{{form.receiveTime}}</span>
        </el-col>
      </el-row>




      <!-- --------------------------------------------------------------------------- ipt收货人-->
      <el-form ref="form" size="small" :model="forms" label-width="80px" v-if="status==1">

        <el-row :gutter="20">
          <el-divider></el-divider>
          <el-col :span="8">
            <el-form-item label="收货人">
              <el-input v-model="forms.receiveMan"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="收货备注">
              <el-input v-model="forms.receiveNote"></el-input>
            </el-form-item>
          </el-col>

          <div style="margin: 0 auto;">

            <el-button size="small" @click="ok()" type="primary">确定收货</el-button>
          </div>


        </el-row>
      </el-form>
      <el-form ref="form" size="small" :model="forms" label-width="80px" v-if="status==0">

        <el-row :gutter="20">
          <el-divider></el-divider>
          <el-col :span="8">
            <el-form-item label="退款金额">
              <el-input v-model="forms.returnAmount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="处理人">
              <el-input v-model="forms.handleMan"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="拒绝理由">
              <el-input v-model="forms.handleNote"></el-input>
            </el-form-item>
          </el-col>

          <div style="margin: 0 auto;">

            <el-button size="small" @click="agreeOrRefuse(1)" type="primary">同意退货</el-button>
            <el-button size="small" @click="agreeOrRefuse(2)" type="primary">拒绝退货</el-button>
          </div>


        </el-row>
      </el-form>


    </el-card>
  </div>
</template>

<script>
  import order from '@/api/order/index'
  export default {
    data() {
      return {
        id: '',
        arr: [],
        form: {

        },
        forms: {

        },
        attribute: [],
        status: '',
      }
    },
    created() {

      this.getInfo()

    },
    methods: {
      //-----------------------------------确定收货
      ok() {
        this.forms.id = this.id
        order.receiveProduct(this.id, {
          ...this.forms
        }).then(res => {
          console.log(res)
          this.getInfo()
        })
      },
      //-----------------------------------------------------------同意or拒绝退货res
      agreeOrRefuse(res) {
        this.forms.id = this.id
        if (res == 1) {
          order.agreeApply(this.id, {
            ...this.forms
          }).then(res => {
            console.log(res)
            if (res.success) {
              this.$message.success('同意退货')
              this.getInfo()
            } else {
              this.$message.success('失败')
            }
          })

        } else {
          order.rejectApply(this.id, {
            ...this.forms
          }).then(res => {
            console.log(res)
            if (res.success) {
              this.$message.success('同意退货')
              this.getInfo()
            } else {
              this.$message.success('失败')
            }
          })
        }
      },
      //----------------------------------------------------------跳转到订单详情页面
      goOrderInfo(id) {
        // return
        this.$router.push({
          name: 'orderInfo',
          query: {
            id: this.form.orderId
          }
        })
      },
      //--------------------------------------------------------------获取页面信息
      getInfo() {
        //获取routerid
        this.id = this.$route.query.id
        order.orderReturn(this.id).then(res => {
          console.log(res)
          this.form = res.data.orderReturnApply
          this.arr = [res.data.orderReturnApply]
          this.attribute = JSON.parse(res.data.orderReturnApply.productAttr)
          this.status = res.data.orderReturnApply.status

        })
      },
    },
    beforeCreate() {}
  }

</script>

<style>
  .t {
    border: 1px solid black;
    text-align: center;
    line-height: 30px;
    width: 60px;
    height: 30px;
    /* margin: 0 auto; */
    margin-top: 13px;
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

  .top {
    margin-top: 15px;
    height: 30px;
    font-size: 13px;
  }

  span {
    font-size: 14px;
  }

</style>
