
//Dòng này để import vue-router

import BookList from '@/components/bookManagement/BookList'
const routes = [// bao gồm danh sách route
  {
    path: '/book-list', 
    name: 'BookList', 
    component: BookList
  },
  
  
    
  ]
export default routes;