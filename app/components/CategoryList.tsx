import type { CSSProperties } from "react";
import { stagger } from "./ProductCard";

export type Category = {
    id: number;
    name: string;
    label: string;
    emoji?: string;
    image?: string;
};

export default function CategoryList({ categories }: { categories: Category[] }) {
    return (
        <section className="mt-4 bg-white rounded-lg shadow-sm border border-zinc-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100/80">
                <h2 className="text-[15px] font-medium text-[#00e5a6] uppercase tracking-wide">
                    Danh Mục
                </h2>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 divide-x divide-zinc-100/80 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {categories.map((category, idx) => (
                    <article
                        key={category.id}
                        className="reveal py-6 px-4 md:py-8 shrink-0 w-[160px] lg:w-auto snap-start text-center hover:bg-zinc-50/50 transition-colors cursor-pointer group flex flex-col items-center justify-center"
                        style={stagger(idx)}
                    >
                        <div className="mb-5 h-[110px] w-[110px] rounded-full bg-[#f6f6f6] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                            {category.image ? (
                                <img
                                    src={category.image}
                                    alt={category.label}
                                    className="w-[72px] h-[72px] object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            ) : (
                                <span className="text-[54px] drop-shadow-sm group-hover:scale-110 transition-transform duration-300 select-none">
                                    {category.emoji}
                                </span>
                            )}
                        </div>
                        <p className="text-[14px] font-normal text-zinc-800 tracking-tight">
                            {category.label}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
