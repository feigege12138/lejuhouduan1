<template>
  <div>


    <el-card class="card">
      <div slot="header">
        <el-upload ref="upload" class="upload-demo" action="/lejuAdmin/material/uploadFileOssSave"
          :on-success="handleAvatarSuccess" :headers="header">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>

      <el-row :gutter="20" v-loading="loading">
        <el-col v-for="item in list" :key="item.id " style="width:20%; margin-bottom: 20px;">
          <el-card>
            <div slot="header">
              <span>{{item.createTime}}</span>
            </div>
            <img :src="item.ossUrl" alt="" style="background: #000; height:250px; width:100%;">
            <el-button type="danger" size="mini" @click="remove(item.id)">删除</el-button>

          </el-card>

        </el-col>

      </el-row>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[10, 15, 20, 25]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>

    </el-card>


  </div>
</template>

<script>
  import {
    getToken
  } from '@/utils/myAuth'

  import
  findArticles
  from '@/api/contend/article'
  export default {
    data() {
      return {
        list: '',
        currentPage4: 1,
        total: 1,
        page: '10',
        num: '1',
        loading:false
      }
    },
    created() {
      // var token=""
      this.getlist(this.page, this.num)
    },
    computed: {
      // 上传图片请求头
      header() {
        const token = getToken()
        console.log(123)
        return {
          token
        }
      }
    },
    methods: {

      handleSizeChange(val) {
        this.page=val
        this.getlist(this.page, this.num)
      },
      handleCurrentChange(val) {
        this.num=val
        this.getlist(this.page, this.num)
      },


      getlist(page, num) {
        this.loading=true

        findArticles.findMaterialByPage(num, page, {}).then(res => {
          this.list = res.data.rows
          this.total = res.data.total
        this.loading=false

        })

      },
      remove(res) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          findArticles.delMaterial(res).then(ref => {
            if (ref.success) {
              this.getlist(this.page, this.num)

              this.$message.success('删除成功');
            } else {
              this.$message.info('删除失败')
            }
          })
        }).catch(() => {
          this.$message.info('已取消删除')

        });

      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.$refs.upload.clearFiles();
      }
    },


  }

</script>

<style lang="scss" scoped>
  .card {
    margin: 30px;
  }

</style>
