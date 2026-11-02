/**
 * Nexus site ayarları — sadece bu dosyayı düzenle.
 * Boş bıraktığın link satırları sitede GİZLENİR.
 * Galeri: gallery/ klasörüne jpg/png koy + aşağıya satır ekle.
 */
window.NEXUS_CONFIG = {
  // Üst bar + İletişim sekmesinde görünür
  links: {
    telegram_channel: "https://t.me/Nexusanalizduyuru",  // Duyuru kanalı
    telegram_group: "https://t.me/+o_C2Etq289hjYTI0",                                 // Sinyal grubu (varsa yapıştır)
    telegram_bot: "",                                   // Bot kullanıcı adı linki (opsiyonel)
    github: "https://hasanm3547.github.io/nexus/",
    email: "",                                          // mailto:adres  veya boş
    website: "https://hasanm3547.github.io/nexus/",
  },

  // Galeri sekmesi — dosya adı gallery/ altında olmalı
  gallery: [
    {
      file: "01_komuta.jpg",
      title: "Komuta",
      caption: "Rejim, heat, tarama özeti ve olay günlüğü",
    },
    {
      file: "02_sinyaller.jpg",
      title: "Sinyaller",
      caption: "Sembol listesi, güven, yeni sinyal kartları",
    },
    {
      file: "03_acik.jpg",
      title: "Açık (Paper)",
      caption: "Paper kartlar, anlık PnL (R), manuel kapat",
    },
    {
      file: "04_ogrenme.jpg",
      title: "Öğrenme",
      caption: "Sembol kartları, E(R), izle bayrağı",
    },
    {
      file: "05_rejim_setup.jpg",
      title: "Rejim × setup",
      caption: "Bağlam dilimleri — skor formülü değişmez",
    },
  ],
};
