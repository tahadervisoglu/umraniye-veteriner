import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Köpek Bakımı ve Sağlık Rehberi 2025 | Ümraniye Köpek Veterineri",
  description:
    "Köpek aşıları, beslenme, egzersiz ve sağlık kontrolleri hakkında uzman veteriner tavsiyeleri. Yavru köpek bakımı ve yaşlı köpek sağlığı. İstanbul Anadolu Yakası köpek veterineri.",
  keywords:
    "köpek veterineri ümraniye, köpek aşısı istanbul, yavru köpek bakımı, köpek kuduz aşısı, köpek karma aşısı, köpek sağlık kontrolü, ümraniye köpek doktoru",
}

export default function KopekBakimiPage() {
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
                <span>13 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>7 dk okuma</span>
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Köpek Bakımı ve Sağlık Rehberi: Ümraniye Veteriner Tavsiyeleri
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Köpeğinizin sağlıklı ve mutlu bir yaşam sürmesi için bilmeniz gereken temel bakım kuralları,
                aşılama programı ve sağlık kontrolleri hakkında kapsamlı rehber.
              </p>

              <h2>Yavru Köpek Aşı Takvimi</h2>
              <p>
                Yavru köpeklerin bağışıklık sisteminin güçlenmesi için doğru zamanda aşılanması hayati önem
                taşır. İşte önerilen aşı programı:
              </p>

              <h3>6-8 Haftalık</h3>
              <ul>
                <li>İlk karma aşı (Parvo, Distemper, Hepatit)</li>
                <li>Genel sağlık muayenesi</li>
                <li>İç parazit ilaçlaması</li>
              </ul>

              <h3>10-12 Haftalık</h3>
              <ul>
                <li>İkinci karma aşı (rapel)</li>
                <li>Leptospiroz aşısı</li>
                <li>Kilo ve gelişim takibi</li>
              </ul>

              <h3>14-16 Haftalık</h3>
              <ul>
                <li>Üçüncü karma aşı</li>
                <li>İlk kuduz aşısı (3 aylık olduktan sonra)</li>
                <li>Mikroçip takılması (zorunlu)</li>
              </ul>

              <h2>Yetişkin Köpek Aşı Takvimi</h2>
              <p>Yetişkin köpeklerde aşılar düzenli olarak tekrarlanmalıdır:</p>

              <h3>Yıllık Aşılar</h3>
              <ul>
                <li>Karma aşı (her yıl veya 3 yılda bir - veteriner önerisine göre)</li>
                <li>Kuduz aşısı (her yıl - zorunlu)</li>
                <li>Leptospiroz aşısı (her yıl)</li>
                <li>Kennel öksürüğü aşısı (risk grubundaki köpekler için)</li>
              </ul>

              <h2>Köpek Karma Aşısı İçeriği</h2>
              <p>Karma aşı köpekleri birden fazla ölümcül hastalıktan korur:</p>
              <ul>
                <li>
                  <strong>Parvovirüs:</strong> Özellikle yavru köpeklerde ölümcül ishal hastalığı
                </li>
                <li>
                  <strong>Distemper (Köpek vebası):</strong> Sinir sistemi hastalığı
                </li>
                <li>
                  <strong>Hepatit:</strong> Karaciğer iltihabı
                </li>
                <li>
                  <strong>Parainfluenza:</strong> Solunum yolu enfeksiyonu
                </li>
                <li>
                  <strong>Leptospiroz:</strong> Böbrek ve karaciğer hastalığı
                </li>
              </ul>

              <h2>Köpek Beslenme Önerileri</h2>

              <h3>Yavru Köpekler (0-12 ay)</h3>
              <ul>
                <li>Yavru köpek maması (puppy food) kullanın</li>
                <li>Günde 3-4 öğün besleyin</li>
                <li>Porsiyon kontrolü yapın (obeziteden kaçının)</li>
                <li>Temiz su her zaman erişilebilir olmalı</li>
              </ul>

              <h3>Yetişkin Köpekler (1-7 yaş)</h3>
              <ul>
                <li>Kaliteli yetişkin köpek maması</li>
                <li>Günde 2 öğün besleyin</li>
                <li>Irka ve aktivite seviyesine göre porsiyon ayarlayın</li>
                <li>İnsan yemeği vermeyin</li>
              </ul>

              <h3>Yaşlı Köpekler (7+ yaş)</h3>
              <ul>
                <li>Senior köpek maması kullanın</li>
                <li>Eklem sağlığı destekleyiciler ekleyin</li>
                <li>Daha sık ama küçük porsiyonlar verin</li>
              </ul>

              <h2>Egzersiz ve Aktivite</h2>
              <p>Köpeklerin fiziksel ve mental sağlığı için düzenli egzersiz şarttır:</p>
              <ul>
                <li>Günde en az 30-60 dakika yürüyüş</li>
                <li>Irka göre egzersiz ihtiyacı değişir</li>
                <li>Oyun ve sosyalleşme fırsatları</li>
                <li>Mental stimülasyon (oyuncaklar, eğitim)</li>
              </ul>

              <h2>Parazit Kontrolü</h2>

              <h3>İç Parazitler</h3>
              <ul>
                <li>3 ayda bir iç parazit ilaçlaması</li>
                <li>Yılda 1-2 kez dışkı analizi</li>
              </ul>

              <h3>Dış Parazitler</h3>
              <ul>
                <li>Aylık pire-kene önleyici kullanın</li>
                <li>Özellikle bahar-yaz aylarında dikkatli olun</li>
                <li>Düzenli tüy kontrolü yapın</li>
              </ul>

              <h2>Düzenli Sağlık Kontrolleri</h2>
              <p>Köpeklerde düzenli veteriner kontrolleri şunları içermelidir:</p>
              <ul>
                <li>Yılda 1-2 kez genel muayene</li>
                <li>Diş kontrolü ve temizliği (yılda 1 kez)</li>
                <li>Kilo takibi</li>
                <li>7 yaş üstü köpeklerde kan tahlilleri</li>
                <li>Kalp ve eklem kontrolleri (yaşlı köpeklerde)</li>
              </ul>

              <h2>Acil Durumlarda Dikkat Edilmesi Gerekenler</h2>
              <p>Aşağıdaki durumlarda hemen veterinere başvurun:</p>
              <ul>
                <li>Kusma ve ishal (özellikle kanlı)</li>
                <li>İştah kaybı 24 saatten fazla sürerse</li>
                <li>Solunum güçlüğü</li>
                <li>Halsizlik ve uyuşukluk</li>
                <li>Zehirlenme şüphesi</li>
                <li>Travma veya yaralanma</li>
              </ul>

              <h2>Ümraniye Köpek Veterineri</h2>
              <p>
                Medeniyet Veteriner Kliniği olarak Ümraniye Şerifali'de köpek sağlığı konusunda profesyonel
                hizmet sunuyoruz. Aşılama, sağlık kontrolleri, acil müdahale ve tüm köpek hastalıklarının
                tedavisi için kliniğimizi ziyaret edebilirsiniz.
              </p>

              <div className="mt-8 rounded-lg bg-primary/10 p-6">
                <h3 className="mb-2 text-xl font-bold">Köpeğiniz İçin Randevu Alın</h3>
                <p className="mb-4 text-muted-foreground">
                  Köpeğinizin sağlık kontrolü ve aşıları için hemen arayın.
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
