<template>
  <el-main class="login">
    <el-row>
      <el-col :span="6" class="content">
        <div class="grid-content bg-purple">afd</div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="postcss">
.login {
  & .content {
    border: 1px solid #ccc;
    background: #ffc;
  }
}
</style>
