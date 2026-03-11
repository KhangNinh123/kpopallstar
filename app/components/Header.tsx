import Link from "next/link";

export default function Header() {
    return (
        <div className="sticky top-0 z-50 w-full shadow-sm">
            <div className="hidden md:block bg-[var(--brand)] text-white">
                <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 md:px-6 xl:px-8 py-1.5 text-[11px] sm:text-xs">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center mr-1">Kết nối</span>
                        <a href="https://facebook.com" aria-label="Facebook" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                            <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                            <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Tiếng Việt</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            <span>Tài khoản</span>
                        </button>
                    </div>
                </div>
            </div>

            <header className="bg-[var(--brand)] pb-2.5 md:pb-4 pt-1.5 md:pt-0">
                <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3 px-3 md:px-6 xl:px-8">
                    {/* Desktop Brand */}
                    <Link href="/" className="hidden md:block shrink-0">
                        <div
                            className="text-5xl leading-none text-white mr-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            LƯỜI
                        </div>
                    </Link>

                    {/* Desktop Search */}
                    <label className="hidden md:flex relative min-w-[220px] flex-1">
                        <input
                            type="search"
                            placeholder="Nhập tên sản phẩm cần tìm ..."
                            className="h-11 w-full rounded-md border border-white/25 bg-white px-4 pr-14 text-sm text-zinc-700 outline-none ring-0 placeholder:text-zinc-400 focus:border-emerald-200"
                        />
                        <button
                            type="button"
                            className="absolute right-1 top-1 flex h-9 w-11 items-center justify-center rounded bg-emerald-500 transition-colors hover:bg-emerald-600"
                            aria-label="Tìm kiếm"
                        >
                            <img src="/icon/search.png" alt="Search" className="w-[16px] h-[16px] object-contain brightness-0 invert" />
                        </button>
                    </label>

                    {/* Mobile Search */}
                    <label className="flex md:hidden relative flex-1 h-[34px]">
                        <div className="absolute left-0 top-0 bottom-0 w-9 flex items-center justify-center">
                            <svg className="w-[18px] h-[18px] text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            placeholder="Nhập tên sản phẩm cần tìm ..."
                            className="h-full w-full rounded-sm bg-[#ffeaea] pl-9 pr-3 text-[13px] text-zinc-700 outline-none ring-0 placeholder:text-zinc-400"
                        />
                    </label>

                    {/* Icons */}
                    <div className="flex items-center gap-3 md:gap-4 shrink-0">
                        {/* Desktop Cart */}
                        <Link href="/cart" className="hidden md:block">
                            <button
                                type="button"
                                className="flex h-11 min-w-11 items-center justify-center rounded-md border border-white/35 bg-white/15 px-3 transition-colors hover:bg-white/25"
                                aria-label="Giỏ hàng"
                            >
                                <img src="/icon/cart.png" alt="Cart" className="w-[20px] h-[20px] object-contain" />
                            </button>
                        </Link>

                        {/* Mobile Icons */}
                        <Link href="/cart" className="md:hidden flex items-center justify-center pl-1" aria-label="Giỏ hàng">
                             <svg className="w-[25px] h-[25px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                             </svg>
                        </Link>
                        <button className="md:hidden flex items-center justify-center pr-1" aria-label="Tài khoản">
                             <svg className="w-[25px] h-[25px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                             </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}
