<template>
  <div class="main" style="padding:30px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>注册用户列表</span>
      </div>


      <el-table :data="userList" border style="width: 100%"  v-loading="loading">
        <el-table-column fixed type="index" label="#" width="40" align="center">
        </el-table-column>
        <el-table-column  prop="username" label="用户名" width="150" align="center">
        </el-table-column>
        <el-table-column prop="name" label="头像" width="120" align="center">
          <template slot-scope="scope" >
            <div class="image" src="" alt=""><img :src="scope.row.icon" alt=""></div>
          </template>
        </el-table-column>
        <el-table-column prop="nickname" label="昵称" width="120" align="center">
        </el-table-column>
        <el-table-column prop="city" label="真实姓名" width="120" align="center">
        </el-table-column>
        <el-table-column prop="isDisabled" label="性别" width="120" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="电话" width="120" align="center">
        </el-table-column>
        <el-table-column prop="zip" label="邮箱" width="120" align="center">
        </el-table-column>
        <el-table-column prop="zip" label="生日" width="120" align="center">
        </el-table-column>
        <el-table-column prop="createTime" label="注册时间" width="240" align="center">
        </el-table-column>
      </el-table>

       <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import userApi from '@/api/userS/index'
  export default {
    data() {
      return {
        page: 1,
        num: 10,
        userList:[],
        currentPage4: 1,
        loading:false,
        total:1
      }
    },
    created() {
     this.getUserList()
    },
    methods:{
      getUserList(){
        this.loading=true
         userApi.findUserList(this.page, this.num).then(res => {
        console.log(res)
        this.userList=res.data.rows
        this.loading=false
        this.total=res.data.total


      })
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.num=val
     this.getUserList()

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page=val
     this.getUserList()

      }
    }
  }

</script>

<style scoped>
  .main {
    background-color: #f0f2f5;
  }
.image{
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #6666;
  text-align: center;
  
}
.image img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
