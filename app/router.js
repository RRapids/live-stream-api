'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
    io,
  } = app;
  // socket路由配置测试
  io.of('/').route('test', io.controller.nsp.test);
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);
  // 用户注册
  router.post('/api/reg', controller.api.user.reg);
  // 用户登录
  router.post('/api/login', controller.api.user.login);
  // 创建直播间
  router.post('/api/live/create', controller.api.live.save);
  // 获取当前用户信息
  router.get('/api/user/info', controller.api.user.info);
  // 修改直播间状态
  router.post('/api/live/changesstaus', controller.api.live.changeStatus);
  // 直播间列表
  router.get('/api/live/list/:page', controller.api.live.list);
  // 查看指定直播间
  router.get('/api/live/read/:id', controller.api.live.read);
  // 手机验证码登录
  router.post('/api/phoneLogin', controller.api.user.phoneLogin);
  // 发送手机验证码
  router.post('/api/sendcode', controller.api.sms.sendCode);
  // sorket路由配置测试
  // io.of('/').route('test', io.controller.nsp.test);
  // 进入直播间
  io.of('/').route('joinLive', io.controller.live.joinLive);

};
