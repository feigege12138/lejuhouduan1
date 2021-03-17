<template>
  <div>
    <el-dialog title="sku列表" :visible.sync="dialogVisible" width="80%">


      <el-card class="box-card" shadow='never'>
        <div slot="header" class="clearfix">
          <el-button style="float: right; padding: 3px 0" type="text">新增</el-button>
        </div>
        <el-table :data="skuTable" border style="width: 100%">
          <el-table-column fixed type="index" label="#" width="60" align="center">
          </el-table-column>
          <el-table-column prop="color" label="颜色" width="100" >
            
          </el-table-column>
          <el-table-column prop="size" label="规格" width="100" >
            
          </el-table-column>
          <el-table-column label="图片" width="120">
            <template slot-scope="scope">
              <img style="width:50px;height:50px" :src="scope.row.pic" alt="">
            </template>

          </el-table-column>
          <el-table-column prop="province" label="库存">
            <template slot-scope="scope">
              <el-input v-model="scope.row.stock" placeholder="库存" size="small"></el-input>
            </template>

          </el-table-column>
          <el-table-column prop="city" label="预警库存">
            <template slot-scope="scope">
              <el-input v-model="scope.row.lowStock" placeholder="预警库存" size="small"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="锁定库存">
            <template slot-scope="scope">
              <el-input v-model="scope.row.lockStock" placeholder="锁定库存" size="small"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="sku编码">
            <template slot-scope="scope">
              <el-input v-model="scope.row.skuCode" placeholder="自定义sku编码" size="small"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="价格">
            <template slot-scope="scope">
              <el-input v-model="scope.row.price" placeholder="请输入内容" size="small"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="销量">
            <template slot-scope="scope">
              <el-input v-model="scope.row.sale" placeholder="请输入内容" size="small"></el-input>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        skuTable: [],
        spData: []
      }
    },
    methods: {
      skuShow(res) {
        this.dialogVisible = true


        console.log(res)
        this.skuTable = res

        for (var i = 0; i <= res.length - 1; i++) {
          console.log(JSON.parse(res[i].spData))

        }
      }
    }
  }

</script>

<style>

</style>
