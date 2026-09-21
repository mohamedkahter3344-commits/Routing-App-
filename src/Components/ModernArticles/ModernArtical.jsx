import { Link } from "react-router";

const ModernArtical = ({ ModernArtical, viewMode, onClick }) => {
  const date = new Date(ModernArtical.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <article
      className={
        viewMode === "grid"
          ? "group card overflow-hidden"
          : "group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
      }
      style={{ animationDelay: "0ms" }}
    >
      <Link
      onClick={onClick}
        className={viewMode === "grid" ? "block" : "flex flex-col md:flex-row"}
        to={`/blog/${ModernArtical.slug}`}
        data-discover="true"
      >
        <div
          className={
            viewMode === "grid"
              ? "relative h-52 overflow-hidden"
              : "relative w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden"
          }
        >
          <img
            alt={ModernArtical.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            src={ModernArtical.image}
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
              {ModernArtical.category}
            </span>
          </div>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "p-6"
              : "flex-1 p-6 flex flex-col justify-center"
          }
        >
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {ModernArtical.readTime}
            </span>

            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>

            <span>{date}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {ModernArtical.title}
          </h3>

          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
            {ModernArtical.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
            <div className="flex items-center gap-3">
              <img
                alt={ModernArtical.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                src={ModernArtical.author.avatar}
              />

              <div>
                <p className="text-sm font-medium text-white">
                  {ModernArtical.author.name}
                </p>

                <p className="text-xs text-neutral-500">
                  {ModernArtical.author.role}
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <svg
                className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
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
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ModernArtical;
