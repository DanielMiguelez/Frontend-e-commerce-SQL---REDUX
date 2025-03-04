import axios from 'axios'

const API_URL = "http://localhost:3000"

const getAllPosts = async () =>{
    const response = await axios.get(API_URL + "/posts/getAll")
    console.log(response.data)
    return response.data
};

const getPostById = async (id) =>{
    const response = await axios.get(API_URL + "/posts/getPostById/" + id)
    return response.data
}

const getPostByTitle = async (postTitle) => {
    const res = await axios.get(API_URL + "/posts/getPostByTitle/" + postTitle);
    return res.data;
  };
  

const postsService = {
    getAllPosts,
    getPostById,
    getPostByTitle
}

export default postsService;