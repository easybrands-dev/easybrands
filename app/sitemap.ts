import type { MetadataRoute } from 'next'

const base = 'https://easybrands.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                        priority: 1.0,  changeFrequency: 'monthly' },
    { url: `${base}/about`,                             priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${base}/contact`,                           priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${base}/brand`,                             priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${base}/print`,                             priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${base}/website`,                           priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${base}/projects`,                          priority: 0.7,  changeFrequency: 'weekly'  },
    { url: `${base}/projects/brewster`,                 priority: 0.6,  changeFrequency: 'yearly'  },
    { url: `${base}/projects/motor-cycle-city`,         priority: 0.6,  changeFrequency: 'yearly'  },
    { url: `${base}/projects/sandy-bay-garden-co`,      priority: 0.6,  changeFrequency: 'yearly'  },
    { url: `${base}/projects/smokey7`,                  priority: 0.6,  changeFrequency: 'yearly'  },
  ]
}
