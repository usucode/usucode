import Link from 'next/link';

interface CardBlogProps {
  id: string;
  title: string;
  featureImageURL: string;
  createdAt: string;
}

const CardBlog = (props) => {
  return (
    <Link href={`/blog/${props.id}`}>
      <a></a>
    </Link>
  );
};

export default CardBlog;
