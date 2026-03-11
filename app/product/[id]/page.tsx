"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard, { money } from "../../components/ProductCard";
import Link from "next/link";

// Mock Product Data for Demo
const MOCK_PRODUCTS = [
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

// Related products mock
const relatedProducts = Array.from({ length: 6 }, (_, i) => ({
    id: 10 + i,
    name: i % 2 === 0 ? "Bộ bài Tứ Sắc THE KAS 112 lá" : "Áo thun cặp đôi by DUNI",
    price: i % 2 === 0 ? 59000 : 125000,
    sold: 20,
    tone: i % 2 === 0 ? "from-orange-200 to-orange-50" : "from-zinc-200 to-stone-50",
    badge: i % 3 === 0 ? "-20%" : undefined
}));

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedVar, setSelectedVar] = useState(1);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleAddToCart = () => {
        setShowSuccessPopup(true);
        setTimeout(() => setShowSuccessPopup(false), 1500);
    };
    
    // Find product or use default mock for demo
    const product = MOCK_PRODUCTS[0];

    return (
        <div className="min-h-screen bg-[#f5f5f5] pb-20 lg:pb-0">
            {/* Desktop Header */}
            <div className="hidden lg:block">
                <Header />
            </div>

            {/* Mobile Header */}
            <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between bg-white px-4 h-14 border-b border-zinc-100 shadow-sm">
                <button onClick={() => window.history.back()} className="p-2 -ml-2">
                    <svg className="w-6 h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <div className="flex-1 truncate mx-4 font-medium text-zinc-800">
                    {product.name}
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => window.location.href='/cart'} className="p-2">
                        <svg className="w-5 h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                    <button className="p-2">
                        <svg className="w-5 h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </header>

            <main className="mx-auto w-full max-w-[1200px] lg:pt-6">
                {/* Product Detail Card */}
                <div className="bg-white lg:rounded-xl shadow-sm overflow-hidden">
                    <div className="flex flex-col lg:flex-row p-0 lg:p-6 gap-0 lg:gap-10">
                        {/* Left: Gallery */}
                        <div className="w-full lg:w-[480px] shrink-0">
                            <div className="relative aspect-square bg-gradient-to-br from-orange-400 to-orange-600 overflow-hidden flex items-center justify-center">
                                <span className="text-white/40 font-bold text-4xl">PRODUCT IMAGE</span>
                                <div className="absolute right-4 bottom-4 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded-full">
                                    1/7
                                </div>
                            </div>
                            <div className="flex gap-2 p-4 lg:px-0 overflow-x-auto">
                                {[1,2,3,4,5].map(i => (
                                    <div key={i} className={`w-20 h-20 rounded border-2 shrink-0 ${i === 1 ? 'border-emerald-500' : 'border-zinc-100'} bg-zinc-100`} />
                                ))}
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="flex-1 px-4 py-2 lg:p-0">
                            <h1 className="text-lg lg:text-2xl font-bold text-zinc-900 leading-tight">
                                {product.name}
                            </h1>
                            <div className="mt-3 flex items-center gap-4 text-sm">
                                <div className="flex items-center text-orange-400">
                                    <span className="font-bold underline mr-1">{product.rating}</span>
                                    {[1,2,3,4,5].map(i => (
                                        <svg key={i} className={`w-3.5 h-3.5 ${i <= 4 ? 'fill-current' : 'fill-zinc-300'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <div className="w-px h-3 bg-zinc-200" />
                                <div className="text-zinc-500"><span className="text-zinc-900 border-b border-zinc-900">{product.reviewsCount}</span> Đánh giá</div>
                                <div className="w-px h-3 bg-zinc-200" />
                                <div className="text-zinc-500"><span className="text-zinc-900">{product.sold}</span> Đã bán</div>
                            </div>

                            <div className="mt-4 bg-[#fbfbfb] lg:bg-transparent p-4 lg:p-0 -mx-4 lg:mx-0">
                                <div className="bg-[#001c18] lg:bg-[#fbfbfb] rounded px-4 py-3 lg:px-5 lg:py-6 flex flex-wrap items-baseline gap-2">
                                    <div className="text-3xl lg:text-4xl font-bold text-[#00e5a6]">
                                        {money.format(product.price)}đ
                                    </div>
                                    <div className="text-sm text-zinc-400 line-through">89.000đ</div>
                                    <div className="bg-[#ee4d2d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">44% GIẢM</div>
                                </div>
                            </div>

                            <div className="mt-6 space-y-5 px-0">
                                <div className="flex gap-4 items-center text-sm">
                                    <span className="w-20 text-zinc-500 shrink-0">Vận chuyển</span>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                            </svg>
                                            <span>Miễn phí vận chuyển</span>
                                        </div>
                                        <div className="text-zinc-400 ml-7 text-[13px]">Vận chuyển tới Hà Nội, Phí: 0đ</div>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start text-sm">
                                    <span className="w-20 text-zinc-500 shrink-0 mt-2">Phân loại</span>
                                    <div className="flex flex-wrap gap-2">
                                        {product.variations.map(v => (
                                            <button 
                                                key={v.id}
                                                onClick={() => setSelectedVar(v.id)}
                                                className={`px-3 py-1.5 rounded-sm border transition-all ${selectedVar === v.id ? 'border-emerald-500 text-emerald-500 bg-emerald-50/50' : 'border-zinc-200 text-zinc-700 hover:border-zinc-400'}`}
                                            >
                                                {v.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center text-sm">
                                    <span className="w-20 text-zinc-500 shrink-0">Số lượng</span>
                                    <div className="flex items-center">
                                        <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="w-8 h-8 border border-zinc-200 flex items-center justify-center text-xl cursor-pointer">-</button>
                                        <div className="w-12 h-8 border-y border-zinc-200 flex items-center justify-center">{quantity}</div>
                                        <button onClick={() => setQuantity(q => q+1)} className="w-8 h-8 border border-zinc-200 flex items-center justify-center text-xl cursor-pointer">+</button>
                                        <span className="ml-4 text-zinc-400">{product.sold} sản phẩm có sẵn</span>
                                    </div>
                                </div>

                                <div className="hidden lg:flex gap-4 pt-4">
                                    <button onClick={handleAddToCart} className="flex-1 h-12 bg-emerald-50 border border-emerald-500 text-emerald-600 font-medium rounded-sm flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors">
                                        <img src="/icon/cart.png" className="w-5 h-5 opacity-80" alt="Added cart" /> Thêm Vào Giỏ Hàng
                                    </button>
                                    <button onClick={() => window.location.href='/checkout'} className="flex-1 h-12 bg-emerald-500 text-white font-medium rounded-sm hover:bg-emerald-600 transition-colors">
                                        Mua Ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Separator */}
                <div className="bg-[#f5f5f5] h-4 lg:h-6" />

                {/* Description Section */}
                <div className="bg-white p-4 lg:p-6 lg:rounded-xl shadow-sm">
                    <h2 className="text-base uppercase text-zinc-500 font-medium mb-4 tracking-wider">Mô tả sản phẩm</h2>
                    <div className={`text-sm text-zinc-800 leading-relaxed whitespace-pre-line ${!isDescExpanded ? 'line-clamp-6' : ''}`}>
                        {product.description}
                    </div>
                    {!isDescExpanded && (
                        <div className="mt-4 flex justify-center border-t border-zinc-100 pt-4">
                            <button 
                                onClick={() => setIsDescExpanded(true)}
                                className="text-emerald-500 font-medium flex items-center gap-1 hover:text-emerald-600"
                            >
                                Xem thêm <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" /></svg>
                            </button>
                        </div>
                    )}
                </div>

                <div className="bg-[#f5f5f5] h-4 lg:h-6" />

                {/* Reviews Section */}
                <div className="bg-white lg:rounded-xl shadow-sm overflow-hidden">
                    {/* Review Header */}
                    <div className="flex items-center justify-between p-4 lg:p-6 border-b border-zinc-100/50">
                        <div>
                            <h2 className="text-[15px] font-bold text-zinc-900 uppercase tracking-tight">ĐÁNH GIÁ SẢN PHẨM</h2>
                            <div className="flex items-center gap-1 mt-1">
                                <div className="flex text-orange-400">
                                    {[1,2,3,4,5].map(i => <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M14.707 9.293l-3.5-3.5A1 1 0 009.58 7.42l3.293 3.293L10.58 13.91l2.828 2.828 4.243-4.243a1 1 0 000-1.414z" /> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                                </div>
                                <span className="text-[14px] text-emerald-500 font-medium">5/5</span>
                            </div>
                        </div>
                        <button className="text-emerald-500 text-[14px] font-medium flex items-center gap-1">
                            Xem tất cả <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    {/* Desktop-only filter (optional, keep hidden on mobile if you want exact match) */}
                    <div className="hidden lg:flex bg-emerald-50/40 border border-emerald-100/50 rounded-lg m-6 p-5 items-center gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-500">{product.rating} trên 5</div>
                            <div className="flex mt-1 text-emerald-400">
                                {[1,2,3,4,5].map(i => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["tất cả", "5 sao (140)", "4 sao (10)", "3 sao (4)", "2 sao (1)", "1 sao (1)"].map((tag, idx) => (
                                <button key={tag} className={`px-4 py-1 rounded border text-sm ${idx === 0 ? 'bg-white border-emerald-500 text-emerald-500' : 'bg-white border-zinc-200 text-zinc-600'}`}>
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Review List Item (Matches Image Exactly) */}
                    <div className="p-4 lg:p-6 lg:pt-0">
                        <div className="pb-6">
                            <div className="text-[15px] font-bold text-zinc-900">Nguyễn Thúy</div>
                            <div className="flex text-orange-400 mt-1 mb-2">
                                {[1,2,3,4,5].map(s => <svg key={s} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                            </div>
                            <p className="text-[13px] text-zinc-500 mb-3">Phân loại hàng : MEME học đường, full box</p>
                            <p className="text-[14px] text-zinc-800 leading-snug">Mua được giá tốt kèm voucher. Shop giao nhanh, chăm sóc khách hàng tốt. Sản phẩm tuyệt vời.</p>
                            
                            <div className="flex gap-2 mt-4">
                                <div className="w-24 h-24 bg-zinc-100 rounded border border-zinc-100 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100" />
                                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-zinc-400 font-medium">THUMBNAIL</span>
                                </div>
                            </div>
                            
                            <div className="text-[13px] text-zinc-400 mt-4 font-normal">09-09-2026 08:00</div>
                        </div>

                        {/* Centered View All Link */}
                        <div className="mt-2 flex justify-center border-t border-zinc-100 pt-5">
                            <button className="text-emerald-500 font-medium text-[16px] flex items-center gap-2">
                                Xem tất cả (1) <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#f5f5f5] h-4 lg:h-6" />

                {/* Video Section Title */}
                <div className="bg-white p-4 lg:p-6 lg:rounded-xl shadow-sm">
                    <h3 className="text-[16px] font-bold text-zinc-900">Video về sản phẩm</h3>
                    <div className="flex overflow-x-auto lg:grid lg:grid-cols-6 gap-3 mt-4 pb-2 [&::-webkit-scrollbar]:hidden">
                        {[1,2,3,4,5,6].map(i => (
                            <div key={i} className="w-[140px] lg:w-full aspect-[9/16] rounded-lg bg-zinc-200 shrink-0 relative overflow-hidden flex items-center justify-center group cursor-pointer">
                                <span className="text-[10px] text-zinc-400">Video {i}</span>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <svg className="w-10 h-10 text-white/80 absolute group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#f5f5f5] h-6 lg:h-10" />

                {/* Related Products Section */}
                <div className="pb-10 px-4 lg:px-0">
                    <h2 className="text-base uppercase text-emerald-500 font-bold mb-6 tracking-wide text-center lg:text-left">CÓ THỂ BẠN CŨNG THÍCH</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
                        {relatedProducts.map((item, idx) => (
                            <ProductCard key={item.id} item={item} index={idx} />
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button className="px-10 py-2.5 border border-zinc-200 text-zinc-500 text-sm font-medium rounded hover:bg-zinc-50 transition-colors">
                            Xem thêm
                        </button>
                    </div>
                </div>
            </main>

            <div className="hidden lg:block">
                <Footer />
            </div>

            {/* Mobile Bottom Bar (Sticky) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-14 bg-white border-t border-zinc-100 flex items-stretch">
                <button className="w-16 flex flex-col items-center justify-center border-r border-[#ff4d94] py-1 bg-[#FF217A] text-white active:bg-[#e61d6d] transition-colors">
                    <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-[10px]">Chat ngay</span>
                </button>
                <button onClick={handleAddToCart} className="w-20 flex flex-col items-center justify-center py-1 bg-[#FF217A] text-white active:bg-[#e61d6d] transition-colors">
                    <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-[10px]">Giỏ hàng</span>
                </button>
                <button onClick={() => window.location.href='/checkout'} className="flex-1 bg-emerald-500 font-bold text-white active:bg-emerald-600 transition-colors">
                    Mua ngay
                </button>
            </div>

            {/* Added to Cart Success Popup */}
            {showSuccessPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
                    <div className="bg-black/75 backdrop-blur-[2px] text-white w-[260px] px-6 py-8 rounded-xl flex flex-col items-center justify-center gap-5 shadow-2xl transition-all">
                        <div className="w-[68px] h-[68px] bg-[#00cfa7] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,207,167,0.4)]">
                            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="text-[16px] font-medium text-center leading-[1.4] tracking-wide">
                            Sản phẩm đã được<br/>thêm vào Giỏ hàng
                        </div>
                    </div>
                </div>
            )}
            
            <style jsx>{`
                .transition-active {
                    transition: background-color 0.1s ease;
                }
            `}</style>
        </div>
    );
}
