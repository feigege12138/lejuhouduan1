<template>
  <div>
    <div style="width:500px;height:100px;margin:0 auto;margin-top:30px">

      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>



    <div class="step1 step" v-if="active==1">
      <el-form :model="form" class="demo-form-inline" label-position="right" label-width="100px">

        <el-card class="box-card" shadow="never">
          <div slot="header">
            <span>基本信息</span>
          </div>
          <el-row :gutter="50" class="pdi">
            <el-col :span="8">
              <el-form-item label="商品名称">
                <el-input v-model="form.product.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="商品编码">
                <el-input v-model="form.product.productSn"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="商品分类">
                <el-select v-model="form.product.productCategoryName" placeholder="请选择活动区域">
                  <el-option label="创意" value="shanghai"></el-option>
                  <el-option label="风格" value="beijing"></el-option>
                  <el-option label="饰品" value="beijing"></el-option>
                  <el-option label="灯具" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="商品品牌">
                <el-select v-model="form.product.brandName" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="商品描述">
                <el-input type="textarea" v-model="form.product.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>



          <div class="clearfix">
            <span @click="ceshi()">商品属性</span>
          </div>
          <el-row :gutter="20" class="pdi">
            <el-col :span="8">
              <el-form-item label="商品原价">
                <el-input-number v-model="form.product.price" :step="1" step-strictly></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-select v-model="form.product.promotionType " placeholder="促销类型 " :disabled="true">
                <el-option label="区域一" value="0"></el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <el-form-item label="活动价格">
                <el-input-number v-model="form.product.promotionPrice " :step="1" step-strictly>
                </el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="重量(kg)">
                <el-input-number v-model="form.product.weight" :step="1" step-strictly></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="审核状态">
                <el-switch v-model="form.product.verifyStatus" active-value='1' inactive-value='0'></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="是否上架">
                <el-switch v-model="form.product.publishStatus" active-value='1' inactive-value="0"> </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="缩略图">
                <el-upload class="avatar-uploader" :headers="headers" action="/lejuAdmin/material/uploadFileOssSave"
                  :show-file-list="false" :on-success="handleAvatarSuccess">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width:200px;height:200px">
                  <i v-else class="el-icon-plus el-icon-pluss avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>

          <div class="clearfix">
            <span>商品属性</span>
          </div>
          <el-row :gutter="20" class="pdi">
            <el-col :span="8">
              <el-form-item label="推荐状态">
                <el-switch v-model="form.product.recommendStatus " active-value='1' inactive-value="0"> </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="新品状态">
                <el-switch v-model="form.product.newStatus " active-value='1' inactive-value="0"> </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="预告状态">
                <el-switch v-model="form.product.previewStatus " active-value='1' inactive-value="0"> </el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="搜索关键词：">
                <el-input v-model="form.product.keywords"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="库存预警">
                <el-input-number v-model="form.product.lowStock" :step="1" step-strictly></el-input-number>

              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="商品排序">
                <el-input-number v-model="form.product.sort" :step="1" step-strictly size="large"></el-input-number>

              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="产品服务">
                <el-checkbox-group v-model="Checkbox " @change="byValue()">
                  <el-checkbox label="1" name="type">无忧退换</el-checkbox>
                  <el-checkbox label="2" name="type">急速退款</el-checkbox>
                  <el-checkbox label="3" name="type">免费包邮</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-row>


        </el-card>
      </el-form>
    </div>








    <div class="step2 step" v-if="active==2">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
          <span>商品sku信息</span>
          <el-form label-width="80px" :model="form" style="margin-top:50px;padding:20px">

            <el-row :gutter="30">
              <el-col :span="8">
                <el-form-item label="标题">

                  <el-input v-model="form.product.detailTitle"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="14">
                <el-form-item label="副标题">

                  <el-input v-model="form.product.detailTitle"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="活动形式">
                  <el-upload class="avatar-uploader" action="/lejuAdmin/material/uploadFileOssSave"
                    :show-file-list="false" :headers="headers" :on-success="handleSku">
                    <img v-if="imageUrl" :src="imageUrl" style="width:200px;height:200px" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon el-icon-pluss"></i>
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-form-item label="颜色：" v-show="colorArr[0]">
                <el-col :span="2" v-for="item in colorArr" :key="item">
                  {{item}}
                </el-col>
              </el-form-item>
              <el-form-item label="规格：" v-show="sizeArr[0]">
                <el-col :span="2" v-for="item in sizeArr" :key="item">
                  {{item}}
                </el-col>
              </el-form-item>
            </el-row>
            <el-row :gutter="30">
              <el-col :span="8">
                <el-form-item label="sku设置">
                  <el-select v-model="color" placeholder="产品颜色" @input="pushColor()">
                    <el-option label="珍珠白" value="珍珠白"></el-option>
                    <el-option label="火焰红" value="火焰红"></el-option>
                    <el-option label="玫瑰金" value="玫瑰金"></el-option>
                    <el-option label="土豪金" value="土豪金"></el-option>
                    <el-option label="原谅绿" value="原谅绿"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8" :pull='2'>
                <el-form-item>
                  <el-select v-model="size" placeholder="产品规格" @input="pushSize()">
                    <el-option label="64g" value="64g"></el-option>
                    <el-option label="128g" value="128g"></el-option>
                    <el-option label="256g" value="256g"></el-option>
                    <el-option label="512g" value="512g"></el-option>
                    <el-option label="1t" value="1t"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6" :pull='2'>
                <el-button @click="createSku">生成sku列表</el-button>
                <el-button @click="aa">新增sku</el-button>
              </el-col>

              <el-col :span="24">
                <el-table :data="form.pmsSkuStockList" border style="width: 100%">
                  <el-table-column fixed type="index" label="#" width="60" align="center">
                  </el-table-column>
                  <el-table-column label="图片" width="120" align="center">
                    <template slot-scope="scope">

                      <el-upload class="avatar-uploader" action="/lejuAdmin/material/uploadFileOssSave"
                        :headers="headers" :show-file-list="false" :on-success="handleSku">
                        <!-- <img v-if="skuImg" style="width:50px;height:50px" :src="skuImg" alt=""> -->

                        <img style="width:100px;height:100px" :src="scope.row.pic" alt="">
                        <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
                      </el-upload>
                    </template>
                  </el-table-column>



                  <!-- <el-table-column v-for="(item,index) in skuName" :key="index" :prop="item.key" :label="item.value"  width="100" /> -->
                  <el-table-column prop="size" label="规格" width="100" />
                  <el-table-column prop="color" label="颜色" width="100" />

                  <el-table-column prop="province" label="库存">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.stock" placeholder="库存" size="small"></el-input>
                    </template>

                  </el-table-column>
                  <el-table-column prop="city" label="预警库存">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.lowStock" placeholder="预警库存" size="small"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column prop="address" label="锁定库存">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.lockStock" placeholder="锁定库存" size="small"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column prop="zip" label="sku编码">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.skuCode" placeholder="自定义sku编码" size="small"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column prop="zip" label="价格">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.price" placeholder="请输入内容" size="small"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column prop="zip" label="销量">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.sale" placeholder="请输入内容" size="small"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                      <el-button type="text" size="small">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>

          </el-form>
        </div>

      </el-card>
    </div>



    <div class="step3 step" v-if="active==3">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
          <span>详情描述</span>
        </div>
        <div class="fu">

          <Tinymce ref="tin" />

        </div>
      </el-card>
    </div>

    <div style="width:200px;margin:0 auto;margin-bottom:100px;">

      <el-button style="margin-top: 12px;" @click="lastStep" :disabled="active>=2?false:true" type="primary">上一步
      </el-button>
      <el-button v-loading="ceshiLoading" element-loading-text="正在提交" @click="ceshi" style="margin-top: 12px;"
        type="primary">
        {{active==3?"提交":"下一步"}}</el-button>
    </div>
  </div>
</template>

<script>
  import goodsManage from '@/api/goodsManage/index'
  import Tinymce from '@/components/Tinymce'


  import {
    getToken
  } from '@/utils/myAuth'

  export default {
    data() {
      return {
        color: '',
        colorArr: [],
        size: '',
        sizeArr: [],
        skuArr: [],
        imageUrls: '',
        form: {

          pmsSkuStockList: [{

          }],
          product: {
            serviceIds: '',
          }
        },
        imageUrl: "",
        imageUrs: '',
        skuImg: '',
        id: {},
        //步骤条
        active: 1,
        actives: false,
        goodsInfo: {},
        // 多选框
        Checkbox: [],
        skuName: [],
        ceshiLoading: false

      }
    },
    components: {
      Tinymce
    },
    computed: {

      // 上传图片请求头
      headers() {
        const token = getToken()
        return {
          token
        }
      }
    },
    created() {
      if (this.$route.query.id == 1) {
        // console.log("新增")
      } else {
        this.getcontent()
      }
    },
    methods: {
      aa() {
        console.log(this.skuArr)
      },
      //-----------------------------------------------------------------------------sku图片上传
      handleSku(res, file) {
        this.skuImg = URL.createObjectURL(file.raw);
      },
      //--------------------------------------------------------------->富文本图片上传
      tinImage(res) {


      },
      //-------------------------------------------------------------------------------KUU
      pushColor() {
        this.colorArr.push(this.color)
        console.log(this.colorArr)
        // this.colorArr = this.uniq(this.colorArr)
        console.log(this.colorArr)
      },
      pushSize() {
        this.sizeArr.push(this.size)
        // this.sizeArr = this.uniq(this.sizeArr)
        console.log(this.sizeArr)

      },
      //-------------------------------------------------------------------------------》》》SKU
      createSku() {
        var arr = [this.colorArr, this.sizeArr]
        var lastArr = arr.reduce((total, current) => {
          var newArr = []
          total.forEach(out => [
            current.forEach(inner => {
              if (typeof out === 'object') {
                newArr.push([...out, inner])
              } else {
                newArr.push([out, inner])
              }
            })
          ])
          return newArr

        })
        console.log('lastArr==', lastArr)
        this.filetersSkuArr(lastArr)
        return lastArr
      },
      filetersSkuArr(newArr) {
        newArr.forEach(item => {
          console.log('item==', item)
          var obj = {
            lowStock: '', // 预警库存
            pic: '', // 展示图片
            price: '', // 价格
            stock: '', // 库存
            color: item[0], // 颜色
            size: item[1] // 规格
          }
          this.skuArr.push(obj)
          console.log(this.skuArr)
          this.form.pmsSkuStockList = this.skuArr
          console.log(this.form)
        })
      },
      //-----------------------------------------------------------------》数组去重方法
      uniq(array) {
        var temp = []; //一个新的临时数组
        for (var i = 0; i < array.length; i++) {
          if (temp.indexOf(array[i]) == -1) {
            temp.push(array[i]);
          }
        }
        return temp;
      },

      //--------------------------------------------------------------编辑初始化获取编辑内容
      getcontent() {
        var id = this.$route.query.id
        goodsManage.dproductSkusDetailel(id).then(ref => {
          console.log(ref)
          let {
            product,
            skus
          } = ref.data
          this.form.product = product
          console.log(this.form.product)
          this.imageUrl = product.pic
          this.form.pmsSkuStockList = skus
          console.log(skus);
          var spData = []

          skus.forEach(item => {
            var a = JSON.parse(item.spData)
            spData.push(a)
          });
          console.log(spData)
          this.skuName = spData







          //   spData.forEach(item => {
          //     console.log('item==', item)
          //     var obj = {
          //       color: item, // 颜色
          //       size: item // 规格
          //     }
          //     var skuArr=[]
          //     skuArr.push(obj)
          //     console.log(this.skuArr)
          //     // this.form.pmsSkuStockList = this.skuArr
          //   })

        })
      },
      //-------------------------------------------------------------------- checkbox多选框
      byValue() {
        var s = this.Checkbox.toString();
        console.log(s)
        this.form.product.serviceIds = s
      },
      //新增


      ceshi() {
        if (this.$route.query.id == 1) {
          if (this.active == 3) {
            this.form.product.pic = this.imageUrl
            console.log(this.form)
            this.ceshiLoading = true
            goodsManage.addProductAndSkus(this.form).then(res => {
              console.log(res)
              if (res.success) {
                this.ceshiLoading = false

                this.$message.success('新增成功')
                this.$router.push({
                  name: 'goodsList'
                })
              } else {
                this.$message.success('失败')
              }
              console.log(this.form)
            })

          } else if (this.active == 2) {
            this.form.pmsSkuStockList = this.skuArr

            this.active++
          } else {
            this.active++
          }
        } else {
          if (this.active == 3) {
            goodsManage.updateProductAndSkus
            this.$message.success('编辑成功')
          } else {
            this.active++
          }

        }

      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = res.data.material.ossUrl
        console.log(this.imageUrl)
        console.log(res)
      },
      handleAvatarSuccesss(res, file) {
        this.imageUrls = URL.createObjectURL(file.raw);


      },
      // 下一步上一步
      next() {
        if (this.active <= 2) {
          this.active++
          console.log(this.active)
        } else {

          this.actives = !this.actives
          this.$message.success('提交成功')
        }
      },
      lastStep() {
        this.active--
      }
    }
  }

</script>

<style>
  .step {
    padding: 30px;
    background-color: #f0f2f5;

  }

  .clearfix {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin-bottom: 30px;
  }

  .pdi {
    padding: 20px;
  }

  .el-icon-pluss {
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0, 0, 0, .1);
    text-align: center;
    line-height: 200px;
    font-size: 40px;
    font-weight: 100;
    margin: 0 auto;
  }

</style>
