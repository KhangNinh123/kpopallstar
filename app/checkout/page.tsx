"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Using the same money formatter
const money = new Intl.NumberFormat("vi-VN");

// Mock Data
const MOCK_CHECKOUT_ITEMS = [
  {
    id: 1,
    name: "Bộ bài MEME 3 - HỌC ĐƯỜNG 120 LÁ, Bộ 50-70 lá bộ bài siêu lầy lội và mặn mòi...",
    variant: "Phân loại hàng : MEME 70 lá",
    price: 49000,
    quantity: 1,
    image: "/product/meme1.png",
  },
  {
    id: 2,
    name: "Tai nghe Sony WH-CH720N Extrabass Chính Hãng [Likenew]",
    variant: "Xanh",
    price: 1840000,
    quantity: 1,
    image: "/banner-left.png", 
  }
];

export default function CheckoutPage() {
  const [items] = useState(MOCK_CHECKOUT_ITEMS);
  const [note, setNote] = useState("");

  const totalMerchandise = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 16500;
  const voucherDiscount = 15000;
  const totalPayment = totalMerchandise + shippingFee - voucherDiscount;

  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-24 lg:pb-0">
      
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 flex items-center bg-white px-4 h-14 border-b border-zinc-100 shadow-sm relative">
        <button
          onClick={() => window.history.back()}
          className="p-2 -ml-2 text-emerald-500 absolute left-4"
          aria-label="Quay lại"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="w-full text-center text-lg font-medium text-zinc-800">Thanh toán</h1>
      </header>

      <main className="mx-auto w-full max-w-[1240px] pt-2 lg:pt-8 px-0 lg:px-8">
        
        {/* Delivery Address Block */}
        <div className="bg-white px-4 py-4 lg:rounded lg:shadow-sm mb-2 lg:mb-4 relative">
          {/* Decorative striped border-top for the address */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6_33px,transparent_0,transparent_41px,#f18d9b_0,#f18d9b_74px,transparent_0,transparent_82px)]"></div>
          
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div>
                <h2 className="text-[15px] font-medium text-zinc-800 mb-1">Cường Đê-ti-em | (+84) 932242442</h2>
                <p className="text-[14px] text-zinc-600 leading-snug">
                  Đại Học Công Nghiệp Cơ Sở 1<br/>Phường 4, Quận Gò Vấp, TP. Hồ Chí Minh
                </p>
                <span className="inline-block mt-1.5 text-[12px] text-emerald-600 border border-emerald-500 px-1 py-0.5 rounded-sm">Mặc định</span>
              </div>
            </div>
            <svg className="w-5 h-5 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>

        {/* Products Block */}
        <div className="bg-white lg:rounded lg:shadow-sm mb-2 lg:mb-4">

          
          {items.map((item, index) => (
            <div key={item.id} className={`flex items-start gap-3 px-4 py-4 ${index !== items.length - 1 ? 'border-b border-zinc-100' : ''}`}>
               <div className="w-[72px] h-[72px] shrink-0 border border-zinc-100 rounded overflow-hidden bg-emerald-50">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
               </div>
               <div className="flex-1 flex flex-col min-w-0">
                   <h3 className="text-[14px] text-zinc-800 line-clamp-2 leading-snug">{item.name}</h3>
                   <div className="text-[13px] text-zinc-500 mt-1 flex justify-between">
                       <span className="truncate mr-2">Phân loại hàng: {item.variant}</span>
                   </div>
                   <div className="flex justify-between items-center mt-2.5">
                       <span className="text-[15px] font-medium text-zinc-800">{money.format(item.price)}đ</span>
                       <span className="text-[13px] text-zinc-500">x{item.quantity}</span>
                   </div>
               </div>
            </div>
          ))}
          
          <div className="px-4 py-0 border-t border-zinc-100">
             <div className="flex items-center py-3 border-b border-zinc-100 border-dashed">
                 <span className="text-[14px] text-zinc-800 w-24 shrink-0">Tin nhắn:</span>
                 <input 
                    type="text" 
                    placeholder="Lưu ý cho Người bán..." 
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="flex-1 text-[14px] text-zinc-800 text-right outline-none bg-transparent placeholder:text-zinc-400"
                 />
             </div>
             <div className="flex justify-between items-center py-4">
                 <span className="text-[14px] text-zinc-800">Tổng số tiền ({items.reduce((s, i) => s + i.quantity, 0)} sản phẩm):</span>
                 <span className="text-[15px] font-medium text-emerald-500">{money.format(totalMerchandise)}đ</span>
             </div>
          </div>
        </div>

        {/* Shipping Method */}
        <div className="bg-white px-4 py-3 lg:rounded lg:shadow-sm mb-2 lg:mb-4">
           <div className="flex items-center justify-between">
               <div className="flex items-start gap-2 max-w-[75%]">
                   <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                   <div>
                       <h3 className="text-[14px] font-medium text-zinc-800">Phương thức vận chuyển</h3>
                       <p className="text-[13px] text-zinc-800 mt-1">Nhanh</p>
                       <p className="text-[12px] text-emerald-500 mt-0.5">Nhận hàng vào 5 Th10 - 7 Th10</p>
                   </div>
               </div>
               <div className="flex items-center gap-1">
                   <span className="text-[14px] text-zinc-800">{money.format(shippingFee)}đ</span>
                   <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </div>
           </div>
        </div>

        {/* Vouchers */}
        <div className="bg-white px-4 py-3.5 lg:rounded lg:shadow-sm mb-2 lg:mb-4 flex items-center justify-between active:bg-zinc-50 cursor-pointer">
           <div className="flex items-center gap-2">
               <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
               <span className="text-[14px] text-zinc-800">Voucher</span>
           </div>
           <div className="flex items-center gap-1">
               <span className="text-[13px] text-zinc-500">- {money.format(voucherDiscount)}đ</span>
               <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
           </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white px-4 py-3.5 lg:rounded lg:shadow-sm mb-2 lg:mb-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-2">
                   <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                   <span className="text-[14px] text-zinc-800">Phương thức thanh toán</span>
               </div>
               <div className="flex items-center gap-1">
                    <span className="text-[13px] text-emerald-500">Xem tất cả</span>
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </div>
            </div>
            
            {/* Payment Options (simplified for mobile) */}
            <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between border border-emerald-500 p-3 rounded-sm bg-emerald-50/30">
                    <div className="flex items-center gap-2 text-[14px] text-zinc-800">
                        Thanh toán khi nhận hàng
                    </div>
                    <div className="w-4 h-4 rounded-full border-4 border-emerald-500 bg-white"></div>
                </label>
            </div>
        </div>

        {/* Order Details Breakdown */}
        <div className="bg-white px-4 py-4 lg:rounded lg:shadow-sm mb-4">
             <div className="flex items-center gap-2 mb-4">
                 <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                 <span className="text-[14px] text-zinc-800 font-medium">Chi tiết thanh toán</span>
             </div>
             
             <div className="flex flex-col gap-2 text-[14px]">
                 <div className="flex justify-between items-center text-zinc-500">
                     <span>Tổng tiền hàng</span>
                     <span>{money.format(totalMerchandise)}đ</span>
                 </div>
                 <div className="flex justify-between items-center text-zinc-500">
                     <span>Tổng tiền phí vận chuyển</span>
                     <span>{money.format(shippingFee)}đ</span>
                 </div>
                 <div className="flex justify-between items-center text-zinc-500">
                     <span>Tổng cộng Voucher giảm giá</span>
                     <span>-{money.format(voucherDiscount)}đ</span>
                 </div>
                 <div className="flex justify-between items-center mt-2">
                     <span className="text-zinc-800 font-medium">Tổng thanh toán</span>
                     <span className="text-[18px] font-bold text-emerald-500">{money.format(totalPayment)}đ</span>
                 </div>
             </div>
        </div>
        
        {/* Terms text */}
        <div className="px-4 pb-8 text-center text-[12px] text-zinc-500 flex items-center justify-center gap-1.5 flex-wrap">
            Nhấn &quot;Đặt hàng&quot; đồng nghĩa với việc bạn đồng ý tuân theo <span className="text-blue-600">Điều khoản THE KAS</span>
        </div>

        {/* DESKTOP: Sticky Checkout Footer */}
        <div className="hidden lg:flex sticky bottom-0 z-40 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.03)] border border-zinc-100 rounded-sm mb-8 items-center justify-end px-6 py-4 mt-6">
             <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2">
                     <span className="text-[16px] text-zinc-800">Tổng thanh toán:</span>
                     <span className="text-2xl font-bold text-emerald-500 ml-2">{money.format(totalPayment)}đ</span>
                 </div>
                 <button className="bg-emerald-500 hover:bg-emerald-600 text-white w-52 h-[44px] rounded-sm font-medium text-[16px] transition-colors shadow shadow-emerald-500/20 ml-4">
                     Đặt hàng
                 </button>
             </div>
        </div>

      </main>

      {/* Desktop Footer Placeholder */}
      <div className="hidden lg:block">
        <Footer />
      </div>

      {/* Mobile Sticky Bottom Checkout Bar */}
      <div className="fixed lg:hidden bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-100 flex items-center justify-end h-[60px] pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
          <div className="flex items-center h-full">
              <div className="flex flex-col items-end justify-center h-full px-4">
                 <div className="text-[13px] text-zinc-600">
                     Tổng thanh toán: 
                 </div>
                 <div className="font-bold text-[18px] text-emerald-500 mt-0.5">
                     {money.format(totalPayment)}đ
                 </div>
              </div>
              <button className="h-full px-8 bg-emerald-500 active:bg-emerald-600 text-white font-medium text-[15px] transition-colors shadow-sm ml-1">
                  Đặt hàng
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
