<template>
  <div>
    <el-dialog title="地址详情" :visible.sync="dialogVisible" width="80%" label-width="200px">
      <el-form  label-position="top" label-width="80px" :model="form">
        <el-form-item size="mini" label="发货地址：">
          <el-input v-model="form.addressName"></el-input>
        </el-form-item>
        <el-form-item size="mini" label="发货人姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item size="mini" label="发货人手机号：">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item size="mini" label="邮政编码：">
          <el-input v-model="form.postCode"></el-input>
        </el-form-item>
        <el-form-item size="mini" label="选择收货地址">
          <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange">
          </el-cascader>
        </el-form-item>
        <el-form-item size="mini" label="详细地址：">
          <el-input v-model="form.detailAddress"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fix(0)">取 消</el-button>
        <el-button type="primary" @click="fix(1)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {
    provinceAndCityData,
    regionData,
    provinceAndCityDataPlus,
    regionDataPlus,
    CodeToText,
    TextToCode
  } from 'element-china-area-data'
  import order from '@/api/order/index'
  import mixins from '@/mixins/index'
  export default {
    mixins: [mixins],
    data() {
      return {
        dialogVisible: false,
        form: {},
        options: regionData,
        selectedOptions: [],
        value: [],
        num: ''
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
        this.form.province = CodeToText[value[0]]
        this.form.city = CodeToText[value[1]]
        this.form.region = CodeToText[value[2]]
      },

      //------------新增 编辑
      added(num) {
        this.form = {}
        if (num == 1) {
          this.num = num
          console.log('新增')
        } else {
          this.form = num
          this.selectedOptions = [
            TextToCode[this.form.province].code,
            TextToCode[this.form.province][this.form.city].code,
            TextToCode[this.form.province][this.form.city][this.form.region].code
          ]
        }
        this.dialogVisible = true
      },
      //----------------------------------------------------新增/编辑
      fix() {
        if (this.num == 1) { //新增
          this.dialogVisible = false
          order.save(this.form).then(res => {
            console.log(res)
            if (res.success) {
              this.$message.success('新增成功')
              this.$parent.getAddRess()
            } else {
              this.$message.error('新增失败')
            }
          })
        } else { //编辑
          console.log('编辑')
          this.dialogVisible = false
          order.update(this.form).then(res => {
            if (res.success) {
              this.$message.success('编辑成功')
              this.$parent.getAddRess()
            } else {
              this.$message.error('编辑失败')
            }
          })

        }

        this.num = ''
      }
    }
  }

</script>

<style>

</style>
