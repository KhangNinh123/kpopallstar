import { money, stagger } from "./ProductCard";
import type { Product } from "./ProductCard";
import Link from "next/link";

export default function FlashSale({ products }: { products: Product[] }) {
    return (
        <section className="section-card p-4 md:p-6 lg:p-8 mt-4 bg-white rounded-xl shadow-sm border border-zinc-100">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                    <h2
                        className="text-2xl font-extrabold text-[#00e5a6] md:text-3xl flex items-center tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        F<svg className="w-7 h-7 -mx-[2px]" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2.05v7.45h6.5L11 21.95v-7.45H4.5L13 2.05z" /></svg>ASH <span className="text-[#00e5a6] ml-2">SALE</span>
                    </h2>
                    <div className="flex items-center gap-1 text-xs font-bold text-white">
                        {["12", "45", "00"].map((unit) => (
                            <span key={unit} className="rounded-sm bg-zinc-900 px-2.5 py-1">
                                {unit}
                            </span>
                        ))}
                    </div>
                </div>
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

            <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 mt-4 pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {products.map((item, index) => (
                    <Link key={item.id} href={`/product/${item.id}`} className="block">
                        <article
                            className="reveal flex flex-col items-center group cursor-pointer snap-start w-[140px] shrink-0 md:w-auto md:shrink"
                            style={stagger(index)}
                        >
                            <div className="relative w-full aspect-square bg-[#ececec] rounded-md overflow-hidden transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-400">
                                {/* Box placeholder styling with product tone */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.tone} opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-500`} />

                                {item.badge ? (
                                    <span className="absolute left-0 top-3 rounded-r-md border border-l-0 border-dashed border-white/60 bg-[#00e5a6] px-2 py-0.5 text-[11px] font-bold text-white z-10 shadow-sm">
                                        {item.badge}
                                    </span>
                                ) : null}
                            </div>

                            <div className="w-full flex flex-col items-center mt-3 pb-2">
                                <div className="text-[17px] font-extrabold text-zinc-900 mb-2">
                                    {money.format(item.price)} VNĐ
                                </div>

                                <div className="relative w-[85%] h-4 rounded-full bg-zinc-300 overflow-hidden flex items-center justify-center">
                                    <div
                                        className="absolute left-0 top-0 bottom-0 bg-[#3ceb9f] rounded-full transition-all duration-700 ease-out"
                                        style={{ width: `${Math.min(100, 15 + item.sold * 4)}%` }}
                                    />
                                    <span className="relative z-10 text-[9px] font-bold text-white uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                                        {item.sold} Lượt mua
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}

