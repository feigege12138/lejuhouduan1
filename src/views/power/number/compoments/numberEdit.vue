<template>
  <div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">

      <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input v-model="form.nickName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item label="上传头像">
          <el-upload class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess"
            :headers="headers" :action="action">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="fix('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
  import power from '@/api/power/index'
  import {
    getToken
  } from '@/utils/myAuth'
  import mixins from '@/mixins/index'
  export default {
    mixins: [mixins],
    data() {
      return {
        dialogVisible: false,
        form: {
        },
        rules: {
          nickName: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          username: [{
            required: true,
            message: '请输入用户昵称',
            trigger: 'change'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }],

        },
        imageUrl: '',
        res: ''
      }
    },
    created() {
    },
    computed: {
      headers() {
        const token = getToken()
        this.header = token
        return {
          token
        }
      },
    },
    methods: {
      addOrEdit(res) {
        this.res=res
        if(this.res==1){
          this.form={}
        }else{
          this.form=res
          this.form.nickName=res.nick_name
        }
        this.dialogVisible = true
      },
      cancel() {
        this.dialogVisible = false
      },
      fix(a) {
        if(this.res==1){
          this.$refs[a].validate((valid) => {
            if (valid) {
              power.saveUserRoles(this.form).then(ref => {
                console.log(ref)
                if(ref.success){
                   this.$parent.getNumber();
                   this.dialogVisible=false
                   this.$message.success('添加成功')
                }else{
                  this.$message.error(ref.message)
                }
              })
            } else {
              this.$message.error('关键信息不得为空')
              return false;
            }
          });
          }else{
            power.updateUserRoles(this.form).then(ref=>{
              console.log(ref)
               if(ref.success){
                   this.$parent.getNumber();
                   this.dialogVisible=false
                   this.$message.success('编辑成功')
                }else{
                  this.$message.error(ref.message)
                }
            })
        }
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.form.salt = res.data.material.ossUrl
      },

    }
  }

</script>

<style>

</style>
