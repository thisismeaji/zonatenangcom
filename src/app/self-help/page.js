import React from 'react';
import Styles from "../page.module.css";
import { posts } from "../../data/posts";
import PostCard from "../../components/postcard/PostCard";
import Head from "next/head";

// Metadata untuk halaman kategori Self-Help
export const metadata = {
  title: "Self-Help",
  description:
    "Temukan cara untuk mengenali diri sendiri, mengatasi rasa cemas, serta membangun rasa kepercayaan diri untuk kalian para kaum introvert.",
  keywords: "self-help",
  openGraph: {
    title: "Self-Help",
    description:
      "Temukan cara untuk mengenali diri sendiri, mengatasi rasa cemas, serta membangun rasa kepercayaan diri untuk kalian para kaum introvert.",
    url: "https://zonatenang.com/self-help", // Sesuaikan dengan URL yang sebenarnya
    image: "https://zonatenang.com/og-image.jpg",
    type: "website",
    locale: "id_ID",
    site_name: "Zonatenang",
  },
};

export default function SelfHelp() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />

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

        {/* Schema Markup untuk Breadcrumb */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://zonatenang.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Self-Help",
                  "item": "https://zonatenang.com/self-help"
                }
              ]
            }
          `}
        </script>
      </Head>
      <main>
        <section className={Styles.postCard}>
          {posts
            .filter(post => post.category === 'Self-Help') 
            .map(post => (
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
