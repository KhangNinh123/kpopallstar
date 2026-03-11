import type { CSSProperties } from "react";
import Link from "next/link";

export type Product = {
    id: number;
    name: string;
    price: number;
    sold: number;
    tone: string;
    badge?: string;
};

export const money = new Intl.NumberFormat("vi-VN");

export const stagger = (index: number): CSSProperties => ({
    animationDelay: `${index * 45}ms`,
});

export default function ProductCard({
    item,
    index,
    compact = false,
}: {
    item: Product;
    index: number;
    compact?: boolean;
}) {
    if (compact) {
        // Flash Sale Card Layout
        return (
            <Link href={`/product/${item.id}`} className="block">
                <article
                    className="reveal rounded-xl border border-[var(--line)] bg-white p-2 transition-transform hover:-translate-y-1 flex flex-col"
                    style={stagger(index)}
                >
                    <div
                        className={`relative rounded-lg bg-gradient-to-br ${item.tone} h-26 overflow-hidden`}
                    >
                        {item.badge ? (
                            <span className="absolute left-2 top-2 rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                                {item.badge}
                            </span>
                        ) : null}
                        <div className="absolute inset-0 soft-grid" />
                        <div className="absolute bottom-2 left-2 rounded bg-white/75 px-2 py-0.5 text-[10px] font-semibold text-zinc-800">
                            THE KAS
                        </div>
                    </div>

                    <h3 className="line-clamp-2 mt-2 min-h-10 text-[13px] text-zinc-700">
                        {item.name}
                    </h3>
                    <div className="mt-1 text-[22px] font-bold text-zinc-900">
                        {money.format(item.price)}
                        <span className="ml-1 text-[14px] font-semibold">VND</span>
                    </div>
                    <div className="mt-1 h-2.5 rounded-full bg-zinc-200">
                        <div
                            className="h-full rounded-full bg-emerald-400"
                            style={{ width: `${Math.min(100, 18 + item.sold * 3)}%` }}
                        />
                    </div>
                    <p className="mt-1 text-right text-[11px] text-zinc-500">Đã bán {item.sold}</p>
                </article>
            </Link>
        );
    }

    // Suggested Product Layout to match screenshot
    return (
        <Link href={`/product/${item.id}`}>
            <article
                className="reveal rounded-lg bg-white transition-transform hover:-translate-y-1 flex flex-col overflow-hidden group cursor-pointer"
                style={{
                    ...stagger(index),
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
                }}
            >
                <div className="relative w-full aspect-square overflow-hidden bg-zinc-200">
                    {/* Image placeholder: in a real app this would be an <img src={item.imageUrl} /> */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.tone} opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-500`} />
                    <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center opacity-0">Image</div>

                    {item.badge ? (
                        <span className="absolute left-0 top-2 rounded-r bg-red-500 px-1.5 py-0.5 text-[10px] font-semibold text-white z-10">
                            {item.badge}
                        </span>
                    ) : null}
                </div>

                <div className="p-3 flex-1 flex flex-col bg-white">
                    <h3 className="line-clamp-2 min-h-[44px] text-[15px] font-normal text-zinc-800 leading-[22px] mb-auto">
                        {item.name}
                    </h3>
                    <div className="mt-3 flex items-baseline justify-between gap-1">
                        <div className="text-[19px] font-normal text-emerald-400 tracking-tight">
                            {money.format(item.price)}<span className="text-[14px] underline decoration-emerald-400/60 ml-[1px] relative -top-[1px]">đ</span>
                        </div>
                        <p className="text-[13px] text-zinc-800">Đã bán {item.sold}</p>
                    </div>
                </div>
            </article>
        </Link>
    );
}
