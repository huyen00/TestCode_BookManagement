<template>
  <div>
    <h2 class="text-3xl font-boild uppercase">Quản lý sách</h2>
    <form class="w-1/3 my-5">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="default-search" v-model="search" @keyup="SearchBook"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search book..." required>

      </div>
    </form>

    <div
      class="min-[320px]:block min-[320px]:w-full sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5 2xl:grid 2xl:grid-cols-5 gap-4 my-5">
      <div class="item_book transition duration-500 ease-in-out transform " v-for="book in books" :key="book.id">
        <div class="border rounded-lg overflow-hidden h-full">
          <a href="">
            <div class="image_book">
              <img :src="book.cover_link" class="h-64 w-full object-cover" alt="">
            </div>
            <div class="py-2  text-center">
              <h4 class="text-lg font-semibold cursor-pointer hover:text-yellow-600">{{ book.title }}</h4>
            </div>
          </a>

        </div>
      </div>
    </div>
    <nav v-if="pagination" class="my-4">
      <ul class="pagination flex justify-center inline-flex -space-x-px text-base pl-0">
        <li class="page-item" :disabled="currentPage === 1 ? true : false">
          <a class="page-link text-gray-500  flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700" href="#" @click.prevent="changePage(currentPage - 1)">previous</a>
        </li>
        <li v-for="page in pagesNumber" :key="page" class="page-item" :class="{ active: page == pagination.page }" active-class="bg-blue-600 text-yellow">
          <a @click.prevent="changePage(page)" class="page-link text-gray-500 flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 cursor-pointer"   >{{ page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === pagination.totalPages }">
          <a class="page-link  flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700" href="#" @click.prevent="changePage(currentPage + 1)">next</a>
        </li>
        <span class="text-xs" style="margin-top: 8px">
          &nbsp;
          <i>
            Displaying
            {{
              pagination.data !== undefined ? pagination.data.length : 0
            }}
            of {{ pagination.totalPages }}
            entries.
          </i>
        </span>
      </ul>
    </nav>
  </div>
</template>
  
<script>
import { mapState } from "vuex";
export default {
  name: 'book_list',

  components: {

  },
  data() {
    return {
      search: "",
      list_books: [],
    }
  },
  computed: {
    ...mapState("stores", {}),
    books() {
      return this.$store.state.stores.list_book;
    },
    // search() {
    //   return this.$store.state.stores.search;
    // },
    // phan trang
    pagination() {
      return this.$store.state.stores.pagination;
    },
    currentPage() {
      return this.$store.state.stores.currentPage;
    },
    offset() {
      return this.$store.state.stores.offset;
    },
    pagesNumber() {
      console.log("333", this.pagination)
      if (!this.pagination) {
        return [];
      }
      let from = this.pagination.page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.totalPages) {
        to = this.pagination.totalPages;
      }
      let pagesArray = [];
      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }
      return pagesArray;

    },

    // 
    fillterBook() {
      return this.list_book
        ? this.list_books.filter((list_books) =>
          list_books.name.toLowerCase().includes(this.search.toLowerCase())
        )
        : this.list_book;
    },
  },
  mounted() {
    this.getListBook();
  },
  methods: {

    getListBook() {
      this.$store.dispatch("stores/getListBook")


    },
    // phan trang
    changePage(pageNumber) {
      console.log(pageNumber)
      this.$store.commit("stores/changePage", pageNumber);
      this.getListBook();
    },
    SearchBook() {
      this.$store.commit("stores/changeSearch", this.search)

      this.getListBook();
    },
  }
}
</script>
  
<style scoped>
.item_book {
  width: 100%;
  height: 300px;
}

.image_book img {
  position: relative;
  width: 100%;
  transition: 0.5s;
  height: 200px;
  object-fit: cover;
}

.item_book img:hover {
  transform: scale(1.1);
}
</style>
  