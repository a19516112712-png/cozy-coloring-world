const fs = require('fs');

// 1. Update coloring page template
let template = fs.readFileSync('app/coloring/[slug]/page.tsx', 'utf8');

// Add import
template = template.replace(
  "import AmazonBookPromo from '@/components/AmazonBookPromo';",
  "import AmazonBookPromo from '@/components/AmazonBookPromo';\nimport RelatedArticles from '@/components/RelatedArticles';"
);

// Add Related Articles section in sidebar
template = template.replace(
  "              )}\n            </div>\n          </aside>\n        </div>\n      </article>",
  "              )}\n              {/* Related Articles */}\n              <RelatedArticles\n                categoryId={page.category}\n                categoryName={category?.name}\n                currentSlug={page.slug}\n                type=\"article\"\n                count={4}\n              />\n            </div>\n          </aside>\n        </div>\n      </article>"
);

fs.writeFileSync('app/coloring/[slug]/page.tsx', template);
console.log('Updated coloring page template');

// 2. Update category page template
let catTemplate = fs.readFileSync('app/category/[slug]/page.tsx', 'utf8');

// Add import
catTemplate = catTemplate.replace(
  "import AdBanner from '@/components/AdBanner';",
  "import AdBanner from '@/components/AdBanner';\nimport RelatedArticles from '@/components/RelatedArticles';"
);

// Add Related Articles before closing div
catTemplate = catTemplate.replace(
  "      </div>\n    </div>",
  `      </div>

      {/* Related Articles */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-cocoa text-center mb-8">
          Related Articles
        </h2>
        <RelatedArticles
          categoryId={category.id}
          categoryName={category.name}
          type="article"
          count={6}
        />
      </section>
    </div>`
);

fs.writeFileSync('app/category/[slug]/page.tsx', catTemplate);
console.log('Updated category page template');

console.log('Done updating both templates');
