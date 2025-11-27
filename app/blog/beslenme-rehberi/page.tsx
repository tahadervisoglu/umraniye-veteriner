import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Evcil Hayvan Beslenme Rehberi | Kedi Köpek Mama Önerileri Ümraniye",
  description:
    "Kedi, köpek ve kuşlar için doğru beslenme önerileri. Mama seçimi, porsiyon kontrolü ve beslenme hataları. Ümraniye veteriner beslenme danışmanlığı.",
  keywords:
    "kedi maması, köpek maması, evcil hayvan beslenmesi, mama önerileri ümraniye, taurin, protein, obezite",
}

export default function BeslenmeRehberiPage() {
  return (
    <div className="min-h-screen">
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Blog&apos;a Dön
              </Button>
            </Link>

            <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>7 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>6 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Evcil Hayvan Beslenme Rehberi: Sağlıklı Diyet İpuçları
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Evcil hayvanlarınızın sağlığı, doğru beslenmeyle başlar. Kaliteli mama seçimi, porsiyon
                kontrolü ve dengeli beslenme, hayvanınızın uzun ve sağlıklı bir yaşam sürmesini sağlar.
              </p>

              <h2>Kedi Beslenmesi</h2>

              <h3>Kedilerin Temel Beslenme İhtiyaçları</h3>

              <p>
                Kediler, köpeklerden farklı olarak obligate carnivore (zorunlu et yiyici) hayvanlardır.
                Bu, kedilerin hayatta kalması için et proteinlerine ihtiyaç duyduğu anlamına gelir.
              </p>

              <ul>
                <li>
                  <strong>Yüksek protein (et bazlı):</strong> Kediler günde en az %30 protein gerektirir
                </li>
                <li>
                  <strong>Taurin:</strong> Kedilerin kendi taurin üretememeleri nedeniyle, mamada taurin
                  bulunması şarttır. Taurin eksikliği kalp hastalığına yol açabilir
                </li>
                <li>
                  <strong>Düşük karbonhidrat:</strong> Kediler karbonhidrat sindiremezler
                </li>
                <li>
                  <strong>Bol su tüketimi:</strong> Kediler doğal olarak az su içerler, ıslak mama
                  yardımcı olur
                </li>
              </ul>

              <h3>Kedi Beslenme Programı</h3>

              <ul>
                <li>
                  <strong>Yavru kediler (0-12 ay):</strong> Günde 3-4 öğün, yavru maması
                </li>
                <li>
                  <strong>Yetişkin kediler (1-7 yaş):</strong> Günde 2 öğün, yetişkin maması
                </li>
                <li>
                  <strong>Yaşlı kediler (7+ yaş):</strong> Günde 2-3 küçük öğün, senior maması
                </li>
              </ul>

              <h2>Köpek Beslenmesi</h2>

              <h3>Mama Seçimi</h3>

              <p>
                Köpek maması seçerken birçok faktörü göz önünde bulundurmalısınız:
              </p>

              <ul>
                <li>
                  <strong>Irka uygun mama:</strong> Küçük, orta ve büyük ırk köpekler için farklı
                  formüller vardır
                </li>
                <li>
                  <strong>Yaşa göre formül:</strong> Yavru, yetişkin ve senior mamaları farklıdır
                </li>
                <li>
                  <strong>Aktivite seviyesine göre:</strong> Aktif köpekler daha fazla kalori gerektirir
                </li>
                <li>
                  <strong>Kaliteli protein kaynağı:</strong> İlk malzeme et olmalıdır
                </li>
                <li>
                  <strong>Yapay katkı maddeleri:</strong> Renklendiriciler ve koruyuculardan kaçının
                </li>
              </ul>

              <h3>Köpek Beslenme Programı</h3>

              <ul>
                <li>
                  <strong>Yavru köpekler (0-12 ay):</strong> Günde 3-4 öğün, yavru maması
                </li>
                <li>
                  <strong>Yetişkin köpekler (1-7 yaş):</strong> Günde 2 öğün, yetişkin maması
                </li>
                <li>
                  <strong>Yaşlı köpekler (7+ yaş):</strong> Günde 2-3 küçük öğün, senior maması
                </li>
              </ul>

              <h2>Zararlı ve Zehirli Yiyecekler</h2>

              <p>
                Evcil hayvanlarınıza asla verilmemesi gereken yiyecekler:
              </p>

              <ul>
                <li>
                  <strong>Çikolata:</strong> Teobromin içerir, zehirlidir
                </li>
                <li>
                  <strong>Üzüm ve kuru üzüm:</strong> Böbrek hastalığına neden olabilir
                </li>
                <li>
                  <strong>Soğan ve sarımsak:</strong> Kırmızı kan hücrelerini hasarlar
                </li>
                <li>
                  <strong>Avokado:</strong> Persin içerir, zehirlidir
                </li>
                <li>
                  <strong>Ksilitol (yapay tatlandırıcı):</strong> Hipoglisemiye neden olur
                </li>
                <li>
                  <strong>Makadamia cevizi:</strong> Zehirlidir
                </li>
                <li>
                  <strong>Alkol:</strong> Çok zehirlidir
                </li>
              </ul>

              <h2>Porsiyon Kontrolü ve Obezite</h2>

              <p>
                Obezite, evcil hayvanlar arasında yaygın bir sorundur ve birçok hastalığa yol açabilir.
              </p>

              <ul>
                <li>
                  <strong>Mama paketindeki önerilere uyun:</strong> Hayvanın ağırlığına göre porsiyon
                  belirleyin
                </li>
                <li>
                  <strong>Düzenli kilo takibi:</strong> Ayda bir kilo kontrol edin
                </li>
                <li>
                  <strong>Obeziteden kaçının:</strong> Obez hayvanlar daha fazla hastalığa yatkındır
                </li>
                <li>
                  <strong>Ödülleri hesaba katın:</strong> Ödüller günlük kalori alımının %10'unu
                  geçmemelidir
                </li>
                <li>
                  <strong>Düzenli egzersiz:</strong> Günlük yürüyüş ve oyun şarttır
                </li>
              </ul>

              <h2>Beslenme Sorunları ve Çözümleri</h2>

              <h3>Duyarlı Sindirim</h3>
              <p>
                Bazı hayvanlar belirli yiyeceklere duyarlı olabilir. Bu durumda veterineriniz özel diyet
                önerebilir.
              </p>

              <h3>Gıda Alerjileri</h3>
              <p>
                Kaşıntı, cilt problemleri veya sindirim sorunları gıda alerjisinin belirtileri olabilir.
              </p>

              <h2>Ümraniye Beslenme Danışmanlığı</h2>

              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali'de evcil hayvanlarınız için
                beslenme danışmanlığı hizmeti sunuyoruz. Hayvanınızın özel ihtiyaçlarına göre beslenme
                planı oluşturabiliriz.
              </p>

              <div className="mt-8 rounded-lg bg-primary/10 p-6">
                <h3 className="mb-2 text-xl font-bold">Beslenme Danışmanlığı Randevusu</h3>
                <p className="mb-4 text-muted-foreground">
                  Evcil hayvanınızın beslenme ihtiyaçları hakkında profesyonel danışmanlık alın.
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
