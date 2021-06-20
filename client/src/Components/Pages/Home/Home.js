import React from "react";
import dubai from "../../../Images/dubai.png";
import StoryLayout from "../../Layout/StoryLayout/StoryLayout";
import Story from "../../Reusable/Story/Story";
import pic1 from "../../../Images/story1.jpeg";
import pic2 from "../../../Images/pic2.jpeg";
import pic3 from "../../../Images/picc3.jpeg";
import pic4 from "../../../Images/picc4.jpeg";
import pic5 from "../../../Images/pic5.jpeg";
import avatar1 from "../../../Images/avatar1.jpg";
import avatar from "../../../Images/avatar2.jpg";
import avatar2 from "../../../Images/avatar3.jpg";
import avatar3 from "../../../Images/ToyFaces_Colored_BG_29.jpg";
import avatar4 from "../../../Images/ToyFaces_Colored_BG_37.jpg";
import avatar5 from "../../../Images/ToyFaces_Colored_BG_49.jpg";
import avatar6 from "../../../Images/ToyFaces_Colored_BG_56.jpg";
import avatar7 from "../../../Images/ToyFaces_Colored_BG_59.jpg";
import CreatePost from "../../Reusable/CreatePost/CreatePost";
import Post from "../../Reusable/Post/Post";
import post2 from "../../../Images/post2.jpeg";
import story1 from "../../../Images/story1.jpeg";

function Home() {
  return (
    <main className="home">
      <StoryLayout>
        <Story avatar={avatar1} image={pic1} name={"Perrin"} />
        <Story avatar={avatar2} image={pic2} name={"Albert"} />
        <Story avatar={avatar3} image={pic3} name={"Joe"} />
        <Story avatar={avatar4} image={pic4} name={"Mathew"} />
        <Story avatar={avatar5} image={pic5} name={"Joseph"} />
      </StoryLayout>
      <CreatePost image={avatar} />
      <Post
        message={
          "Laborum est occaecat proident laboris exercitation Lorem. Est pariaturfugiat sit pariatur ex. Dolore do mollit eu deserunt. Minim excepteurirure proident ut voluptate velit."
        }
        image={post2}
      />
      <Post
        message={
          "Laborum est occaecat proident laboris exercitation Lorem. Est pariaturfugiat sit pariatur ex. Dolore do mollit eu deserunt. Minim excepteurirure proident ut voluptate velit."
        }
      />
      <Post
        message={
          "Laborum est occaecat proident laboris exercitation Lorem. Est pariaturfugiat sit pariatur ex. Dolore do mollit eu deserunt. Minim excepteurirure proident ut voluptate velit."
        }
      />
      <Post
        message={
          "Laborum est occaecat proident laboris exercitation Lorem. Est pariaturfugiat sit pariatur ex. Dolore do mollit eu deserunt. Minim excepteurirure proident ut voluptate velit."
        }
        image={story1}
      />
      <Post
        message={
          "Laborum est occaecat proident laboris exercitation Lorem. Est pariaturfugiat sit pariatur ex. Dolore do mollit eu deserunt. Minim excepteurirure proident ut voluptate velit."
        }
      />
    </main>
  );
}

export default Home;
