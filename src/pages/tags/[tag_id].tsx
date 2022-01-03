import Head from 'next/head';
import Link from 'next/link';
import { getDatabase } from '~/lib/notion';
import { Text } from '~/[id]';
import styles from './index.module.css';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1 className="mt-4 text-4xl text-center">Tag {}</h1>
        </header>

        <h2>All Posts</h2>
        <ul>
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
              <li key={post.id} className={styles.post}>
                <img
                  src={post.cover?.external.url}
                  alt="cover image"
                  width={100}
                />
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <ul className="flex space-x-2">
                  {post.properties.Tags.multi_select.map((item, i) => (
                    <li key={i}>
                      <Link href="">
                        <a
                          href=""
                          className="py-1 px-2 bg-gray-200 rounded text-sm"
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
