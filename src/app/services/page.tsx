import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop pt-24 md:pt-32 pb-section-gap">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-6">Our Services</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Discover a world of refined elegance. Our expert team offers a comprehensive range of premium treatments tailored to enhance your natural beauty.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Hair Category */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <Image
                alt="Professional hair stylist"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr5nlNnz3qeiwkHWCy2zgZBgzzy-MGTncwNq_CbfTn_-MTJd7145jKMaRbgzr411HbsTpM_BxSi_bhmjdtvwHUabHQ9dnbklwBQ5nvHnJHhhFfpuVRljU8TyYNx1acUE3ftTAa_hNALTCC1_TiQABGmelxwajTc9NNuqMp_4CUZwfshveRVB-NGe9Py6zNMPcY1tHhup6XD5b9j3xNJO60Jbp7Y9wLZeVmKrThLG3B2AMXZw_7VdlHdOq3ZvTtU7x5-t4gq6ZYU8FF"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 glass-panel translate-y-2 opacity-95">
                <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm mb-4">Hair</span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Hair Styling & Care</h2>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                    <span className="font-headline-md text-headline-md text-on-surface">Hair Salon</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                    <span className="font-headline-md text-headline-md text-on-surface">Haircuts</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                    <span className="font-headline-md text-headline-md text-on-surface">Hair Treatment</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                    <span className="font-headline-md text-headline-md text-on-surface">Hair Botox</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-headline-md text-headline-md text-on-surface">Hair Extension</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nails Category */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="relative h-full min-h-96 rounded-2xl overflow-hidden group bg-surface-container-low soft-shadow p-8 flex flex-col justify-between">
              <div className="z-10 relative">
                <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm mb-4">Nails</span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Nail Artistry</h2>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                    <span className="font-headline-md text-headline-md text-on-surface">Nail Salon</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                    <span className="font-headline-md text-headline-md text-on-surface">Pedicure and manicure</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-headline-md text-headline-md text-on-surface">Nail Extension</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 rounded-xl overflow-hidden h-48 relative">
                <Image
                  alt="Elegant nail art"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdJOveLeaRPT8NtCnlFl2X6UOoS9Wvvhr80JFZQqDO2xiaegcPr1pjCizY57bGep-ZGC_K_-lbfG6xS609ukbX1opXZ41v5rQCzC0-WbenvgHFRWqCdt13lG8vWOZwvam7rkA3Hfu-tzcukTy53EgD9vhgSlSFk73wiGnsKPGoebE9CjF7c-NbApSYWBDRBsWhr-thiDcvoq3aKGcEJ0AjFPA8c1vtZB-rUpqe-eQIz5zIQ7K5NkHhiX9lkFKqW9chjUXcXIWQ7hjF"
                />
              </div>
            </div>
          </div>

          {/* Beauty & Waxing Category */}
          <div className="md:col-span-12 mt-6">
            <div className="relative rounded-2xl overflow-hidden group bg-surface-container-low soft-shadow grid grid-cols-1 md:grid-cols-2">
              <div className="h-96 md:h-auto relative overflow-hidden">
                <Image
                  alt="Beauty treatment session"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2gmJCN3EXDA0_1Wc-6Lj2gUtplk1MSJ1UL-bx4oZF9UZlD5XvFEMTZoBp8aKYXGavr4JYwWmyCTnUXx_VZkBp2aUEghBpTNcNmqYbtbTim_aA9NXJJpcQLZ5iJWPS2I295Nhny4AqYmbzrXhxjA30t1MLzMGwgWenXs4yZxj_XgyDsdwPpu_Cg24aybnO6ZEx7SdCOU3ddCAXDYhWAw6j7Z0-B4Atotyu58Ns025iHQGqvUqHt7LxeA5X_hds87i5PMH-WRkUkmAn"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm mb-4 self-start">Beauty & Skin</span>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Refined Aesthetics</h2>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
                    <span className="font-headline-md text-headline-md text-on-surface">Beauty Salon</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-headline-md text-headline-md text-on-surface">Waxing Salon</span>
                  </li>
                </ul>
                <button className="mt-10 self-start border border-primary text-primary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-primary-container/20 transition-colors duration-300">
                  View Full Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop text-center">
          <span className="inline-block mb-4 text-primary">
            <span className="material-symbols-outlined" style={{ fontSize: "32px", fontVariationSettings: "'FILL' 0" }}>location_on</span>
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Our Service Areas</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            We proudly serve clients from across the region, providing exceptional beauty and hair services to our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 rounded-full bg-surface border border-outline-variant text-on-surface font-label-md text-label-md">Osceola</span>
            <span className="px-6 py-3 rounded-full bg-surface border border-outline-variant text-on-surface font-label-md text-label-md">Devenport</span>
            <span className="px-6 py-3 rounded-full bg-surface border border-outline-variant text-on-surface font-label-md text-label-md">Poinciana</span>
            <span className="px-6 py-3 rounded-full bg-surface border border-outline-variant text-on-surface font-label-md text-label-md">Hain city</span>
            <span className="px-6 py-3 rounded-full bg-surface border border-outline-variant text-on-surface font-label-md text-label-md">Lake land</span>
          </div>
        </div>
      </section>
    </>
  );
}
