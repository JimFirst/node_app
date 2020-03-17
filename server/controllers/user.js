var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res) {
  console.log(req.body);
  const { user, password } = req.body
  if (user === 'admin' && password === '123456') {
    res.json({
      msg: '登录成功',
      code: 1
    })
  } else {
    res.json({
      msg: '用户名或密码错误',
      code: 2
    })
  }
});

module.exports = router;
