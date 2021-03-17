<template>

  <div style="padding:30px" class="main">

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button type="text" @click="addList()">新增</el-button>
      </div>

      <el-table label="序号" :data="adList" border style="width: 100%" v-loading="loading">
        <el-table-column fixed type="index" label="序号">
        </el-table-column>

        <el-table-column label="广告图片" width="150" align="center">
          <template slot-scope="scope">
            <div style="width:100px;height:100px">
              <img style="width:100px;height:100px" :src="scope.row.pic" alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column label="时间" width="240" align="center">
          <template slot-scope="scope">
            <div>开始时间{{scope.row.createTime}}</div>
            <div>结束时间{{scope.row.modifyTime}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="广告名称" width="120" align="center">
        </el-table-column>
        <el-table-column prop="clickCount" label="点击数" width="120" align="center">
        </el-table-column>
        <el-table-column prop="clickCount" label="下单数" width="120" align="center">
        </el-table-column>
        <el-table-column label="轮播位置" width="120" align="center">
          <template slot-scope="scope">
            {{scope.row.type==0?"首页轮播":"其他"}}
          </template>
        </el-table-column>
        <el-table-column prop="url" label="链接位置" width="120" align="center">
        </el-table-column>
        <el-table-column prop="note" label="备注" width="120" align="center">
        </el-table-column>
        <el-table-column prop="zip" label="上下线状态" width="120" align="center">
          <template slot-scope="scope">
            {{scope.row.status==0?"下线":"上线"}}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="remove(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>


    <!-- 新增编辑弹出框 -->
    <el-dialog title="广告详情" :visible.sync="dialogVisible" width="80%">
      <el-card>
        <el-form :model="form" label-width="80px" ref="form" :rules="rules">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="广告名称" prop="name">
                <el-input size="small" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="排序">
                <el-input size="small" v-model="form.sort "></el-input>
              </el-form-item>
              <el-form-item label="链接">
                <el-input size="small" v-model="form.url "></el-input>
              </el-form-item>
              <div class="block">
                <span class="demonstration">开始时间</span>
                <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" v-model="form.startTime " type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="12">
              <el-form-item label="备注">
                <el-input size="small" v-model="form.note"></el-input>
              </el-form-item>
              <el-form-item label="产品数量">
                <el-input size="small"></el-input>
              </el-form-item>
              <el-form-item label="轮播位置">
                <el-select v-model="form.type " placeholder="请选择活动区域">
                  <el-option label="首页轮播" :value="1"></el-option>
                  <el-option label="其他" :value="0"></el-option>
                </el-select>
              </el-form-item>
              <div class="block">
                <span class="demonstration">结束时间</span>
                <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" v-model="form.endTime  " type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
              </div>
            </el-col>

            <el-col :span="15">
              <el-upload class="avatar-uploader" action="/lejuAdmin/material/uploadFileOssSave"
                :show-file-list="false" :on-success="handleAvatarSuccess" :headers="headers" >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width:200px;height:200px">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-col>


          </el-row>
        </el-form>




      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addForm()">确 定</el-button>
      </span>
    </el-dialog>


  </div>

</template>

<script>
  import marketing from '@/api/marketing/index'
   import {
    getToken
  } from '@/utils/myAuth'
  export default {
    data() {
      return {
        imageUrl: '',
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },

          ],


        },



        // 未来时间
        adList: [],
        loading: false,

        dialogVisible: false,

        //新增/编辑提交对象
        form: {
          clickCount: '',
          startTime: '',
          endTime: '',
          id: '',
          modifyTime: '',
          name: '',
          note: '',
          orderCount: '',
          pic: '',
          productId: '',
          sort: '',
          status: '',
          type: '',
          url: ''
        },
        num: false
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
    created() {
      this.getList()

    },
    methods: {
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(res)
        this.form.pic=res.data.material.ossUrl
      },
      //编辑
      handleClick(res) {
        this.num = false
        this.dialogVisible = !this.dialogVisible
        this.form = res

      },
      // 新增修改确定
      addForm() {
        if (this.num) {

          this.$refs.form.validate((valid) => {
            if (valid) {
              marketing.addAds({
                ...this.form
              }).then(res => {
                if (res.success) {
                  this.$message.success('提交成功')

                }
              })
              this.form = {}
              this.getList()
              this.dialogVisible = !this.dialogVisible
            } else {
              return false;
            }
          });
        } else {
          this.$refs.form.validate((valid) => {
            if (valid) {

              marketing.updateAds({
                ...this.form
              }).then(refs => {
                if (refs.message) {
                  this.$message.success('编辑成功')
                  this.getList()

                }
              })
              this.form = {}
              this.dialogVisible = !this.dialogVisible
            } else {
              return false
            }

          })
        }




      },
      addList() {

        this.dialogVisible = !this.dialogVisible
        this.num = true
      },
      getList() {
        this.loading = true
        marketing.adsList().then(res => {
          this.adList = res.data.items
          this.loading = false
        })
      },
      remove(res) {

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          marketing.delAds(res).then(res => {
            this.$message.success('删除成功')
            this.getList()

          })

        }).catch(() => {
          this.$message('取消删除')

        });
      }
    }
  }

</script>

<style>
  .main {
    background-color: #f0f2f5;
  }
  .avatar-uploader-icon{
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0,0,0,.3);
    text-align: center;
    line-height: 200px;
    font-size: 50px;
  }

</style>
