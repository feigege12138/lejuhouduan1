<template>
  <div ref="dashboard_main" class="Main">
    <div class="main" >
      <div class="title">
        <div class="left">
          <svg-icon @click="fullScreen" icon-class="full" class-name='full' style="color:#666;font-size:30px" />
        </div>
        <div class="center">
          不凡数据大屏
        </div>
        <div class="right">
          {{time}}
        </div>
      </div>
      <div class="main-centent">
        <div class="left">
          <div ref="pieEchartsBox" style="width: 100%; height: 100%" />
        </div>
        <div class="center">
          <div class="tops">
          <div ref="barEchartsBox" style="width:100%;height:300px" />
          </div>

          <div class="bottom">
            <div class="left">

              
            </div>
            <div class="right">

          <div ref="pieEchartsBox" style="width:100%;height:300px" />
            </div>
          </div>

        </div>
        <div class="right"></div>
      </div>
    </div>
    <div class="canvas">
      <canvasBg />
    </div>
  </div>
</template>

<script>
import china from 'echarts/map/json/china.json'
  import {
    getNowDate 
  } from '@/views/dashboard/nowItem'
  import screenfull from 'screenfull'
  import canvasBg from '@/views/dashboard/components/canvasBg'
  import * as echarts from 'echarts';
  export default {
    data() {
      return {
        time: ''
      }
    },
    components: {
      canvasBg
    },

    methods: {
      fullScreen() {
        if (screenfull.isEnabled) {
          // 控制是否全屏的按钮
          screenfull.toggle(this.$refs.dashboard_main)
        }
      },
      init() {
        var xAxisData = []
        var data1 = []
        var data2 = []
        // 模拟80条数据
        for (var i = 0; i < 80; i++) {
          xAxisData.push('date' + i)
          data1.push(Math.ceil(Math.random() * 10))
          data2.push(Math.ceil(Math.random() * 10))
        }

        var option = {
          // 标题的参数
          title: {
            text: '订单退单柱状图',
            // 标题字体样式
            textStyle: {
              color: '#9AA8D4',
              fontSize: 22,
              fontWeight: 'normal'
            }
          },
          // 两个按钮的样式
          legend: {
            // 对应 series里的 name
            data: ['订单', '退单'],
            // 距离底部
            bottom: 10,
            // 字体样式
            textStyle: {
              color: '#A8AAB3', // 坐标值得具体的颜色
              fontSize: 12
            }
          },

          tooltip: {},
          xAxis: {
            data: xAxisData,
            // 网格是否显示
            splitLine: {
              show: false
            },
            // x线的样式
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#A8AAB3', // 左边线的颜色
                width: '1' // 坐标线的宽度
              }
            },
            axisLabel: {
              // 坐标轴字体样式
              textStyle: {
                color: '#A8AAB3', // 坐标值得具体的颜色
                fontSize: 12
              }
            }
          },
          yAxis: {
            splitLine: {
              show: false
            },
            // y线的样式
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#A8AAB3', // 左边线的颜色
                width: '1' // 坐标线的宽度
              }
            },
            axisLabel: {
              // 坐标轴字体样式
              textStyle: {
                color: '#A8AAB3', // 坐标值得具体的颜色
                fontSize: 12
              }
            }
          },
          series: [{
            name: '订单',
            type: 'bar',
            data: data1,
            itemStyle: {
              normal: {
                // 渐变柱状图
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [{
                      offset: 0,
                      color: '#7D05E2'
                    }, // 柱图渐变色
                    {
                      offset: 0.5,
                      color: '#B600FF'
                    }, // 柱图渐变色
                    {
                      offset: 1,
                      color: '#BC04E2'
                    } // 柱图渐变色
                  ]
                )
              }

            }

          }, {
            name: '退单',
            type: 'bar',
            data: data2,
            itemStyle: {
              normal: {
                // 渐变柱状图
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [{
                      offset: 0,
                      color: '#24CBFF'
                    }, // 柱图高亮渐变色
                    {
                      offset: 0.5,
                      color: '#24A3FF'
                    }, // 柱图高亮渐变色
                    {
                      offset: 1,
                      color: '#2492FF'
                    } // 柱图高亮渐变色
                  ]
                )
              }

            }

          }],
          // 柱子弹出来的动画样式
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 5
          }
        }
        // 这里要init一个echarts实例
        var myEcharts = echarts.init(this.$refs.barEchartsBox)
        // 然后把option赋值给实例
        myEcharts.setOption(option)
      },
      initPie(){
         var option = {
              title: {
                  text: '购买终端',
                  // 标题字体样式
                  textStyle: {
                      color: '#9AA8D4',
                      fontSize: 22,
                      fontWeight: 'normal'
                  }
              },
              tooltip: {
                  trigger: 'item',
                  formatter: '{b}数量 : {c}个;占比 ({d}%)'
              },
        
              series: [
                  {
                      name: '面积模式',
                      type: 'pie',
                      // 最外圈和最内圈的比例大小
                      radius: ['25%', '50%'],

                      roseType: 'area',
                      data: [
                          {
                              value: 25,
                              name: 'Android',
                              label: {
                                  normal: {
                                      textStyle: {
                                          // 字体颜色渐变  扇颜色保持一致
                                          color: '#4B4CDC',
                                          fontSize: 12
                                      }
                                  }
                              },
                              itemStyle: {
                                  normal: {
                                      // 渐变柱状图
                                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                          { offset: 0, color: '#6D48DC' }, // 柱图渐变色
                                          { offset: 0.5, color: '#6D48DC' }, // 柱图渐变色
                                          { offset: 1, color: '#4B4CDC' } // 柱图渐变色
                                      ])
                                  }
                              }
                          },
                          {
                              value: 20,
                              name: 'ios',
                              label: {
                                  normal: {
                                      // 字体颜色
                                      textStyle: {
                                          color: '#248DFF',
                                          fontSize: 12
                                      }
                                  }
                              },
                              itemStyle: {
                                  normal: {
                                      // 渐变柱状图
                                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                          { offset: 0, color: '#24C9FF' }, // 柱图渐变色
                                          { offset: 0.5, color: '#24ABFF' }, // 柱图渐变色
                                          { offset: 1, color: '#248DFF' } // 柱图渐变色
                                      ])
                                  }
                              }
                          },
                          {
                              value: 15,
                              name: 'PC Web',
                              label: {
                                  normal: {
                                      textStyle: {
                                          color: '#BD00FF',
                                          fontSize: 12
                                      }
                                  }
                              },
                              itemStyle: {
                                  normal: {
                                      // 渐变柱状图
                                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                          { offset: 0, color: '#D200FF' }, // 柱图渐变色
                                          { offset: 0.5, color: '#BD00FF' }, // 柱图渐变色
                                          { offset: 1, color: '#BD00FF' } // 柱图渐变色
                                      ])
                                  }
                              }
                          },

                          {
                              value: 5,
                              name: 'Wap Web',
                              label: {
                                  normal: {
                                      textStyle: {
                                          color: '#70218F',
                                          fontSize: 12
                                      }
                                  }
                              },
                              itemStyle: {
                                  normal: {
                                      // 渐变柱状图
                                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                          { offset: 0, color: '#8A1D89' }, // 柱图渐变色
                                          { offset: 0.5, color: '#7C1D8C' }, // 柱图渐变色
                                          { offset: 1, color: '#70218F' } // 柱图渐变色
                                      ])
                                  }
                              }
                          }
                      ]
                  }
              ]
          }
              var myEcharts = echarts.init(this.$refs.pieEchartsBox)
        // 然后把option赋值给实例
        myEcharts.setOption(option)
      },
      initMap(){
         
      }
      
    },

    mounted() {
      this.initPie()
      this.init()
      setInterval(res => {
        this.time = getNowDate()
      }, 1000)
    }
  }

</script>

<style lang="scss">
  div {
    .main {
      z-index: 999;
      position: absolute;
      width: 100%;
      background-color: #0a1631;

      .title {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .left {
          width: 15%;
          height: 50px;
          display: flex;
          align-items: center;
          margin-left: 10px;
        }

        .right {
          width: 15%;
          height: 50px;
          line-height: 50px;
          color: #fff;
          font-size: 20px;

        }

        .center {
          width: 70%;
          height: 100%;
          background: url(http://shen_hao222.gitee.io/test_page/static/img/titleBG.a4cdf1b6.png) no-repeat center center;
          font-size: 35px;
          color: #fff;
          text-align: center;
          line-height: 100px;
          font-weight: 700;

        }

      }

      .main-centent {
      background-color: #0a1631;
        width: 100%;
        display: flex;
        height: fit-content;
        justify-content: space-between;

        .left {
          width: 30%;
          height: 100%;

        }
        .center {
          width: 40%;
          height: fit-content;
        
        .bottom{

          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: space-between;
          height: 100px;
          .left{
            width: 50%;
            height: fit-content;
            height: 100px;
          }
           .right{
            width: 50%;
            height: fit-content;

          }
        }

        

        }

        .right {
          width: 30%;
          height: 100%;

        }
      }
    }

    .canvas {
      width: 100%;
      height: 400px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

</style>
