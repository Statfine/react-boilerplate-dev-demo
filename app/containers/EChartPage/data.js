/* eslint-disable */
/**
 *  title 标题
 *  color 依次颜色
 *  tooltip 鼠标悬浮提示
 *  legend 顶部Y轴类型
 *  map中  dataRange设置填充色...
 *  smooth: 曲线 直线,
 */
export const 柱状图 = {
  title : {
      text: '某地区蒸发量和降水量',
      subtext: '纯属虚构'
  },
  color: [
    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
  ],
  tooltip : {
      trigger: 'axis'
  },
  legend: {
      data:['蒸发量','降水量']
  },
  toolbox: {
      show : false,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  calculable : true,
  xAxis : [
      {
          type : 'category',
          data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:'蒸发量',
          type:'bar',
          data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          markPoint : {
              data : [
                  {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}
              ]
          },
          markLine : {
              data : [
                  {type : 'average', name: '平均值'}
              ]
          }
      },
      {
          name:'降水量',
          type:'bar',
          data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          markPoint : {
              data : [
                  {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                  {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
              ]
          },
          markLine : {
              data : [
                  {type : 'average', name : '平均值'}
              ]
          }
      }
  ]
};

export const 折线图 = {
  title: {
      text: "对数轴示例",
      x: "center"
  },
  color: [
    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
  ],
  tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}"
  },
  legend: {
      x: 'left',
      data: ["2的指数", "3的指数"]
  },
  xAxis: [
      {
          type: "category",
          name: "x",
          splitLine: {show: false},
          data: ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
      }
  ],
  yAxis: [
      {
          type: "log",
          name: "y"
      }
  ],
   toolbox: {
      show: true,
      feature: {
          mark: {
              show: true
          },
          dataView: {
              show: true,
              readOnly: true
          },
          restore: {
              show: true
          },
          saveAsImage: {
              show: true
          }
      }
  },
  calculable: true,
  series: [
      {
          name: "3的指数",
          type: "line",
          smooth:false,
          data: [1, 3, 9, 27, 8, 24, 741, 2223, 6669]

      },
      {
          name: "2的指数",
          type: "line",
          smooth:true,
          data: [1, 2, 4, 8, 16, 2, 6, 128, 256]

      }
  ]
};

export const 雷达图 = {
  title : {
      text: '预算 vs 开销（Budget vs spending）',
      subtext: '纯属虚构'
  },
  color: [
    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
  ],
  tooltip : {
      trigger: 'axis'
  },
  legend: {
      orient : 'vertical',
      x : 'right',
      y : 'bottom',
      data:['预算分配（Allocated Budget）','实际开销（Actual Spending）']
  },
  toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  polar : [
     {
         indicator : [
             { text: '销售（sales）', max: 6000},
             { text: '管理（Administration）', max: 16000},
             { text: '信息技术（Information Techology）', max: 30000},
             { text: '客服（Customer Support）', max: 38000},
             { text: '研发（Development）', max: 52000},
             { text: '市场（Marketing）', max: 25000}
          ]
      }
  ],
  calculable : true,
  series : [
      {
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data : [
              {
                  value : [4300, 10000, 28000, 35000, 50000, 19000],
                  name : '预算分配（Allocated Budget）'
              },
               {
                  value : [5000, 14000, 28000, 31000, 42000, 21000],
                  name : '实际开销（Actual Spending）'
              }
          ]
      }
  ]
};

export const 地图 = {
  title : {
      text: 'iphone销量',
      subtext: '纯属虚构',
      x:'center'
  },
  color: [
    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
  ],
  tooltip : {
      trigger: 'item'
  },
  legend: {
      orient: 'vertical',
      x:'left',
      data:['iphone3','iphone4','iphone5']
  },
  dataRange: {
      min: 0,
      max: 2500,
      x: 'left',
      y: 'bottom',
      orient: 'horizontal',
      text:['高','低'],           // 文本，默认为数值文本
      calculable : true,
      color: ['#b5cfff', '#0030c2'],
  },
  toolbox: {
      show: true,
      orient : 'vertical',
      x: 'right',
      y: 'center',
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  roamController: {
      show: true,
      x: 'right',
      mapTypeControl: {
          'china': true
      }
  },
  series : [
      {
          name: 'iphone3',
          type: 'map',
          mapType: 'china',
          roam: false,
          // itemStyle:{
          //     normal:{label:{show:true}},
          //     emphasis:{label:{show:true}}
          // },
          itemStyle: {
            normal: {
              areaColor: '#9accff',
              borderColor: '#7eb00a',
            },
            emphasis: {
              areaColor: '#9accff',
            },
          },
          data:[
              {name: '北京',value: Math.round(Math.random()*1000)},
              {name: '天津',value: Math.round(Math.random()*1000)},
              {name: '上海',value: Math.round(Math.random()*1000)},
              {name: '重庆',value: Math.round(Math.random()*1000)},
              {name: '河北',value: Math.round(Math.random()*1000)},
              {name: '河南',value: Math.round(Math.random()*1000)},
              {name: '云南',value: Math.round(Math.random()*1000)},
              {name: '辽宁',value: Math.round(Math.random()*1000)},
              {name: '黑龙江',value: Math.round(Math.random()*1000)},
              {name: '湖南',value: Math.round(Math.random()*1000)},
              {name: '安徽',value: Math.round(Math.random()*1000)},
              {name: '山东',value: Math.round(Math.random()*1000)},
              {name: '新疆',value: Math.round(Math.random()*1000)},
              {name: '江苏',value: Math.round(Math.random()*1000)},
              {name: '浙江',value: Math.round(Math.random()*1000)},
              {name: '江西',value: Math.round(Math.random()*1000)},
              {name: '湖北',value: Math.round(Math.random()*1000)},
              {name: '广西',value: Math.round(Math.random()*1000)},
              {name: '甘肃',value: Math.round(Math.random()*1000)},
              {name: '山西',value: Math.round(Math.random()*1000)},
              {name: '内蒙古',value: Math.round(Math.random()*1000)},
              {name: '陕西',value: Math.round(Math.random()*1000)},
              {name: '吉林',value: Math.round(Math.random()*1000)},
              {name: '福建',value: Math.round(Math.random()*1000)},
              {name: '贵州',value: Math.round(Math.random()*1000)},
              {name: '广东',value: Math.round(Math.random()*1000)},
              {name: '青海',value: Math.round(Math.random()*1000)},
              {name: '西藏',value: Math.round(Math.random()*1000)},
              {name: '四川',value: Math.round(Math.random()*1000)},
              {name: '宁夏',value: Math.round(Math.random()*1000)},
              {name: '海南',value: Math.round(Math.random()*1000)},
              {name: '台湾',value: Math.round(Math.random()*1000)},
              {name: '香港',value: Math.round(Math.random()*1000)},
              {name: '澳门',value: Math.round(Math.random()*1000)}
          ]
      },
      {
          name: 'iphone4',
          type: 'map',
          mapType: 'china',
          // itemStyle:{
          //     normal:{label:{show:true}},
          //     emphasis:{label:{show:true}}
          // },
          itemStyle: {
            normal: {
              areaColor: '#9accff',
              borderColor: '#7eb00a',
            },
            emphasis: {
              areaColor: '#9accff',
            },
          },
          data:[
              {name: '北京',value: Math.round(Math.random()*1000)},
              {name: '天津',value: Math.round(Math.random()*1000)},
              {name: '上海',value: Math.round(Math.random()*1000)},
              {name: '重庆',value: Math.round(Math.random()*1000)},
              {name: '河北',value: Math.round(Math.random()*1000)},
              {name: '安徽',value: Math.round(Math.random()*1000)},
              {name: '新疆',value: Math.round(Math.random()*1000)},
              {name: '浙江',value: Math.round(Math.random()*1000)},
              {name: '江西',value: Math.round(Math.random()*1000)},
              {name: '山西',value: Math.round(Math.random()*1000)},
              {name: '内蒙古',value: Math.round(Math.random()*1000)},
              {name: '吉林',value: Math.round(Math.random()*1000)},
              {name: '福建',value: Math.round(Math.random()*1000)},
              {name: '广东',value: Math.round(Math.random()*1000)},
              {name: '西藏',value: Math.round(Math.random()*1000)},
              {name: '四川',value: Math.round(Math.random()*1000)},
              {name: '宁夏',value: Math.round(Math.random()*1000)},
              {name: '香港',value: Math.round(Math.random()*1000)},
              {name: '澳门',value: Math.round(Math.random()*1000)}
          ]
      },
      {
          name: 'iphone5',
          type: 'map',
          mapType: 'china',
          // itemStyle:{
          //     normal:{label:{show:true}},
          //     emphasis:{label:{show:true}}
          // },
          itemStyle: {
            normal: {
              areaColor: '#9accff',
              borderColor: '#7eb00a',
            },
            emphasis: {
              areaColor: '#9accff',
            },
          },
          data:[
              {name: '北京',value: Math.round(Math.random()*1000)},
              {name: '天津',value: Math.round(Math.random()*1000)},
              {name: '上海',value: Math.round(Math.random()*1000)},
              {name: '广东',value: Math.round(Math.random()*1000)},
              {name: '台湾',value: Math.round(Math.random()*1000)},
              {name: '香港',value: Math.round(Math.random()*1000)},
              {name: '澳门',value: Math.round(Math.random()*1000)}
          ]
      }
  ]
};

export const 圆饼图 = {
  title : {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x:'center'
  },
  color: [
    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
  ],
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      orient : 'vertical',
      x : 'left',
      data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {
              show: true, 
              type: ['pie', 'funnel'],
              option: {
                  funnel: {
                      x: '25%',
                      width: '50%',
                      funnelAlign: 'left',
                      max: 1548
                  }
              }
          },
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  calculable : true,
  series : [
      {
          name:'访问来源',
          type:'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
          ]
      }
  ]
};
                  
export const 漏斗图 = {
  title : {
      text: '漏斗图',
      subtext: '纯属虚构'
  },
  color: [
    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
  ],
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  legend: {
      data : ['展现','点击','访问','咨询','订单']
  },
  calculable : true,
  series : [
      {
          name:'漏斗图',
          type:'funnel',
          width: '40%',
          data:[
              {value:60, name:'访问'},
              {value:40, name:'咨询'},
              {value:20, name:'订单'},
              {value:80, name:'点击'},
              {value:100, name:'展现'}
          ]
      },
      {
          name:'金字塔',
          type:'funnel',
          x : '50%',
          sort : 'ascending',
          itemStyle: {
              normal: {
                  // color: 各异,
                  label: {
                      position: 'left'
                  }
              }
          },
          data:[
              {value:60, name:'访问'},
              {value:40, name:'咨询'},
              {value:20, name:'订单'},
              {value:80, name:'点击'},
              {value:100, name:'展现'}
          ]
      }
  ]
};

export const 关系图 = {
  title: {
      text: 'Les Miserables',
      subtext: 'Default layout',
      top: 'bottom',
      left: 'right'
  },
  color: [
    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
  ],
  tooltip: {},
  legend: [
    {name: '人物'},
    {name: '家人',symbol: 'diamond'},
    {name:'朋友'}
  ],
  animationDuration: 1500,
  animationEasingUpdate: 'quinticInOut',
  series : [
      {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'force', // 划重点 circular force
          data: [
            {category:0, name: '乔布斯', value : 10},
            {category:1, name: '丽萨-乔布斯',value : 2},
            {category:1, name: '保罗-乔布斯',value : 3},
            {category:1, name: '克拉拉-乔布斯',value : 3},
            {category:1, name: '劳伦-鲍威尔',value : 7},
            {category:2, name: '史蒂夫-沃兹尼艾克',value : 5},
            {category:2, name: '奥巴马',value : 8},
            {category:2, name: '比尔-盖茨',value : 9},
            {category:2, name: '乔纳森-艾夫',value : 4},
            {category:2, name: '蒂姆-库克',value : 4},
            {category:2, name: '龙-韦恩',value : 1},
          ],
          links: [
            {source : '丽萨-乔布斯', target : '乔布斯', weight : 1, name: '女儿'},
            {source : '乔布斯', target : '丽萨-乔布斯', weight : 1, name: '父亲'},
            {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲'},
            {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1, name: '母亲'},
            {source : '劳伦-鲍威尔', target : '乔布斯', weight : 2},
            {source : '史蒂夫-沃兹尼艾克', target : '乔布斯', weight : 3, name: '合伙人'},
            {source : '奥巴马', target : '乔布斯', weight : 1},
            {source : '比尔-盖茨', target : '乔布斯', weight : 6, name: '竞争对手'},
            {source : '乔纳森-艾夫', target : '乔布斯', weight : 1, name: '爱将'},
            {source : '蒂姆-库克', target : '乔布斯', weight : 1},
            {source : '龙-韦恩', target : '乔布斯', weight : 1},
            {source : '克拉拉-乔布斯', target : '保罗-乔布斯', weight : 1},
            {source : '奥巴马', target : '保罗-乔布斯', weight : 1},
            {source : '奥巴马', target : '克拉拉-乔布斯', weight : 1},
            {source : '奥巴马', target : '劳伦-鲍威尔', weight : 1},
            {source : '奥巴马', target : '史蒂夫-沃兹尼艾克', weight : 1},
            {source : '比尔-盖茨', target : '奥巴马', weight : 6},
            {source : '比尔-盖茨', target : '克拉拉-乔布斯', weight : 1},
            {source : '蒂姆-库克', target : '奥巴马', weight : 1}
          ],
          categories: [
            {name: '人物'},
            {name: '家人'},
            {name:'朋友'}
          ],
          roam: true,
          label: {
              normal: {
                  position: 'right',
                  formatter: '{b}'
              }
          },
          lineStyle: {
              normal: {
                  color: 'source',
                  curveness: 0.3
              }
          }
      }
  ]
};

export const 玫瑰图 = {
  title : {
      text: '南丁格尔玫瑰图',
      subtext: '纯属虚构',
      x:'center'
  },
  color: [
    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
  ],
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      x : 'center',
      y : 'bottom',
      data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
  },
  toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {
              show: true, 
              type: ['pie', 'funnel']
          },
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  calculable : true,
  series : [
      {
          name:'半径模式',
          type:'pie',
          radius : [20, 110],
          center : ['25%', 200],
          roseType : 'radius',
          width: '40%',       // for funnel
          max: 40,            // for funnel
          itemStyle : {
              normal : {
                  label : {
                      show : false
                  },
                  labelLine : {
                      show : false
                  }
              },
              emphasis : {
                  label : {
                      show : true
                  },
                  labelLine : {
                      show : true
                  }
              }
          },
          data:[
              {value:10, name:'rose1'},
              {value:5, name:'rose2'},
              {value:15, name:'rose3'},
              {value:25, name:'rose4'},
              {value:20, name:'rose5'},
              {value:35, name:'rose6'},
              {value:30, name:'rose7'},
              {value:40, name:'rose8'}
          ]
      },
      {
          name:'面积模式',
          type:'pie',
          radius : [30, 110],
          center : ['75%', 200],
          roseType : 'area',
          x: '50%',               // for funnel
          max: 40,                // for funnel
          sort : 'ascending',     // for funnel
          data:[
              {value:10, name:'rose1'},
              {value:5, name:'rose2'},
              {value:15, name:'rose3'},
              {value:25, name:'rose4'},
              {value:20, name:'rose5'},
              {value:35, name:'rose6'},
              {value:30, name:'rose7'},
              {value:40, name:'rose8'}
          ]
      }
  ]
};
