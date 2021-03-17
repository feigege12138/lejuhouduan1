<template>
  <div style="padding:30px;background-color:#f0f2f5" v-loading='loading'>
    <el-card class="box-card" shadow="nerver">
      <div style="width:1000px;margin:0 auto">
        <el-steps :active="active" finish-status="success">
          <el-step title="待付款"></el-step>
          <el-step title="代发货"></el-step>
          <el-step title="已发货"></el-step>
          <el-step title="已完成"></el-step>
          <el-step title="已关闭"></el-step>
        </el-steps>
      </div>
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="title">订单信息:</div>
        </el-col>
        <el-col :span="1">
          <div class="t"
            :class="orderInfo.status==0?'t0':orderInfo.status==1?'t1':orderInfo.status==2?'t2':orderInfo.status==3?'t3':orderInfo.status==4?'t4':'t5'">
            {{orderInfo.status==0?'待付款':orderInfo.status==1?'代发货':orderInfo.status==2?'已发货':orderInfo.status==3?'已完成':orderInfo.status==4?'已关闭':'无效订单'}}
          </div>
        </el-col>
        <el-col :span="20"></el-col>
        <el-col :span="6">
          <div class="top ">
            <div style="display:flex">
              <div>
                订单金额:
              </div>
              <div class="pric">{{orderInfo.payAmount}}</div>
            </div>

          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            订单编号:{{orderInfo.orderSn}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            用户账户:{{orderInfo.memberUsername}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            备注:{{orderInfo.payAmount}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            下单时间:{{orderInfo.createTime}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            付款时间:{{orderInfo.paymentTime}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            发货时间:{{orderInfo.deliveryTime}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            收货时间:{{orderInfo.receiveTime}}
          </div>
        </el-col>
      </el-row>
      <!-- //------------------------------------------------------------------------------------------ -->
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="title">收货人信息:</div>
        </el-col>
        <el-col :span="1">
          <div class="dd">

          </div>
        </el-col>
        <el-col :span="20"></el-col>
        <el-col :span="6">
          <div class="top">

            收货人:{{orderInfo.receiverName}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            用户姓名:{{orderInfo.memberUsername}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            手机号码:{{orderInfo.receiverPhone}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            邮政编码:{{orderInfo.totalAmount}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            地区:{{orderInfo.receiverProvince}} {{orderInfo.receiverCity}}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">

            详细地址:{{orderInfo.receiverDetailAddress}}
          </div>
        </el-col>

      </el-row>
      <!-- //------------------------------------------------------------------------------------------ -->
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="title">商品信息:</div>
        </el-col>
        <el-col :span="1">
          <div class="dd">

          </div>
        </el-col>
      </el-row>
      <el-table :data="goodsInfo" border style="width: 100%">
        <el-table-column prop="productName" label="商品名称" width="120" align="center">
        </el-table-column>
        <el-table-column prop="name" label="商品图片" width="180" align="center">
          <template slot-scope="scope">
            <img style="width:100px;height:100px" :src="scope.row.productPic" alt="">
          </template>
        </el-table-column>
        <el-table-column label="是否退货" align="center" width="140">
          <template>
            <div style="margin:0 auto;color:red">是</div>
          </template>
        </el-table-column>
        <el-table-column prop="productBrand" label="品牌" align="center">
        </el-table-column>
        <el-table-column prop="realAmount" label="价格" align="center">
        </el-table-column>
        <el-table-column prop="productQuantity" label="商品数量" align="center">
        </el-table-column>
        <el-table-column prop="totalPrice" label="小计" align="center">
        </el-table-column>
      </el-table>

      <el-divider></el-divider>
      <el-row :gutter="20" v-if="active!=1">
        <el-col :span="4">
          <div class="title">费用信息:</div>
        </el-col>
        <el-col :span="1">
          <div class="dd">

          </div>
        </el-col>
        <el-col :span="20"></el-col>
        <el-col :span="6">
          <div style="display:flex" class="top">
            <div>
              运费金额:
            </div>
            <div class="pric">{{orderInfo.deleteStatus}}</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div style="display:flex" class="top">
            <div>
              订单总金额:
            </div>
            <div class="pric">{{orderInfo.payAmount}}</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div style="display:flex" class="top">
            <div>
              实际金额:
            </div>
            <div class="pric">{{orderInfo.payAmount}}</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div style="display:flex" class="top">
            <div>
              促销优惠金额:
            </div>
            <div class="pric">{{orderInfo.deleteStatus}}</div>
          </div>
        </el-col>

      </el-row>
      <!-- ------------------------------------------------------------代发货物流信息 -->
      <div style="margin-top:30px" v-if="active==2">

        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="物流公司">
            <el-select v-model="ruleForm.deliveryCompany" placeholder="请选择活动区域">
              <el-option v-for="(item,index) in logistics" :label="item.name" :key="index" :value="item.name">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物流单号">
            <el-input v-model="ruleForm.deliverySn"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- ------------------------------------------------------------------ -->
      <div v-if="active>=3">
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="title">物流信息:<span style="color:#666">{{orderInfo.deliveryCompany}}</span></div>
          </el-col>
          <el-col :span="1">
            <div class="dd">

            </div>
          </el-col>
          <el-col :span="20"></el-col>
        </el-row>
        <el-table :data="address" border style="width: 100%">
          <el-table-column prop="date" label="时间" width="180" align="center">
          </el-table-column>
          <el-table-column prop="name" label="状态" width="360" align="center">
          </el-table-column>
          <el-table-column prop="address" label="备注" align="center">
          </el-table-column>
        </el-table>
      </div>

      <div class="auto">
        <el-button type="primary" @click="closeOrder()" v-if="active==4||active==3">{{active==3?'强制确认收货':'关闭订单'}}
        </el-button>
      </div>

    </el-card>

  </div>
</template>

<script>
  import order from '@/api/order/index'
  import mixins from '@/mixins/index'

  export default {
    mixins: [mixins],
    data() {
      return {
        loading: false,
        ruleForm: {
          orderId: ''
        },
        address: [],
        active: 1,
        orderInfo: {

        },
        goodsInfo: [

        ],
        body_style: {
          padding: '0'
        }

      }
    },
    created() {
      this.update()
      console.log(this.ruleForm)

    },
    methods: {
      update() {
        this.loading = true
        this.id = this.$route.query.id
        console.log(this.id)
        order.orderDetail(this.id).then(res => {
          console.log(res)
          this.orderInfo = res.data.orderDetail.orderBase
          this.active = this.orderInfo.status + 1
          this.goodsInfo = res.data.orderDetail.orderItems
          this.loading = false

        })
      },

      submitForm() {
        this.ruleForm.orderId = this.$route.query.id
        if (this.ruleForm.deliveryCompany && this.ruleForm.deliverySn) {
          this.$message.success('发货成功')
          order.sendDone(this.ruleForm).then(res => {
            console.log(res)
            this.update()
          })
        } else {
          this.$message.error('请输入必要信息')

        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //--------------------------------------------------------------强制确认收货or关闭订单
      closeOrder() {
        if (this.active == 4) {

          order.finishOrder(this.id).then(res => {
            console.log(res)
            if (res.success) {
              this.$message.success('关闭成功')

              this.update()
            } else {
              this.$message.error('关闭失败')
            }
          })
        } else if (this.active == 3) {
          console.log('强制确认收货')
          order.receiveProductsForce(this.id).then(res => {
            if (res.success) {
              this.$message.success('强制确定收获成功')
              this.update()
            } else {
              this.$message.error('失败')
            }
          })
        }
      },
    },
    beforeCreate() {}
  }

</script>

<style>
  @import '../index.css'

</style>
