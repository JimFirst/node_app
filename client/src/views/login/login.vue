<template>
  <div>
    <el-form :model="loginInfo" ref="loginInfo" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="loginInfo.user"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {}
    }
  },
  methods: {
    onSubmit() {
      const data = {
        ...this.loginInfo
      }
      this.$http.user.login(data).then(res => {
        if (res.code === 1) {
          this.$message.success('登录成功')
          this.$router.push({
            path: '/child'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>