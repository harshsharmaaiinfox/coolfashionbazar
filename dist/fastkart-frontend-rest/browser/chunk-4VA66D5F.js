import {
  DOCUMENT,
  Meta,
  PLATFORM_ID,
  Title,
  __spreadProps,
  __spreadValues,
  isPlatformServer,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MJNPSVHG.js";

// src/app/shared/services/seo.service.ts
var SeoService = class _SeoService {
  constructor(meta, title, platformId, document2) {
    this.meta = meta;
    this.title = title;
    this.platformId = platformId;
    this.document = document2;
  }
  /**
   * Set comprehensive SEO data including meta tags and structured data
   * Works on both server and client side
   */
  setSEOData(data) {
    if (data.title) {
      this.title.setTitle(data.title);
      this.meta.updateTag({ name: "title", content: data.title });
      if (isPlatformServer(this.platformId)) {
        this.document.title = data.title;
      }
    }
    if (data.description) {
      const cleanDescription = this.stripHtmlTags(data.description);
      console.log("\u{1F50D} Setting meta description:", cleanDescription);
      this.meta.updateTag({ name: "description", content: cleanDescription });
      this.meta.updateTag({ property: "og:description", content: cleanDescription });
      this.meta.updateTag({ name: "twitter:description", content: cleanDescription });
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly("description", cleanDescription);
        this.setMetaTagDirectly("og:description", cleanDescription, "property");
        this.setMetaTagDirectly("twitter:description", cleanDescription);
      }
      console.log("\u2705 Meta description tags updated");
    } else {
      console.log("\u274C No description provided to setSEOData");
    }
    if (data.keywords) {
      this.meta.updateTag({ name: "keywords", content: data.keywords });
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly("keywords", data.keywords);
      }
    }
    if (data.image) {
      this.meta.updateTag({ property: "og:image", content: data.image });
      this.meta.updateTag({ name: "twitter:image", content: data.image });
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly("og:image", data.image, "property");
        this.setMetaTagDirectly("twitter:image", data.image);
      }
    }
    if (data.url) {
      this.meta.updateTag({ property: "og:url", content: data.url });
      this.meta.updateTag({ name: "twitter:url", content: data.url });
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly("og:url", data.url, "property");
        this.setMetaTagDirectly("twitter:url", data.url);
      }
    }
    if (data.title) {
      this.meta.updateTag({ property: "og:title", content: data.title });
      this.meta.updateTag({ name: "twitter:title", content: data.title });
      if (isPlatformServer(this.platformId)) {
        this.setMetaTagDirectly("og:title", data.title, "property");
        this.setMetaTagDirectly("twitter:title", data.title);
      }
    }
    if (data.canonicalUrl) {
      this.setCanonicalUrl(data.canonicalUrl);
    } else if (data.url) {
      this.setCanonicalUrl(data.url);
    }
    if (data.type) {
      this.meta.updateTag({ property: "og:type", content: data.type });
    }
    if (data.author) {
      this.meta.updateTag({ name: "author", content: data.author });
      this.meta.updateTag({ property: "og:author", content: data.author });
    }
    if (data.publishedTime) {
      this.meta.updateTag({ property: "article:published_time", content: data.publishedTime });
    }
    if (data.modifiedTime) {
      this.meta.updateTag({ property: "article:modified_time", content: data.modifiedTime });
    }
    if (data.section) {
      this.meta.updateTag({ property: "article:section", content: data.section });
    }
    if (data.tags && data.tags.length > 0) {
      data.tags.forEach((tag) => {
        this.meta.addTag({ property: "article:tag", content: tag });
      });
    }
    if (data.structuredData) {
      this.setStructuredData(data.structuredData);
    }
  }
  /**
   * Set canonical URL - prevents duplicate content issues
   * Works on both server and client side
   */
  setCanonicalUrl(url) {
    this.meta.removeTag('rel="canonical"');
    this.meta.addTag({ rel: "canonical", href: url });
    if (isPlatformServer(this.platformId)) {
      let canonicalTag = this.document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute("href", url);
      } else {
        canonicalTag = this.document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        canonicalTag.setAttribute("href", url);
        this.document.head.appendChild(canonicalTag);
      }
    }
    this.meta.updateTag({ property: "og:url", content: url });
  }
  /**
   * Remove canonical URL (useful for dynamic pages)
   */
  removeCanonicalUrl() {
    this.meta.removeTag('rel="canonical"');
  }
  /**
   * Set structured data (JSON-LD)
   */
  setStructuredData(data) {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }
  /**
   * Set product structured data
   */
  setProductStructuredData(product) {
    const images = [];
    if (product.product_thumbnail?.original_url) {
      images.push(product.product_thumbnail.original_url);
    }
    if (product.product_galleries && product.product_galleries.length > 0) {
      product.product_galleries.forEach((gallery) => {
        if (gallery.original_url && !images.includes(gallery.original_url)) {
          images.push(gallery.original_url);
        }
      });
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description || product.short_description,
      "sku": product.sku,
      "image": images.length > 0 ? images : void 0,
      "brand": {
        "@type": "Brand",
        "name": product.brand?.name || "Kahuafashionclub"
      },
      "offers": {
        "@type": "Offer",
        "price": product.sale_price || product.price,
        "priceCurrency": product.currency || "INR",
        "availability": product.stock_status === "in_stock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "url": product.url,
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "Kahuafashionclub"
        }
      }
    };
    if (product.aggregateRating) {
      structuredData.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": product.aggregateRating.rating,
        "reviewCount": product.aggregateRating.reviewCount
      };
    }
    this.setStructuredData(structuredData);
  }
  /**
   * Set organization structured data
   */
  setOrganizationStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KAHUA SYSTEMS PRIVATE LIMITED",
      "legalName": "KAHUA SYSTEMS PRIVATE LIMITED",
      "url": "https://kahuafashionclub.com",
      "logo": "https://kahuafashionclub.com/assets/images/logo.png",
      "email": "info@kahuafashionclub.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "FF-202, Gaur City Center",
        "addressLocality": "Greater Noida, Gautam Buddh Nagar",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://facebook.com/ecomus",
        "https://twitter.com/ecomus",
        "https://instagram.com/ecomus"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@kahuafashionclub.com",
        "contactType": "customer service"
      }
    };
    this.setStructuredData(structuredData);
  }
  /**
   * Set breadcrumb structured data
   */
  setBreadcrumbStructuredData(breadcrumbs) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
    this.setStructuredData(structuredData);
  }
  /**
   * Set article structured data
   */
  setArticleStructuredData(article) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "image": article.image,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "KAHUA SYSTEMS PRIVATE LIMITED",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kahuafashionclub.com/assets/images/logo.png"
        }
      },
      "datePublished": article.publishedDate,
      "dateModified": article.modifiedDate
    };
    this.setStructuredData(structuredData);
  }
  /**
   * Clear all meta tags
   */
  clearMetaTags() {
    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="author"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('name="twitter:title"');
    this.meta.removeTag('name="twitter:description"');
    this.meta.removeTag('name="twitter:image"');
    this.meta.removeTag('name="twitter:url"');
  }
  /**
   * Aggressively clear and replace meta tags
   * FIX: Use updateTag instead of addTag to properly handle existing meta tags
   */
  aggressiveClearAndSet(data) {
    if (data.title) {
      this.title.setTitle(data.title);
      this.meta.updateTag({ name: "title", content: data.title });
      this.meta.updateTag({ property: "og:title", content: data.title });
      this.meta.updateTag({ name: "twitter:title", content: data.title });
    }
    if (data.description) {
      const cleanDescription = this.stripHtmlTags(data.description);
      console.log("\u{1F525} Aggressive update - Setting meta description:", cleanDescription);
      this.meta.updateTag({ name: "description", content: cleanDescription });
      this.meta.updateTag({ property: "og:description", content: cleanDescription });
      this.meta.updateTag({ name: "twitter:description", content: cleanDescription });
      setTimeout(() => {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          console.log("\u{1F527} Meta description tag missing, creating it...");
          metaDesc = document.createElement("meta");
          metaDesc.setAttribute("name", "description");
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute("content", cleanDescription);
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (!ogDesc) {
          ogDesc = document.createElement("meta");
          ogDesc.setAttribute("property", "og:description");
          document.head.appendChild(ogDesc);
        }
        ogDesc.setAttribute("content", cleanDescription);
        console.log("\u2705 Meta description forcefully set:", cleanDescription.substring(0, 50) + "...");
      }, 50);
    } else {
      console.log("\u274C No description provided to aggressiveClearAndSet");
    }
    if (data.url) {
      this.meta.updateTag({ property: "og:url", content: data.url });
      this.meta.updateTag({ name: "twitter:url", content: data.url });
    }
    if (data.image) {
      this.meta.updateTag({ property: "og:image", content: data.image });
      this.meta.updateTag({ name: "twitter:image", content: data.image });
    }
    if (data.type) {
      this.meta.updateTag({ property: "og:type", content: data.type });
    }
    if (data.keywords) {
      this.meta.updateTag({ name: "keywords", content: data.keywords });
    }
  }
  /**
   * Update default SEO settings
   */
  updateDefaultSeo() {
    const currentUrl = window.location.pathname;
    if (currentUrl.includes("/product/")) {
      console.log("\u{1F6AB} Skipping default SEO update - on product page");
      return;
    }
    if (currentUrl.includes("/product") || currentUrl.includes("/collections")) {
      console.log("\u{1F6AB} Skipping default SEO update - on product/collection page");
      return;
    }
    console.log("\u2705 Setting default SEO for non-product page:", currentUrl);
    this.setSEOData({
      title: "Kahua Fashion Club | Premium Ethnic & Designer Wear Online in India",
      description: "Shop premium ethnic and designer wear at Kahua Fashion Club. Explore sarees, lehengas, suits, and more with fast delivery across India, COD options, and easy returns.",
      keywords: "activewear, gym wear, joggers, men's clothes, women's clothes, stylish outfits, comfort fit, performance clothing, kahuafashionclub",
      type: "website",
      url: "https://kahuafashionclub.com/"
    });
  }
  /**
   * Force update meta tags (for SSR compatibility)
   */
  forceUpdateMetaTags() {
    setTimeout(() => {
      this.updateDefaultSeo();
    }, 100);
  }
  /**
   * Set SEO data specifically for product pages
   * This method provides a convenient way to set all product-related SEO data
   */
  setProductPageSEO(product, productSlug, baseUrl = "https://kahuafashionclub.com") {
    const slug = productSlug || product.slug || `product-${product.id}`;
    const productUrl = `${baseUrl}/product/${slug}`;
    const metaTitle = product.meta_title || this.generateProductTitle(product);
    const metaDescription = product.meta_description || this.generateProductDescription(product);
    const metaKeywords = product.meta_keywords || this.generateProductKeywords(product);
    this.setSEOData({
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeywords,
      image: product.product_thumbnail?.original_url || product.product_galleries?.[0]?.original_url,
      url: productUrl,
      canonicalUrl: product.canonical_url || productUrl,
      type: "product",
      author: "Kahuafashionclub"
    });
    this.setProductStructuredData(__spreadProps(__spreadValues({}, product), {
      url: productUrl,
      currency: "INR",
      aggregateRating: product.reviews_count > 0 ? {
        rating: this.calculateAverageRating(product.review_ratings),
        reviewCount: product.reviews_count
      } : void 0
    }));
    const breadcrumbs = [
      { name: "Home", url: baseUrl },
      { name: "Products", url: `${baseUrl}/collections` }
    ];
    if (product.categories && product.categories.length > 0) {
      breadcrumbs.push({
        name: product.categories[0].name,
        url: `${baseUrl}/category/${product.categories[0].slug}`
      });
    }
    breadcrumbs.push({ name: product.name, url: productUrl });
    this.setBreadcrumbStructuredData(breadcrumbs);
  }
  /**
   * Generate SEO-friendly title for the product
   * You can customize this method to create titles according to your needs
   */
  generateProductTitle(product) {
    const brand = product.brand?.name ? `${product.brand.name} ` : "";
    const category = product.categories?.[0]?.name ? ` ${product.categories[0].name}` : "";
    const price = product.sale_price ? `\u20B9${product.sale_price}` : `\u20B9${product.price}`;
    return `${brand}${product.name}${category} - ${price} | Kahuafashionclub`;
  }
  /**
   * Generate SEO-friendly description for the product
   * You can customize this method to create descriptions according to your needs
   */
  generateProductDescription(product) {
    const brand = product.brand?.name ? `${product.brand.name} ` : "";
    const category = product.categories?.[0]?.name ? ` ${product.categories[0].name}` : "";
    const discount = product.discount > 0 ? ` Save ${product.discount}%!` : "";
    let rawDescription = product.meta_description || product.short_description || product.description || `Shop ${brand}${product.name}${category} online at Kahuafashionclub. Premium quality, great prices, fast delivery.${discount}`;
    rawDescription = this.stripHtmlTags(this.sanitizeProductDescription(rawDescription));
    return rawDescription.length > 160 ? rawDescription.substring(0, 157) + "..." : rawDescription;
  }
  // Remove sizing/measurement notes that are not suitable for meta descriptions
  sanitizeProductDescription(text) {
    if (!text)
      return "";
    let sanitized = text;
    const patterns = [
      /model\s*height[^\.!\n]*/gi,
      /wearing\s*(size|small|medium|large|xl|xxl|xxxl|xs)[^\.!\n]*/gi,
      /bust\s*[:\-]?\s*\d+\s*(cm|inch|in|')/gi,
      /waist\s*[:\-]?\s*\d+\s*(cm|inch|in|')/gi,
      /hips?\s*[:\-]?\s*\d+\s*(cm|inch|in|')/gi,
      /\b\d{1,2}\s*(cm|inch|in)\b/gi,
      /\b\d'\d{1,2}\b/gi,
      /size\s*chart[^\.!\n]*/gi
    ];
    patterns.forEach((re) => {
      sanitized = sanitized.replace(re, "");
    });
    sanitized = sanitized.replace(/\s{2,}/g, " ").replace(/\s([\.,;:!\?])/g, "$1").trim();
    if (!sanitized) {
      sanitized = "Premium quality, great prices, fast delivery from Kahuafashionclub.";
    }
    return sanitized;
  }
  /**
   * Generate SEO keywords for the product
   */
  generateProductKeywords(product) {
    const keywords = [];
    keywords.push(product.name);
    if (product.brand?.name) {
      keywords.push(product.brand.name);
    }
    if (product.categories) {
      product.categories.forEach((category) => {
        keywords.push(category.name);
      });
    }
    if (product.tags) {
      product.tags.forEach((tag) => {
        keywords.push(tag.name);
      });
    }
    keywords.push("buy online", "Kahuafashionclub", "fashion", "clothing");
    return keywords.join(", ");
  }
  /**
   * Calculate average rating from review ratings array
   */
  calculateAverageRating(ratings) {
    if (!ratings || ratings.length === 0)
      return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return Math.round(sum / ratings.length * 10) / 10;
  }
  /**
   * Set meta tag directly in document (for SSR compatibility)
   */
  setMetaTagDirectly(name, content, attribute = "name") {
    if (isPlatformServer(this.platformId)) {
      let metaTag = this.document.querySelector(`meta[${attribute}="${name}"]`);
      if (metaTag) {
        metaTag.setAttribute("content", content);
      } else {
        metaTag = this.document.createElement("meta");
        metaTag.setAttribute(attribute, name);
        metaTag.setAttribute("content", content);
        this.document.head.appendChild(metaTag);
      }
    }
  }
  /**
   * Strip HTML tags from text for clean meta descriptions
   */
  stripHtmlTags(html) {
    if (!html)
      return "";
    const temp = document.createElement("div");
    temp.innerHTML = html;
    let text = temp.textContent || temp.innerText || "";
    text = text.replace(/\s+/g, " ").trim();
    if (text.length > 160) {
      text = text.substring(0, 157) + "...";
    }
    return text;
  }
  /**
   * Force update SEO data with aggressive overwriting
   * This method ensures product SEO takes precedence over other SEO
   */
  forceUpdateSEOData(data) {
    console.log("\u{1F680} Force update SEO data - NOT clearing tags to prevent timing issues");
    this.setSEOData(data);
    if (data.title) {
      this.title.setTitle(data.title);
      document.title = data.title;
      this.meta.updateTag({ name: "title", content: data.title });
      this.meta.updateTag({ property: "og:title", content: data.title });
      this.meta.updateTag({ name: "twitter:title", content: data.title });
      setTimeout(() => {
        this.title.setTitle(data.title);
        document.title = data.title;
        this.meta.updateTag({ name: "title", content: data.title });
        this.meta.updateTag({ property: "og:title", content: data.title });
        this.meta.updateTag({ name: "twitter:title", content: data.title });
      }, 0);
      setTimeout(() => {
        this.title.setTitle(data.title);
        document.title = data.title;
        this.meta.updateTag({ name: "title", content: data.title });
        this.meta.updateTag({ property: "og:title", content: data.title });
        this.meta.updateTag({ name: "twitter:title", content: data.title });
      }, 100);
    }
    if (data.description) {
      const cleanDescription = this.stripHtmlTags(data.description);
      console.log("\u{1F680} Force update - Setting meta description:", cleanDescription);
      this.meta.updateTag({ name: "description", content: cleanDescription });
      this.meta.updateTag({ property: "og:description", content: cleanDescription });
      this.meta.updateTag({ name: "twitter:description", content: cleanDescription });
      setTimeout(() => {
        this.meta.updateTag({ name: "description", content: cleanDescription });
        this.meta.updateTag({ property: "og:description", content: cleanDescription });
        this.meta.updateTag({ name: "twitter:description", content: cleanDescription });
      }, 0);
      setTimeout(() => {
        this.meta.updateTag({ name: "description", content: cleanDescription });
        this.meta.updateTag({ property: "og:description", content: cleanDescription });
        this.meta.updateTag({ name: "twitter:description", content: cleanDescription });
      }, 100);
      setTimeout(() => {
        this.meta.updateTag({ name: "description", content: cleanDescription });
        this.meta.updateTag({ property: "og:description", content: cleanDescription });
        this.meta.updateTag({ name: "twitter:description", content: cleanDescription });
      }, 500);
      setTimeout(() => {
        console.log("\u{1F527} Final force update - Direct DOM manipulation");
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement("meta");
          metaDesc.setAttribute("name", "description");
          document.head.appendChild(metaDesc);
          console.log("\u{1F527} Created missing meta description tag");
        }
        metaDesc.setAttribute("content", cleanDescription);
        console.log("\u2705 Meta description final update:", metaDesc.getAttribute("content"));
        this.startMetaDescriptionMonitoring(cleanDescription);
      }, 1e3);
    }
    if (data.url) {
      this.meta.updateTag({ property: "og:url", content: data.url });
      this.meta.updateTag({ name: "twitter:url", content: data.url });
      setTimeout(() => {
        this.meta.updateTag({ property: "og:url", content: data.url });
        this.meta.updateTag({ name: "twitter:url", content: data.url });
      }, 100);
    }
  }
  /**
   * Start monitoring to ensure meta description stays in place
   * This prevents other scripts from removing the meta description
   */
  startMetaDescriptionMonitoring(description) {
    console.log("\u{1F6E1}\uFE0F Starting meta description monitoring...");
    let checkCount = 0;
    const maxChecks = 20;
    const monitor = setInterval(() => {
      checkCount++;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc || metaDesc.getAttribute("content") !== description) {
        console.log("\u26A0\uFE0F Meta description missing or changed, restoring...");
        if (!metaDesc) {
          const newMetaDesc = document.createElement("meta");
          newMetaDesc.setAttribute("name", "description");
          document.head.appendChild(newMetaDesc);
        }
        const targetDesc = document.querySelector('meta[name="description"]');
        if (targetDesc) {
          targetDesc.setAttribute("content", description);
          console.log("\u2705 Meta description restored:", description.substring(0, 50) + "...");
        }
      } else {
        console.log("\u2705 Meta description is stable");
      }
      if (checkCount >= maxChecks) {
        clearInterval(monitor);
        console.log("\u{1F6E1}\uFE0F Meta description monitoring completed");
      }
    }, 500);
  }
  static {
    this.\u0275fac = function SeoService_Factory(t) {
      return new (t || _SeoService)(\u0275\u0275inject(Meta), \u0275\u0275inject(Title), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
  }
};

export {
  SeoService
};
//# sourceMappingURL=chunk-4VA66D5F.js.map
