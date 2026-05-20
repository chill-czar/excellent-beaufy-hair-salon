import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-16 max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop pt-24 md:pt-32">
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-4">Our Work</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore our portfolio of transformative beauty treatments, stunning hairstyles, and elegant nail art. A glimpse into the sophisticated radiance we create every day.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 px-container-padding-mobile md:px-container-padding-desktop">
        <button className="px-6 py-2 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md shadow-sm">All</button>
        <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-surface-container transition-colors">Hair Styling</button>
        <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-surface-container transition-colors">Skin Care</button>
        <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-surface-container transition-colors">Nail Art</button>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {/* Featured Item 1: Hair */}
          <div className="break-inside-avoid mb-6 relative group overflow-hidden rounded-lg shadow-[0_30px_30px_rgba(0,0,0,0.04)] bg-surface-container-lowest">
            <Image
              alt="Professional hair stylist at work in salon"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              height={1000}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr5nlNnz3qeiwkHWCy2zgZBgzzy-MGTncwNq_CbfTn_-MTJd7145jKMaRbgzr411HbsTpM_BxSi_bhmjdtvwHUabHQ9dnbklwBQ5nvHnJHhhFfpuVRljU8TyYNx1acUE3ftTAa_hNALTCC1_TiQABGmelxwajTc9NNuqMp_4CUZwfshveRVB-NGe9Py6zNMPcY1tHhup6XD5b9j3xNJO60Jbp7Y9wLZeVmKrThLG3B2AMXZw_7VdlHdOq3ZvTtU7x5-t4gq6ZYU8FF"
              width={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-sm text-label-sm mb-2 w-max">Hair Styling</span>
              <h3 className="font-headline-md text-headline-md text-white">Modern Balayage</h3>
            </div>
          </div>

          {/* Featured Item 2: Skin */}
          <div className="break-inside-avoid mb-6 relative group overflow-hidden rounded-lg shadow-[0_30px_30px_rgba(0,0,0,0.04)] bg-surface-container-lowest">
            <Image
              alt="Close-up of facial treatment in serene spa"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              height={1000}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2gmJCN3EXDA0_1Wc-6Lj2gUtplk1MSJ1UL-bx4oZF9UZlD5XvFEMTZoBp8aKYXGavr4JYwWmyCTnUXx_VZkBp2aUEghBpTNcNmqYbtbTim_aA9NXJJpcQLZ5iJWPS2I295Nhny4AqYmbzrXhxjA30t1MLzMGwgWenXs4yZxj_XgyDsdwPpu_Cg24aybnO6ZEx7SdCOU3ddCAXDYhWAw6j7Z0-B4Atotyu58Ns025iHQGqvUqHt7LxeA5X_hds87i5PMH-WRkUkmAn"
              width={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-sm text-label-sm mb-2 w-max">Skin Care</span>
              <h3 className="font-headline-md text-headline-md text-white">Rejuvenating Facial</h3>
            </div>
          </div>

          {/* Featured Item 3: Nails */}
          <div className="break-inside-avoid mb-6 relative group overflow-hidden rounded-lg shadow-[0_30px_30px_rgba(0,0,0,0.04)] bg-surface-container-lowest">
            <Image
              alt="Elegant nail art and manicure showcase"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              height={1000}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdJOveLeaRPT8NtCnlFl2X6UOoS9Wvvhr80JFZQqDO2xiaegcPr1pjCizY57bGep-ZGC_K_-lbfG6xS609ukbX1opXZ41v5rQCzC0-WbenvgHFRWqCdt13lG8vWOZwvam7rkA3Hfu-tzcukTy53EgD9vhgSlSFk73wiGnsKPGoebE9CjF7c-NbApSYWBDRBsWhr-thiDcvoq3aKGcEJ0AjFPA8c1vtZB-rUpqe-eQIz5zIQ7K5NkHhiX9lkFKqW9chjUXcXIWQ7hjF"
              width={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-sm text-label-sm mb-2 w-max">Nail Art</span>
              <h3 className="font-headline-md text-headline-md text-white">Sophisticated Manicure</h3>
            </div>
          </div>

          {/* Generated Item 4 */}
          <div className="break-inside-avoid mb-6 relative group overflow-hidden rounded-lg shadow-[0_30px_30px_rgba(0,0,0,0.04)] bg-surface-container-lowest">
            <Image
              alt="A luxurious, minimalist salon interior featuring soft cream walls, warm rose gold accents, and plush seating. Natural light streams through large windows, creating an airy, inviting atmosphere. The space feels premium and serene."
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              height={1000}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvUVaudMIhiilpi0E22VvUxQbwGquNWYJi7PueXSb-Qk0T3exvIjlYH5x8Hpy_MYAIUiNvxwbmbPeqPml5Q2V7eetp08wRYUQcXR4MRIUSe-0mPfZnPgFakSshrKgHd3w7tL6sk-jHClRpZvxiqtsU_4Rtp97YT-r2btn9VKLJzUHgnKmD2jsVFmDXiA4lQLJtmSOYDuGaPOfq4PkiDjJNdPN3vlrUMvNyrgDQ98dHBZjzkNZ-5D6SIU7RUkl_SM8V1hs7ZmdfsBkd"
              width={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-sm text-label-sm mb-2 w-max">Salon Space</span>
              <h3 className="font-headline-md text-headline-md text-white">Our Serene Environment</h3>
            </div>
          </div>

          {/* Generated Item 5 */}
          <div className="break-inside-avoid mb-6 relative group overflow-hidden rounded-lg shadow-[0_30px_30px_rgba(0,0,0,0.04)] bg-surface-container-lowest">
            <Image
              alt="Close up of high-end beauty products elegantly arranged on a marble counter. Soft, diffused lighting highlights the luxurious packaging. The color palette is composed of soft pinks, creams, and gold accents."
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              height={1000}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBqyW4N4lZUmejAB1WN4Esk0UCVNzvPcUSpKD-suPwhfTVbMMTbmAULs_8iqm9CEqW_LWpcwkoA_xBM15JVIBkDbcx0E4w6i57ux22eOONAKCamJZ0u669LZHm9VCNfP_oyJhL0QNYGIwKHyr9ZPgxbCb6rV_6RglTpIoeaOBMVwGXSi8gM7UCWtBWPFUE8E6vVjYaJ_rRLsbVbqU3T1Q0PLKo6UTJoXnBMKS5eiegOWIXQDK9xRzPD93zH_VJvm-ftDvlSJz2eDm2"
              width={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-sm text-label-sm mb-2 w-max">Products</span>
              <h3 className="font-headline-md text-headline-md text-white">Premium Care</h3>
            </div>
          </div>
        </div>

        {/* Load More Action */}
        <div className="text-center mt-12 pb-section-gap">
          <button className="px-8 py-3 border border-primary text-primary rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-colors duration-300 inline-flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
            View More Gallery
          </button>
        </div>
      </div>
    </>
  );
}
