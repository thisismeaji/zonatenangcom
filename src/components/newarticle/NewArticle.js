import Image from 'next/image'
import Link from 'next/link'
import Styles from "../newarticle/newarticle.module.css"
import React from 'react'

export default function NewArticle({image, title, link}) {
  return (
    <article className={Styles.article}>
        <div className={Styles.featuredImage}>
            <Image 
            src={image} 
            alt={title} 
            width={364}
            height={213}
            loading="lazy"
            />
        </div>
        <div className={Styles.postInfo}>
            <h2>
            <Link href={link}>
                {title}
            </Link>
            </h2>
        </div>
    </article>
  )
}
