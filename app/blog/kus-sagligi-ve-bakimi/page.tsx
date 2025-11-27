import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Kuş Sağlığı ve Bakımı | Ümraniye Kuş Veterineri | Medeniyet Veteriner",
  description:
    "Muhabbet kuşu, sultan papağanı ve kanarya bakımı hakkında uzman veteriner tavsiyeleri. Kuş hastalıkları, beslenme ve bakım ipuçları. Ümraniye kuş veterineri.",
  keywords:
    "kuş veterineri ümraniye, muhabbet kuşu bakımı, sultan papağanı hastalıkları, kanarya veterineri istanbul, kuş sağlığı, evcil kuş bakımı",
}

export default function KusSagligiPage() {
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
                <span>15 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Kuş Sağlığı ve Bakımı: Ümraniye'de Kuş Veterineri Rehberi
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Evcil kuşlarınızın sağlıklı ve mutlu bir yaşam sürmesi için bilmeniz gereken temel bakım
                kuralları ve sağlık kontrolleri hakkında uzman veteriner önerilerimiz.
              </p>

              <h2>Evcil Kuşlarda Sık Görülen Türler</h2>
              <p>
                Ümraniye ve İstanbul Anadolu Yakası'nda en çok bakılan evcil kuş türleri arasında muhabbet
                kuşları, sultan papağanları, cennet papağanları ve kanaryalar bulunmaktadır. Her kuş türünün
                kendine özgü bakım ihtiyaçları vardır.
              </p>

              <h2>Kuş Sağlığında Dikkat Edilmesi Gerekenler</h2>

              <h3>1. Beslenme</h3>
              <ul>
                <li>Kaliteli kuş yemi kullanın</li>
                <li>Taze meyve ve sebze verin (elma, havuç, ıspanak)</li>
                <li>Temiz su her gün değiştirilmeli</li>
                <li>Aşırı yağlı tohumlardan kaçının</li>
              </ul>

              <h3>2. Kafes Hijyeni</h3>
              <ul>
                <li>Kafes tabanı günlük temizlenmeli</li>
                <li>Su ve yem kapları her gün yıkanmalı</li>
                <li>Tünekler haftalık temizlenmeli</li>
                <li>Kafes aylık dezenfekte edilmeli</li>
              </ul>

              <h3>3. Sağlık Kontrolleri</h3>
              <p>
                Kuşlarınızı yılda en az bir kez veteriner kontrolünden geçirmelisiniz. Ümraniye'deki
                kliniğimizde kuş sağlığı konusunda uzman ekibimizle hizmet veriyoruz.
              </p>

              <h2>Kuşlarda Hastalık Belirtileri</h2>
              <p>Aşağıdaki belirtileri fark ederseniz hemen veterinere başvurun:</p>
              <ul>
                <li>İştah kaybı ve kilo kaybı</li>
                <li>Tüy dökülmesi veya tüy yolma</li>
                <li>Solunum güçlüğü, hapşırma</li>
                <li>Dışkıda renk veya kıvam değişikliği</li>
                <li>Halsizlik ve uyuşukluk</li>
                <li>Gaga veya tırnak deformasyonları</li>
              </ul>

              <h2>Kuş Veterineri Ümraniye</h2>
              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali'de kuş sağlığı konusunda profesyonel
                hizmet sunuyoruz. Muhabbet kuşu, sultan papağanı, kanarya ve diğer evcil kuş türlerinin
                muayene, tedavi ve bakım hizmetleri için bizi arayabilirsiniz.
              </p>

              <div className="mt-8 rounded-lg bg-primary/10 p-6">
                <h3 className="mb-2 text-xl font-bold">Kuşunuz İçin Randevu Alın</h3>
                <p className="mb-4 text-muted-foreground">
                  Evcil kuşunuzun sağlık kontrolü için hemen arayın.
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
