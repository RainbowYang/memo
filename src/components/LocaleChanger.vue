<template>
  <div class="locale-changer">
    <el-select v-model="$i18n.locale" @change="change()">
      <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" :label="$t(lang)">
        {{ $t(lang) }}
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data () {
    return { langs: ['zh-cn', 'en'] }
  },
  created () {
    this.$i18n.locale = localStorage.getItem('locale') || 'en'
  },
  methods: {
    change () {
      localStorage.setItem('locale', this.$i18n.locale)
    },
  },
}
</script>

<style scoped>
.locale-changer {
  display: inline-block;
  float: right;
}

</style>
