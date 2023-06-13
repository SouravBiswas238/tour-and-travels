import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../UserContext/userContext";
import img3 from "../../asset/Img/bandarban.jpg";

const SingleBlogPage = () => {
  const id = useParams()?.id;
  const { blogs } = useContext(UserContext);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const blog = blogs.find((blog) => blog._id === id);
    setBlog(blog);
  }, [id, blogs]);
  console.log("b==>", blog, id, blogs);
  return (
    <div className="pt-10  mt-10">
      <div class="bg-gray-800 text-white py-4">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl font-bold">Blog Details</h1>
        </div>
      </div>

      <div class="container mx-auto my-8 px-4">
        <div class="bg-white shadow-lg rounded-lg p-8">
          <h2 class="text-3xl font-bold mb-4">{blog?.title}</h2>
          <p class="text-gray-600 mb-4">
            Published on <span class="font-bold">June 13, 2023</span> by{" "}
            <span class="font-bold">
              {blog?.author[0]?.firstName} {blog?.author[0]?.lastName}
            </span>
          </p>
          <img src={img3} alt="" className="w-full mb-6 rounded-lg h-[400px]" />
          <p class="text-gray-700 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            feugiat orci, eget bibendum felis. Nulla eget finibus velit. Donec
            condimentum nisl vel dui tempor, nec dapibus ipsum auctor. Ut
            sollicitudin magna non ante luctus, vel eleifend dui aliquam. Duis
            sodales orci a tortor interdum ultrices. Sed suscipit tristique
            feugiat. Vestibulum volutpat libero et justo ultrices, non cursus
            tortor gravida. Mauris nec est vel nisi rutrum hendrerit. Cras ac
            tristique quam, vel feugiat lorem. Quisque at turpis vel ligula
            rutrum feugiat. Praesent nec nunc ut tellus accumsan hendrerit.
            Donec ut finibus urna. Duis eget purus auctor, tincidunt purus at,
            malesuada arcu. Duis aliquam libero vitae metus sagittis vestibulum.
            Fusce elementum elit nisl, in ultricies lectus luctus ac. Fusce vel
            lacus at nibh laoreet cursus a quis odio.
          </p>
          <p class="text-gray-700 leading-7">
            Sed sit amet vestibulum velit. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Fusce
            vulputate feugiat lacinia. In fermentum pellentesque sapien non
            vulputate. Aenean nec diam quis risus malesuada maximus. Vestibulum
            consectetur varius felis, id ultrices nulla efficitur non. Nullam
            facilisis arcu nec congue interdum. Vestibulum vel interdum est, a
            gravida tortor. Suspendisse vitae ullamcorper urna. Suspendisse
            volutpat justo id lectus scelerisque tincidunt. Duis commodo ante
            sed tellus finibus, in convallis nisl scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
