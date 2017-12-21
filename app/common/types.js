  // mediaState 0|上传中, 1处理中, 2 处理成功 , 3 失败
  // source_type: 0:上传, 1:youtube; 2:剪切; 3:直播;  4:直播切片; (5:广告)  6合集; 7直播回放;  8图片  9全景图
export const SOURCE_TYPE = {
  '-1': '全部类型',
  0: '视频',
  2: '剪切',
  3: '直播',
  4: '直播碎片',
  6: '混剪',
  9: '全景图',
};

export const MEDIA_SATUS = {
  '-1': '全部状态',
  0: '上传中',
  1: '处理中',
  2: '处理成功',
  3: '失败',
  4: '不支持的链接',
};

export const VIDEO_LIST_SHARE_STATU = {
  '-1': '全部',
  0: '未分享',
  1: '分享',
  2: '定时分享',
};

export const TIME_ORDER = {
  1: '时间顺序',
  0: '时间倒序',
};

export const LIVE_SATUS = {
  '-1': '状态',
  0: '回放',
  1: '直播',
};

// 我的订单交易状态
export const ORDER_STATUS = {
  '-1': '全部订单',
  0: '待付款',
  1: '交易成功',
  2: '交易失败',
  3: '交易关闭',
};

// 我的订单交易时间
export const ORDER_TIME = {
  '-1': '交易时间',
  0: '最新',
};

// 报表
export const SORT = {
  0: '升序',
  1: '降序',
};

export const SHOWED = {
  '-1': '全部',
  0: '已显示',
  1: '未显示',
};

export const SHARE = {
  0: '定时分享',
  1: '及时分享',
};

// 分享列表状态
export const SHARE_STATUS = {
  '-1': '全部状态',
  3: '分享失败',
  2: '分享成功',
  1: '发送成功',
  0: '发送中',
};

// 分享列表播放量
export const SHARE_PLAY = {
  '-1': '播放量',
  1: '由高到低',
  0: '由低到高',
};

// 任务列表
export const TASK_TIME = {
  0: '时间顺序',
  1: '时间倒序',
};

export const TASK_STATE = {
  '-1': '状态',
  1: '剪辑中',
  2: '剪辑完成',
};

// 报表绑定微博账号
export const WEIBO_ACCOUNT = {
  0: '已绑定账号',
  1: '全部账号',
};

// 权限设置
export const AUTH_POLICY = {
  search_enabled: '云剪素材搜索',
  weibo_search_enabled: '微博素材搜索',
  upload_enabled: '上传视频',
  upload_image_enabled: '上传图片',
  website2video_enabled: '网页转视频',
  create_library_enabled: '创建素材库',
  create_project_enabled: '混剪',
  paster_enabled: '贴片组合',
  live_enabled: '新建直播',
  live_backup_enabled: '直播备份',
  weibo_live_enabled: '微博直播列表',
  weibo_live_plugin_enabled: '微博直播插件',
  weibo_analyze_enabled: '微博传播分析',
  weibo_total_analyze_enabled: '微博数据分析',
  upload_subtitle_enabled: '上传本地字幕',
  publish_task_enabled: '字幕众包服务',
  youtube_enabled: '拉取视频',
  youtube_subtitle_pull_enabled: '拉取字幕',
  share_enabled: '分享',
  timer_share_enabled: '定时分享',
  video_subtitle_enabled: '压制字幕',
  download_enabled: '下载',
  is_master: '机构账号',
  weibo_publish_report_enabled: '发布统计',
  reply_enabled: '转发权限',
  publish_reply_enabled: '发布转发权限',
  lcps_create_schedule_enabled: '排期',
  lcps_create_enabled: '导播',
};

// 特效列表
export const inEffectList = [
  { value: 'none', text: '无' },
  { value: 'flash', text: '闪现' },
  { value: 'fadeIn', text: '渐显' },
  { value: 'fadeInUp', text: '向上渐显' },
  { value: 'fadeInDown', text: '向下渐显' },
  { value: 'fadeInLeft', text: '向右渐显' },
  { value: 'fadeInRight', text: '向左渐显' },
  { value: 'bounceIn', text: '跳动显示' },
  { value: 'bounceInDown', text: '向下跳动' },
  { value: 'bounceInUp', text: '向上跳动' },
  { value: 'bounceInLeft', text: '向右跳动' },
  { value: 'bounceInRight', text: '向左跳动' },
  { value: 'rollIn', text: '旋转显示' },
];

export const fontFamily = [
  {
    value: 'SourceHanSansCN-Medium',
    text: '思源黑体-中等',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/SourceHanSansCN-Medium.otf',
  },
  {
    value: 'SourceHanSansCN-Regular',
    text: '思源黑体-常规',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/SourceHanSansCN-Regular.otf',
  },
  {
    value: 'fangzhengshusong',
    text: '方正书宋',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/fangzhengshusong.ttf',
  },
  {
    value: 'huawenhupo',
    text: '华文琥珀',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/huawenhupo.ttf',
  },
  {
    value: 'laihuziti',
    text: '濑户字体',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/laihuziti.ttf',
  },
  {
    value: 'pangmenzhengdao',
    text: '庞门正道',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/pangmenzhengdao.ttf',
  },
  {
    value: 'yuanchuangshouxie',
    text: '原创手写',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/yuanchuangshouxie.ttf',
  },
  {
    value: 'gaoduanhei',
    text: '高端黑体',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/gaoduanhei.ttf',
  },
  {
    value: 'kuhei',
    text: '酷黑',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/kuhei.ttf',
  },
  {
    value: 'kuaileti',
    text: '快乐体',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/kuaileti.ttf',
  },
  {
    value: 'zhiya',
    text: '智雅',
    url: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/clip_website_images/fonts/zhiya.ttf',
  },
];

export const fontSize = [
  { value: 12, text: '12' },
  { value: 14, text: '14' },
  { value: 16, text: '16' },
  { value: 18, text: '18' },
  { value: 20, text: '20' },
  { value: 22, text: '22' },
  { value: 28, text: '28' },
  { value: 36, text: '36' },
  { value: 40, text: '40' },
  { value: 48, text: '48' },
  { value: 60, text: '50' },
  { value: 72, text: '72' },
];

export const USER_TYPE = [
  '', 'easub', 'cctv', 'ims', 'nba', 'iss', 'dev', 'feifan', 'live', 'sina',
  'weibo', 'weibo_zhengwu', 'weibo_taiwang', 'weibo_tiyu', 'weibo_yule', 'weibo_huacheng', 'weibo_muying',
];
