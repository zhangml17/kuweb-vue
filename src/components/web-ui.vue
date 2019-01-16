<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kuweb',
  data () {
    return {
      msg: 'Kubernete安装界面'
    }
  }
}
</script>
