import React from 'react';
import { Link } from 'react-router-dom';

interface BlogTagsProps {
  tags: string[];
  category: string;
}

const BlogTags: React.FC<BlogTagsProps> = ({ tags, category }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      {/* Category */}
      <Link 
        to={`/blog?category=${encodeURIComponent(category)}`}
        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
      >
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        {category}
      </Link>

      {/* Tags */}
      {tags.map((tag, index) => (
        <Link
          key={index}
          to={`/blog?tag=${encodeURIComponent(tag)}`}
          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          #{tag.replace(/\s+/g, '')}
        </Link>
      ))}
    </div>
  );
};

export default BlogTags;