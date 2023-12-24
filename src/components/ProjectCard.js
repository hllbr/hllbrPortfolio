import React from "react";

const ProjectCard = ({ project: { title, description, image, source, tags } }) => {
  const handleLinkClick = () => {
    window.open(source, '_blank');
  };

  return (
    <div
      className="rounded-md p-4 border border-gray-300 hover:cursor-pointer hover:shadow-md transition duration-300 dark:bg-gray-800 dark:border-gray-600"
      onClick={handleLinkClick}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={image.url}
        alt={title}
        className="object-cover w-full h-64 rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-md text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap mt-4">
          {tags.map((tag, key) => (
            <span
              key={key}
              className="inline-block bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-sm font-semibold rounded-full mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
