import type { Metadata } from "next";

// Mock Product Data for Demo
export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Bộ bài MEME 3 - HỌC ĐƯỜNG 150 LÁ, BỘ BÀI TỨ SẮC",
    price: 49000,
    sold: 250,
    rating: 4.8,
    reviewsCount: 156,
    badge: "Sẵn hàng",
    images: [
      "/product/meme1.png",
      "/product/meme2.png",
      "/product/meme3.png",
      "/product/meme4.png",
    ],
    variations: [
      { id: 1, name: "Bản Phổ thông", image: "/product/v1.png" },
      { id: 2, name: "Bản Đặc biệt", image: "/product/v2.png" },
    ],
    description: `BỘ BÀI MEME 3 - HỌC ĐƯỜNG 150 LÁ, BỘ BÀI TỨ SẮC
Bộ bài siêu lầy lội và mối mặn chơi cùng bạn bè

Mô tả sản phẩm:
Bộ bài Meme 3 mẫu mới với 150 lá, mang lại những tràng cười sảng khoái cho các buổi tụ họp.
- Chất liệu giấy C300 cán màng bóng cực bền.
- Thiết kế hình ảnh hài hước, bắt trend.
- Cách chơi đơn giản, phù hợp từ 3-10 người.
- Hộp bài nhỏ gọn, dễ dàng mang theo đi du lịch, cafe.
Hàng chính hãng THE KAS, cam kết chất lượng.`,
    tones: ["from-yellow-400 to-orange-500", "from-emerald-400 to-teal-500"]
  }
];

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  // In a real app, fetch product data from an API here
  const product = MOCK_PRODUCTS.find((p) => p.id === Number(id)) || MOCK_PRODUCTS[0];

  const title = `${product.name} – Giá ${new Intl.NumberFormat("vi-VN").format(product.price)}đ`;
  const description = product.description.slice(0, 155).replace(/\n/g, " ");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "vi_VN",
      images: product.images?.[0]
        ? [{ url: product.images[0], width: 800, height: 800, alt: product.name }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.images?.[0] ? [product.images[0]] : undefined,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
