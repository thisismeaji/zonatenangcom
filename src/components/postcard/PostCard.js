// components/PostCard.js
import Image from 'next/image';
import Link from 'next/link';
import Styles from "../postcard/postcard.module.css";

// Fungsi untuk membatasi teks berdasarkan jumlah kata
function truncateText(text, wordLimit) {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

const PostCard = ({ date, category, image, title, excerpt, link, linkCategory, }) => {
  return (
    <article className={Styles.article}>
      <div className={Styles.featuredImage}>
        <Image 
          src={image} 
          alt={title} 
          width={700}
          height={400}
        />
      </div>
      <div className={Styles.postInfo}>
        <span>
          <p>{date}</p>
        </span>
        <h2>
          <Link href={link}>
            {title}
          </Link>
        </h2>
        <p>{truncateText(excerpt, 15)}</p> {/* Batasi teks hingga 20 kata */}
        <div className={Styles.category}>
          <p>
            <Link href={linkCategory}>
              {category}
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
