// src/data/projectsData.js
const projects = [
  {
    id: 1,
    title: "Apartment Management System",
    description: "Apartman yönetim sistemi",
    img: "/assets/project1.png",
    backend: "Node.js, Express.js",
    database: "PostgreSQL",
    details: "Bu proje, bir apartmanın sakinlerinin aidat takibi, duyurular ve yönetimle iletişimini kolaylaştırmak için geliştirilmiş bir sistemdir. Kullanıcılar için kimlik doğrulama, JWT tabanlı API güvenliği ve PostgreSQL veritabanında daire verilerinin yönetimi sağlanmıştır. API endpoint'leri RESTful mimaride tasarlanmıştır."
  },
  {
    id: 2,
    title: "CircleSupport",
    description: "Anonymous community advice platform powered by AI.",
    img: "/assets/project2.png",
    backend: "Python, Django",
    database: "MongoDB",
    details: "Yapay zeka destekli bu platformda, kullanıcılar anonim olarak tavsiye alabilir. Geliştirdiğim Python/Django backend'i, kullanıcılardan gelen soruları işler, doğal dil işleme (NLP) modelleri ile analiz eder ve en uygun yanıtı bulur. Veri depolama için NoSQL veritabanı olan MongoDB kullanılmıştır."
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio site with i18n, React, and responsive design.",
    img: "/assets/project3.png",
    backend: "None (Frontend)",
    database: "None",
    details: "Bu portföy sitesi, React ve Vite ile geliştirilmiş olup, tamamen responsive bir tasarıma sahiptir. i18n kütüphanesi ile Türkçe ve İngilizce dil desteği eklenmiştir. Projeler ve blog sayfaları için React Router kullanılarak SPA (Single Page Application) yapısı oluşturulmuştur."
  },
  // İstediğiniz kadar proje ekleyebilirsiniz
  {
    id: 4,
    title: "E-Commerce Backend API",
    description: "A robust backend API for a multi-vendor e-commerce platform.",
    img: "/assets/project4.png",
    backend: "Java, Spring Boot",
    database: "MySQL",
    details: "Bu API, ürün yönetimi, kullanıcı kimlik doğrulama, sepet ve ödeme sistemleri gibi temel e-ticaret işlevlerini destekler. Spring Boot çatısı kullanılarak mikroservis mimarisinde geliştirilmiştir. Güvenlik için Spring Security ve veritabanı yönetimi için Hibernate kullanılmıştır."
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A real-time chat application with user authentication.",
    img: "/assets/project5.png",
    backend: "Node.js, Socket.IO",
    database: "MongoDB",
    details: "Node.js ve Socket.IO kullanarak geliştirilmiş bu sohbet uygulaması, gerçek zamanlı mesajlaşma imkanı sunar. MongoDB ile kullanıcı bilgileri ve mesaj geçmişi saklanır. Kullanıcı deneyimini artırmak için anlık bildirimler ve durum takibi özellikleri eklenmiştir."
  }
];

export default projects;