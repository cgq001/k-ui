<template>
  <div id="app">
    <div style="margin-bottom: 10px;">
      <KButton>一般</KButton>
      <KButton type="primary">主要</KButton>
      <KButton type="success">成功</KButton>
      <KButton type="info">成功</KButton>
      <KButton type="warning">警告</KButton>
      <KButton type="danger">错误</KButton>
    </div>
    <div style="margin-bottom: 10px;">
      <KButton plain>一般</KButton>
      <KButton type="primary" plain>主要</KButton>
      <KButton type="success" plain>成功</KButton>
      <KButton type="info" plain>成功</KButton>
      <KButton type="warning" plain>警告</KButton>
      <KButton type="danger" plain>错误</KButton>
   </div>
   <div style="margin-bottom: 10px;">
      <KButton round>一般</KButton>
      <KButton type="primary" round>主要</KButton>
      <KButton type="success" round>成功</KButton>
      <KButton type="info" round>成功</KButton>
      <KButton type="warning" round>警告</KButton>
      <KButton type="danger" round>错误</KButton>
   </div>
   <div style="margin-bottom: 10px;">
      <KButton circle>般</KButton>
      <KButton type="primary" circle>要</KButton>
      <KButton type="success" circle>功</KButton>
      <KButton type="info" circle>功</KButton>
      <KButton type="warning" circle>告</KButton>
      <KButton type="danger" circle>误</KButton>
   </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
