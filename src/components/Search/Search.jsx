import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByTitle } from "../../features/posts/postSlice";
import Post from "../Posts/Post/Post";

const Search = () => {
  const { postName } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostByTitle(postName))
  }, [postName]);

  return <div>
    <Post></Post>
  </div>;
};

export default Search;