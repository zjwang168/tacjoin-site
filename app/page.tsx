export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl font-bold tracking-wide text-sky-800">
            TACJOIN
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#products" className="transition hover:text-sky-700">
              Products
            </a>
            <a href="#solutions" className="transition hover:text-sky-700">
              Solutions
            </a>
            <a href="#support" className="transition hover:text-sky-700">
              Support
            </a>
            <a href="#about" className="transition hover:text-sky-700">
              About
            </a>
            <a href="#contact" className="transition hover:text-sky-700">
              Contact
            </a>
          </nav>

          <div className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600">
            English
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
            Professional Water Filtration
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Better Water for Beverage and Commercial Systems
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600">
            TACJOIN provides reliable water filtration solutions for coffee
            machines, ice makers, boilers, and other commercial water-use
            equipment.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-sky-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-900"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:border-sky-800 hover:text-sky-800"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-gray-50 p-6 shadow-sm md:p-8">
          <img
            src="/logo.png"
            alt="TACJOIN water filtration system"
            className="w-full rounded-2xl object-contain shadow-xl"
          />
        </div>
      </section>

      {/* Brand Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
              Why TACJOIN
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Commercial water solutions designed for performance
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Multi-Stage Filtration</h3>
              <p className="text-sm leading-7 text-gray-600">
                Removes chlorine, odor, and contaminants while supporting better
                taste and stable water quality.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Protect Equipment</h3>
              <p className="text-sm leading-7 text-gray-600">
                Helps reduce scale buildup, lower maintenance costs, and extend
                equipment lifespan.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Commercial Ready</h3>
              <p className="text-sm leading-7 text-gray-600">
                Suitable for coffee shops, restaurants, beverage stations, and
                foodservice equipment.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Easy Maintenance</h3>
              <p className="text-sm leading-7 text-gray-600">
                Quick-change cartridge design supports cleaner replacement and
                easier maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
            Products
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Product Categories
          </h2>
          <p className="mb-10 max-w-3xl text-gray-600">
            Designed for commercial beverage systems, foodservice applications,
            and professional water-treatment scenarios.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
              <img
                src="/product.png"
                alt="Filtration Systems"
                className="h-56 w-full object-contain bg-white p-4"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Filtration Systems</h3>
                <p className="text-sm leading-7 text-gray-600">
                  Multi-stage systems for commercial equipment and beverage water
                  treatment.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
              <img
                src="/product-2.png"
                alt="Prefilters"
                className="h-56 w-full object-contain bg-white p-4"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Prefilters</h3>
                <p className="text-sm leading-7 text-gray-600">
                  Front-end protection for improved stability and easier long-term
                  maintenance.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
              <img
                src="/product-3.png"
                alt="Cartridges"
                className="h-56 w-full object-contain bg-white p-4"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Cartridges</h3>
                <p className="text-sm leading-7 text-gray-600">
                  Quick-change cartridges designed to improve taste, reduce odor,
                  and support safer water usage.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
              <img
                src="/product-4.png"
                alt="RO Solutions"
                className="h-56 w-full object-contain bg-white p-4"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">RO Solutions</h3>
                <p className="text-sm leading-7 text-gray-600">
                  Advanced purification systems for high-demand water treatment and
                  specialty applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
            Solutions
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Built for commercial water-use scenarios
          </h2>
          <p className="mb-10 max-w-3xl text-gray-600">
            TACJOIN systems are developed for coffee equipment, ice machines,
            boiling water units, beverage systems, and other commercial
            applications that require stable and high-quality water treatment.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <img
                src="/solution-1.png"
                alt="Coffee Equipment"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Coffee Equipment</h3>
                <p className="text-sm leading-7 text-gray-600">
                  Improve extraction consistency, reduce unwanted taste impact, and
                  protect coffee equipment from scale.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <img
                src="/solution-2.png"
                alt="Ice Machines"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Ice Machines</h3>
                <p className="text-sm leading-7 text-gray-600">
                  Cleaner water helps improve ice clarity, reduce odor, and support
                  long-term machine performance.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <img
                src="/solution-3.png"
                alt="Boilers and Beverage"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Boilers & Beverage</h3>
                <p className="text-sm leading-7 text-gray-600">
                  Stable filtered water supports hot drink systems, tea, and other
                  beverage preparation equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
            Support
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Support tools and services
          </h2>
          <p className="mb-10 max-w-3xl text-gray-600">
            TACJOIN helps clients evaluate water conditions and recommend
            suitable filtration solutions for specific equipment and operating
            environments.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Technical Services</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• On-site water quality analysis</li>
                <li>• Equipment and system investigation</li>
                <li>• Review of previous water-related issues</li>
                <li>• Current usage and operating condition assessment</li>
                <li>• Water quality improvement target planning</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold">System Value</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Better taste and more stable water quality</li>
                  <li>• Reduced operating and maintenance costs</li>
                  <li>• Lower equipment damage risk</li>
                  <li>• Improved service quality for end customers</li>
                  <li>• Flexible application for foodservice scenarios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-sky-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
            About
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About TACJOIN</h2>
          <p className="max-w-4xl leading-8 text-white/80">
            TACJOIN focuses on professional water filtration and commercial
            water-treatment solutions. Our systems are designed to improve water
            quality, protect equipment, and support better beverage performance
            across coffee, foodservice, and business environments.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
              Contact
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contact Us</h2>
            <p className="mb-8 max-w-xl text-gray-600">
              Get in touch with TACJOIN for product inquiries, technical
              consultation, and distribution opportunities.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border p-5">
                <p className="mb-1 text-xs uppercase tracking-widest text-gray-400">
                  Brand
                </p>
                <p className="text-lg font-semibold">TACJOIN</p>
              </div>

              <div className="rounded-2xl border p-5">
                <p className="mb-1 text-xs uppercase tracking-widest text-gray-400">
                  Email
                </p>
                <a
                  href="mailto:18675888018@163.com"
                  className="text-lg font-semibold text-sky-700 hover:underline"
                >
                  18675888018@163.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">
            <p className="mb-4 text-sm font-medium text-gray-500">
              Scan to connect on WeChat
            </p>
            <img
              src="/wechat.png"
              alt="TACJOIN WeChat QR code"
              className="mx-auto w-64 rounded-2xl bg-white p-2"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 TACJOIN. All rights reserved.</p>
          <p>Professional Water Filtration Solutions</p>
        </div>
      </footer>
    </main>
  );
}