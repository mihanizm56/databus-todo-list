// eslint-disable-next-line
const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/todos',
    proxy({
      target: 'http://127.0.0.1:8080',
      changeOrigin: true,
    }),
  );
};
