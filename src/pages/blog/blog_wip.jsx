import React, { useState } from 'react';
import { Search, Calendar, Tag, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "React Performance Optimization Techniques",
    excerpt: "Modern React uygulamalarında performans optimizasyonu için pratik teknikler ve en iyi uygulamalar.",
    date: "2024-08-15",
    category: "React",
    tags: ["React", "Performance", "Optimization"],
    readTime: "8 min",
    content: `React uygulamalarında performans optimizasyonu için temel teknikler:

## Memo ve useMemo Kullanımı
React.memo ile component'leri sarmalayarak gereksiz re-render'ları engelleyebiliriz.

## Lazy Loading
React.lazy ile component'leri ihtiyaç duyulduğunda yükleyin.

## Virtual Scrolling
Büyük listeler için react-window kullanın.`
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox: Hangi Durumda Hangisini Kullanmalı?",
    excerpt: "CSS Grid ve Flexbox arasındaki farkları anlamak ve doğru durumlarda hangisini seçeceğini bilmek.",
    date: "2024-08-10",
    category: "CSS",
    tags: ["CSS", "Layout", "Grid", "Flexbox"],
    readTime: "6 min",
    content: `CSS Grid ve Flexbox modern web geliştirmede layout için temel araçlardır.

## Grid - 2D Layout
Grid iki boyutlu layoutlar için idealdir. Kompleks grid sistemleri için kullanın.

## Flexbox - 1D Layout  
Flexbox tek boyutlu layoutlar için mükemmeldir. Navigation, card dizilimi gibi durumlar için.

## Ne Zaman Hangisi?
- **Grid**: Sayfa layoutu, kompleks grid sistemler
- **Flexbox**: Navigation, card layouts, centering`
  },
  {
    id: 3,
    title: "JavaScript Async/Await Deep Dive",
    excerpt: "JavaScript'te asenkron programlama, Promise'ler ve async/await kullanımının detaylı incelemesi.",
    date: "2024-08-05",
    category: "JavaScript",
    tags: ["JavaScript", "Async", "Promises"],
    readTime: "10 min",
    content: `JavaScript'te asenkron programlama modern web geliştirmede kritik önem taşır.

## Promise Temelleri
Promise'ler asenkron işlemleri daha temiz yönetmemizi sağlar.

## Async/Await Syntax
ES2017 ile gelen async/await, Promise'leri daha okunabilir hale getirir.

## Error Handling
try/catch blokları ile async işlemlerde hata yönetimi.`
  },
  {
    id: 4,
    title: "Node.js API Design Best Practices",
    excerpt: "RESTful API tasarımında dikkat edilmesi gereken noktalar ve Node.js ile uygulama örnekleri.",
    date: "2024-07-28",
    category: "Node.js",
    tags: ["Node.js", "API", "REST", "Backend"],
    readTime: "12 min",
    content: `Node.js ile API geliştirmede en iyi uygulamalar:

## RESTful Design
URL yapısı ve HTTP metodları doğru kullanımı.

## Error Handling
Merkezi hata yönetimi ve uygun HTTP status kodları.

## Security
Rate limiting, input validation ve güvenlik best practices.

## Documentation
API dokümantasyonu ve OpenAPI/Swagger kullanımı.`
  },
  {
    id: 5,
    title: "Docker ile Geliştirme Ortamı Kurulumu",
    excerpt: "Docker kullanarak tutarlı geliştirme ortamları oluşturmak ve microservice mimarisi tasarlamak.",
    date: "2024-07-20",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Containerization"],
    readTime: "15 min",
    content: `Docker ile geliştirme sürecini standardize etmek:

## Container Temelleri
Docker imajları ve container'ların nasıl çalıştığı.

## Docker Compose
Multi-container uygulamalar için compose kullanımı.

## Development Workflow
Hot reload ve volume mapping ile geliştirme.

## Production Deployment
Docker registry ve deployment stratejileri.`
  }
];

export default function MinimalBlog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-8 text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
          >
            ← Back to Blog
          </button>
          
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <span>•</span>
                <span>{selectedPost.readTime} okuma</span>
                <span>•</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                  {selectedPost.category}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map(tag => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-gray-800 leading-relaxed whitespace-pre-line">
              {selectedPost.content}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Teknik Blog</h1>
          <p className="text-gray-600">Web geliştirme, programlama ve teknoloji üzerine yazılar</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Yazı ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              <div className="mb-4">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded mb-3">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('tr-TR')}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              
              <div className="flex flex-wrap gap-1 mt-3">
                {post.tags.slice(0, 3).map(tag => (
                  <span 
                    key={tag}
                    className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Arama kriterlerinize uygun yazı bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}