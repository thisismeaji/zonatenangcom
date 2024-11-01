import React from 'react';
import Styles from "../page.module.css";
import { posts } from "../../data/posts";
import PostCard from "../../components/postcard/PostCard";
import Head from "next/head";

// Metadata untuk halaman kategori Hobi dan Minat
export const metadata = {
  title: "Hobi dan Minat",
  description: "Temukan berbagai ide kegiatan mulai dari aktifitas hobi hingga minat yang cocok untuk kalian para kaum introvert sehingga bisa lebih mencintai diri sendiri.",
  keywords: "hobi, minat, pengembangan diri, tips",
  openGraph: {
    title: "Hobi dan Minat",
    description: "Temukan berbagai ide kegiatan mulai dari aktifitas hobi hingga minat yang cocok untuk kalian para kaum introvert sehingga bisa lebih mencintai diri sendiri.",
    url: "https://zonatenang.com/hobi-dan-minat", // Sesuaikan dengan URL yang sebenarnya
    image: "https://zonatenang.com/og-image.jpg",
    type: "website",
    locale: "id_ID",
    site_name: "Zonatenang",
  },
};

export default function HobiDanMinat() {
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
                  "name": "Hobi dan Minat",
                  "item": "https://zonatenang.com/hobi-dan-minat"
                }
              ]
            }
          `}
        </script>
      </Head>
      <main>
        <section className={Styles.postCard}>
          {posts
            .filter(post => post.category === 'Hobi dan Minat') // Memfilter postingan berdasarkan kategori
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
