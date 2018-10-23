<template>
  <el-main class="login">
    <el-row :gutter="20">
      <el-col :span="12" class="content">hello</el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  .login{
    height: 100%;
    background: #fcc;
    & .el-row{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      & .content{
        border: 1px solid #000;
      }
    }
  }
</style>
