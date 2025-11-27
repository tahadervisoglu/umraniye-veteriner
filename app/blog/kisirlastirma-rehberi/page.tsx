import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Kedi ve Köpek Kısırlaştırma Rehberi 2025 | Ümraniye Veteriner",
  description:
    "Kısırlaştırma ameliyatı hakkında merak ettikleriniz. Operasyon öncesi hazırlık, ameliyat sonrası bakım ve sağlık faydaları. Ümraniye kısırlaştırma fiyatları ve randevu.",
  keywords:
    "kısırlaştırma ümraniye, kedi kısırlaştırma, köpek kısırlaştırma, sterilizasyon istanbul, kastrasyon, ovariohisterektomi",
}

export default function KisirlaştirmaPage() {
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
                <span>11 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>6 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Kedi ve Köpek Kısırlaştırma: Faydaları ve Bakım Süreci
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Kısırlaştırma, evcil hayvanınızın sağlığı ve yaşam kalitesi için önemli bir karardır.
                Ümraniye&apos;deki kliniğimizde uzman veteriner ekibimizle güvenli kısırlaştırma
                operasyonları gerçekleştiriyoruz. İşte bilmeniz gereken her şey.
              </p>

              <h2>Kısırlaştırma Nedir?</h2>
              <p>
                Kısırlaştırma, evcil hayvanların üreme organlarının cerrahi olarak çıkarılması işlemidir.
                Bu işlem hem dişi hem de erkek hayvanlarda uygulanabilir ve hayvanınızın sağlığı için
                birçok fayda sağlar.
              </p>

              <p>
                <strong>Dişi hayvanlarda</strong> ovariohisterektomi adı verilen ameliyatla yumurtalıklar
                ve rahim alınır. <strong>Erkek hayvanlarda</strong> ise kastrasyon işlemiyle testisler
                cerrahi olarak çıkarılır. Her iki işlem de genel anestezi altında gerçekleştirilir ve
                deneyimli veteriner hekimler tarafından yapıldığında oldukça güvenlidir.
              </p>

              <h2>Kısırlaştırmanın Sağlık Faydaları</h2>

              <h3>Dişi Hayvanlar İçin Faydalar</h3>
              <p>
                Dişi kedi ve köpeklerde kısırlaştırma, birçok ciddi sağlık problemini önler. İlk
                kızgınlıktan önce yapılan kısırlaştırma, meme tümörü riskini %90 oranında azaltır. Meme
                tümörleri özellikle kedilerde oldukça agresif seyredebilir ve erken kısırlaştırma bu riski
                neredeyse tamamen ortadan kaldırır.
              </p>

              <p>
                Ayrıca, kısırlaştırma rahim enfeksiyonlarını (pyometra) tamamen önler. Pyometra, yaşlı
                kısırlaştırılmamış dişi hayvanlarda sık görülen, hayati tehlike oluşturan bir durumdur.
                Kısırlaştırılmış hayvanlarda bu risk sıfıra iner.
              </p>

              <h3>Erkek Hayvanlar İçin Faydalar</h3>
              <p>
                Erkek hayvanlarda kastrasyon, testis kanseri riskini tamamen ortadan kaldırır. Ayrıca
                prostat büyümesi ve prostat enfeksiyonları gibi yaşlılıkta görülen problemlerin önüne
                geçer. Kastrasyon sonrası erkek hayvanlar daha sakin ve uyumlu hale gelir.
              </p>

              <h2>Davranışsal Faydalar</h2>

              <p>
                Kısırlaştırma, evcil hayvanınızın davranışlarında olumlu değişikliklere yol açar. Dişi
                hayvanlarda kızgınlık dönemleri tamamen ortadan kalkar, bu da hem hayvanınız hem de siz için
                daha rahat bir yaşam anlamına gelir. Kızgınlık dönemlerinde görülen huzursuzluk, miyavlama
                ve kaçma girişimleri son bulur.
              </p>

              <p>
                Erkek hayvanlarda ise agresif davranışlar belirgin şekilde azalır. Özellikle diğer erkek
                hayvanlarla kavga etme eğilimi düşer. İdrar ile işaretleme davranışı (evde veya dışarıda
                idrar sıkma) büyük oranda azalır veya tamamen ortadan kalkar. Kaçma ve gezinme isteği de
                azaldığı için hayvanınız daha güvende olur.
              </p>

              <h2>Kısırlaştırma İçin Doğru Yaş</h2>

              <p>
                <strong>Kediler:</strong> Kedilerde ideal kısırlaştırma yaşı 5-6 aylıktır. Bu yaşta
                yapılan kısırlaştırma, ilk kızgınlıktan önce gerçekleştirildiği için sağlık faydaları
                maksimum düzeydedir. Ancak daha yaşlı kediler de güvenle kısırlaştırılabilir.
              </p>

              <p>
                <strong>Köpekler:</strong> Köpeklerde kısırlaştırma yaşı ırka göre değişiklik gösterir.
                Küçük ırk köpeklerde 6 aylık, orta boy köpeklerde 6-9 aylık, büyük ırk köpeklerde ise 9-12
                aylık yaş önerilir. Veterineriniz, köpeğinizin ırkına ve gelişimine göre en uygun zamanı
                belirleyecektir.
              </p>

              <h2>Ameliyat Öncesi Hazırlık</h2>

              <p>
                Kısırlaştırma ameliyatı öncesinde bazı hazırlıklar yapılması gerekir. Ameliyattan 12 saat
                önce hayvanınızı aç bırakmalısınız. Bu, anestezi sırasında kusma riskini azaltır. Su ise
                ameliyattan 2 saat önce kesilmelidir.
              </p>

              <p>
                Ameliyat öncesinde veterineriniz genel bir sağlık kontrolü yapacaktır. Kalp ve akciğer
                muayenesi, genel durum değerlendirmesi gibi kontroller rutin olarak yapılır. Yaşlı
                hayvanlarda veya sağlık problemi olan hayvanlarda kan tahlilleri istenerek anestezi riski
                değerlendirilir.
              </p>

              <h2>Ameliyat Süreci</h2>

              <p>
                Kısırlaştırma ameliyatı genel anestezi altında gerçekleştirilir. Dişi hayvanlarda ameliyat
                süresi yaklaşık 30-45 dakika, erkek hayvanlarda ise 15-20 dakika sürer. Modern anestezi
                teknikleri sayesinde ameliyat oldukça güvenlidir.
              </p>

              <p>
                Ameliyat sonrası hayvanınız birkaç saat içinde uyanır ve aynı gün eve götürülebilir. Bazı
                durumlarda, özellikle dişi hayvanlarda, bir gece gözlem için klinikte kalması istenebilir.
              </p>

              <h2>Ameliyat Sonrası Bakım</h2>

              <p>
                Ameliyat sonrası ilk 24 saat hayvanınızı yakından takip etmelisiniz. Sakin bir ortamda
                dinlenmesini sağlayın. Elizabet yakalık (koruyucu koni) kullanımı, hayvanınızın dikişleri
                yalamasını ve enfeksiyon riskini önlemek için 10-14 gün boyunca şarttır.
              </p>

              <p>
                Veterineriniz ağrı kesici ilaçlar reçete edecektir. Bu ilaçları düzenli olarak verin.
                Ameliyat bölgesini günlük kontrol edin, kızarıklık, şişlik veya akıntı varsa hemen
                veterinerinize başvurun.
              </p>

              <p>
                Dikişler genellikle 10-14 gün sonra alınır. Bu süre zarfında hayvanınızın aşırı hareketli
                olmasını engelleyin. Köpeklerde kısa tasma yürüyüşleri yapabilirsiniz ancak koşturma ve
                zıplama yasaktır.
              </p>

              <h2>Kısırlaştırma Sonrası Beslenme</h2>

              <p>
                Kısırlaştırma sonrası hayvanların metabolizması yavaşlar ve kilo alma eğilimi artar. Bu
                nedenle porsiyon kontrolü önemlidir. Kısırlaştırılmış hayvanlar için özel olarak formüle
                edilmiş mamalar kullanabilirsiniz. Düzenli egzersiz ve oyun, ideal kilonun korunmasına
                yardımcı olur.
              </p>

              <h2>Ümraniye Kısırlaştırma Hizmeti</h2>

              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali&apos;de modern ekipmanlarla donatılmış
                ameliyathanemizde güvenli kısırlaştırma operasyonları gerçekleştiriyoruz. Deneyimli
                veteriner hekimlerimiz ve anestezi uzmanımızla hayvanınızın sağlığı bizim önceliğimizdir.
              </p>

              <p>
                Ameliyat öncesi detaylı bilgilendirme, ameliyat sırası profesyonel bakım ve ameliyat sonrası
                takip hizmetlerimizle yanınızdayız. Kısırlaştırma fiyatları ve randevu için bizi arayın.
              </p>

              <div className="mt-8 rounded-lg bg-primary/10 p-6">
                <h3 className="mb-2 text-xl font-bold">Kısırlaştırma Randevusu Alın</h3>
                <p className="mb-4 text-muted-foreground">
                  Evcil hayvanınızın kısırlaştırma işlemi için detaylı bilgi alın ve randevu oluşturun.
                  Ümraniye&apos;de güvenilir veteriner hizmeti.
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
