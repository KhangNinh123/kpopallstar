import type { CSSProperties } from "react";
import ProductCard, { type Product, stagger } from "./components/ProductCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlashSale from "./components/FlashSale";

import CategoryList, { type Category } from "./components/CategoryList";

const categories: Category[] = [
  { id: 1, name: "Danh mục", label: "Boardgame", emoji: "🎲", image: "/categoryList/boardgame.png" },
  { id: 2, name: "Danh mục", label: "Văn phòng phẩm", emoji: "📓", image: "/categoryList/van-phong-pham.png" },
  { id: 3, name: "Danh mục", label: "Phôi", emoji: "🔑", image: "/categoryList/phoi.png" },
  { id: 4, name: "Danh mục", label: "In ấn", emoji: "🖨️", image: "/categoryList/in-an.png" },
];

const flashProducts: Product[] = [
  {
    id: 1,
    name: "Bộ bài lật phản xạ",
    price: 50000,
    sold: 8,
    tone: "from-rose-100 to-red-50",
    badge: "-34%",
  },
  {
    id: 2,
    name: "Combo meme edition",
    price: 50000,
    sold: 10,
    tone: "from-amber-100 to-orange-50",
    badge: "-34%",
  },
  {
    id: 3,
    name: "Hộp bài boardgame mini",
    price: 50000,
    sold: 6,
    tone: "from-sky-100 to-cyan-50",
    badge: "-34%",
  },
  {
    id: 4,
    name: "Sticker game card set",
    price: 50000,
    sold: 9,
    tone: "from-lime-100 to-emerald-50",
    badge: "-34%",
  },
  {
    id: 5,
    name: "Mini console card",
    price: 50000,
    sold: 12,
    tone: "from-zinc-100 to-slate-50",
    badge: "-34%",
  },
  {
    id: 6,
    name: "Music challenge box",
    price: 50000,
    sold: 11,
    tone: "from-fuchsia-100 to-pink-50",
    badge: "-34%",
  },
];

const seedProducts: Omit<Product, "id">[] = [
  {
    name: "Bộ bài Tứ Sắc loại cao cấp",
    price: 59000,
    sold: 20,
    tone: "from-orange-200 to-orange-50",
  },
  {
    name: "Tên sào bài MEME 250 lá",
    price: 50000,
    sold: 20,
    tone: "from-cyan-200 to-sky-50",
  },
  {
    name: "Bộ bài Tứ Sắc THEKAS 112 lá",
    price: 59000,
    sold: 20,
    tone: "from-rose-200 to-red-50",
  },
  {
    name: "Cờ lô tô THE KAS phiên bản mới",
    price: 30000,
    sold: 20,
    tone: "from-blue-200 to-indigo-50",
  },
  {
    name: "Áo thun cặp đôi by DUNI",
    price: 125000,
    sold: 20,
    tone: "from-zinc-200 to-stone-50",
  },
  {
    name: "Bộ bài bí mật ver lễ hội",
    price: 49000,
    sold: 20,
    tone: "from-emerald-200 to-lime-50",
  },
];

const suggestedProducts: Product[] = Array.from({ length: 30 }, (_, idx) => {
  const base = seedProducts[idx % seedProducts.length];
  return {
    ...base,
    id: idx + 1,
    sold: base.sold + (idx % 4),
  };
});

export default function Home() {
  return (
    <div className="home-shell pb-12 overflow-x-hidden">
      <Header />

      <main className="mx-auto w-full max-w-[1440px] space-y-3 px-4 md:px-6 xl:px-8 mt-4">
        <section className="grid gap-4 pt-1 lg:grid-cols-[2.6fr_1fr]">
          <div className="rounded-xl overflow-hidden relative cursor-pointer group shadow-sm bg-white">
            <img
              src="/banner-left.png"
              alt="Săn thưởng cuối tuần"
              className="w-full h-full object-fill lg:object-cover transition-transform duration-500 group-hover:opacity-90"
            />
          </div>

          <aside className="hidden lg:block rounded-xl overflow-hidden relative cursor-pointer group shadow-sm bg-white">
            <img
              src="/banner-right.png"
              alt="Hỗ trợ trực tuyến"
              className="w-full h-full object-fill lg:object-cover transition-transform duration-500 group-hover:opacity-90"
            />
          </aside>
        </section>

        <CategoryList categories={categories} />

        <FlashSale products={flashProducts} />

        <section className="section-card sale-pattern overflow-hidden p-6 md:p-8 lg:p-12 text-white mt-4">
          <div className="max-w-[680px]">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-200 border-l-2 border-orange-200 pl-3">Lễ hội đầu năm</p>
            <h2
              className="mt-4 text-5xl font-black leading-none sm:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Siêu Sale<br />25/02
            </h2>
            <p className="mt-4 text-sm text-red-50 sm:text-base lg:text-xl">
              Giảm giá danh mục boardgame, áo thun local và set quà tặng. Ưu đãi có hạn theo
              khung giờ.
            </p>
          </div>
        </section>

        <section className="section-card p-4 md:p-6 lg:p-8 mt-4">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-emerald-300 pb-3">
            <h2
              className="text-2xl font-extrabold uppercase text-emerald-500 md:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Gợi ý hôm nay
            </h2>
            <button
              type="button"
              className="text-[15px] font-medium text-[#00e5a6] hover:text-[#00c58e] flex items-center gap-1 transition-colors"
            >
              Xem tất cả
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid gap-3 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 mt-4">
            {suggestedProducts.map((item, idx) => (
              <ProductCard key={item.id} item={item} index={idx + 8} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
