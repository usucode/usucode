import Head from 'next/head';
import Link from 'next/link';
import { getDatabase } from '../lib/notion';
import Tags from '~/components/Tags';
import Layout from '~/components/Layout';
import Text from '~/components/Text';
import CardProfile from '~/components/Card/Profile';

export const databaseId = process.env.NOTION_DATABASE_ID;

interface HomePageProps {
  posts: any[];
}

const Home: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Usucode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center px-4 md:px-8">
        <main className="w-full max-w-2xl">
          <CardProfile />
          <img src="/pixeltrue-web-development.svg" alt="main visual" />
          <div className="mt-4 text-slate-100 leading-7">
            <p>UI/UXが大好きなフロントエンドの秋山です。</p>
            <p>
              最近業務では、Railsを書くことが増えてきているのでフロントエンドじゃなくなりかけています笑
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => {
              const date = new Date(post.last_edited_time).toLocaleString(
                'en-US',
                {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                }
              );
              return (
                <li
                  key={post.id}
                  className="sm:first:col-span-2 lg:first:col-span-3 rounded-2xl overflow-hidden border border-gray-100"
                >
                  <Link href={`/posts/${post.id}`}>
                    <a className="cursor-pointer">
                      <img
                        className="w-full h-40 object-cover"
                        src={post.cover?.external.url}
                        alt="cover image"
                      />
                    </a>
                  </Link>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold tracking-wider">
                      <Link href={`/posts/${post.id}`}>
                        <a className="cursor-pointer text-white">
                          <Text text={post.properties.Name.title} />
                        </a>
                      </Link>
                    </h3>

                    <p className="text-slate-400 text-sm">{date}</p>
                    <Tags data={post.properties.Tags.multi_select} />
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
