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

const destroyPostById = async(id)=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const token = JSON.parse(localStorage.getItem("token"))

    const response = await axios.delete(API_URL + "/posts/destroyPostById/" + id, {
        headers:{
            authorization: token
        }
    })
    
    return response.data;
}

const postsService = {
    getAllPosts,
    getPostById,
    getPostByTitle,
    destroyPostById
}

export default postsService;