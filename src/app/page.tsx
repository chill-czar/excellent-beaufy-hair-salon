export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-container-padding-mobile md:px-container-padding-desktop">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Salon interior"
            className="w-full h-full object-cover object-center opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr5nlNnz3qeiwkHWCy2zgZBgzzy-MGTncwNq_CbfTn_-MTJd7145jKMaRbgzr411HbsTpM_BxSi_bhmjdtvwHUabHQ9dnbklwBQ5nvHnJHhhFfpuVRljU8TyYNx1acUE3ftTAa_hNALTCC1_TiQABGmelxwajTc9NNuqMp_4CUZwfshveRVB-NGe9Py6zNMPcY1tHhup6XD5b9j3xNJO60Jbp7Y9wLZeVmKrThLG3B2AMXZw_7VdlHdOq3ZvTtU7x5-t4gq6ZYU8FF"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-bright/90 via-surface-bright/60 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-1 md:col-span-7 lg:col-span-6 flex flex-col justify-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-container/30 text-on-primary-container font-label-sm text-label-sm w-max mb-6">
              Premium Salon Experience
            </span>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary mb-6">
              Excellence in Every Detail
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              Discover a transformative self-care journey. We blend high-fashion
              editorial styling with a warm, inviting atmosphere to elevate your
              natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-DEFAULT font-label-md text-label-md hover:bg-primary/90 transition-all shadow-[0_8px_20px_rgba(116,89,65,0.25)] w-full sm:w-auto text-center">
                Book Appointment
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container-low transition-all w-full sm:w-auto text-center">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Welcome Section */}
      <section className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto text-center">
          <span
            className="material-symbols-outlined text-4xl text-primary/50 mb-6 block"
            data-weight="fill"
          >
            spa
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
            Welcome to Elegance
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Established in 2015, Excellent Beauty Salon & Hair has been dedicated
            to providing a luxurious sanctuary for those seeking exceptional beauty
            services. Our expert stylists and therapists curate personalized
            experiences that go beyond mere treatments—we craft moments of pure
            sophisticated radiance. Step into our world and let us redefine your
            standard of beauty.
          </p>
        </div>
      </section>
      
      {/* Core Services Bento Grid */}
      <section className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                Our Core Services
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                A curated selection of premium treatments designed to pamper and
                perfect.
              </p>
            </div>
            <a
              className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim transition-colors flex items-center gap-2 group"
              href="/services"
            >
              View Full Menu
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Service Item 1 */}
            <div className="group relative overflow-hidden rounded-2xl md:col-span-8 min-h-80 shadow-[0_30px_30px_rgba(0,0,0,0.04)]">
              <img
                alt="Hair Salon"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr5nlNnz3qeiwkHWCy2zgZBgzzy-MGTncwNq_CbfTn_-MTJd7145jKMaRbgzr411HbsTpM_BxSi_bhmjdtvwHUabHQ9dnbklwBQ5nvHnJHhhFfpuVRljU8TyYNx1acUE3ftTAa_hNALTCC1_TiQABGmelxwajTc9NNuqMp_4CUZwfshveRVB-NGe9Py6zNMPcY1tHhup6XD5b9j3xNJO60Jbp7Y9wLZeVmKrThLG3B2AMXZw_7VdlHdOq3ZvTtU7x5-t4gq6ZYU8FF"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-tint/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full glass-panel border-0 border-t border-surface/20">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-container/80 text-on-primary-container font-label-sm text-label-sm mb-3">
                  Signature
                </span>
                <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-2">
                  Hair Salon
                </h3>
                <p className="font-body-md text-body-md text-surface-container-low/90 max-w-md">
                  Expert cutting, bespoke coloring, and transformational styling
                  tailored to your unique features.
                </p>
              </div>
            </div>
            {/* Service Item 2 */}
            <div className="group relative overflow-hidden rounded-2xl md:col-span-4 min-h-80 shadow-[0_30px_30px_rgba(0,0,0,0.04)] bg-surface-container">
              <img
                alt="Nail Salon"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdJOveLeaRPT8NtCnlFl2X6UOoS9Wvvhr80JFZQqDO2xiaegcPr1pjCizY57bGep-ZGC_K_-lbfG6xS609ukbX1opXZ41v5rQCzC0-WbenvgHFRWqCdt13lG8vWOZwvam7rkA3Hfu-tzcukTy53EgD9vhgSlSFk73wiGnsKPGoebE9CjF7c-NbApSYWBDRBsWhr-thiDcvoq3aKGcEJ0AjFPA8c1vtZB-rUpqe-eQIz5zIQ7K5NkHhiX9lkFKqW9chjUXcXIWQ7hjF"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-tint/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-1">
                  Nail Salon
                </h3>
                <p className="font-body-md text-body-md text-surface-container-low/80 line-clamp-2">
                  Precision manicures, pedicures, and elegant nail artistry.
                </p>
              </div>
            </div>
            {/* Beauty Treatments Card */}
            <div className="md:col-span-4 row-span-1 relative rounded-xl overflow-hidden group shadow-[0_30px_30px_rgba(0,0,0,0.04)] bg-surface-container">
              <img
                alt="Beauty Treatments"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2gmJCN3EXDA0_1Wc-6Lj2gUtplk1MSJ1UL-bx4oZF9UZlD5XvFEMTZoBp8aKYXGavr4JYwWmyCTnUXx_VZkBp2aUEghBpTNcNmqYbtbTim_aA9NXJJpcQLZ5iJWPS2I295Nhny4AqYmbzrXhxjA30t1MLzMGwgWenXs4yZxj_XgyDsdwPpu_Cg24aybnO6ZEx7SdCOU3ddCAXDYhWAw6j7Z0-B4Atotyu58Ns025iHQGqvUqHt7LxeA5X_hds87i5PMH-WRkUkmAn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-tint/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-1">
                  Beauty Treatments
                </h3>
                <p className="font-body-md text-body-md text-surface-container-low/80 line-clamp-2">
                  Rejuvenating facials and advanced skin therapies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop bg-surface relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-primary-fixed/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 glass-panel p-12 md:p-20 rounded-xl shadow-[0_30px_30px_rgba(0,0,0,0.04)]">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            Experience the Transformation
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Your journey to refined beauty begins here. Visit our premium salon in
            Kissimmee, FL, and let our experts craft your perfect look.
          </p>
          <button className="bg-primary text-on-primary px-10 py-4 rounded-DEFAULT font-label-md text-label-md hover:bg-primary/90 transition-all shadow-[0_8px_20px_rgba(116,89,65,0.25)]">
            Visit Us in Kissimmee
          </button>
        </div>
      </section>
    </>
  );
}
