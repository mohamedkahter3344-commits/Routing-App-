import DataApi from "../posts.json";
import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFoundPage/NotFound";
import Blog from "./Components/Blog/Blog";
import BlogDetails from "./Components/BlogDetails/BlogDetails";

const App = () => {
  // const {posts} = DataApi
  const [Data, setData] = useState(DataApi);
  const [viewMode, setViewMode] = useState("grid");

  function searchByName(e) {
    const newData = structuredClone(DataApi);

    newData.posts = newData.posts.filter((post) =>
      post.title.includes(e.target.value),
    );

    setData(newData);
  }

  function resetData() {
    setData(structuredClone(DataApi));
  }

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: (
            <Home
              viewMode={viewMode}
              articalPost={Data.posts}
              CategoryPosts={Data.categories}
            />
          ),
        },
        {
          path: "blog",
          element: (
            <Blog
              viewMode={viewMode}
              setViewMode={setViewMode}
              articalPost={Data.posts}
              CategoryPosts={Data.categories}
              searchByName={searchByName}
              resetData={resetData}
            />
          ),
        },
        {
          path: "blog/:slug",
          element: <BlogDetails viewMode={viewMode} articalPost={Data.posts} />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

/*

https://9jjxf4bh-5174.uks1.devtunnels.ms/
*/ 