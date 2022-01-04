import Head from 'next/head';
import Link from 'next/link';
import { getDatabase } from '../lib/notion';
import { Text } from './[id]';
import Tags from '~/components/Tags';
import Layout from '~/components/Layout';

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
        <main className="w-full max-w-4xl">
          <img src="/pixeltrue-web-development.svg" alt="logo" />
          <h1 className="mt-4 text-4xl font-bold text-center text-slate-100">
            Usucode
          </h1>
          <div className="mt-4 text-slate-100">
            <p className="leading-7">
              デザインが好きなフロントエンドメインでやっているエンジニアのAkiyamaです。
            </p>
            <p className="leading-7">
              Notion
              APIが無料枠でもかなり活用できると分かったのでNotionをCMSとして使ってみました。
            </p>
            <p className="leading-7">
              FirebaseのHostingを使ってNext.jsでブログを作ってます。
            </p>
            <p className="leading-7">
              CSSに関しては、全てTailwindcssでやっていく予定です。
            </p>
          </div>

          <div className="mt-4 text-slate-100">
            <p className="leading-7">以下のブログは、Notionで書いてます。</p>
          </div>

          <h2 className=" text-slate-100">All Posts</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <Link href={`/${post.id}`}>
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
                      <Link href={`/${post.id}`}>
                        <a className="cursor-pointer">
                          <Text text={post.properties.Name.title} />
                        </a>
                      </Link>
                    </h3>

                    <p className="">{date}</p>
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
