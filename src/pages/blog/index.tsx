import { getDatabase } from '~/lib/notion';
import Link from 'next/link';
import Text from '~/components/Text';
import Tags from '~/components/Tags';
import Layout from '~/components/Layout';
import clsx from 'clsx';

interface BlogPageProps {
  posts: any[];
}

const BlogPage: React.FC<BlogPageProps> = (props) => {
  return (
    <Layout>
      <div className="px-4 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {props.posts.map((post, index) => {
              const date = new Date(post.last_edited_time).toLocaleString(
                'en-US',
                {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                }
              );
              return (
                <Link key={post.id} href={`/posts/${post.id}`}>
                  <a className="sm:first:col-span-2 rounded-2xl border border-gray-100 overflow-hidden">
                    <img
                      className={clsx(
                        'w-full object-cover',
                        index != 0 && 'h-52'
                      )}
                      src={post.cover?.external.url}
                      alt="cover image"
                    />
                    <div className="p-4">
                      <h3 className="text-2xl font-bold tracking-wider">
                        <div className="cursor-pointer text-white">
                          <Text text={post.properties.Name.title} />
                        </div>
                      </h3>

                      <p className="text-slate-400 text-sm">{date}</p>
                      <Tags data={post.properties.tags?.multi_select} />
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const postsDatabase = await getDatabase(process.env.BLOG_DATABASE_ID);

  return {
    props: {
      posts: postsDatabase,
    },
    revalidate: 1,
  };
};

export default BlogPage;
