import Link from "next/link";

export default function Header() {
    return (
        <div className="sticky top-0 z-50 w-full shadow-sm">
            <div className="hidden md:block bg-[var(--brand)] text-white">
                <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 md:px-6 xl:px-8 py-1.5 text-[11px] sm:text-xs">
                    <div className="flex items-center gap-3">
                        <span>Kết nối</span>
                        <span>Facebook</span>
                        <span>Instagram</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>Tiếng Việt</span>
                        <span>Tài khoản</span>
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
