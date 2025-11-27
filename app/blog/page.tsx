"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Kuş Sağlığı ve Bakımı: Ümraniye'de Kuş Veterineri Rehberi",
    excerpt:
      "Muhabbet kuşu, sultan papağanı ve kanarya gibi evcil kuşlarınızın sağlığı için bilmeniz gereken her şey. Kuş hastalıkları, beslenme ve bakım ipuçları.",
    date: "2025-01-15",
    readTime: "5 dk",
    slug: "kus-sagligi-ve-bakimi",
  },
  {
    id: 2,
    title: "Kedi Aşı Takvimi ve Sağlık Kontrolleri - İstanbul Anadolu Yakası",
    excerpt:
      "Kedilerde aşı takvimi, karma aşı, kuduz aşısı ve düzenli veteriner kontrolleri hakkında detaylı bilgiler. Ümraniye'de kedi sağlığı için uzman öneriler.",
    date: "2025-01-14",
    readTime: "6 dk",
    slug: "kedi-asi-takvimi",
  },
  {
    id: 3,
    title: "Köpek Bakımı ve Sağlık Rehberi: Ümraniye Veteriner Tavsiyeleri",
    excerpt:
      "Köpeklerde aşılama, parazit kontrolü, beslenme ve egzersiz önerileri. Yavru köpek bakımından yaşlı köpek sağlığına kadar her şey.",
    date: "2025-01-13",
    readTime: "7 dk",
    slug: "kopek-bakimi-rehberi",
  },
  {
    id: 4,
    title: "Evcil Hayvan Acil Durumları: Ne Zaman Veterinere Gitmelisiniz?",
    excerpt:
      "Evcil hayvanınızda acil müdahale gerektiren durumları tanıyın. Zehirlenme, travma, solunum güçlüğü ve diğer acil durumlar için hızlı rehber.",
    date: "2025-01-12",
    readTime: "5 dk",
    slug: "acil-veteriner-durumlari",
  },
  {
    id: 5,
    title: "Kedi ve Köpek Kısırlaştırma: Faydaları ve Bakım Süreci",
    excerpt:
      "Kısırlaştırma operasyonu hakkında merak ettikleriniz. Ameliyat öncesi hazırlık, operasyon sonrası bakım ve sağlık faydaları.",
    date: "2025-01-11",
    readTime: "6 dk",
    slug: "kisirlastirma-rehberi",
  },
  {
    id: 6,
    title: "Evcil Hayvanlarda Parazit Kontrolü: İç ve Dış Parazitler",
    excerpt:
      "Pire, kene, iç parazitler ve korunma yöntemleri. Düzenli ilaçlama programı ve parazit belirtilerini tanıma rehberi.",
    date: "2025-01-10",
    readTime: "5 dk",
    slug: "parazit-kontrolu",
  },
  {
    id: 7,
    title: "Kedi ve Köpeklerde Diş Sağlığı: Temizlik ve Bakım İpuçları",
    excerpt:
      "Evcil hayvanlarınızın diş sağlığı için yapmanız gerekenler. Diş taşı, diş eti hastalıkları ve profesyonel diş temizliği.",
    date: "2025-01-09",
    readTime: "5 dk",
    slug: "dis-sagligi-bakimi",
  },
  {
    id: 8,
    title: "Yaşlı Kedi ve Köpek Bakımı: Özel İhtiyaçlar ve Sağlık Kontrolleri",
    excerpt:
      "7 yaş üstü evcil hayvanların özel bakım ihtiyaçları. Eklem sağlığı, beslenme değişiklikleri ve düzenli kontroller.",
    date: "2025-01-08",
    readTime: "6 dk",
    slug: "yasli-hayvan-bakimi",
  },
  {
    id: 9,
    title: "Evcil Hayvan Beslenme Rehberi: Sağlıklı Diyet İpuçları",
    excerpt:
      "Kedi, köpek ve kuşlar için doğru beslenme önerileri. Mama seçimi, porsiyon kontrolü ve beslenme hataları.",
    date: "2025-01-07",
    readTime: "5 dk",
    slug: "beslenme-rehberi",
  },
  {
    id: 10,
    title: "Yavru Kedi ve Köpek Bakımı: İlk Günlerden İtibaren Rehber",
    excerpt:
      "Yeni yavru sahiplenenlere özel bakım rehberi. İlk veteriner kontrolü, sosyalleşme, tuvalet eğitimi ve temel bakım.",
    date: "2025-01-06",
    readTime: "7 dk",
    slug: "yavru-hayvan-bakimi",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent/20 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Evcil hayvanlarınızın sağlığı ve bakımı hakkında faydalı bilgiler
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="flex flex-col p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="mb-4 flex-grow text-pretty text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Devamını Oku
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
