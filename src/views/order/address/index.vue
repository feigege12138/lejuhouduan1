<template>
  <div style="padding:30px;background-color:#f0f2f5;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button size="mini" type="primary" @click="newAdd(1)">新增</el-button>
      </div>

      <el-table  max-height="500" :data="addRessList" border style="width: 100%" v-loading="loading">
        <el-table-column fixed label="#" width="50" type="index" align="center" height="300px">
        </el-table-column>
        <el-table-column prop="addressName" label="地址名称" width="140" align="center">
        </el-table-column>
        <el-table-column label="默认发货地址" width="200" align="center">
          <template slot-scope="scope">
            <div>
              <el-switch v-model="scope.row.sendStatus" active-text="默认发货地址" :active-value="1" :inactive-value="0"
                @change="sendOrReceive(scope.row,0)">
              </el-switch>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="收货人姓名" width="120" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="收货人电话" width="240" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="收货人地址" width="200" align="center">
          <template slot-scope="scope">
            <div>
              <div>{{scope.row.province}}</div>
              <div>{{scope.row.city}}</div>
              <div>{{scope.row.region}}</div>
              <div style="height:15px;widhth:10px"></div>
              <div>{{scope.row.detailAddress}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="默认收货地址" width="140" align="center">
          <template slot-scope="scope">
            <div>
              <el-switch v-model="scope.row.receiveStatus" active-text="默认收货地址" :active-value="1" :inactive-value="0"
                @change="sendOrReceive(scope.row,1)">
              </el-switch>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="240" align="center">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="240" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="newAdd(scope.row)">编辑</el-button>
            <el-button type="primary" size="mini" @click="operation(scope.row,0)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 新增组件 -->
    <added ref="added"/>
  </div>
</template>

<script>
  import mixins from '@/mixins/index'
  import order from '@/api/order/index'
  import added from '@/views/order/address/components/added/index'
    export default {
    mixins: [mixins],
    data() {
      return {
        addRessList: [],
        form: {},
        loading: false
      }
    },
    components:{
      added
    },
    created() {
      this.getAddRess()

    },
    methods: {
      //--------------新增编辑
      newAdd(num){
        console.log(num)
        this.$refs.added.added(num)
      },
      //---------------------------------------获取列表
      getAddRess() {
        this.loading = true
        order.addressList().then(res => {
          console.log(res)
          this.addRessList = res.data.items
          this.loading = false
        })
      },
      //--------------------------------------发货/收货地址状态
      sendOrReceive(res, num) {
        if (num == 0) {
          order.setSendOne({
            id: res.id
          }).then(ref => {
            if (ref.success) {
              this.$message.success('设置成功')
            } else {
              this.$message.error('失败')
            }
            this.getAddRess()
          })
        } else if (num == 1) {
          order.setReceiveOne({
            id: res.id
          }).then(ref => { //收货地址
            if (ref.success) {
              this.$message.success('设置成功')
            } else {
              this.$message.error('失败')
            }
            this.getAddRess()
          })
        }
      },
      //------------------------------------------编辑/删除
      operation(res, num) {
        console.log(res)
        //删除0，编辑1
        if (num == 0) {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            order.companyAddress(res.id).then(ref => {
              console.log(ref)
              if (ref.success) {
                this.$message.success('删除成功')
              } else {
                this.$message.error('删除失败')
              }
              this.getAddRess()
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });

        } else if (num == 1) {
          console.log("编辑")
        }
      }

    }
  }

</script>

<style>

</style>
