/**
 * CHEF'S ASSISTANT - RECIPE DATABASE
 * Massive collection inspired by traditional Turkish cuisine.
 */

const recipes = [
    // ==========================================
    // ÇORBALAR (SOUPS)
    // ==========================================
    {
        id: "tarhana",
        title: "Kış Güneşi Tarhana",
        description: "Geleneksel, şifa deposu.",
        image: "🥣",
        requiredIngredients: ["un", "yogurt", "salca", "nane", "tereyagi", "siviyag"],
        optionalIngredients: ["sarimsak", "pul_biber", "kiyma"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "mercimek_corbasi",
        title: "Süzme Mercimek Çorbası",
        description: "Lokanta usulü, limonlu.",
        image: "🥣",
        requiredIngredients: ["mercimek_kirmizi", "sogan", "un", "salca", "siviyag"],
        optionalIngredients: ["havuc", "patates", "limon", "tereyagi", "nane", "pul_biber", "tuz"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "domates_corbasi",
        title: "Kaşarlı Domates Çorbası",
        description: "Köz tadında, kremsi.",
        image: "🍅",
        requiredIngredients: ["domates", "un", "siviyag", "salca"],
        optionalIngredients: ["sut", "kasar", "tereyagi", "tuz", "karabiber"],
        difficulty: "Kolay",
        time: "25 dk"
    },
    {
        id: "yayla_corbasi",
        title: "Yayla Çorbası",
        description: "Yoğurt ve nanenin ferahlatıcı uyumu.",
        image: "🥣",
        requiredIngredients: ["yogurt", "pirinc", "un", "yumurta"],
        optionalIngredients: ["nane", "tereyagi", "tuz", "siviyag"],
        difficulty: "Orta",
        time: "30 dk"
    },
    {
        id: "ezogelin",
        title: "Ezogelin Çorbası",
        description: "Baharatlı ve doyurucu.",
        image: "🥣",
        requiredIngredients: ["mercimek_kirmizi", "pirinc", "bulgur", "salca", "sogan"],
        optionalIngredients: ["nane", "pul_biber", "biber", "tereyagi", "tuz"],
        difficulty: "Orta",
        time: "40 dk"
    },
    {
        id: "tavuk_suyu",
        title: "Şifalı Tavuk Suyu",
        description: "Grip savar.",
        image: "🥣",
        requiredIngredients: ["tavuk_gogsu", "sehriye", "havuc", "limon"],
        optionalIngredients: ["sogan", "maydanoz", "sarimsak", "tuz", "karabiber"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "iskembe_yalanci",
        title: "Yalancı İşkembe Çorbası",
        description: "Tavuk etiyle işkembe lezzeti.",
        image: "🥣",
        requiredIngredients: ["tavuk_gogsu", "yogurt", "yumurta", "sarimsak", "sirke"],
        optionalIngredients: ["un", "tereyagi", "pul_biber", "limon"],
        difficulty: "Orta",
        time: "45 dk"
    },
    {
        id: "mantar_corbasi",
        title: "Kremalı Mantar Çorbası",
        description: "Davet sofralarının vazgeçilmezi.",
        image: "🍄",
        requiredIngredients: ["mantar", "un", "sut", "sogan", "tereyagi"],
        optionalIngredients: ["krema", "dereotu", "karabiber", "sarimsak"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "sehriye_corbasi",
        title: "Domatesli Şehriye Çorbası",
        description: "Anne usulü, pratik.",
        image: "🍜",
        requiredIngredients: ["sehriye", "domates", "salca", "siviyag"],
        optionalIngredients: ["maydanoz", "biber", "limon", "nane"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "brokoli_corbasi",
        title: "Sütlü Brokoli Çorbası",
        description: "Vitamin deposu.",
        image: "🥦",
        requiredIngredients: ["brokoli", "patates", "sogan", "sut"],
        optionalIngredients: ["tereyagi", "krema", "sarimsak", "tuz"],
        difficulty: "Kolay",
        time: "35 dk"
    },
    {
        id: "kabak_corbasi",
        title: "Kremalı Kabak Çorbası",
        description: "Hafif ve lezzetli.",
        image: "🥣",
        requiredIngredients: ["kabak", "un", "sut", "dereotu"],
        optionalIngredients: ["sogan", "sarimsak", "tereyagi"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "soguk_ayran_asi",
        title: "Soğuk Ayran Aşı",
        description: "Yaz günleri için serinletici.",
        image: "🥣",
        requiredIngredients: ["yogurt", "bulgur", "nohut"],
        optionalIngredients: ["nane", "dereotu", "salatalik"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "dugun_corbasi",
        title: "Düğün Çorbası",
        description: "Etli ve yoğurtlu klasik.",
        image: "🥣",
        requiredIngredients: ["kusbasi", "yogurt", "yumurta", "un"],
        optionalIngredients: ["limon", "tereyagi", "pul_biber"],
        difficulty: "Zor",
        time: "60 dk"
    },
    {
        id: "pirinc_corbasi",
        title: "Pirinç Çorbası",
        description: "Midenizi yormayan hafif lezzet.",
        image: "🥣",
        requiredIngredients: ["pirinc", "yogurt", "nane"],
        optionalIngredients: ["yumurta", "siviyag", "salca"],
        difficulty: "Kolay",
        time: "25 dk"
    },
    {
        id: "leblebi_corbasi",
        title: "Leblebi Çorbası",
        description: "Farklı ve yöresel.",
        image: "🥣",
        requiredIngredients: ["nohut", "sut", "tereyagi"],
        optionalIngredients: ["ekmek", "pul_biber"],
        difficulty: "Orta",
        time: "30 dk"
    },
    {
        id: "analikizli",
        title: "Analı Kızlı",
        description: "Hem çorba hem ana yemek.",
        image: "🥣",
        requiredIngredients: ["kiyma", "bulgur", "nohut", "salca"],
        optionalIngredients: ["nane", "limon", "tereyagi"],
        difficulty: "Zor",
        time: "90 dk"
    },
    {
        id: "tutmac",
        title: "Tutmaç Çorbası",
        description: "Selçuklu mutfağından.",
        image: "🥣",
        requiredIngredients: ["eriste", "mercimek_yesil", "yogurt", "nane"], // eriste as makarna proxy
        optionalIngredients: ["tereyagi", "yumurta", "un"],
        difficulty: "Orta",
        time: "40 dk"
    },

    // ==========================================
    // SEBZE YEMEKLERİ (VEGETABLE DISHES)
    // ==========================================
    {
        id: "karniyarik",
        title: "Karnıyarık",
        description: "Patlıcan ve kıymanın efsane uyumu.",
        image: "🍆",
        requiredIngredients: ["patlican", "kiyma", "sogan", "domates", "salca"],
        optionalIngredients: ["biber", "sarimsak", "maydanoz", "siviyag", "karabiber"],
        difficulty: "Orta",
        time: "45 dk"
    },
    {
        id: "imam_bayildi",
        title: "İmam Bayıldı",
        description: "Bol soğanlı, zeytinyağlı patlıcan.",
        image: "🍆",
        requiredIngredients: ["patlican", "sogan", "domates", "zeytinyagi", "sarimsak"],
        optionalIngredients: ["biber", "seker", "maydanoz", "tuz"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "taze_fasulye",
        title: "Zeytinyağlı Taze Fasulye",
        description: "Soğuk yenen yaz klasiği.",
        image: "🍲",
        requiredIngredients: ["taze_fasulye", "domates", "sogan", "zeytinyagi"],
        optionalIngredients: ["seker", "sarimsak"],
        difficulty: "Kolay",
        time: "40 dk"
    },
    {
        id: "ispanak_yemegi",
        title: "Yumurtalı Ispanak",
        description: "Demir deposu.",
        image: "🥬",
        requiredIngredients: ["ispanak", "sogan", "salca"],
        optionalIngredients: ["yumurta", "pirinc", "yogurt", "siviyag", "karabiber"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "mucver",
        title: "Fırın Mücver",
        description: "Kızartmadan daha hafif kabak lezzeti.",
        image: "🥞",
        requiredIngredients: ["kabak", "yumurta", "un", "beyaz_peynir", "siviyag", "dereotu"],
        optionalIngredients: ["sogan", "taze_sogan", "maydanoz", "tuz", "kabartma_tozu"],
        difficulty: "Orta",
        time: "35 dk"
    },
    {
        id: "kabak_siyirma",
        title: "Kabak Sıyırma",
        description: "Girit mutfağından hafif bir lezzet.",
        image: "🥒",
        requiredIngredients: ["kabak", "zeytinyagi", "limon", "pirinc"],
        optionalIngredients: ["dereotu", "sarimsak", "sogan"],
        difficulty: "Kolay",
        time: "25 dk"
    },
    {
        id: "turlo",
        title: "Kış Türlüsü",
        description: "Kalan sebzeleri değerlendirme sanatı.",
        image: "🥘",
        requiredIngredients: ["patates", "havuc", "patlican", "sogan", "salca"],
        optionalIngredients: ["kabak", "biber", "bezelye", "sarimsak", "kiyma", "et"],
        difficulty: "Kolay",
        time: "45 dk"
    },
    {
        id: "pirasa_yemegi",
        title: "Zeytinyağlı Pırasa",
        description: "Havuç ve pirinçle tatlanan kış sebzesi.",
        image: "🥬",
        requiredIngredients: ["pirasa", "havuc", "pirinc", "zeytinyagi", "limon"],
        optionalIngredients: ["seker", "portakal", "salca"],
        difficulty: "Kolay",
        time: "35 dk"
    },
    {
        id: "karnabahar_kizartma",
        title: "Karnabahar Kızartması",
        description: "Yoğurtlu sos ile.",
        image: "🥦",
        requiredIngredients: ["karnabahar", "yumurta", "un", "siviyag"],
        optionalIngredients: ["yogurt", "sarimsak", "sut", "soda"],
        difficulty: "Orta",
        time: "30 dk"
    },
    {
        id: "brokoli_salatasi",
        title: "Brokoli Salatası",
        description: "Yeşil, sağlıklı ve doyurucu.",
        image: "🥦",
        requiredIngredients: ["brokoli", "zeytinyagi", "limon", "sarimsak"],
        optionalIngredients: ["havuc", "misir", "tursu", "nar_eksisi"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "bamya_yemegi",
        title: "Etli Bamya",
        description: "Limonlu suyuyla şifa.",
        image: "🥘",
        requiredIngredients: ["bamya", "kusbasi", "sogan", "domates", "limon"],
        optionalIngredients: ["salca", "siviyag", "sarimsak"],
        difficulty: "Orta",
        time: "45 dk"
    },
    {
        id: "semizotu_yemegi",
        title: "Kıymalı Semizotu",
        description: "Yoğurtla servis edilen pratik yemek.",
        image: "🌿",
        requiredIngredients: ["semizotu", "kiyma", "sogan", "domates"],
        optionalIngredients: ["pirinc", "salca", "sarimsak", "yogurt"],
        difficulty: "Kolay",
        time: "25 dk"
    },
    {
        id: "patates_oturtma",
        title: "Patates Oturtma",
        description: "Kıyma ve patatesin fırın hali.",
        image: "🥔",
        requiredIngredients: ["patates", "kiyma", "sogan", "salca"],
        optionalIngredients: ["biber", "domates", "sarimsak", "maydanoz"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "kabak_dolmasi",
        title: "Zeytinyağlı Kabak Dolması",
        description: "Hafif ve fresh.",
        image: "🥒",
        requiredIngredients: ["kabak", "pirinc", "sogan", "zeytinyagi", "dereotu"],
        optionalIngredients: ["nane", "kusuzumu", "fistik"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "biber_dolmasi",
        title: "Etli Biber Dolması",
        description: "Klasik anne yemeği.",
        image: "🫑",
        requiredIngredients: ["biber", "kiyma", "pirinc", "sogan", "salca"],
        optionalIngredients: ["domates", "nane", "dereotu", "yogurt"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "yaprak_sarma",
        title: "Zeytinyağlı Yaprak Sarma",
        description: "İncecik, kalem gibi.",
        image: "🥘",
        requiredIngredients: ["yaprak", "pirinc", "sogan", "zeytinyagi", "limon"],
        optionalIngredients: ["nane", "kusuzumu", "dolmalik_fistik", "tarcin", "yenibahar"],
        difficulty: "Zor",
        time: "90 dk"
    },
    {
        id: "lahana_sarmasi",
        title: "Etli Lahana Sarması",
        description: "Kışın en güzel hali.",
        image: "🥬",
        requiredIngredients: ["lahana", "kiyma", "pirinc", "sogan", "salca"],
        optionalIngredients: ["nane", "sarimsak", "pul_biber", "maydanoz"],
        difficulty: "Zor",
        time: "80 dk"
    },
    {
        id: "patlican_musakka",
        title: "Patlıcan Musakka",
        description: "Kızarmış patlıcan ve kıyma.",
        image: "🍆",
        requiredIngredients: ["patlican", "kiyma", "sogan", "domates", "biber"],
        optionalIngredients: ["salca", "sarimsak", "maydanoz", "siviyag"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "enginar_dolmasi",
        title: "Zeytinyağlı Enginar",
        description: "Garnitürlü karaciğer dostu.",
        image: "🥬",
        requiredIngredients: ["enginar", "bezelye", "havuc", "patates", "limon"],
        optionalIngredients: ["zeytinyagi", "seker", "dereotu", "sogan"],
        difficulty: "Orta",
        time: "40 dk"
    },
    {
        id: "kereviz_salatasi",
        title: "Yoğurtlu Kereviz Salatası",
        description: "Cevizli, ferah meze.",
        image: "🥔",
        requiredIngredients: ["kereviz", "yogurt", "sarimsak", "ceviz"],
        optionalIngredients: ["mayonez", "dereotu", "zeytinyagi"], // typo fix
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "yerelmasi",
        title: "Zeytinyağlı Yer Elması",
        description: "Portakallı, şifalı.",
        image: "🥔",
        requiredIngredients: ["sogan", "havuc", "pirinc", "zeytinyagi"], // yerelmasi missing, using patates or just generic veg
        optionalIngredients: ["limon", "portakal", "seker"],
        difficulty: "Kolay",
        time: "35 dk"
    },
    {
        id: "barbunya_pilaki",
        title: "Zeytinyağlı Barbunya",
        description: "Soğuk meze olarak da harika.",
        image: "🔴",
        requiredIngredients: ["barbunya", "havuc", "patates", "sogan", "zeytinyagi"],
        optionalIngredients: ["sarimsak", "seker", "maydanoz", "limon"],
        difficulty: "Kolay",
        time: "45 dk"
    },
    // ==========================================
    // ET VE TAVUK YEMEKLERİ (MEAT & CHICKEN)
    // ==========================================
    {
        id: "kuru_fasulye_etli",
        title: "Etli Kuru Fasulye",
        description: "Suyuna banmalık.",
        image: "🍲",
        requiredIngredients: ["kuru_fasulye", "kusbasi", "sogan", "salca"],
        optionalIngredients: ["biber", "domates", "tereyagi", "tuz", "pul_biber"],
        difficulty: "Orta",
        time: "60 dk"
    },
    {
        id: "nohut_yemegi",
        title: "Etli Nohut",
        description: "Lokum gibi nohutlar.",
        image: "🟡",
        requiredIngredients: ["nohut", "kusbasi", "sogan", "salca"],
        optionalIngredients: ["biber", "kimyon"],
        difficulty: "Orta",
        time: "60 dk"
    },
    {
        id: "kofte_patates",
        title: "Fırında Köfte Patates",
        description: "Çocukların favorisi.",
        image: "🥘",
        requiredIngredients: ["kiyma", "patates", "sogan", "salca"],
        optionalIngredients: ["biber", "domates", "sarimsak", "ekmek", "yumurta", "kimyon"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "kadinbudu_kofte",
        title: "Kadınbudu Köfte",
        description: "Pirinçli, yumurtalı nefis köfte.",
        image: "🧆",
        requiredIngredients: ["kiyma", "pirinc", "sogan", "yumurta", "un"],
        optionalIngredients: ["galeta_unu", "maydanoz", "karabiber", "kimyon"],
        difficulty: "Orta",
        time: "45 dk"
    },
    {
        id: "izmir_kofte",
        title: "İzmir Köfte",
        description: "Domates soslu, kızarmış patatesli.",
        image: "🥘",
        requiredIngredients: ["kiyma", "patates", "sogan", "domates", "biber"],
        optionalIngredients: ["salca", "sarimsak", "ekmek", "kimyon", "kekik"],
        difficulty: "Orta",
        time: "60 dk"
    },
    {
        id: "tavuk_sote",
        title: "Sebzeli Tavuk Sote",
        description: "Pratik akşam yemeği.",
        image: "🥘",
        requiredIngredients: ["tavuk_gogsu", "biber", "domates", "sogan"],
        optionalIngredients: ["sarimsak", "salca", "mantar", "kekik", "pul_biber", "siviyag"],
        difficulty: "Kolay",
        time: "25 dk"
    },
    {
        id: "kori_soslu_tavuk",
        title: "Köri Soslu Tavuk",
        description: "Dünya mutfağından.",
        image: "🍛",
        requiredIngredients: ["tavuk_gogsu", "krema", "siviyag", "zerdecal"],
        optionalIngredients: ["mantar", "sogan", "makarna", "kimyon"],
        difficulty: "Kolay",
        time: "25 dk"
    },
    {
        id: "tavuk_sinitzel",
        title: "Tavuk Şinitzel",
        description: "Çıtır paneli.",
        image: "🍗",
        requiredIngredients: ["tavuk_gogsu", "yumurta", "un", "galeta_unu"],
        optionalIngredients: ["siviyag", "tuz", "karabiber", "limon"],
        difficulty: "Orta",
        time: "30 dk"
    },
    {
        id: "et_sote",
        title: "Et Sote",
        description: "Yumuşacık pişmiş etler.",
        image: "🥩",
        requiredIngredients: ["kusbasi", "sogan", "biber", "domates"],
        optionalIngredients: ["sarimsak", "kekik", "tereyagi", "salca"],
        difficulty: "Orta",
        time: "45 dk"
    },
    {
        id: "sac_kavurma",
        title: "Saç Kavurma",
        description: "Bayram lezzeti.",
        image: "🥩",
        requiredIngredients: ["kusbasi", "biber", "domates", "siviyag"],
        optionalIngredients: ["sogan", "kekik", "pul_biber", "tuz"],
        difficulty: "Orta",
        time: "40 dk"
    },
    {
        id: "hunkar_begendi",
        title: "Hünkar Beğendi",
        description: "Saray mutfağından.",
        image: "🍛",
        requiredIngredients: ["patlican", "kusbasi", "un", "sut", "kasar"],
        optionalIngredients: ["tereyagi", "sogan", "salca", "tuz", "karabiber"],
        difficulty: "Zor",
        time: "60 dk"
    },
    {
        id: "tas_kebabi",
        title: "Tas Kebabı",
        description: "Lokanta usulü sulu et yemeği.",
        image: "🍲",
        requiredIngredients: ["kusbasi", "patates", "havuc", "sogan", "salca"],
        optionalIngredients: ["sarimsak", "karabiber", "kekik"],
        difficulty: "Orta",
        time: "55 dk"
    },
    {
        id: "orman_kebabi",
        title: "Orman Kebabı",
        description: "Bol bezelyeli et yemeği.",
        image: "🍲",
        requiredIngredients: ["kusbasi", "bezelye", "havuc", "patates", "sogan"],
        optionalIngredients: ["kekik", "salca", "siviyag"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "firin_tavuk",
        title: "Fırında Bütün Tavuk",
        description: "Nar gibi kızarmış.",
        image: "🍗",
        requiredIngredients: ["tavuk_but", "patates", "sogan", "salca"],
        optionalIngredients: ["yogurt", "sarimsak", "havuc", "biber", "kekik"],
        difficulty: "Orta",
        time: "60 dk"
    },
    {
        id: "tavuk_kapama",
        title: "Tavuk Kapama",
        description: "Pilav üstü tavuk lezzeti.",
        image: "🍗",
        requiredIngredients: ["tavuk_but", "pirinc", "sogan", "tereyagi"],
        optionalIngredients: ["nane", "karabiber", "kusuzumu"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "besamel_soslu_tavuk",
        title: "Beşamel Soslu Tavuk",
        description: "Fırında kaşarlı lezzet.",
        image: "🥘",
        requiredIngredients: ["tavuk_gogsu", "sut", "un", "kasar", "tereyagi"],
        optionalIngredients: ["mantar", "patates"],
        difficulty: "Orta",
        time: "40 dk"
    },
    {
        id: "alinazik",
        title: "Ali Nazik",
        description: "Köz patlıcan ve yoğurt yatağında kıyma.",
        image: "🍆",
        requiredIngredients: ["patlican", "kiyma", "yogurt", "sarimsak", "tereyagi"],
        optionalIngredients: ["pul_biber", "siviyag"],
        difficulty: "Orta",
        time: "45 dk"
    },
    {
        id: "ciger_sote",
        title: "Ciğer Sote",
        description: "Yumuşacık Arnavut ciğeri tadında.",
        image: "🥩",
        requiredIngredients: ["ciger", "un", "siviyag", "sogan", "maydanoz"],
        optionalIngredients: ["patates", "sumak", "kimyon", "pul_biber"],
        difficulty: "Orta",
        time: "30 dk"
    },
    {
        id: "hamsi_tava",
        title: "Hamsi Tava",
        description: "Çıtır çıtır.",
        image: "🐟",
        requiredIngredients: ["hamsi", "un", "siviyag"],
        optionalIngredients: ["limon", "roka", "sogan"],
        difficulty: "Orta",
        time: "30 dk"
    },
    {
        id: "somon_firin",
        title: "Fırında Somon",
        description: "Sağlıklı ve pratik.",
        image: "🐟",
        requiredIngredients: ["somon", "limon", "zeytinyagi", "patates"],
        optionalIngredients: ["sogan", "sarimsak", "biber"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "beyti",
        title: "Ev Yapımı Beyti",
        description: "Restoran lezzetinde.",
        image: "🥩",
        requiredIngredients: ["kiyma", "yufka", "sogan", "sarimsak", "salca", "yogurt", "tereyagi"],
        optionalIngredients: ["maydanoz", "kimyon", "karabiber"],
        difficulty: "Zor",
        time: "60 dk"
    },
    {
        id: "patlican_kebabi",
        title: "Patlıcan Kebabı",
        description: "Urfa usulü tepsi kebabı.",
        image: "🍆",
        requiredIngredients: ["patlican", "kiyma", "biber", "domates", "sogan", "sarimsak"],
        optionalIngredients: ["tuz", "karabiber", "pul_biber"],
        difficulty: "Orta",
        time: "60 dk"
    },
    {
        id: "islim_kebabi",
        title: "İslim Kebabı (Kürdan)",
        description: "Köfteye sarılı patlıcan bohçası.",
        image: "🍆",
        requiredIngredients: ["patlican", "kiyma", "sogan", "ekmek", "domates", "biber"],
        optionalIngredients: ["sarimsak", "salca", "kimyon"],
        difficulty: "Zor",
        time: "70 dk"
    },
    {
        id: "tepsi_kebabi",
        title: "Tepsi Kebabı",
        description: "Hatay usulü.",
        image: "🥘",
        requiredIngredients: ["kiyma", "biber", "domates", "sarimsak", "maydanoz"],
        optionalIngredients: ["salca", "pul_biber", "kimyon"],
        difficulty: "Orta",
        time: "45 dk"
    },
    // ==========================================
    // PİLAV, MAKARNA & HAMUR İŞİ
    // ==========================================
    {
        id: "pirinc_pilavi",
        title: "Tereyağlı Pirinç Pilavı",
        description: "Tane tane.",
        image: "🍚",
        requiredIngredients: ["pirinc", "sehriye", "tereyagi"],
        optionalIngredients: ["siviyag", "tuz", "tavuk_suyu", "karabiber"],
        difficulty: "Orta",
        time: "20 dk"
    },
    {
        id: "bulgur_pilavi",
        title: "Meyhane Pilavı",
        description: "Sebzeli, salçalı bulgur.",
        image: "🥘",
        requiredIngredients: ["bulgur", "domates", "sogan", "biber", "salca"],
        optionalIngredients: ["tereyagi", "sarimsak", "tuz", "nane", "pul_biber"],
        difficulty: "Kolay",
        time: "25 dk"
    },
    {
        id: "makarna_domatesli",
        title: "Domates Soslu Makarna",
        description: "Öğrenci evi klasiği ama gurme.",
        image: "🍝",
        requiredIngredients: ["makarna", "domates", "salca", "siviyag"],
        optionalIngredients: ["sarimsak", "feslegen", "kasar", "tuz", "zeytinyagi"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "makarna_kiymali",
        title: "Kıymalı Makarna",
        description: "Doyurucu akşam yemeği.",
        image: "🍝",
        requiredIngredients: ["makarna", "kiyma", "sogan", "salca"],
        optionalIngredients: ["domates", "sarimsak", "maydanoz", "yogurt"],
        difficulty: "Orta",
        time: "25 dk"
    },
    {
        id: "firinda_makarna",
        title: "Fırın Makarna",
        description: "Beşamel soslu, börek tadında.",
        image: "🍝",
        requiredIngredients: ["makarna", "sut", "un", "yumurta", "kasar"],
        optionalIngredients: ["beyaz_peynir", "tereyagi", "siviyag", "maydanoz"],
        difficulty: "Orta",
        time: "45 dk"
    },
    {
        id: "sehriye_pilavi",
        title: "Arpa Şehriye Pilavı",
        description: "Kırmızı biberli nefis yan yemek.",
        image: "🍜",
        requiredIngredients: ["sehriye", "biber", "domates", "tereyagi"],
        optionalIngredients: ["siviyag", "nane", "tuz"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "manti",
        title: "Ev Mantısı (Hazır Yufkadan)",
        description: "Pratik sosyete mantısı.",
        image: "🥟",
        requiredIngredients: ["yufka", "kiyma", "sogan", "yogurt", "salca"],
        optionalIngredients: ["sarimsak", "nane", "sumak", "tereyagi"],
        difficulty: "Orta",
        time: "40 dk"
    },
    {
        id: "eriste",
        title: "Cevizli Erişte",
        description: "Tereyağlı köy eriştesi.",
        image: "🍜",
        requiredIngredients: ["makarna", "tereyagi", "ceviz", "beyaz_peynir"],
        optionalIngredients: ["tulum", "maydanoz"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "menemen",
        title: "Menemen",
        description: "Soğanlı mı soğansız mı tartışılır.",
        image: "🍳",
        requiredIngredients: ["domates", "biber", "yumurta"],
        optionalIngredients: ["sogan", "kasar", "sucuk", "maydanoz", "tereyagi", "pul_biber"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "sigara_boregi",
        title: "Sigara Böreği",
        description: "Çıtır çıtır.",
        image: "🌯",
        requiredIngredients: ["yufka", "beyaz_peynir", "siviyag"],
        optionalIngredients: ["maydanoz", "yumurta", "sut", "galeta_unu"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "gozleme",
        title: "Tava Gözlemesi",
        description: "Hazır yufkadan şipşak.",
        image: "🫓",
        requiredIngredients: ["yufka", "beyaz_peynir", "siviyag"],
        optionalIngredients: ["ispanak", "kasar", "patates", "maydanoz"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "tepsi_boregi",
        title: "Peynirli Tepsi Böreği",
        description: "Çay saatlerinin yıldızı.",
        image: "🥟",
        requiredIngredients: ["yufka", "beyaz_peynir", "sut", "yumurta", "siviyag"],
        optionalIngredients: ["soda", "maydanoz", "susam", "corek_otu"],
        difficulty: "Orta",
        time: "45 dk"
    },
    {
        id: "su_boregi",
        title: "Yalancı Su Böreği",
        description: "Makarnadan veya hazır yufkadan.",
        image: "🥟",
        requiredIngredients: ["yufka", "beyaz_peynir", "sut", "yumurta", "siviyag"],
        optionalIngredients: ["maydanoz", "tereyagi", "soda"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "pogaca_peynirli",
        title: "Peynirli Poğaça",
        description: "Kıyır kıyır mayasız poğaça.",
        image: "🥟",
        requiredIngredients: ["un", "yogurt", "siviyag", "yumurta", "kabartma_tozu", "beyaz_peynir"],
        optionalIngredients: ["maydanoz", "dereotu", "susam"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "dereotlu_pogaca",
        title: "Dereotlu Poğaça",
        description: "Pastane usulü.",
        image: "🥯",
        requiredIngredients: ["dereotu", "un", "yogurt", "siviyag", "yumurta", "kabartma_tozu"],
        optionalIngredients: ["beyaz_peynir", "sirke", "tuz"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "ev_yapimi_pizza",
        title: "Ev Yapımı Pizza",
        description: "Bol malzemeli.",
        image: "🍕",
        requiredIngredients: ["un", "maya", "siviyag", "domates", "kasar"],
        optionalIngredients: ["sucuk", "misir", "biber", "mantar", "zeytin", "sosis"],
        difficulty: "Orta",
        time: "40 dk"
    },
    {
        id: "hamburger",
        title: "Hamburger",
        description: "Ev yapımı köftesiyle.",
        image: "🍔",
        requiredIngredients: ["kiyma", "ekmek", "marul", "domates"],
        optionalIngredients: ["sogan", "tursu", "ketcap", "mayonez", "ceddar", "patates"],
        difficulty: "Orta",
        time: "30 dk"
    },
    {
        id: "lahmacun",
        title: "Evde Lahmacun",
        description: "Tavada veya fırında.",
        image: "🌯",
        requiredIngredients: ["un", "kiyma", "sogan", "domates", "biber", "maydanoz"],
        optionalIngredients: ["sarimsak", "salca", "limon", "pul_biber", "ayran"],
        difficulty: "Zor",
        time: "45 dk"
    },
    {
        id: "tavuk_durum",
        title: "Tavuk Dürüm",
        description: "Lavaş arası lezzet.",
        image: "🌯",
        requiredIngredients: ["lavas", "tavuk_gogsu", "sogan", "domates"],
        optionalIngredients: ["biber", "maydanoz", "kimyon", "tursu", "ayran"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "simit",
        title: "Ev Yapımı Simit",
        description: "Sokak lezzeti.",
        image: "🥯",
        requiredIngredients: ["un", "maya", "susam", "pekmez"],
        optionalIngredients: ["su", "siviyag", "tuz", "seker"],
        difficulty: "Zor",
        time: "60 dk"
    },
    {
        id: "bazlama",
        title: "Bazlama",
        description: "Pamuk gibi.",
        image: "🍞",
        requiredIngredients: ["un", "maya", "yogurt", "siviyag"],
        optionalIngredients: ["tuz", "seker"],
        difficulty: "Orta",
        time: "50 dk"
    },
    // ==========================================
    // SALATALAR, MEZELER & TATLILAR
    // ==========================================
    {
        id: "coban_salata",
        title: "Çoban Salatası",
        description: "Yaz sofralarının olmazsa olmazı.",
        image: "🥗",
        requiredIngredients: ["domates", "salatalik", "biber", "sogan", "maydanoz"],
        optionalIngredients: ["zeytinyagi", "limon", "sirke", "tuz", "sumak"],
        difficulty: "Çok Kolay",
        time: "10 dk"
    },
    {
        id: "mecimek_koftesi",
        title: "Mercimek Köftesi",
        description: "Altın günlerinin yıldızı.",
        image: "🧆",
        requiredIngredients: ["mercimek_kirmizi", "bulgur", "sogan", "salca", "maydanoz", "taze_sogan", "limon"],
        optionalIngredients: ["marul", "kimyon", "pul_biber", "nar_eksisi", "siviyag"],
        difficulty: "Orta",
        time: "40 dk"
    },
    {
        id: "kisir",
        title: "Kısır",
        description: "Bol ekşili, yeşillikli.",
        image: "🥗",
        requiredIngredients: ["bulgur", "salca", "maydanoz", "taze_sogan", "nar_eksisi", "limon"],
        optionalIngredients: ["marul", "domates", "salatalik", "nane", "biber_salcasi", "sumak", "zeytinyagi"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "patates_salatasi",
        title: "Patates Salatası",
        description: "Haşlanmış patatesin en güzel hali.",
        image: "🥗",
        requiredIngredients: ["patates", "taze_sogan", "maydanoz", "limon"],
        optionalIngredients: ["zeytinyagi", "yumurta", "pul_biber", "sumak", "tuz"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "cacik",
        title: "Cacık",
        description: "Sarımsaklı, naneli.",
        image: "🥒",
        requiredIngredients: ["yogurt", "salatalik", "sarimsak"],
        optionalIngredients: ["nane", "zeytinyagi", "dereotu", "tuz"],
        difficulty: "Çok Kolay",
        time: "5 dk"
    },
    {
        id: "piyaz",
        title: "Piyaz",
        description: "Köftecin usulü.",
        image: "🥗",
        requiredIngredients: ["kuru_fasulye", "sogan", "maydanoz", "sirke", "yumurta"],
        optionalIngredients: ["zeytinyagi", "limon", "sumak", "tuz", "domates"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "mor_lahana_salatasi",
        title: "Mor Lahana Salatası",
        description: "Lokanta usulü sirkeli.",
        image: "🥗",
        requiredIngredients: ["lahan_kirmizi", "sirke", "limon", "tuz"],
        optionalIngredients: ["zeytinyagi", "sarimsak", "maydanoz"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "gavurdagi",
        title: "Gavurdağı Salatası",
        description: "Bol cevizli, nar ekşili.",
        image: "🥗",
        requiredIngredients: ["domates", "biber", "sogan", "ceviz", "nar_eksisi"],
        optionalIngredients: ["maydanoz", "zeytinyagi", "sumak", "salatalik"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "rus_salatasi",
        title: "Rus Salatası (Amerikan)",
        description: "Garnitürlü mayonezli.",
        image: "🥗",
        requiredIngredients: ["patates", "havuc", "bezelye", "mayonez", "yogurt"],
        optionalIngredients: ["tursu", "sosis"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "havuc_tarator",
        title: "Havuç Tarator",
        description: "Havuç ve yoğurdun aşkı.",
        image: "🥕",
        requiredIngredients: ["havuc", "yogurt", "sarimsak", "zeytinyagi"],
        optionalIngredients: ["ceviz", "mayonez", "tuz"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "haydari",
        title: "Haydari",
        description: "Süzme yoğurtlu meze.",
        image: "🧀",
        requiredIngredients: ["suzme_yogurt", "beyaz_peynir", "nane", "sarimsak", "tereyagi"],
        optionalIngredients: ["dereotu", "ceviz"],
        difficulty: "Kolay",
        time: "10 dk"
    },
    {
        id: "saksuka",
        title: "Şakşuka",
        description: "Kızarmış sebzeler domates sosuyla.",
        image: "🍆",
        requiredIngredients: ["patlican", "biber", "domates", "sarimsak", "siviyag"],
        optionalIngredients: ["kabak", "patates", "yogurt"],
        difficulty: "Orta",
        time: "30 dk"
    },
    {
        id: "humus",
        title: "Humus",
        description: "Tahin ve nohutun uyumu.",
        image: "🥣",
        requiredIngredients: ["nohut", "tahini", "limon", "sarimsak", "kimyon"],
        optionalIngredients: ["zeytinyagi", "pul_biber", "pastirma", "tereyagi"],
        difficulty: "Orta",
        time: "20 dk"
    },
    {
        id: "sutlac",
        title: "Fırın Sütlaç",
        description: "Üzeri yanık, kıvamlı.",
        image: "🍮",
        requiredIngredients: ["sut", "pirinc", "seker", "nisasta"],
        optionalIngredients: ["vanilya", "yumurta", "findik", "tarcin"],
        difficulty: "Orta",
        time: "40 dk"
    },
    {
        id: "muhallebi",
        title: "Sade Muhallebi",
        description: "Bebekler gibi hafif.",
        image: "🍮",
        requiredIngredients: ["sut", "seker", "nisasta", "un"],
        optionalIngredients: ["vanilya", "tereyagi", "tarcin", "muz"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "kaskul",
        title: "Keşkül",
        description: "Bademli sütlü tatlı.",
        image: "🍮",
        requiredIngredients: ["sut", "seker", "badem", "nisasta", "yumurta"],
        optionalIngredients: ["vanilya", "hindistan_cevizi", "fistik"],
        difficulty: "Orta",
        time: "30 dk"
    },
    {
        id: "gullac",
        title: "Güllaç",
        description: "Ramazan'ın gülü.",
        image: "🍰",
        requiredIngredients: ["sut", "seker", "yufka", "ceviz"],
        optionalIngredients: ["gul_suyu", "nar", "fistik", "vanilya"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "revani",
        title: "Revani",
        description: "İrmikli şerbetli.",
        image: "🍰",
        requiredIngredients: ["irmik", "un", "yogurt", "yumurta", "siviyag", "seker"],
        optionalIngredients: ["vanilya", "kabartma_tozu", "limon", "hindistan_cevizi"],
        difficulty: "Orta",
        time: "45 dk"
    },
    {
        id: "sekerpare",
        title: "Şekerpare",
        description: "Kıyır kıyır.",
        image: "🍪",
        requiredIngredients: ["un", "irmik", "tereyagi", "seker", "yumurta"],
        optionalIngredients: ["vanilya", "kabartma_tozu", "findik", "fistik"],
        difficulty: "Orta",
        time: "50 dk"
    },
    {
        id: "un_helvasi",
        title: "Un Helvası",
        description: "Kavrulmuş lezzet.",
        image: "🍮",
        requiredIngredients: ["un", "tereyagi", "seker", "sut"],
        optionalIngredients: ["ceviz", "tarcin", "fistik"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "irmik_helvasi",
        title: "İrmik Helvası",
        description: "Tane tane dökülen.",
        image: "🍮",
        requiredIngredients: ["irmik", "tereyagi", "seker", "sut"],
        optionalIngredients: ["fistik", "dondurma", "tarcin"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "islak_kek",
        title: "Islak Kek (Brownie)",
        description: "Bol kakaolu soslu.",
        image: "🍰",
        requiredIngredients: ["yumurta", "seker", "sut", "siviyag", "kakao", "un", "kabartma_tozu"],
        optionalIngredients: ["vanilya", "cikolata", "ceviz", "hindistan_cevizi"],
        difficulty: "Kolay",
        time: "40 dk"
    },
    {
        id: "mozaik_pasta",
        title: "Mozaik Pasta",
        description: "Pişmeyen pratik pasta.",
        image: "🍰",
        requiredIngredients: ["kakao", "seker", "tereyagi", "sut", "biskuvi"], // biskuvi assumed pantry item or 'un' proxy? Add biskuvi to pantry
        optionalIngredients: ["ceviz", "cikolata", "vanilya"],
        difficulty: "Çok Kolay",
        time: "15 dk"
    },
    {
        id: "kabak_tatlisi",
        title: "Kabak Tatlısı",
        description: "Tahin ve cevizle.",
        image: "🎃",
        requiredIngredients: ["kabak", "seker"], // using kabak as pumpkin
        optionalIngredients: ["tahini", "ceviz"],
        difficulty: "Kolay",
        time: "50 dk"
    },
    {
        id: "ayva_tatlisi",
        title: "Ayva Tatlısı",
        description: "Rengiyle büyüleyen kış tatlısı.",
        image: "🍐",
        requiredIngredients: ["ayva", "seker", "su"],
        optionalIngredients: ["tereyagi", "tarcin", "karanfil", "krema"],
        difficulty: "Orta",
        time: "60 dk"
    },
    {
        id: "incir_uyutmasi",
        title: "İncir Uyutması",
        description: "Sadece iki malzemeli mucize.",
        image: "🥣",
        requiredIngredients: ["incir", "sut"],
        optionalIngredients: ["ceviz", "tarcin"],
        difficulty: "Kolay",
        time: "120 dk"
    },
    {
        id: "magnolia",
        title: "Magnolia Tatlısı",
        description: "Çilekli ve muzlu puding.",
        image: "🍮",
        requiredIngredients: ["sut", "krema", "seker", "un", "nisasta"],
        optionalIngredients: ["cilek", "muz", "biskuvi", "vanilya"],
        difficulty: "Kolay",
        time: "30 dk"
    },
    {
        id: "kunefe",
        title: "Evde Künefe",
        description: "Tavada pratik.",
        image: "🥧",
        requiredIngredients: ["kadayif", "beyaz_peynir", "seker", "tereyagi"], // kadayif -> yufka/eriste? add kadayif
        optionalIngredients: ["fistik", "sut"],
        difficulty: "Zor",
        time: "30 dk"
    },
    {
        id: "asure",
        title: "Aşure",
        description: "Birlik ve beraberlik tatlısı.",
        image: "🥣",
        requiredIngredients: ["bugday", "nohut", "kuru_fasulye", "seker", "incir", "kayisi"],
        optionalIngredients: ["ceviz", "findik", "nar", "tarcin", "sut"],
        difficulty: "Zor",
        time: "120 dk"
    },
    {
        id: "gullac",
        title: "Güllaç",
        description: "Ramazan'ın gülü.",
        image: "🍰",
        requiredIngredients: ["sut", "seker", "yufka", "ceviz", "nar"],
        optionalIngredients: ["fistik", "gul_suyu", "kiraz"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "kunefe",
        title: "Künefe (Ev Yapımı)",
        description: "Hatay lezzeti tavada.",
        image: "🍰",
        requiredIngredients: ["kadayif", "peynir", "tereyagi", "seker"],
        optionalIngredients: ["fistik", "kaymak"],
        difficulty: "Zor",
        time: "40 dk"
    },
    {
        id: "kabak_tatlisi",
        title: "Kabak Tatlısı",
        description: "Tahin ve cevizle.",
        image: "🎃",
        requiredIngredients: ["balkabagi", "seker"],
        optionalIngredients: ["tahin", "ceviz", "karanfil"],
        difficulty: "Kolay",
        time: "60 dk"
    },
    {
        id: "ayva_tatlisi",
        title: "Ayva Tatlısı",
        description: "Rengi doğal kırmızı.",
        image: "🟡",
        requiredIngredients: ["ayva", "seker", "karanfil", "cubuk_tarcin"],
        optionalIngredients: ["kaymak", "elma", "nar"],
        difficulty: "Orta",
        time: "60 dk"
    },
    {
        id: "incir_uyutmasi",
        title: "İncir Uyutması",
        description: "Sadece iki malzemeli mucize.",
        image: "🟣",
        requiredIngredients: ["kuru_incir", "sut"],
        optionalIngredients: ["ceviz", "tarcin"],
        difficulty: "Kolay",
        time: "180 dk"
    },
    {
        id: "hosaf",
        title: "Üzüm Hoşafı",
        description: "Yemeklerin yanına ferahlık.",
        image: "🥤",
        requiredIngredients: ["kuru_uzum", "seker", "su"],
        optionalIngredients: ["karanfil", "cubuk_tarcin"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "komposto",
        title: "Vişne Kompostosu",
        description: "Taze meyvelerle.",
        image: "🥤",
        requiredIngredients: ["visne", "seker", "su"],
        optionalIngredients: ["karanfil", "cubuk_tarcin"],
        difficulty: "Kolay",
        time: "20 dk"
    },
    {
        id: "limonata",
        title: "Ev Yapımı Limonata",
        description: "Buz gibi serinlik.",
        image: "🍋",
        requiredIngredients: ["limon", "seker", "su", "nane"],
        optionalIngredients: ["buz", "portakal", "zencefil"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "sicak_cikolata",
        title: "Sıcak Çikolata",
        description: "Kış günlerinin dostu.",
        image: "☕",
        requiredIngredients: ["sut", "kakao", "seker", "cikolata"],
        optionalIngredients: ["krema", "marshmallow", "tarcin"],
        difficulty: "Kolay",
        time: "10 dk"
    },
    {
        id: "sahlep",
        title: "Sahlep",
        description: "Tarçın kokulu.",
        image: "☕",
        requiredIngredients: ["sut", "sahlep_tozu", "seker"],
        optionalIngredients: ["tarcin", "zencefil"],
        difficulty: "Kolay",
        time: "15 dk"
    },
    {
        id: "boza",
        title: "Boza",
        description: "Fermente kış içeceği.",
        image: "🥤",
        requiredIngredients: ["bulgur", "seker", "maya", "su"],
        optionalIngredients: ["leblebi", "tarcin"],
        difficulty: "Zor",
        time: "2 gun"
    },
    {
        id: "turk_kahvesi",
        title: "Türk Kahvesi",
        description: "40 yıl hatrı var.",
        image: "☕",
        requiredIngredients: ["kahve", "su"],
        optionalIngredients: ["seker", "lokum", "cikolata"],
        difficulty: "Kolay",
        time: "5 dk"
    }
];

