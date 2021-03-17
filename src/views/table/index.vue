<template>
  <div class="main">
    <div class="top">
      <div class="title">
        条件查询
      </div>
      <div class="form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="作者" size="small">
            <el-input v-model="formInline.name" placeholder="作者"></el-input>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="formInline.title" placeholder="标题" size="small"></el-input>
          </el-form-item>
          <el-form-item label="编辑类型">
            <el-select v-model="formInline.region" placeholder="编辑类型" size="small">
              <el-option label="富文本" value="0"></el-option>
              <el-option label="MarkDown" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <div class="btn">
          <el-button size="mini" @click="Reset">重置</el-button>
          <el-button type="primary" size="mini" @click="search()">搜索</el-button>
        </div>
      </div>
    </div>

 

    <div class="tabel">
      <el-card shadow="never" class="card">
        <!-- 新增 -->
        <div slot="header" class="clearfix">
          <el-button size="small" type="primary" @click="goadd(1)">新增文章</el-button>
        </div>


        <el-table v-loading="loading" :data="articleList" border style="width: 100%">
          <el-table-column fixed label="序号" type="index" width="50" align="center" />

          <el-table-column prop="createTime" label="创建日期" width="300" align="center" />

          <el-table-column prop="author" label="文章作者" width="120" align="center" />
          <!-- coverImg文章图片 -->
          <el-table-column label="图片" width="120" align="center">
            <!-- template可以自定义表单内容 -->
            <template slot-scope="scope">
              <img style="width:100px;height:100px" :src="scope.row.coverImg" alt="">
            </template>
          </el-table-column>
          <el-table-column prop="title" label="标题" width="200" align="center" />

          <!-- coverImg文章类型 -->
          <el-table-column label="编辑类型" width="150" align="center">
            <!-- template可以自定义表单内容 -->
            <template slot-scope="scope">
              <el-tag :type="scope.row.editorType===0?'success':'warning'">
                {{ scope.row.editorType===0?"富文本":"markdown" }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="文章是否展示" width="150" align="center">
            <template slot-scope="scope" >
              <el-switch v-model="scope.row.isShow"  
              :active-value='0'
              :inactive-value='1' @change="change(scope.row)">
              </el-switch>
            </template>
          </el-table-column>

          <el-table-column fixed="right" label="操作" align="center">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="goadd(0,scope.row)">编辑文章</el-button>
              <el-button style="color:red" type="text" size="small" @click="remove(scope.row)">删除文章</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
            :page-sizes="[5, 10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
            :total="total" v-loading.fullscreen.lock="fullscreenLoading">
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import findArticles from '@/api/contend/article'
  export default {

    data() {
      return {
        articleList: [],
        loading: false, //是否打开动画
        formInline: {
          name: '',
          title: '',
          region: ''
        },
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        total: 0,
        num: 5,
        page: 1,
        fullscreenLoading: false,
        adList:[]
      }
    },
    created() {
      this.getList()
      
    },
    methods: {
      //改变状态
      change(res){
        var id = res.id
        var isShow = res.isShow
        
        findArticles.changeShowStatus({
          id,isShow
        }).then(res=>{
          if(res.message){
            this.$message.success('更新状态成功')
          }else{
            this.$message.error()
          }
        })
      },
      //分页
      handleSizeChange(val) {
        this.num = val
        this.getList()
      },
      handleCurrentChange(val) {

        this.page = val
        this.getList()


      },
      //------------------------------------------ 重置
      Reset() {

        this.getList()
        this.formInline.name = this.formInline.title = ''

      },
      // ----------------------------------------------------新增/编辑
      goadd(num,res) {
        if(num==1){

            this.$router.push({
              name: 'add',
    
            })
          }else{
            this.$router.push({
              name:'look',
              query:{
                num:1,
                id:res.id
              }
            })
          }
        },
      // 搜索
      search() {
        // ----------------------------------------------条件查询,可以根据title,author查询
        findArticles.findArticles(1, 100, {
          "title": this.formInline.title,
          "author": this.formInline.name
        }).then(res => {
          this.articleList = res.data.rows
        })

      },
      validate(res) {
      },
      //-----------------------------------------------------------删除
      remove(res) {
        this.$confirm('此操作将永久删除该数据', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          findArticles.delArticlesApi(res.id).then(ref => {
            if (ref.success) {
              this.$message.success('删除成功')
              this.getList()
            } else {
              this.$message.error('删除失败')
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      // 新增文章
      goAddArticle() {

      },
      //获列表数据
      getList() {

        var a = this.page
        var b = this.num
        findArticles.findArticles(a, b, {}).then(res => {
          this.total = res.data.total
          this.articleList = res.data.rows
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
          }, 300);
        })
      }
    }

  }

</script>

<style scoped lang="scss">
  @import "./index.scss"

</style>
