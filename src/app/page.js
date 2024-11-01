import Image from "next/image"
import styles from "./page.module.css"
import React from 'react'
import { posts } from '../data/posts'
import PostCard from '../components/postcard/PostCard';

export default function Home() {
  return (
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
  )
}
