// import Vue from "vue";
import axios from "axios"
import config from "./config";

const ApiService = {
  
   
    query(resource) {
       
        return axios.get(config.API_URL + "/" + resource)
    },

    get(resource, slug) {
        return axios.get(config.API_URL + "/" + resource + "/" + slug)
    },

    post(resource, params) {
      
        return axios.post(config.API_URL + "/" + resource, params)
    },

    update(resource, params, slug) {
       
        return axios.post(config.API_URL + "/" + resource + "/" + slug, params);
    },

    put(resource, params) {
        
        return axios.put(config.API_URL + "/" + resource, params);
    },

    delete(resource) {
        return axios.delete(config.API_URL + "/" + resource)
    }
};

export default ApiService;