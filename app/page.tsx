"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Heart, Stethoscope, Syringe, Pill, Star, Quote, Dog, Cat, Bird } from "lucide-react"
import Image from "next/image"

export default function VeterinaryClinic() {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center mt-32 md:mt-40">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              {"Veteriner Kliniği"}
              <span className="block text-primary">{"Ümraniye"}</span>
            </h1>

            <p className="mb-8 text-balance text-lg text-muted-foreground md:text-xl">
              {
                "Evcil hayvanlarınızın sağlığı ve mutluluğu için her zaman yanınızdayız. Deneyimli ekibimizle sevimli dostlarınıza en iyi bakımı sunuyoruz."
              }
            </p>

            {/* Primary CTA - Call Button */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group h-14 gap-2 bg-primary px-8 text-lg font-semibold hover:bg-primary/90"
                asChild
              >
                <a href="tel:+905526976668">
                  <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {"Hemen Arayın"}
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 gap-2 border-2 px-8 text-lg font-semibold bg-transparent"
                onClick={() => handleSmoothScroll("iletisim")}
              >
                {"Konumumuz"}
              </Button>
            </div>

            {/* Phone Number Display */}
            <div className="mt-8">
              <a
                href="tel:+905526976668"
                className="inline-flex items-center gap-2 text-2xl font-bold text-primary transition-colors hover:text-primary/80 md:text-3xl"
              >
                <Phone className="h-6 w-6 md:h-8 md:w-8" />
                {"0552 697 66 68"}
              </a>
            </div>

            {/* Pet Icons */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Dog className="h-7 w-7 text-foreground" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Cat className="h-7 w-7 text-foreground" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Bird className="h-7 w-7 text-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full fill-card">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">{"Hizmetlerimiz"}</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              {"Evcil dostlarınız için kapsamlı veteriner hizmetleri"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Stethoscope,
                title: "Muayene & Teşhis",
                description: "Detaylı veteriner muayenesi ve hastalık teşhisi",
              },
              {
                icon: Syringe,
                title: "Aşılama",
                description: "Düzenli aşı takvimleri ve koruyucu sağlık hizmetleri",
              },
              {
                icon: Pill,
                title: "Tedavi & İlaç",
                description: "Profesyonel tedavi planları ve ilaç desteği",
              },
              {
                icon: Heart,
                title: "Acil Bakım",
                description: "Acil durumlarda hızlı müdahale ve bakım",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="text-pretty text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimda" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">{"Hakkımda"}</h2>
            <p className="text-pretty text-lg text-muted-foreground">{"Veteriner Hekim"}</p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/image.png"
                  alt="Ahmet Ceyhun - Veteriner Hekim Ümraniye"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="mb-4 text-3xl font-bold">{"Ahmet Ceyhun"}</h3>
                <p className="mb-4 text-lg font-medium text-primary">{"Veteriner Hekim"}</p>
                <p className="text-pretty text-muted-foreground leading-relaxed">
                  {
                    "Evcil hayvanların sağlığı ve mutluluğu için çalışmak benim en büyük tutkum. Her hastama ailem gibi bakıyor, onların sağlıklı ve mutlu olmalarını sağlamak için elimden geleni yapıyorum."
                  }
                </p>
                <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                  {
                    "Modern ekipmanlar ve güncel tedavi yöntemleriyle sevimli dostlarınıza en kaliteli hizmeti sunmak için buradayım."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="yorumlar" className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">{"Gelen Yorumlar"}</h2>
            <p className="text-pretty text-lg text-muted-foreground">{"Müşterilerimizin deneyimlerini okuyun"}</p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Esra B.",
                comment:
                  "Çok uzun zamandır sokaklarda ve evimde patisever biri olarak ve sürekli de veterinerler ile iş birliği içinde bulunmak zorunda olduğumuzdan dolayı; ilk defa bu kadar; Etik ve Ahlaklı aynı zamanda hizmet bedeli uygun olan bir klinik ile karşılaştım. Sektor olarak; NADİR bir klinik... Tedavi ve karşılamadan çok memnun kaldım... Düşünmeden gidebilirsiniz. Tam anlamıyla hem insan olarak, hem hizmet anlayışı olarak çok çok iyi bir klinik.",
                rating: 5,
              },
              {
                name: "Yılmaz Ç.",
                comment:
                  "Bir arkadaşımızın kedisini götürdük gerekeni fazlasıyla yaptılar, ilgi alaka 10 numara. Ceyhun Bey çok tecrübeli bir hekim, eşi Büşra Hanım da sabırla dinlediler bizi teşekkür ederiz.",
                rating: 5,
              },
              {
                name: "Burak G.",
                comment:
                  "8 yaşında kedimizi getirdik. Kendisi dalında çok bilgili ve aynı zamanda çok ilgili. Usanmadan tüm sorularımızı ikna edici şekilde yanıtladı. Check up yaptırdık kedimize. Sayesinde daha bilinçli bir hayvan sahibiyiz.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="flex flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  <p className="mb-4 flex-grow text-pretty text-sm leading-relaxed text-muted-foreground">
                    {testimonial.comment}
                  </p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">{"İletişim"}</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              {"Bize ulaşın, size yardımcı olmaktan mutluluk duyarız"}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* Contact Info Card */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-semibold">{"İletişim Bilgileri"}</h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 font-medium">{"Telefon"}</p>
                      <a
                        href="tel:+905526976668"
                        className="text-lg font-bold text-primary transition-colors hover:text-primary/80"
                      >
                        {"0552 697 66 68"}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 font-medium">{"Adres"}</p>
                      <p className="text-pretty text-muted-foreground">
                        {"Şerifali, Açıkyüz Sk. No:6 D:A"}
                        <br />
                        {"34775 Ümraniye/İstanbul"}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 font-medium">{"Çalışma Saatleri"}</p>
                      <p className="text-pretty text-muted-foreground">
                        {"Pazartesi - Cumartesi: 09:00 - 19:00"}
                        <br />
                        {"Acil durumlar için arayınız"}
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="mt-8 w-full gap-2 bg-primary font-semibold hover:bg-primary/90" asChild>
                  <a href="tel:+905526976668">
                    <Phone className="h-5 w-5" />
                    {"Hemen Arayın"}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="border-2">
              <CardContent className="p-0">
                <div className="h-full min-h-[400px] overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5!2d29.11!3d41.015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzU0LjAiTiAyOcKwMDYnMzYuMCJF!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Veteriner Kliniği Konumu"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Heart className="mx-auto mb-6 h-12 w-12" />
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            {"Evcil Dostlarınızın Sağlığı İçin Bizi Arayın"}
          </h2>
          <p className="mb-8 text-balance text-lg opacity-90">{"Acil durumlar ve randevu için hemen ulaşın"}</p>
          <Button size="lg" variant="secondary" className="h-14 gap-2 px-8 text-lg font-semibold" asChild>
            <a href="tel:+905526976668">
              <Phone className="h-5 w-5" />
              {"0552 697 66 68"}
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>{"© 2025 Veteriner Kliniği Ümraniye. Tüm hakları saklıdır."}</p>
        </div>
      </footer>
    </div>
  )
}
