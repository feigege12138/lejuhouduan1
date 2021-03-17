<template>
  <div class="main">
    <div class="main-c">

      <div class="title">
        新增文章
      </div>
      <div class="form">
        <el-form :model="ruleForm" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="作者" prop="name" size="small">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="文章" size="small">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <div>
            是否显示
            <el-switch v-model="ruleForm.isShow" :active-value='0' :inactive-value='1' @change="isshows">
            </el-switch>
          </div>
        </el-form>
      </div>
      <!-- 摘要 -->
      <div class="text">
        <el-form label-width="80px">
          <el-form-item label="摘要">
            <el-input type="textarea" v-model="ruleForm.content1"></el-input>
          </el-form-item>

        </el-form>
      </div>

      <!-- 上传图片 -->
      <div class="up">
        <el-upload ref="upload" action="/lejuAdmin/material/uploadFileOss" label-width="80px"
          :on-success="handleAvatarSuccess" :headers="headers">
          <el-button size="small" type="primary">点击封面图片</el-button>
          <div>

            <img v-if="imageUrl" :src="imageUrl" class="avatar">
          </div>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>


      <!-- 切换文本 -->
      <div class="cut">

        <div class="cut-title">

          <div>切换富文本类型</div>
          <template>
            <el-radio v-model="ruleForm.editorType" label="0" @change="aaa">富文本</el-radio>
            <el-radio v-model="ruleForm.editorType" label="1" @change="aaa">MackDown</el-radio>
          </template>
          <span>注意！文本框切换之后内容消失</span>
        </div>


        <div class="cut-main">

          <!-- 富文本 -->

          <div class="fu" v-show="ruleForm.editorType==0">
            <el-upload ref="tinUpload" action="/lejuAdmin/material/uploadFileOss" label-width="80px"
              :on-success="tinImage" :headers="headers">
              <el-button size="small" type="primary">插入图片</el-button>

            </el-upload>
            <Tinymce ref="tin" />
          </div>



          <!-- MackDown -->
          <div class="mackdown" v-show="ruleForm.editorType==1">

          </div>

        </div>
      </div>



      <div class="btns">

        <el-button @click="add" type="primary" class="btns">{{num==1?"提交编辑":"提交新增"}}</el-button>
      </div>



    </div>
  </div>
</template>

<script>
  //富文本
  import findArticles from '@/api/contend/article'
  import {
    getToken
  } from '@/utils/myAuth'
  import Tinymce from '@/components/Tinymce'
  export default {
    data() {
      return {
        // 修改
        items: '',
        // 富文本、
        isClear: false,
        detail: "",
        radio: '1',
        // 上传图片地址
        imageUrl: '',
        value: '',
        res: '',
        ruleForm: {
          coverImg: '',
          title: '测试',
          author: '测试',
          content1: '',
          editorType: '0',
          isShow: '0'
        },
        num: '',
        id: ''
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
    methods: {
      isshows() {},

      // 富文本上传图片
      tinImage(res, file) {
        if (res.success) {
          this.$refs.tin.imageSuccessCBK(res.data.fileUrl)
          // 清楚文件列表
          this.$refs.tinUpload.clearFiles()
          this.$message.success('上传图片成功')
        } else {
          this.$message.error('上传图片失败')
        }
      },



      aaa() {
      },


      handleAvatarSuccess(res, file) {
        if (res.success) {
          this.$message.success('上传成功')
        } else {
          this.$message.error('上传失败')
        }
        this.imageUrl = URL.createObjectURL(file.raw);
        this.ruleForm.coverImg = res.data.fileUrl

      },
      add() {

        var obj = this.ruleForm
        if (this.num == 1) {
          findArticles.updateArticle(obj).then(res=>{
          })
        } else {
          findArticles.addArticle(obj).then(res => {
          })

        }
        this.$router.push({
              name: 'Table',

            })

      },
    },
    created() {
      this.num = this.$route.query.num
      var id = this.$route.query.id
      if (this.num == 1) {
        findArticles.productArticle(id).then(res => {
          this.ruleForm = res.data.productArticle
        })
      } else {
        return
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import "./index.scss"

</style>
