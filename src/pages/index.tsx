import Head from 'next/head';
import Link from 'next/link';
import { getDatabase } from '~/lib/notion';
import Tags from '~/components/Tags';
import Layout from '~/components/Layout';
import Text from '~/components/Text';
import CardProfile from '~/components/Card/Profile';

interface HomePageProps {
  posts: any[];
}

const Home: React.FC<HomePageProps> = (props) => {
  return (
    <Layout>
      <Head>
        <title>Usucode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center px-4 md:px-8 space-y-8">
        <div className="w-full max-w-2xl">
          <CardProfile />
        </div>
        <div className="w-full max-w-2xl">
          <h2 className="text-white text-2xl font-bold text-center">Blog</h2>
          <ul>
            <li></li>
          </ul>
          <div className="h-20 w-screen bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const postsDatabase = await getDatabase(process.env.BLOG_DATABASE_ID);

  return {
    props: {
      posts: postsDatabase,
    },
    revalidate: 1,
  };
};
