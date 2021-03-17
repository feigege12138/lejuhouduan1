import {
  getToken
} from '@/utils/myAuth'


export default{
  data(){
    return{
      token:'',
      //表单验证
      rules: {

        name: [
          { required: true, message: '请输入物流单号', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择物流公司', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      //物流公司信息
      logistics:[
        {name:'顺丰'},
        {name:'圆通'},
        {name:'韵达'},
        {name:'中通'},
        {name:'京东'},
        {name:'邮政'},
        {name:'申通'},
        {name:'德邦'},
      ],
      //loding加载
      loading:false,
      page:1,
      num:10,
      header:'',
      total:1,
      currentPage:1,
      //通用素材上传接口
      action:'/lejuAdmin/material/uploadFileOssSave',
      //------------------------------------------------------------------------>>订单列表搜索数据
      status: [{
        name: "待付款",
        id: 0
      },
      {
        name: "代发货",
        id: 1
      },
      {
        name: "已发货",
        id: 2
      },
      {
        name: "已完成",
        id: 3
      },
      {
        name: "已关闭",
        id: 4
      },
      {
        name: "无效订单",
        id: 5
      },
    ],
    payType: [{
        name: '未支付',
        id: 0
      },
      {
        name: '支付宝',
        id: 1
      },
      {
        name: '微信',
        id: 2
      }
    ],
    orderType: [{
        name: '正常订单',
        id: 0
      },
      {
        name: '秒杀订单',
        id: 1
      }
    ],
    }
  },
  created(){
    
  },
  computed:{
    headers() {
      const token = getToken()
      this.header=token
      return {
        token
      }
    },
  },
  methods: {
    // 上传图片请求头
  
   
  },
}