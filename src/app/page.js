import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import { posts } from '../data/posts';
import PostCard from '../components/postcard/PostCard';
import Head from 'next/head';

// Metadata untuk halaman beranda
export const metadata = {
  title: "Zonatenang.com: Tempat Nyaman untuk Kaum Introvert",
  description: "Di sini, kamu para kaum introvert akan menemukan tips praktis, wawasan mendalam, dan inspirasi untuk memperkuat diri tanpa perlu mengubah jati diri.",
  keywords: "blog, pengembangan diri, tips berguna, inspirasi, introvert",
  openGraph: {
    title: "Zonatenang.com: Tempat Nyaman untuk Kaum Introvert",
    description: "Di sini, kamu para kaum introvert akan menemukan tips praktis, wawasan mendalam, dan inspirasi untuk memperkuat diri tanpa perlu mengubah jati diri.",
    url: "https://zonatenang.com",
    image: "https://zonatenang.com/og-image.jpg",
    type: "website",
    locale: "id_ID",
    site_name: "Zonatenang",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow"/>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.image} />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <section className={styles.postCard}>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              date={post.date}
              category={post.category}
              image={post.image}
              title={post.title}
              excerpt={post.excerpt}
              link={post.link}
              linkCategory={post.linkCategory}
            />
          ))}
        </section>
      </main>
    </>
  );
}
