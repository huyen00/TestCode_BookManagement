
export default {
   getListBook(state, data){
       state.list_book = data.items
       state.pagination = data
   },
   changePage(state, pageNumber) {
    state.currentPage = pageNumber

    },
    changeSearch(state, search){
        state.search = search
    }

};
