import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luoistore.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lười Store – Boardgame, Bài MEME & Phụ Kiện Giá Tốt",
    template: "%s | Lười Store",
  },
  description:
    "Lười Store – Chuyên cung cấp boardgame, bộ bài MEME, bài Tứ Sắc, cờ lô tô, áo thun và phụ kiện sáng tạo chính hãng THE KAS. Giá tốt, giao hàng nhanh toàn quốc.",
  keywords: [
    "boardgame",
    "bài MEME",
    "bài Tứ Sắc",
    "THE KAS",
    "Lười Store",
    "cờ lô tô",
    "flash sale boardgame",
    "mua boardgame online",
    "áo thun local brand",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "Lười Store",
    title: "Lười Store – Boardgame, Bài MEME & Phụ Kiện Giá Tốt",
    description:
      "Chuyên boardgame, bộ bài MEME, bài Tứ Sắc, cờ lô tô và phụ kiện sáng tạo chính hãng THE KAS. Flash Sale hàng ngày!",
    images: [
      {
        url: "/banner-left.png",
        width: 1200,
        height: 630,
        alt: "Lười Store – Boardgame & Phụ kiện",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lười Store – Boardgame, Bài MEME & Phụ Kiện",
    description:
      "Boardgame, bài MEME, bài Tứ Sắc chính hãng THE KAS. Flash Sale mỗi ngày!",
    images: ["/banner-left.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
