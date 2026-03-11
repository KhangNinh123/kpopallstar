"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard, { money } from "../components/ProductCard";

// Mock Data
const MOCK_CART_ITEMS = [
    {
        id: 1,
        name: "Bộ bài MEME 3 - HỌC ĐƯỜNG 120 LÁ, Bộ 50-70 lá bộ bài siêu lầy lội và mặn mòi...",
        variant: "Phân loại hàng : MEME 70 lá",
        price: 49000,
        quantity: 1,
        image: "/product/meme1.png",
        selected: false,
        stock: 15
    },
    {
        id: 2,
        name: "Tai nghe Sony WH-CH720N Extrabass Chính Hãng [Likenew]",
        variant: "Xanh",
        price: 1840000,
        quantity: 1,
        image: "/banner-left.png", // Using existing image for mockup 
        selected: false,
        stock: 2
    }
];

const relatedProducts = Array.from({ length: 6 }, (_, i) => ({
    id: 10 + i,
    name: i % 2 === 0 ? "Cờ Lô Tô THE KAS, LÔ TÔ GẠCH BÔNG giải tr..." : "Áo thun cặp đôi BY.DUNI nam nữ local...",
    price: i % 2 === 0 ? 30000 : 125000,
    sold: 20,
    tone: i % 2 === 0 ? "from-orange-200 to-orange-50" : "from-zinc-200 to-stone-50",
    badge: i % 3 === 0 ? "-20%" : undefined,
}));

export default function CartPage() {
    const [items, setItems] = useState(MOCK_CART_ITEMS);

    const toggleItemSelection = (id: number) => {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const toggleSelectAll = () => {
        const allSelected = items.length > 0 && items.every((item) => item.selected);
        setItems((items) => items.map((item) => ({ ...item, selected: !allSelected })));
    };

    const updateQuantity = (id: number, delta: number) => {
        setItems((items) =>
            items.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, Math.min(item.quantity + delta, item.stock));
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const deleteItem = (id: number) => {
        if (confirm('Bạn có chắc muốn bỏ sản phẩm này khỏi giỏ hàng?')) {
            setItems(items => items.filter(item => item.id !== id));
        }
    };

    const deleteSelected = () => {
        const selected = items.filter(i => i.selected);
        if (selected.length === 0) return;
        if (confirm(`Xóa ${selected.length} sản phẩm đã chọn khỏi giỏ hàng?`)) {
            setItems(items => items.filter(item => !item.selected));
        }
    };

    const allSelected = items.length > 0 && items.every((item) => item.selected);
    const selectedCount = items.filter(i => i.selected).length;
    const totalPrice = items
        .filter((item) => item.selected)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-[#f5f5f5] pb-32 lg:pb-0">

            {/* Desktop Header */}
            <div className="hidden lg:block">
                <Header />
            </div>

            {/* Mobile Header */}
            <header className="lg:hidden sticky top-0 z-50 flex items-center bg-white px-4 h-14 border-b border-zinc-100 shadow-sm">
                <button
                    onClick={() => window.history.back()}
                    className="p-2 -ml-2 text-emerald-500"
                    aria-label="Quay lại"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <h1 className="flex-1 text-lg font-medium text-zinc-800 ml-2">Giỏ hàng</h1>
            </header>

            <main className="mx-auto w-full max-w-[1240px] lg:pt-8 px-0 lg:px-8">

                {/* DESKTOP: Table Header */}
                <div className="hidden lg:flex items-center bg-white rounded shadow-sm mb-4 px-6 h-14 text-[14px] text-zinc-500">
                    <div className="flex items-center gap-4 w-[46%]">
                        <div
                            className={`w-4 h-4 rounded-sm border flex items-center justify-center cursor-pointer ${allSelected ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-300 bg-white'}`}
                            onClick={toggleSelectAll}
                        >
                            {allSelected && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span>Sản Phẩm</span>
                    </div>
                    <div className="w-[15%] text-center">Đơn Giá</div>
                    <div className="w-[15%] text-center">Số Lượng</div>
                    <div className="w-[12%] text-center">Số Tiền</div>
                    <div className="w-[12%] text-center">Thao Tác</div>
                </div>

                {/* CART ITEMS LIST */}
                <div className="bg-white lg:rounded px-4 lg:px-6 shadow-sm mb-4">

                    {/* List */}
                    {items.length === 0 ? (
                        <div className="py-20 flex flex-col items-center justify-center">
                            <div className="bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-12 h-12 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <span className="text-zinc-500">Giỏ hàng của bạn còn trống</span>
                            <button onClick={() => window.location.href = '/'} className="mt-4 bg-emerald-500 text-white px-8 py-2 rounded font-medium hover:bg-emerald-600">Mua sắm ngay</button>
                        </div>
                    ) : items.map((item) => (
                        <div key={item.id} className="relative flex flex-col lg:flex-row py-4 border-b border-zinc-100 last:border-0 items-start lg:items-center">

                            {/* Item Info Col (Mobile View: Mix all, Desktop: Width 46%) */}
                            <div className="flex items-start lg:items-center gap-3 lg:gap-4 w-full lg:w-[46%] pt-1 lg:pt-0">
                                <div
                                    className={`w-5 h-5 lg:w-4 lg:h-4 shrink-0 rounded-[4px] lg:rounded-sm border flex items-center justify-center cursor-pointer transition-colors mt-8 lg:mt-0 ${item.selected ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-300 bg-white'}`}
                                    onClick={() => toggleItemSelection(item.id)}
                                >
                                    {item.selected && <svg className="w-3.5 h-3.5 lg:w-3 lg:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                </div>

                                <div className="w-[84px] h-[84px] shrink-0 border border-zinc-100 overflow-hidden rounded bg-emerald-50 flex items-center justify-center">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                                </div>

                                <div className="flex-1 flex flex-col lg:flex-row gap-2 max-w-full">
                                    <h3 className="text-zinc-800 text-[14px] leading-snug line-clamp-2 pr-2 lg:w-[50%]">{item.name}</h3>
                                    <div className="text-[14px] text-zinc-500 lg:w-[45%] mt-1 lg:mt-0 lg:pl-4">
                                        <div className="hidden lg:block text-[13px] opacity-70 mb-0.5">Phân loại hàng: ▾</div>
                                        <div className="text-zinc-500 text-[13px] bg-zinc-100/80 px-2 py-0.5 inline-block lg:bg-transparent lg:px-0 lg:py-0 w-auto rounded whitespace-nowrap overflow-hidden text-ellipsis max-w-full">{item.variant}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Meta cols Desktop */}
                            <div className="hidden lg:block w-[15%] text-center text-[14px] text-zinc-600">
                                <span className="line-through text-zinc-400 mr-2 opacity-0">...</span>
                                {money.format(item.price)}đ
                            </div>

                            {/* Qty Col */}
                            <div className="w-full lg:w-[15%] flex flex-col justify-center items-end lg:items-center mt-3 lg:mt-0 pr-2 lg:pr-0">
                                <div className="flex items-center border border-zinc-200 rounded-sm w-max">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 border-r border-zinc-200 transition-colors" aria-label="Decrease quantity">
                                        <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                    </button>
                                    <div className="w-10 h-7 lg:w-12 lg:h-8 flex items-center justify-center text-sm">{item.quantity}</div>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 border-l border-zinc-200 transition-colors" aria-label="Increase quantity">
                                        <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                    </button>
                                </div>
                                <div className="hidden lg:block text-[12px] text-zinc-400 mt-1.5">Còn {item.stock} sản phẩm</div>
                            </div>

                            <div className="hidden lg:block w-[12%] text-center text-emerald-500 text-[14px] font-medium">
                                {money.format(item.price * item.quantity)}đ
                            </div>

                            <div className="hidden lg:flex w-[12%] flex-col items-center gap-2.5 text-[14px]">
                                <button onClick={() => deleteItem(item.id)} className="text-zinc-800 hover:text-emerald-500 transition-colors font-medium">Xóa</button>
                            </div>

                            {/* Mobile Only: Price row */}
                            <div className="lg:hidden w-full flex justify-between items-center mt-2 pl-[108px] pr-2">
                                <span className="text-emerald-500 font-bold text-[15px]">{money.format(item.price)}đ</span>
                                <button onClick={() => deleteItem(item.id)} className="text-zinc-500 text-[13px]">Xóa</button>
                            </div>
                        </div>
                    ))}

                    {/* Shopee Style Extra Rows (Voucher/Shipping) */}
                    {items.length > 0 && (
                        <>
                            <div className="hidden lg:flex items-center py-5 border-t border-zinc-100 pl-4 w-full">
                                <svg className="w-6 h-6 text-emerald-500 mr-3 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                                <span className="text-[14px] text-zinc-800 tracking-wide">Voucher</span>
                            </div>
                        </>
                    )}
                </div>

                {/* DESKTOP: Sticky Checkout Footer Shopee Style */}
                {items.length > 0 && (
                    <div className="hidden lg:block sticky bottom-0 z-40 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.03)] border border-zinc-100 rounded-sm mb-8 relative">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-50 border-dashed">
                            <div className="w-[46%] flex items-center justify-end"></div>
                            <div className="w-[54%] flex items-center justify-between text-[15px] pl-4">
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                                    <span className="text-zinc-800">Voucher</span>
                                </div>
                                <button className="text-blue-500 font-medium hover:text-blue-600 mr-4">Chọn hoặc nhập mã</button>
                            </div>
                        </div>



                        <div className="flex items-center justify-between px-6 py-4 h-[84px] bg-white rounded-b-sm">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-3 cursor-pointer select-none group" onClick={toggleSelectAll}>
                                    <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${allSelected ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-300 bg-white group-hover:border-zinc-400'}`}>
                                        {allSelected && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <span className="text-[16px] text-zinc-800 group-hover:text-emerald-500 transition-colors">Chọn Tất Cả ({items.length})</span>
                                </div>
                                <button onClick={deleteSelected} className="text-[16px] text-zinc-800 hover:text-emerald-500 transition-colors">Xóa</button>
                                <button className="text-emerald-500 text-[16px] hover:text-emerald-600 transition-colors">Lưu vào mục Đã thích</button>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-[16px] text-zinc-800">Tổng thanh toán ({selectedCount} Sản phẩm):</span>
                                    <span className="text-2xl font-bold text-emerald-500 ml-2">{money.format(totalPrice)}đ</span>
                                </div>
                                <button onClick={() => window.location.href = '/checkout'} className="bg-emerald-500 hover:bg-emerald-600 text-white w-52 h-[44px] rounded-sm font-medium text-[16px] transition-colors shadow shadow-emerald-500/20 ml-4">
                                    Mua Hàng
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Block: Voucher (Visible only on mobile) */}
                {items.length > 0 && (
                    <div className="lg:hidden mt-2 bg-white px-4 py-3 flex items-center justify-between active:bg-zinc-50 transition-colors cursor-pointer border-y border-zinc-100">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                            <span className="text-zinc-700 font-medium text-[14px]">Voucher</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-zinc-400 text-[13px]">Chọn hoặc nhập mã</span>
                            <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                    </div>
                )}

                {/* Recommended Products */}
                <div className="mt-4 lg:mt-10 bg-[#f5f5f5] lg:bg-transparent lg:pb-12">
                    <div className="bg-white lg:bg-transparent lg:rounded-xl">
                        <div className="px-4 py-3 lg:px-0 lg:py-4">
                            <h2 className="text-[14px] lg:text-[16px] uppercase text-emerald-500 lg:text-zinc-500 font-bold tracking-wide lg:bg-white lg:px-6 lg:py-4 lg:border-b lg:border-zinc-100">CÓ THỂ BẠN CŨNG THÍCH</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4 px-2 pb-4 lg:px-0 lg:mt-4">
                            {relatedProducts.map((item, idx) => (
                                <ProductCard key={item.id} item={item} index={idx} />
                            ))}
                        </div>
                        <div className="px-4 pb-4 lg:px-0 lg:pb-0 flex justify-center mt-4">
                            <button className="w-full lg:w-96 py-2.5 lg:py-3 bg-zinc-50 border border-zinc-200 lg:bg-white text-zinc-600 hover:text-emerald-500 hover:border-emerald-500 text-sm font-medium rounded transition-colors text-center active:bg-zinc-100">
                                Xem thêm
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Desktop Footer Placeholder */}
            <div className="hidden lg:block">
                <Footer />
            </div>

            {/* Mobile Sticky Bottom Checkout Bar */}
            <div className="fixed lg:hidden bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-100 flex items-center justify-between pl-4 pr-3 h-[60px] pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                <div
                    className="flex items-center gap-2 cursor-pointer h-full py-2"
                    onClick={toggleSelectAll}
                >
                    <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-colors ${allSelected ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-300 bg-white'}`}>
                        {allSelected && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-zinc-700 text-[14px]">Tất cả</span>
                </div>

                <div className="flex items-center gap-3 h-full">
                    <div className="flex flex-col items-end justify-center h-full">
                        <div className="text-[13px] text-zinc-800">
                            Tổng cộng : <span className="font-bold text-[16px] text-emerald-500 ml-1">{money.format(totalPrice)}đ</span>
                        </div>
                    </div>
                    <button onClick={() => window.location.href = '/checkout'} className="h-[44px] px-6 bg-emerald-500 active:bg-emerald-600 text-white font-medium text-[14px] rounded-sm transition-colors shadow-sm ml-1">
                        Mua hàng ({selectedCount})
                    </button>
                </div>
            </div>

            {/* CSS for safe area support on mobile devices */}
            <style jsx global>{`
          .pb-safe {
              padding-bottom: env(safe-area-inset-bottom);
          }
      `}</style>
        </div>
    );
}
