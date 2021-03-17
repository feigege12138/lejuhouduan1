<template>
  <div style="padding:30px;background-color:#f0f2f5">

    <el-card class="box-card" shadow="nerve">
      <div slot="header" class="clearfix">
        <el-button size="small" type="primary" @clicl="addRole()">新增角色</el-button>
      </div>
      <el-table :data="roleList" border style="width: 100%" v-loading='loading'>
        <el-table-column fixed type="index" label="#" width="50" align="center">
        </el-table-column>
        <el-table-column prop="roleName" label="角色名称" width="240">
        </el-table-column>
        <el-table-column prop="roleCode" label="角色编码" width="240">
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="300">
        </el-table-column>
        <el-table-column prop="createTime" label="添加时间" width="240">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="240">
          <template slot-scope="scope">
            <el-button type="success" size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button size="small" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import power from '@/api/power/index'
  import mixins from '@/mixins/index'
  export default {
    mixins: [mixins],
    data() {
      return {
        roleList: [],
        currentPage4: 1,
        loading: false
      }
    },
    created() {
      this.getRoleList()
    },
    methods: {
      getRoleList() {
        this.loading = true
        power.findRolesByPage(this.page, this.num).then(res => {
          console.log(res)
          this.total = res.data.total
          this.roleList = res.data.rows
          this.loading = false

        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.num = val
        this.getRoleList()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page = val
        this.getRoleList()

      },
      addRole() {

      },
      edit() {

      },
      del(res) {
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          
        power.removeRole(res.id).then(ref=>{
          console.log(ref)
          this.getRoleList()
          if(ref.success){
            this.$message.success('删除成功')
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
