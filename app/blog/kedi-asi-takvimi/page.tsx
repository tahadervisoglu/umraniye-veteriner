import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Kedi Aşı Takvimi 2025 | Ümraniye Kedi Veterineri | Medeniyet Veteriner",
  description:
    "Kedilerde aşı takvimi, karma aşı, kuduz aşısı ve düzenli sağlık kontrolleri. Yavru kedi aşıları ve yaşlı kedi bakımı. İstanbul Anadolu Yakası kedi veterineri.",
  keywords:
    "kedi aşısı ümraniye, kedi veterineri istanbul, yavru kedi aşı takvimi, kedi karma aşısı, kedi kuduz aşısı, kedi sağlık kontrolü, ümraniye kedi doktoru",
}

export default function KediAsiPage() {
  return (
    <div className="min-h-screen">
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Blog'a Dön
              </Button>
            </Link>

            <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>14 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>6 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Kedi Aşı Takvimi ve Sağlık Kontrolleri - İstanbul Anadolu Yakası
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Kedinizin sağlıklı bir yaşam sürmesi için düzenli aşılama ve veteriner kontrolleri hayati
                önem taşır. İşte kedi aşı takvimi ve sağlık kontrolleri hakkında bilmeniz gerekenler.
              </p>

              <h2>Yavru Kedi Aşı Takvimi</h2>
              <p>
                Yavru kedilerin bağışıklık sisteminin gelişmesi için doğru zamanda aşılanması çok önemlidir.
                İşte önerilen aşı takvimi:
              </p>

              <h3>6-8 Haftalık</h3>
              <ul>
                <li>İlk karma aşı (Kedi nezlesi, panlökopeni)</li>
                <li>Genel sağlık kontrolü</li>
                <li>Parazit kontrolü ve ilaçlama</li>
              </ul>

              <h3>10-12 Haftalık</h3>
              <ul>
                <li>İkinci karma aşı (rapel)</li>
                <li>Kilo ve gelişim kontrolü</li>
              </ul>

              <h3>14-16 Haftalık</h3>
              <ul>
                <li>Üçüncü karma aşı</li>
                <li>İlk kuduz aşısı (3 aylık olduktan sonra)</li>
                <li>Mikroçip takılması (opsiyonel)</li>
              </ul>

              <h2>Yetişkin Kedi Aşı Takvimi</h2>
              <p>Yetişkin kedilerde aşılar yıllık olarak tekrarlanmalıdır:</p>

              <h3>Yıllık Aşılar</h3>
              <ul>
                <li>Karma aşı (her yıl)</li>
                <li>Kuduz aşısı (her yıl - zorunlu)</li>
                <li>Lösemi aşısı (risk grubundaki kediler için)</li>
              </ul>

              <h2>Kedi Karma Aşısı Nedir?</h2>
              <p>Karma aşı, kedileri birden fazla hastalıktan korur:</p>
              <ul>
                <li>
                  <strong>Panlökopeni (Kedi vebası):</strong> Ölümcül viral hastalık
                </li>
                <li>
                  <strong>Kedi nezlesi (Herpesvirus ve Calicivirus):</strong> Solunum yolu enfeksiyonları
                </li>
                <li>
                  <strong>Klamidya:</strong> Göz ve solunum yolu enfeksiyonu
                </li>
              </ul>

              <h2>Kuduz Aşısı</h2>
              <p>
                Kuduz aşısı Türkiye'de yasal olarak zorunludur. Kediler 3 aylıkken ilk kuduz aşısını
                olmalı ve her yıl tekrarlanmalıdır. Kuduz hem hayvanlar hem de insanlar için ölümcül bir
                hastalıktır.
              </p>

              <h2>Düzenli Sağlık Kontrolleri</h2>
              <p>Aşıların yanı sıra kedilerde düzenli kontroller şunları içermelidir:</p>
              <ul>
                <li>Yılda 2 kez genel muayene</li>
                <li>Diş kontrolü ve temizliği</li>
                <li>Parazit kontrolü (iç ve dış parazitler)</li>
                <li>Kilo takibi</li>
                <li>7 yaş üstü kedilerde kan tahlilleri</li>
              </ul>

              <h2>Aşı Sonrası Dikkat Edilmesi Gerekenler</h2>
              <ul>
                <li>Aşı sonrası 24 saat kedinizi gözlemleyin</li>
                <li>Hafif ateş ve halsizlik normaldir</li>
                <li>Aşı bölgesinde küçük şişlik olabilir</li>
                <li>Ciddi alerjik reaksiyon nadir görülür, hemen veterinere başvurun</li>
              </ul>

              <h2>Ümraniye Kedi Veterineri</h2>
              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali'de kedi sağlığı konusunda uzman
                hizmet sunuyoruz. Aşılama, sağlık kontrolleri ve tüm kedi hastalıklarının tedavisi için
                kliniğimizi ziyaret edebilirsiniz.
              </p>

              <div className="mt-8 rounded-lg bg-primary/10 p-6">
                <h3 className="mb-2 text-xl font-bold">Kediniz İçin Aşı Randevusu</h3>
                <p className="mb-4 text-muted-foreground">
                  Kedinizin aşı takvimi için hemen arayın, randevu alın.
                </p>
                <Button size="lg" className="gap-2" asChild>
                  <a href="tel:+905526976668">📞 0552 697 66 68</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
