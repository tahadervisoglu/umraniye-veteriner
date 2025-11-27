import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Kedi ve Köpeklerde Diş Sağlığı | Diş Temizliği Ümraniye Veteriner",
  description:
    "Evcil hayvanlarınızın diş sağlığı için yapmanız gerekenler. Diş taşı, diş eti hastalıkları ve profesyonel diş temizliği. Ümraniye veteriner diş bakımı.",
  keywords:
    "köpek diş temizliği, kedi diş taşı, veteriner diş bakımı ümraniye, evcil hayvan diş sağlığı, diş eti hastalığı, ağız kokusu",
}

export default function DisSagligiPage() {
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
                <span>9 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>6 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Kedi ve Köpeklerde Diş Sağlığı: Temizlik ve Bakım İpuçları
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Evcil hayvanlarınızın diş sağlığı, genel sağlıkları kadar önemlidir. Diş problemleri
                enfeksiyonlara ve ciddi hastalıklara yol açabilir. İşte diş sağlığını korumak için
                bilmeniz gerekenler.
              </p>

              <h2>Diş Sağlığının Önemi</h2>

              <p>
                Evcil hayvanların %80'inde 3 yaşına kadar diş problemi gelişir. Diş hastalıkları sadece
                ağız problemleriyle sınırlı değildir. Diş eti enfeksiyonları kan yoluyla kalbe, böbreklere
                ve karaciğere ulaşabilir. Bu nedenle düzenli diş bakımı genel sağlık için kritiktir.
              </p>

              <p>
                Kedilerde diş hastalıkları özellikle yaygındır. Kedi diş hastalıkları genellikle sessiz
                sedasız ilerler ve sahibi fark etmeyebilir. Köpeklerde ise diş taşı birikimi daha belirgin
                olur.
              </p>

              <h2>Diş Hastalıkları Belirtileri</h2>

              <p>
                Evcil hayvanınızda aşağıdaki belirtileri fark ederseniz veterinere başvurun:
              </p>

              <ul>
                <li>
                  <strong>Kötü ağız kokusu:</strong> En yaygın ilk belirtidir
                </li>
                <li>
                  <strong>Diş taşı ve plak:</strong> Dişlerde sarı-kahverengi renkli birikinti
                </li>
                <li>
                  <strong>Kırmızı ve şiş diş etleri:</strong> Enfeksiyon belirtisi
                </li>
                <li>
                  <strong>Yemek yerken zorluk:</strong> Ağrı nedeniyle yavaş yemek
                </li>
                <li>
                  <strong>Diş kaybı:</strong> İleri aşama hastalık
                </li>
                <li>
                  <strong>Ağızdan kanama:</strong> Ciddi diş eti hastalığı
                </li>
                <li>
                  <strong>Yüzde şişlik:</strong> Apse oluşumu
                </li>
              </ul>

              <h2>Evde Diş Bakımı</h2>

              <h3>Diş Fırçalama</h3>
              <p>
                Diş fırçalama, evcil hayvanların diş sağlığını korumak için en etkili yöntemdir. İdeal
                olarak günlük, en az haftada 2-3 kez yapılmalıdır.
              </p>

              <ul>
                <li>Özel evcil hayvan diş macunu kullanın (insan macunu zehirli olabilir)</li>
                <li>Yumuşak kılı diş fırçası seçin</li>
                <li>Kısa, hafif hareketlerle fırçalayın</li>
                <li>Diş etlerine de dikkat edin</li>
                <li>Hayvanınızı alıştırmak için sabırlı olun</li>
              </ul>

              <h3>Diş Temizleyici Ürünler</h3>
              <ul>
                <li>Diş temizleyici ödüller (dental chews)</li>
                <li>Diş temizleyici oyuncaklar</li>
                <li>Özel diş temizleyici sprey</li>
                <li>Diş temizleyici su katkıları</li>
              </ul>

              <h3>Beslenme</h3>
              <p>
                Kuru mama, ıslak mamaya göre diş sağlığı için daha iyidir. Çiğneme hareketi diş taşını
                azaltmaya yardımcı olur.
              </p>

              <h2>Profesyonel Diş Temizliği</h2>

              <p>
                Evde yapılan bakım yeterli olmayabilir. Yılda en az 1 kez veteriner kontrolü ve gerekirse
                profesyonel diş temizliği önerilir.
              </p>

              <p>
                <strong>Profesyonel diş temizliği:</strong> Ultrasonik cihazlarla diş taşı ve plak
                çıkarılır. Bu işlem genel anestezi altında yapılır ve tamamen güvenlidir.
              </p>

              <h2>Yaşlı Hayvanlar ve Diş Sağlığı</h2>

              <p>
                Yaşlı hayvanlar diş hastalıklarına daha yatkındır. 7 yaş üstü hayvanlar için 6 ayda bir
                diş kontrolü önerilir. Diş hastalıkları yaşlı hayvanların beslenme ve genel sağlığını
                olumsuz etkileyebilir.
              </p>

              <h2>Ümraniye Diş Bakımı Hizmeti</h2>

              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali'de profesyonel diş temizliği ve
                tedavisi hizmetleri sunuyoruz. Modern ultrasonik cihazlarımızla ve deneyimli ekibimizle
                evcil hayvanınızın diş sağlığını koruyoruz.
              </p>

              <div className="mt-8 rounded-lg bg-primary/10 p-6">
                <h3 className="mb-2 text-xl font-bold">Diş Kontrolü Randevusu</h3>
                <p className="mb-4 text-muted-foreground">
                  Evcil hayvanınızın diş sağlığı için profesyonel kontrol ve temizlik hizmeti alın.
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
