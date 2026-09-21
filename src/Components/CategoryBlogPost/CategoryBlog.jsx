const CategoryBlog = ({ CategoryPosts, activeCategory, setActiveCategory }) => {
  return (
    <button
      onClick={() => setActiveCategory(CategoryPosts.name)}
      className={`px-4 py-2 hover:cursor-pointer rounded-xl text-sm font-medium transition-all duration-300 ${
        activeCategory === CategoryPosts.name
          ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
          : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
      }`}
    >
      {CategoryPosts.name}
    </button>
  );
};

export default CategoryBlog;
