
import ApiService from "@/common/apiService";
export default {
 getListBook({commit, state} ){
    
     return ApiService.query(`api/books?page=${state.currentPage}&limit=${state.perPage}&search=${state.search}`).then((response) => {

        if (response.status == 200) {
            console.log("123",response.data)
            console.log("123",response.data.data.items)
            commit("getListBook", response.data.data);
            
        }
     })
 }

};
