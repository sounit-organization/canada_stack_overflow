import { firebase } from "../firebase";
import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { getDatabase, ref, onValue } from "firebase/database";
// Need import initializer and initialize firebase
import descendSort from "../helper/descendSort";
import { useDispatch } from "react-redux";
import { storePosts } from "../store/actions/posts";

const PostList = ({ navigation }) => {
  const dispatch = useDispatch();
  const [postsData, setPostsData] = useState();

  useEffect(() => {
    const db = getDatabase();
    const reference = ref(db, "/posts");
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      setPostsData(descendSort(data));
      dispatch(storePosts(data));
    });
  }, []);

  return (
    <ScrollView style={{ width: "100%" }}>
      {postsData?.map((post, i) => (
        <TouchableOpacity
          key={`posts-${i}`}
          onPress={() => navigation.navigate("PostDetail", { id: post.id })}
        >
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{post.title}</ListItem.Title>
              <ListItem.Subtitle>{post.postDate}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default PostList;