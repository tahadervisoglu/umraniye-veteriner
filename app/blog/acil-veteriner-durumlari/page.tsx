import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Acil Veteriner Durumları | Ümraniye 7/24 Acil Veteriner | Medeniyet Veteriner",
  description:
    "Evcil hayvanınızda acil müdahale gerektiren durumları tanıyın. Zehirlenme, travma, solunum güçlüğü belirtileri. İstanbul Anadolu Yakası acil veteriner.",
  keywords:
    "acil veteriner ümraniye, 7/24 veteriner istanbul, evcil hayvan acil durum, köpek zehirlenmesi, kedi acil müdahale, veteriner acil servis",
}

export default function AcilVeterinerPage() {
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
                <span>12 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Evcil Hayvan Acil Durumları: Ne Zaman Veterinere Gitmelisiniz?
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Evcil hayvanınızın sağlığı söz konusu olduğunda hangi durumların acil müdahale gerektirdiğini
                bilmek hayat kurtarıcı olabilir. İşte hemen veterinere gitmeniz gereken durumlar.
              </p>

              <h2>🚨 Hayati Tehlike Oluşturan Acil Durumlar</h2>

              <h3>1. Zehirlenme</h3>
              <p>
                <strong>Belirtiler:</strong>
              </p>
              <ul>
                <li>Aşırı salya akması</li>
                <li>Kusma ve ishal</li>
                <li>Titreme ve kasılmalar</li>
                <li>Bilinç kaybı</li>
                <li>Solunum güçlüğü</li>
              </ul>
              <p>
                <strong>Ne yapmalı:</strong> Hemen veterinere başvurun. Mümkünse zehirlenmeye neden olan
                maddeyi yanınızda götürün.
              </p>

              <h3>2. Solunum Güçlüğü</h3>
              <p>
                <strong>Belirtiler:</strong>
              </p>
              <ul>
                <li>Hızlı ve zorlu nefes alma</li>
                <li>Mavi renkli dil veya diş etleri</li>
                <li>Ağzı açık nefes alma (kedilerde)</li>
                <li>Göğüs kafesinde anormal hareketler</li>
              </ul>

              <h3>3. Travma ve Yaralanma</h3>
              <ul>
                <li>Araç çarpması</li>
                <li>Yüksekten düşme</li>
                <li>Derin kesikler ve kanamalar</li>
                <li>Kırık şüphesi</li>
                <li>Hayvan kavgası yaraları</li>
              </ul>

              <h3>4. Şiddetli Kusma ve İshal</h3>
              <p>
                <strong>Acil durum belirtileri:</strong>
              </p>
              <ul>
                <li>Kanlı kusma veya ishal</li>
                <li>24 saatten fazla süren kusma</li>
                <li>Dehidratasyon belirtileri</li>
                <li>Karın şişliği ve ağrısı</li>
              </ul>

              <h2>⚠️ Hızlı Müdahale Gerektiren Durumlar</h2>

              <h3>5. İdrar Yapamama</h3>
              <p>
                Özellikle erkek kedilerde görülen idrar yolu tıkanıklığı hayati tehlike oluşturur. 24 saat
                içinde idrar yapamayan hayvanınızı hemen veterinere götürün.
              </p>

              <h3>6. Nöbetler ve Kasılmalar</h3>
              <ul>
                <li>Bilinç kaybı ile birlikte kasılmalar</li>
                <li>5 dakikadan uzun süren nöbetler</li>
                <li>Arka arkaya tekrarlayan nöbetler</li>
              </ul>

              <h3>7. Göz Yaralanmaları</h3>
              <ul>
                <li>Gözde kanama</li>
                <li>Göz çıkması</li>
                <li>Ani körlük</li>
                <li>Şiddetli göz ağrısı</li>
              </ul>

              <h3>8. Aşırı Ateş veya Hipotermi</h3>
              <ul>
                <li>39.5°C üzeri ateş (köpek/kedi)</li>
                <li>37°C altı vücut ısısı</li>
                <li>Halsizlik ve titreme</li>
              </ul>

              <h2>🏥 Acil Durumda Yapılması Gerekenler</h2>

              <h3>İlk Yardım İpuçları</h3>
              <ol>
                <li>
                  <strong>Sakin kalın:</strong> Panik hayvanınızı daha da strese sokar
                </li>
                <li>
                  <strong>Güvenliği sağlayın:</strong> Acı çeken hayvanlar ısırabilir
                </li>
                <li>
                  <strong>Hemen arayın:</strong> Veterinere giderken yolda bilgi verin
                </li>
                <li>
                  <strong>Taşıma:</strong> Yaralı hayvanı dikkatli taşıyın
                </li>
              </ol>

              <h3>Kanamayı Durdurmak</h3>
              <ul>
                <li>Temiz bir bez ile baskı uygulayın</li>
                <li>Kanayan bölgeyi kalp seviyesinin üstünde tutun</li>
                <li>Turnike sadece son çare olarak kullanılmalı</li>
              </ul>

              <h2>📞 Acil Durumda Bize Ulaşın</h2>
              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali'de acil veteriner hizmetleri
                sunuyoruz. Evcil hayvanınızın acil bir durumu varsa hemen arayın.
              </p>

              <h2>Önleyici Tedbirler</h2>
              <ul>
                <li>Zehirli bitkileri evinizden uzak tutun</li>
                <li>Temizlik malzemelerini güvenli yerlerde saklayın</li>
                <li>Çikolata, üzüm gibi zehirli yiyecekleri erişilemez yerlerde tutun</li>
                <li>Balkonlarda güvenlik önlemleri alın</li>
                <li>Düzenli sağlık kontrolleri yaptırın</li>
              </ul>

              <div className="mt-8 rounded-lg bg-red-50 dark:bg-red-950 border-2 border-red-200 dark:border-red-800 p-6">
                <h3 className="mb-2 text-xl font-bold text-red-900 dark:text-red-100">
                  🚨 ACİL DURUM - HEMEN ARAYIN
                </h3>
                <p className="mb-4 text-red-800 dark:text-red-200">
                  Evcil hayvanınızın acil bir durumu varsa vakit kaybetmeyin!
                </p>
                <Button size="lg" className="gap-2 bg-red-600 hover:bg-red-700" asChild>
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
