import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Yaşlı Kedi ve Köpek Bakımı | Senior Pet Care Ümraniye",
  description:
    "7 yaş üstü evcil hayvanların özel bakım ihtiyaçları. Eklem sağlığı, beslenme değişiklikleri ve düzenli kontroller. Ümraniye yaşlı hayvan veterineri.",
  keywords:
    "yaşlı köpek bakımı, senior kedi, yaşlı hayvan veterineri ümraniye, eklem sağlığı, artrit, yaşlı hayvan beslenme",
}

export default function YasliHayvanPage() {
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
                <span>8 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>7 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Yaşlı Kedi ve Köpek Bakımı: Özel İhtiyaçlar ve Sağlık Kontrolleri
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Evcil hayvanlarınız yaşlandıkça, bakım ihtiyaçları değişir. Yaşlı hayvanlar daha fazla
                dikkat, sevgi ve profesyonel veteriner bakımına ihtiyaç duyarlar. İşte yaşlı evcil
                hayvanlarınızın yaşam kalitesini artırmak için bilmeniz gerekenler.
              </p>

              <h2>Yaşlılık Başlangıcı</h2>

              <p>
                Evcil hayvanlar yaşlandıkça, yaşlılık başlangıç yaşı türe ve ırka göre değişir:
              </p>

              <ul>
                <li>
                  <strong>Kediler:</strong> 7 yaş ve üzeri
                </li>
                <li>
                  <strong>Küçük ırk köpekler:</strong> 7-10 yaş
                </li>
                <li>
                  <strong>Orta boy köpekler:</strong> 6-8 yaş
                </li>
                <li>
                  <strong>Büyük ırk köpekler:</strong> 5-7 yaş
                </li>
              </ul>

              <p>
                Büyük ırk köpekler daha hızlı yaşlanırlar. Bu nedenle büyük köpeklerde yaşlılık belirtileri
                daha erken görülür.
              </p>

              <h2>Yaşlılık Belirtileri</h2>

              <p>
                Evcil hayvanınızda aşağıdaki belirtileri fark ederseniz, yaşlılık dönemine girmiş demektir:
              </p>

              <ul>
                <li>
                  <strong>Aktivite azalması:</strong> Daha az oynamak, daha çok uyumak
                </li>
                <li>
                  <strong>Eklem sertliği:</strong> Sabahları hareket etmekte zorluk
                </li>
                <li>
                  <strong>Kilo değişiklikleri:</strong> Kilo kaybı veya kazanımı
                </li>
                <li>
                  <strong>Görme ve işitme kaybı:</strong> Tepki verme hızında azalma
                </li>
                <li>
                  <strong>Bilişsel değişiklikler:</strong> Kafa karışıklığı, desorientasyon
                </li>
                <li>
                  <strong>Tüy kalitesinde değişim:</strong> Daha mat ve kuru tüyler
                </li>
                <li>
                  <strong>Diş kaybı:</strong> Diş hastalıkları
                </li>
              </ul>

              <h2>Beslenme Değişiklikleri</h2>

              <p>
                Yaşlı hayvanların metabolizması yavaşlar ve beslenme ihtiyaçları değişir. Senior mama
                kullanmak önemlidir:
              </p>

              <ul>
                <li>
                  <strong>Senior mama:</strong> Yaşlı hayvanlar için özel formüle edilmiş
                </li>
                <li>
                  <strong>Daha az kalori:</strong> Aktivite azaldığı için daha az kalori gerekir
                </li>
                <li>
                  <strong>Yüksek kaliteli protein:</strong> Kas kaybını önlemek için
                </li>
                <li>
                  <strong>Eklem destekleyiciler:</strong> Glukozamin ve kondroitin içeren mamalar
                </li>
                <li>
                  <strong>Kolay sindirilebilir:</strong> Sindirim sistemi daha hassas hale gelir
                </li>
                <li>
                  <strong>Daha küçük porsiyonlar:</strong> Günde 2-3 küçük öğün
                </li>
              </ul>

              <h2>Sağlık Kontrolleri</h2>

              <p>
                Yaşlı hayvanlar daha sık veteriner kontrolüne ihtiyaç duyarlar. Erken teşhis, ciddi
                hastalıkları önleyebilir:
              </p>

              <ul>
                <li>
                  <strong>6 ayda bir veteriner kontrolü:</strong> Yıllık kontrol yerine
                </li>
                <li>
                  <strong>Yıllık kan tahlilleri:</strong> Böbrek, karaciğer ve tiroid fonksiyonları
                </li>
                <li>
                  <strong>Diş kontrolü:</strong> Diş hastalıkları genel sağlığı etkiler
                </li>
                <li>
                  <strong>Eklem muayenesi:</strong> Artrit ve ağrı değerlendirmesi
                </li>
                <li>
                  <strong>Kan basıncı ölçümü:</strong> Hipertansiyon kontrolü
                </li>
              </ul>

              <h2>Konfor ve Yaşam Kalitesi</h2>

              <p>
                Yaşlı hayvanların yaşam kalitesini artırmak için ev ortamını uyarlamak önemlidir:
              </p>

              <ul>
                <li>
                  <strong>Yumuşak yatak:</strong> Ortopedik yatak eklem ağrısını azaltır
                </li>
                <li>
                  <strong>Kolay erişilebilir su ve yem:</strong> Yüksekçe yerleştirin
                </li>
                <li>
                  <strong>Düşük kenarlı kum kabı:</strong> Kediler için giriş çıkış kolaylaştırır
                </li>
                <li>
                  <strong>Sıcak ortam:</strong> Yaşlı hayvanlar soğuya daha duyarlı
                </li>
                <li>
                  <strong>Merdiven/rampa:</strong> Yüksek yerlere çıkmayı kolaylaştırır
                </li>
                <li>
                  <strong>Düzenli egzersiz:</strong> Hafif yürüyüşler kas kaybını önler
                </li>
              </ul>

              <h2>Yaşlı Hayvan Hastalıkları</h2>

              <p>
                Yaşlı hayvanlar bazı hastalıklara daha yatkındır. Erken teşhis tedaviyi kolaylaştırır:
              </p>

              <ul>
                <li>Böbrek hastalığı</li>
                <li>Diyabet</li>
                <li>Hipertansiyon</li>
                <li>Artrit</li>
                <li>Kanser</li>
                <li>Bilişsel disfonksiyon (demans)</li>
              </ul>

              <h2>Ümraniye Yaşlı Hayvan Bakımı</h2>

              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali'de yaşlı evcil hayvanların özel
                bakımı konusunda uzman hizmet sunuyoruz. Yaşlı hayvanınızın sağlığını korumak ve yaşam
                kalitesini artırmak için bizi arayın.
              </p>

              <div className="mt-8 rounded-lg bg-primary/10 p-6">
                <h3 className="mb-2 text-xl font-bold">Yaşlı Hayvan Kontrolü Randevusu</h3>
                <p className="mb-4 text-muted-foreground">
                  Yaşlı evcil hayvanınız için profesyonel bakım ve kontrol hizmeti alın.
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
