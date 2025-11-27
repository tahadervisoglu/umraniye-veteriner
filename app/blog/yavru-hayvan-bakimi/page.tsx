import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Yavru Kedi ve Köpek Bakımı | Puppy Kitten Care Ümraniye",
  description:
    "Yeni yavru sahiplenenlere özel bakım rehberi. İlk veteriner kontrolü, sosyalleşme, tuvalet eğitimi ve temel bakım. Ümraniye yavru hayvan veterineri.",
  keywords:
    "yavru köpek bakımı, yavru kedi bakımı, puppy care, kitten care ümraniye, yavru eğitimi, sosyalleşme",
}

export default function YavruHayvanPage() {
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
                <span>6 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Yavru Kedi ve Köpek Bakımı: İlk Günlerden İtibaren Rehber
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Yeni bir yavru sahiplenme, heyecan verici ama sorumluluğu da beraberinde getiren bir
                deneyimdir. İlk günlerden itibaren doğru bakım ve eğitim, yavrularınızın sağlıklı ve
                mutlu bir yaşam sürmesini sağlar.
              </p>

              <h2>İlk Günler: Eve Gelişte Yapılacaklar</h2>

              <p>
                Yavrunuz eve geldikten sonra ilk günler çok önemlidir. Yavrular yeni ortamda stres
                yaşayabilir. Sakin ve güvenli bir ortam hazırlamak önemlidir.
              </p>

              <ul>
                <li>
                  <strong>Sakin bir ortam hazırlayın:</strong> Yavrunuzu aşırı uyarıcılardan uzak tutun
                </li>
                <li>
                  <strong>Güvenli bir alan oluşturun:</strong> Yavrular meraklıdır, tehlikeli nesneleri
                  uzak tutun
                </li>
                <li>
                  <strong>Su ve yem kapları yerleştirin:</strong> Kolay erişilebilir yerlere koyun
                </li>
                <li>
                  <strong>Tuvalet/kum kabı hazırlayın:</strong> Yavrunun hemen bulabileceği yerde
                </li>
                <li>
                  <strong>Yumuşak yatak:</strong> Rahat uyuması için
                </li>
              </ul>

              <h2>İlk Veteriner Kontrolü - ÇOK ÖNEMLİ!</h2>

              <p>
                Eve geldikten sonraki ilk 48 saat içinde veteriner kontrolü şarttır. Bu kontrol, yavrularınızın
                sağlığını belirlemek ve hastalıkları erken teşhis etmek için kritiktir.
              </p>

              <ul>
                <li>
                  <strong>Genel sağlık muayenesi:</strong> Kalp, akciğer, göz, kulak kontrolü
                </li>
                <li>
                  <strong>Parazit kontrolü:</strong> Dışkı analizi
                </li>
                <li>
                  <strong>Aşı programı planlaması:</strong> Yavrularınızın aşı takvimi
                </li>
                <li>
                  <strong>Beslenme önerileri:</strong> Yaşa ve ırka uygun mama
                </li>
                <li>
                  <strong>Kısırlaştırma zamanı:</strong> Doğru yaş hakkında bilgi
                </li>
              </ul>

              <h2>Beslenme</h2>

              <h3>Yavru Kedi (0-12 ay)</h3>

              <p>
                Yavru kediler hızlı büyüdükleri için yüksek kaliteli beslenmeye ihtiyaç duyarlar.
              </p>

              <ul>
                <li>
                  <strong>Özel yavru kedi maması:</strong> Yetişkin maması değil, yavru maması kullanın
                </li>
                <li>
                  <strong>Günde 3-4 öğün:</strong> 6 aylıktan sonra 2-3 öğüne düşürebilirsiniz
                </li>
                <li>
                  <strong>Bol su:</strong> Taze su her zaman erişilebilir olmalı
                </li>
                <li>
                  <strong>Islak mama:</strong> Hidrasyon için ıslak mama da verilebilir
                </li>
              </ul>

              <h3>Yavru Köpek (0-12 ay)</h3>

              <ul>
                <li>
                  <strong>Irka uygun yavru maması:</strong> Büyük ırk köpekler için özel formüller vardır
                </li>
                <li>
                  <strong>Günde 3-4 öğün:</strong> Yaşa göre azaltılır
                </li>
                <li>
                  <strong>Porsiyon kontrolü:</strong> Aşırı beslenme eklem problemlerine yol açabilir
                </li>
                <li>
                  <strong>Taze su:</strong> Her zaman erişilebilir olmalı
                </li>
              </ul>

              <h2>Tuvalet Eğitimi</h2>

              <h3>Yavru Kedi</h3>

              <p>
                Kediler doğal olarak tuvalet eğitimi almaya yatkındır. Kum kabı kullanmak onlar için
                içgüdüseldir.
              </p>

              <ul>
                <li>
                  <strong>Kum kabını sessiz yere koyun:</strong> Yaşam alanından uzak
                </li>
                <li>
                  <strong>Yemekten sonra kuma götürün:</strong> Uyandıktan sonra da
                </li>
                <li>
                  <strong>Günlük temizlik:</strong> Kedi temiz bir kum kabı tercih eder
                </li>
                <li>
                  <strong>Ödül sistemi:</strong> Kum kabını kullandığında ödüllendir
                </li>
              </ul>

              <h3>Yavru Köpek</h3>

              <p>
                Köpek tuvalet eğitimi sabır ve tutarlılık gerektirir. Ortalama 4-6 ay sürer.
              </p>

              <ul>
                <li>
                  <strong>Düzenli dışarı çıkarma:</strong> Yemekten sonra, uyandıktan sonra, uyumadan önce
                </li>
                <li>
                  <strong>Ödül sistemi:</strong> Dışarıda tuvalet yaptığında ödüllendir
                </li>
                <li>
                  <strong>Sabırlı olun:</strong> Kazalar normaldir, asla cezalandırmayın
                </li>
                <li>
                  <strong>Tutarlılık:</strong> Aynı yerlerde dışarı çıkarın
                </li>
              </ul>

              <h2>Sosyalleşme - Kritik Dönem!</h2>

              <p>
                8-16 hafta arası sosyalleşme dönemi, yavrularınızın kişiliğini şekillendiren en önemli
                dönemdir. Bu dönemde yavrularınızı farklı insanlar, hayvanlar ve ortamlarla tanıştırmalısınız.
              </p>

              <ul>
                <li>
                  <strong>Farklı insanlarla tanıştırın:</strong> Çocuklar, yaşlılar, farklı görünüşte insanlar
                </li>
                <li>
                  <strong>Diğer hayvanlarla kontrollü tanışma:</strong> Aşılı hayvanlarla
                </li>
                <li>
                  <strong>Farklı ortamlara alıştırın:</strong> Park, sokak, araba
                </li>
                <li>
                  <strong>Farklı sesler:</strong> Elektrik süpürgesi, çamaşır makinesi sesleri
                </li>
              </ul>

              <h2>Temel Eğitim</h2>

              <ul>
                <li>
                  <strong>İsim öğretimi:</strong> Yavrularınızın ismini sık sık söyleyin
                </li>
                <li>
                  <strong>Temel komutlar:</strong> "Otur", "Kal", "Gel" gibi komutlar
                </li>
                <li>
                  <strong>Tasma alıştırma:</strong> Köpekler için tasma ve tasma yürüyüşü
                </li>
                <li>
                  <strong>Pozitif pekiştirme:</strong> Ödüller ve övgü kullanın
                </li>
              </ul>

              <h2>Sağlık Takibi</h2>

              <ul>
                <li>
                  <strong>Haftalık kilo kontrolü:</strong> Sağlıklı büyümeyi takip edin
                </li>
                <li>
                  <strong>Aşı takvimi takibi:</strong> Veterinerinizin önerdiği programa uyun
                </li>
                <li>
                  <strong>Parazit ilaçlaması:</strong> Düzenli olarak yapılmalı
                </li>
                <li>
                  <strong>Düzenli veteriner kontrolleri:</strong> Ayda bir kontrol
                </li>
              </ul>

              <h2>Ümraniye Yavru Hayvan Bakımı</h2>

              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali'de yavru hayvanlarınızın bakımı
                konusunda profesyonel hizmet sunuyoruz. Yavru eğitimi, sosyalleşme ve sağlık kontrolleri
                hakkında danışmanlık alabilirsiniz.
              </p>

              <div className="mt-8 rounded-lg bg-primary/10 p-6">
                <h3 className="mb-2 text-xl font-bold">Yavru Hayvan Kontrolü Randevusu</h3>
                <p className="mb-4 text-muted-foreground">
                  Yeni yavrunuz için ilk veteriner kontrolü randevusu alın. Sağlıklı bir başlangıç çok
                  önemlidir.
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
