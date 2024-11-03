import React from "react";
import Styles from "../page.module.css";
import NewArticle from "../../components/newarticle/NewArticle";
import { posts } from "../../data/posts";

export default function Tentang() {
  return (
    <>
      <main>
        <div className={Styles.content}>
          <section className={Styles.page}>
            <article>
              <h1>Tentang Zonatenang.com</h1>
              <p>
                Selamat datang di ZonaTenang.com – Ruang aman dan nyaman bagi
                kamu yang ingin memahami diri, mengembangkan potensi, dan
                menemukan kedamaian sebagai seorang introvert.
              </p>
              <p>
                Di sini, kami percaya bahwa keheningan bukan berarti kelemahan,
                dan ketenangan justru dapat menjadi kekuatan.
              </p>
              <p>
                ZonaTenang.com didedikasikan untuk para introvert yang ingin
                menggali lebih dalam mengenai kepribadian mereka, mendapatkan
                tips untuk mengelola energi, dan membangun kepercayaan diri
                tanpa harus merubah siapa diri mereka.
              </p>
              <p>
                Blog ini adalah tempat di mana kita bisa berbagi cerita,
                inspirasi, dan strategi yang relevan untuk hidup lebih bahagia
                dan produktif.
              </p>
              <h2>Apa yang Akan Kamu Temukan di ZonaTenang.com</h2>
              <h3>1. Pengembangan Diri</h3>
              <p>
                Artikel untuk membantu kamu memahami potensi diri, menemukan
                bakat, dan mengembangkan keterampilan yang cocok bagi
                kepribadian introvert.
              </p>
              <h3>2. Kesehatan Mental</h3>
              <p>
                Informasi tentang menjaga kesehatan mental, mulai dari mengelola
                kecemasan, stress, hingga tips agar tetap rileks di tengah
                kesibukan dunia.
              </p>
              <h3>3. Karier & Produktivitas</h3>
              <p>
                Tips agar kamu bisa sukses di dunia profesional, strategi
                produktivitas yang cocok bagi introvert, dan bagaimana
                beradaptasi dalam lingkungan kerja yang mungkin menantang.
              </p>
              <h3>4. Hubungan & Komunikasi</h3>
              <p>
                Bagaimana menjalin hubungan yang bermakna dan memperdalam
                koneksi dengan orang-orang terdekat tanpa merasa kewalahan.
              </p>
              <h3>Kisah & Inspirasi</h3>
              <p>
                Kisah dari sesama introvert dan tokoh-tokoh inspiratif yang bisa
                memotivasi dan membuat kamu merasa tidak sendirian.
              </p>
              <p>
                Kami berharap ZonaTenang.com bisa menjadi teman yang setia dalam
                perjalananmu.
              </p>
              <p>
                Sebuah tempat untuk bernafas sejenak, merenung, dan menemukan
                bahwa menjadi introvert adalah hal yang indah dan penuh potensi.
              </p>
            </article>
          </section>
          <aside className={Styles.aside}>
            <h2>Artikel Terbaru</h2>
            <div>
              {posts.slice(0, 3).map((post) => (
                <NewArticle
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
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
