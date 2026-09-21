import { useState } from "react";
import CategoryBlog from "../CategoryBlogPost/CategoryBlog";
import ModernArtical from "../ModernArticles/ModernArtical";
import NotFoundBlog from "../NoFoundBlog/NotFoundBlog";

const Blog = ({
  CategoryPosts,
  articalPost,
  searchByName,
  resetData,

  viewMode,
  setViewMode,
}) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? articalPost
      : articalPost.filter((post) => post.category === activeCategory);

  const [searchValue, setSearchValue] = useState("");

  function resetFilters() {
    setSearchValue("");
    setActiveCategory("all");
    resetData();
  }

  console.log(articalPost);

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label inline-flex items-center gap-2 mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              مدونتنا
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              استكشف <span className="gradient-text">مقالاتنا</span>
            </h1>

            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>

        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <input
                  placeholder="ابحث في المقالات..."
                  className="input-dark w-full px-5 py-3 pr-12"
                  type="text"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    searchByName(e);
                  }}
                />

                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 hover:cursor-pointer py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === "all"
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  جميع المقالات
                </button>
                {CategoryPosts.map((category, idx) => (
                  <CategoryBlog
                    key={idx}
                    CategoryPosts={category}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-neutral-400">
                عرض{" "}
                <span className="font-bold text-white">
                  {filteredPosts.length}
                </span>{" "}
                مقالات
              </p>

              <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                  {/* Grid Button */}
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-orange-500 text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                    title="عرض شبكي"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>

                  {/* List Button */}
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-orange-500 text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                    title="عرض قائمة"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Articles */}
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "flex flex-col gap-6"
              }
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <ModernArtical
                    viewMode={viewMode}
                    key={post.id}
                    ModernArtical={post}
                  />
                ))
              ) : (
                <NotFoundBlog resetData={resetFilters} />
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                disabled
                className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-1">
                <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white">
                  1
                </button>

                <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white">
                  2
                </button>

                <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white">
                  3
                </button>

                <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white">
                  4
                </button>

                <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white">
                  5
                </button>
              </div>

              <button className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]">
                <svg
                  className="w-5 h-5 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <p className="text-center text-neutral-500 mt-4 text-sm">
              صفحة 1 من 5
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
