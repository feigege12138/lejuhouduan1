<template>
  <div style="padding:30px;background-color:#f0f2f5;">

    <el-card class="box-card" shadow="never">
      <el-form :model="form" size="small" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-row :gutter="20">

          <el-col :span="6">

            <el-form-item label="用户名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">

            <el-form-item label="用户账号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button>重置</el-button>
              <el-button type="primary" @click="search">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <div style="height:30px;width20px"></div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <el-button style="float: left" size="small" @click="addOrEdit(1)" type="primary">新增</el-button>
      </div>

      <el-table v-loading="loading" :data="numberList" :border="true" :stripe="true" style="width: 100%">
        <el-table-column label="#" type="index" width="50" align="center">

        </el-table-column>
        <el-table-column label="用户名" prop="username" align="center">
        </el-table-column>
        <el-table-column label="昵称" prop="nick_name" align="center">
        </el-table-column>
        <el-table-column label="头像" align="center">
          <template slot-scope="scope">
            <div style="margin:0 aotu">
              <img style="width:150px;height:100px" :src="scope.row.salt" alt="">
            </div>

          </template>
        </el-table-column>
        <el-table-column label="角色" prop="roles" align="center">
        </el-table-column>
        <el-table-column label="添加时间" prop="modify_time" align="center">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="addOrEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>


    </el-card>
    <numberEdit ref="edit" />

  </div>
</template>

<script>
  import power from '@/api/power/index'
  import mixins from '@/mixins/index'
  import numberEdit from '@/views/power/number/compoments/numberEdit'

  export default {
    mixins: [mixins],
    data() {
      return {
        numberList: [],
        form: {},
        editForm: {},
        loading: false
      }
    },
    components: {
      numberEdit
    },
    created() {
      this.getNumber()
    },
    methods: {
      getNumber() {
        this.loading = true
        power.findUsersByPage(this.page, this.num, {}).then(res => {
          console.log(res)
          this.total = res.data.total
          this.numberList = res.data.rows
          this.loading = false

        })
      },
      search() {
        console.log('搜索')
      },
      addOrEdit(res) {
        this.$refs.edit.addOrEdit(res)

      },
      del(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          power.removeUser(id).then(res => {
            console.log(res)
            if (res.success) {
              this.$message.success('删除成功')
              this.getNumber()
            } else {
              this.$message.error('删除失败')
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      }
    }
  }

</script>

<style>

</style>
