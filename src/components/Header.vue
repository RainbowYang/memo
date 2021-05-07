<template>
  <el-header id="header">
    <div id="title">
      {{ $t('Progress Manager') }}
    </div>
    <LocaleChanger/>
  </el-header>
</template>

<script>
import LocaleChanger from '@/components/LocaleChanger'

export default {
  name: 'Header',
  components: { LocaleChanger },
}
</script>

<style scoped>
#header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

#title {
  font-size: 36px;
  text-align: center;
}
</style>
