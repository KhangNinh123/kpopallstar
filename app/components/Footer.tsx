export default function Footer() {
    return (
        <footer className="mt-6 border-t border-zinc-200 bg-zinc-100/90">
            <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 md:px-6 xl:px-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <p
                        className="text-5xl leading-none text-emerald-500"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        LƯỜI
                    </p>
                    <p className="mt-3 max-w-[250px] text-sm text-zinc-500">
                        The ultimate destination for smart shoppers. Theo dõi deal theo thời gian thực.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-zinc-800">
                        Quick links
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-500">
                        <li>Flash Sales</li>
                        <li>Price Drop History</li>
                        <li>Clearance Outlet</li>
                        <li>Coupon Center</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-zinc-800">
                        Account
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-500">
                        <li>Deal Alerts</li>
                        <li>My Watchlist</li>
                        <li>Order History</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-zinc-800">
                        Get the inside scoop
                    </h3>
                    <p className="mt-3 text-sm text-zinc-500">
                        Join deal digests and daily recommendations.
                    </p>
                    <label className="mt-3 flex h-11 items-center overflow-hidden rounded-lg border border-zinc-200 bg-white">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="h-full flex-1 px-3 text-sm outline-none placeholder:text-zinc-400"
                        />
                        <button
                            type="button"
                            className="h-full bg-emerald-500 px-4 text-sm font-semibold text-white hover:bg-emerald-600"
                        >
                            Go
                        </button>
                    </label>
                </div>
            </div>
        </footer>
    );
}
