export default function Header() {
    return (
        <div className="sticky top-0 z-50 w-full shadow-sm">
            <div className="bg-[var(--brand)] text-white">
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

            <header className="bg-[var(--brand)] pb-4">
                <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-3 px-4 md:px-6 xl:px-8">
                    <div
                        className="text-5xl leading-none text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        LƯỜI
                    </div>
                    <label className="relative min-w-[220px] flex-1">
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
                    <button
                        type="button"
                        className="ml-auto flex h-11 min-w-11 items-center justify-center rounded-md border border-white/35 bg-white/15 px-3 transition-colors hover:bg-white/25"
                        aria-label="Giỏ hàng"
                    >
                        <img src="/icon/cart.png" alt="Cart" className="w-[20px] h-[20px] object-contain" />
                    </button>
                </div>
            </header>
        </div>
    );
}
