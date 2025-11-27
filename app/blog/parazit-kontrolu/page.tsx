import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Evcil Hayvanlarda Parazit Kontrolü | Pire Kene İlaçlaması Ümraniye",
  description:
    "Pire, kene, iç parazitler ve korunma yöntemleri. Düzenli ilaçlama programı ve parazit belirtilerini tanıma. Ümraniye veteriner parazit tedavisi.",
  keywords:
    "pire kene ilacı, iç parazit ilaçlaması, köpek pire tedavisi, kedi kene, parazit kontrolü ümraniye, kalp kurdu, bağırsak solucanı",
}

export default function ParazitKontroluPage() {
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
                <span>10 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Evcil Hayvanlarda Parazit Kontrolü: İç ve Dış Parazitler
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Evcil hayvanlarınızın sağlığı için parazit kontrolü hayati önem taşır. Pire, kene ve iç
                parazitler ciddi hastalıklara neden olabilir. İşte parazitlerden korunmanın yolları.
              </p>

              <h2>Dış Parazitler</h2>

              <h3>Pire (Flea)</h3>
              <p>
                Pireler, evcil hayvanların en yaygın dış parazitleridir. Özellikle bahar ve yaz aylarında
                hızla çoğalırlar. Pireler sadece kaşıntıya neden olmakla kalmaz, aynı zamanda hastalık
                taşıyıcısı olabilirler.
              </p>

              <p>
                <strong>Pire belirtileri:</strong>
              </p>
              <ul>
                <li>Aşırı kaşıntı ve cilt tahrişi</li>
                <li>Tüylerde siyah tanecikler (pire dışkısı)</li>
                <li>Alerjik dermatit</li>
                <li>Anemi (ağır enfestasyonda)</li>
                <li>Tüy dökülmesi</li>
              </ul>

              <p>
                <strong>Pire kontrolü:</strong> Aylık pire önleyici ilaçlar (spot-on, tablet veya tasma)
                kullanılmalıdır. Özellikle bahar-yaz aylarında düzenli uygulama şarttır. Evinizi de
                temizlemek önemlidir çünkü pireler ortamda da yaşayabilir.
              </p>

              <h3>Kene (Tick)</h3>
              <p>
                Keneler, özellikle ormanlık ve çiçekli alanlarda yaşayan parazitlerdir. Keneler sadece
                kaşıntıya neden olmakla kalmaz, aynı zamanda Lyme hastalığı, Ehrlichiosis gibi ciddi
                hastalıkları da taşıyabilirler.
              </p>

              <p>
                <strong>Kene belirtileri:</strong>
              </p>
              <ul>
                <li>Cilt üzerinde görünen kene</li>
                <li>Kaşıntı ve cilt irritasyonu</li>
                <li>Ateş ve halsizlik (hastalık taşıyorsa)</li>
                <li>Eklem ağrıları</li>
              </ul>

              <p>
                <strong>Kene kontrolü:</strong> Günlük tüy kontrolü yapın, özellikle kulak, boyun ve bacak
                aralarında. Keneyi çıkarırken başını kırmamaya dikkat edin. Aylık kene önleyici ilaçlar
                kullanın.
              </p>

              <h2>İç Parazitler</h2>

              <h3>Bağırsak Solucanları</h3>
              <p>
                Bağırsak solucanları (roundworm, hookworm, tapeworm) evcil hayvanların en yaygın iç
                parazitleridir. Özellikle yavru hayvanlar risk altındadır.
              </p>

              <p>
                <strong>Belirtiler:</strong>
              </p>
              <ul>
                <li>İshal (bazen kanlı)</li>
                <li>Kusma</li>
                <li>Kilo kaybı</li>
                <li>Karında şişlik</li>
                <li>Dışkıda solucan görülmesi</li>
              </ul>

              <h3>Kalp Kurdu (Heartworm)</h3>
              <p>
                Kalp kurdu, sivrisinekler tarafından taşınan ve kalbi etkileyen ciddi bir parazittir.
                Tedavi edilmezse ölümcül olabilir.
              </p>

              <p>
                <strong>Belirtiler:</strong>
              </p>
              <ul>
                <li>Öksürük</li>
                <li>Halsizlik ve yorgunluk</li>
                <li>Solunum güçlüğü</li>
                <li>Kalp yetmezliği belirtileri</li>
              </ul>

              <h2>Parazit Kontrolü Programı</h2>

              <h3>Yavru Hayvanlar</h3>
              <ul>
                <li>2 haftada bir iç parazit ilaçlaması (8 haftaya kadar)</li>
                <li>Aylık pire-kene önleyici (8 haftadan sonra)</li>
                <li>Kalp kurdu önleyici (bölgeye göre)</li>
              </ul>

              <h3>Yetişkin Hayvanlar</h3>
              <ul>
                <li>3 ayda bir iç parazit ilaçlaması</li>
                <li>Aylık pire-kene önleyici (özellikle bahar-yaz)</li>
                <li>Yıllık kalp kurdu önleyici</li>
                <li>Yılda 1-2 kez dışkı analizi</li>
              </ul>

              <h2>Ev Hijyeni</h2>

              <p>
                Parazit kontrolü sadece hayvanınızı ilaçlamakla sınırlı değildir. Evinizi de temiz tutmak
                önemlidir:
              </p>

              <ul>
                <li>Hayvanın yatağını haftada bir yıkayın</li>
                <li>Halı ve döşemeleri düzenli süpürün</li>
                <li>Bahçeyi temiz tutun</li>
                <li>Dışkıları hemen temizleyin</li>
              </ul>

              <h2>Ümraniye Parazit Kontrolü Hizmeti</h2>

              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali'de parazit kontrolü ve tedavisi
                konusunda profesyonel hizmet sunuyoruz. Hayvanınızın parazit durumunu belirlemek için
                dışkı analizi yapabiliriz ve uygun tedavi planı oluşturabiliriz.
              </p>

              <div className="mt-8 rounded-lg bg-primary/10 p-6">
                <h3 className="mb-2 text-xl font-bold">Parazit Kontrolü Randevusu</h3>
                <p className="mb-4 text-muted-foreground">
                  Evcil hayvanınızın parazit kontrolü için hemen arayın.
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
