<template>
  <el-collapse accordion>
    <div v-for="(book, title) in book_info" :key="book.title">
      <el-collapse-item v-if="book.status===status">
        <template slot="title">
          <el-tag>「 {{title}} 」</el-tag>
        </template>
        <Book :book="book"/>
      </el-collapse-item>
    </div>
  </el-collapse>
</template>

<script>
    import Book from "@/components/Book"

    export default {
        name: "Bookcase",
        props: ["status"],
        data() {
            return {
                book_info: this.GLOBAL.book_info
            }
        },
        components: {
            Book
        }
    }
</script>

<style scoped>

</style>