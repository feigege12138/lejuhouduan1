<template>
  <div>
    <el-dialog title="品牌详情" :visible.sync="dialogVisible" width="80%">


      <el-form label-width="80px" :model="formLabelAlign">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="品牌名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="首字母">
              <el-input v-model="formLabelAlign.firstLetter"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="排序">
              <el-input v-model="formLabelAlign.sort"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="产品数量">
              <el-input v-model="formLabelAlign.productCount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="是否展示">
              <el-switch v-model="formLabelAlign.showStatus" :active-value='1' :inactive-value="0"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="是否为品牌制造商">
              <el-switch v-model="formLabelAlign.factoryStatus" :active-value='1' :inactive-value="0"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="上传logo">
              <el-upload class="avatar-uploader" action="/lejuAdmin/material/uploadFileOssSave"
                :on-success="handleAvatarSuccess" ref="uploads" :headers="headers">
                <img style="width:100px;height:100px" v-if="logo" :src="logo" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="上传大图">
              <el-upload class="avatar-uploader" action="/lejuAdmin/material/uploadFileOssSave"
                :on-success="handleAvatarSuccesss" ref="upload" :headers="headers">
                <img style="width:100px;height:100px" v-if="bigPic" :src="bigPic" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="fix(aaa)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {
    getToken
  } from '@/utils/myAuth'
  import goodsManage from '@/api/goodsManage/index'
  export default {
    data() {
      return {
        dialogVisible: false,
        formLabelAlign: {},
        logo: '',
        bigPic: '',
        //判断新增还是编辑
        aaa: false

      }
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
    methods: {
      //清空表单 //新增
      remove(res) {
        if (res) {
          this.formLabelAlign = res
          this.logo = res.logo
          this.bigPic = res.bigPic
          this.aaa = true
          this.dialogVisible = true
        } else {
          this.formLabelAlign = {}
          this.logo = ''
          this.bigPic = ''
          this.aaa = false
        }
      },
      //提交按钮
      fix(res) {


        if (this.aaa) {
          goodsManage.updateBrand(this.formLabelAlign).then(ref=>{
            if(ref.success){
              this.$message.success('编辑成功')
            }else{
              this.$message.error('编辑失败')
            }
          })
        } else {
          goodsManage.addBrand(this.formLabelAlign).then(ref => {
            if (ref.success) {
              this.$message.success('新增成功')
            } else {
              this.$message.error('新增失败')
            }
            this.$parent.getBrandList();
          })
        }
            this.dialogVisible = false


      },
      // 新增控制打开弹出框
      init(res) {
        this.dialogVisible = res
      },
      //上传图片
      handleAvatarSuccess(res, file) {
        this.logo = URL.createObjectURL(file.raw);
        this.formLabelAlign.logo = this.logo
        this.$refs.uploads.clearFiles();
      },
      handleAvatarSuccesss(res, file) {
        this.bigPic = URL.createObjectURL(file.raw);
        this.formLabelAlign.bigPic = this.bigPic
        this.$refs.upload.clearFiles();


      }
    }
  }

</script>

<style>

</style>
