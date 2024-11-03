import React from "react";
import Styles from "../page.module.css";
import NewArticle from "../../components/newarticle/NewArticle";
import { posts } from "../../data/posts";

export default function KebijakanPrivasi() {
  return (
    <>
      <main>
        <div className={Styles.content}>
          <section className={Styles.page}>
            <article>
              <h1>Kebijakan Privasi</h1>
              <p>
                Di ZonaTenang.com, kami menghargai privasi pengunjung dan
                berkomitmen untuk melindungi data pribadi yang Anda bagikan.
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
                menggunakan, dan melindungi informasi Anda ketika Anda
                mengunjungi blog ini.
              </p>
              <h2>1. Informasi yang Kami Kumpulkan</h2>
              <p>
                Kami dapat mengumpulkan informasi dari Anda ketika Anda
                mengunjungi situs kami, termasuk:
              </p>
              <ul>
                <li>
                  Informasi Pribadi: Nama, alamat email, dan informasi lain yang
                  Anda berikan secara sukarela, misalnya saat berlangganan
                  buletin atau mengisi formulir kontak.
                </li>
                <li>
                  Data Non-Pribadi: Data seperti alamat IP, tipe perangkat,
                  lokasi, serta aktivitas penelusuran yang dikumpulkan melalui
                  teknologi seperti cookie dan tracking tools.
                </li>
              </ul>
              <h2>2. Penggunaan Informasi</h2>
              <p>Informasi yang kami kumpulkan dapat digunakan untuk:</p>
              <ul>
                <li>
                  Memperbaiki layanan dan konten di situs kami sesuai dengan
                  kebutuhan pengunjung.
                </li>
                <li>
                  Mengirimkan buletin atau konten terbaru jika Anda telah
                  mendaftar untuk menerimanya.
                </li>
                <li>
                  Mengoptimalkan iklan yang ditampilkan di situs kami melalui
                  kerja sama dengan pihak ketiga seperti Google AdSense.
                </li>
              </ul>
              <h2>3. Cookie dan Teknologi Pelacakan</h2>
              <p>
                Situs kami menggunakan cookie untuk mengumpulkan data dan
                memahami perilaku pengunjung di situs. Dengan mengunjungi
                ZonaTenang.com, Anda setuju dengan penggunaan cookie sesuai
                dengan peraturan yang berlaku. Anda dapat menonaktifkan cookie
                melalui pengaturan browser jika diinginkan.
              </p>
              <h2>4. Iklan Pihak Ketiga</h2>
              <p>
                ZonaTenang.com bekerja sama dengan pihak ketiga seperti Google
                AdSense untuk menampilkan iklan. AdSense mungkin menggunakan
                cookie atau teknologi pelacakan lainnya untuk menyesuaikan iklan
                berdasarkan minat Anda. Informasi lebih lanjut mengenai cara
                Google AdSense mengelola data dapat ditemukan dalam Kebijakan
                Privasi Google.
              </p>
              <h2>5. Perlindungan Data Anda</h2>
              <p>
                Kami berkomitmen menjaga keamanan informasi yang Anda berikan.
                Meskipun demikian, kami tidak dapat menjamin keamanan data yang
                dikirimkan melalui internet secara penuh. Anda tetap bertanggung
                jawab untuk menjaga keamanan perangkat dan akses pribadi Anda.
              </p>
              <h2>6. Perubahan pada Kebijakan Privasi</h2>
              <p>
                Kami dapat memperbarui Kebijakan Privasi ini sesuai kebutuhan
                atau perubahan peraturan. Anda disarankan untuk memeriksa
                halaman ini secara berkala untuk mengetahui perubahan terbaru.
              </p>
              <h2>7. Hubungi Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan terkait Kebijakan Privasi ini,
                Anda dapat menghubungi kami melalui email di
                kontak@zonatenang.com.
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
