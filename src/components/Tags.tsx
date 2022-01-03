import React from 'react';
import Link from 'next/link';

interface Tag {
  name: string;
}

interface TagsProps {
  data: Tag[];
}

const Tags: React.FC<TagsProps> = (props) => {
  return (
    <ul className="flex space-x-2">
      {props.data.map((tag, i) => (
        <li key={i}>
          <Link href={`/tags/${tag.name}`}>
            <a className="py-0.5 px-2 bg-gray-200 rounded-full text-xs">
              {tag.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
