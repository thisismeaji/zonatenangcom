import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from "../footer/footer.module.css"

export default function Footer() {
  return (
    <footer className={Styles.footer}>
        <div className={Styles.socialMedia}>
            <ul>
                <li>
                    <Link href="https://www.instagram.com/zonatenang.blog/">
                        <Image
                            src="/icons/instagram.png"
                            alt='Instagram Zonatenang.com'
                            width={24}
                            height={24}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.facebook.com/profile.php?id=61567763970205">
                        <Image
                            src="/icons/facebook.png"
                            alt='Facebook Zonatenang.com'
                            width={24}
                            height={24}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.threads.net/@zonatenang.blog">
                        <Image
                            src="/icons/threads.png"
                            alt='Threads Zonatenang.com'
                            width={24}
                            height={24}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://x.com/zonatenangblog">
                        <Image
                            src="/icons/twitter.png"
                            alt='Twitter Zonatenang.com'
                            width={24}
                            height={24}
                        />
                    </Link>
                </li>
            </ul>
        </div>
        <div className={Styles.pages}>
            <ul>
                <li>
                    <Link href="/tentang">Tentang</Link>
                </li>
                <li>
                    <Link href="/kontak">Kontak</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
                <li>
                    <Link href="/disclaimer">Disclaimer</Link>
                </li>
                <li>
                    <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
                </li>
            </ul>
        </div>
        <p>© 2024 Zonatenang.com. All Rights Reserved.</p>
    </footer>
  )
}
