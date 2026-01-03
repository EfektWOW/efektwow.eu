const reviews = [
  // nowa opinia – najnowsza
  {
    name: "Marta B",
    text: "Świetny kontakt, szybko i starannie wykonane czyszczenie samochodu wewnątrz, dziękuję raz jeszcze i polecam :)",
    stars: 5,
    date: "27.12.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIRCbaYp2bT6P4AsPLUCGm2z-pnFcnG6lNHYhc4ZTHchVksYQ=w36-h36-p-rp-mo-br100"
  },
  {
    name: "Kosma Bit",
    text: "Profesjonalnie, sprawnie i bardzo dokładnie wykonane czyszczenie. Przesympatyczny Pan. Z pewnością skorzystam z usług ponownie.",
    stars: 5,
    date: "17.12.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLUH1A8DTOsJqvaAjKcnwGJy-pbPR0idXLVHjmeE9-zlkMZJQ=w36-h36-p-rp-mo-br100"
  },
  {
    name: "Agnieszka Łoza",
    text: "Jestem bardzo zadowolona, pełny profesjonalizm. Polecam",
    stars: 5,
    date: "11.12.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKsSbUhLQDe6RrwQmHvWW3UG6zWlOmbtzVyvJWm8RNMZbFolw=s120-c-rp-mo-br100"
  },
  {
    name: "Agnieszka Machałek",
    text: "Jesteśmy bardzo zadowoleni z profesjonalnej usługi czyszczenia dywanów- wyglądają jak nowe! Świetny kontakt, zaskakujące efekty i konkurencyjna cena. Polecamy szczerze, a my na pewno skorzystamy kolejny raz!",
    stars: 5,
    date: "29.11.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJSEuUWDk2Jv3fP_M5-cXFhal4K_aIBiUo3AKcls4umV_Reuw=s120-c-rp-mo-br100"
  },
  {
    name: "Wojtek Łachno (Wojtaszmc)",
    text: "Super kontakt oraz super wykonana robota. Na pewno skorzystam jeszcze raz.",
    stars: 5,
    date: "25.11.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocICJ2-UL8ZpJUK-eG2mXkq55LZ10JCZiDYxxtcJQHmJxXCsZA=s120-c-rp-mo-br100"
  },
  {
    name: "Grzegorz Oczkowski",
    text: "Profesjonalizm w każdym calu. Jestem bardzo zadowolony z usługi! 5/5 gwiazdek!",
    stars: 5,
    date: "21.11.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLndAeoeHVvX-He_Xp4m-LaBC2eNXsxqdxqqs0LQehJamVF0w=s120-c-rp-mo-br100"
  },
  {
    name: "Ada Ziobro",
    text: "Świetnie wykonana usługa czyszczenia kanapy, gorąco polecam!",
    stars: 5,
    date: "14.11.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJHt31xozRYtHNiV0wL-tiDGS31AgyQdWsnVuHTl4Jvt4bpii0=s120-c-rp-mo-br100"
  },
  {
    name: "Katarzyna Wilkos",
    text: "Miałam przyjemność skorzystać z usługi komoleksowego sprzątania auta oraz prania tapicerki 😊 robota wykonana perfekcyjnie, auto było w złym stanie a odebrałam calkiem co innego! Z plam po oleju na jasnej podłodze ani śladu. A cena za tak dobrze wykonaną robotę po prostu niemożliwa🔥 Szczerze polecam!",
    stars: 5,
    date: "24.09.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKYBik_3NWwMeaUYD1CM3SAo80XuFL3EJkJHI6oeSjLkXhb9g=s120-c-rp-mo-br100"
  },
  {
    name: "rafal4610",
    text: "Usługa wykonana solidnie. Polecam każdemu",
    stars: 5,
    date: "21.09.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKhdm5PcTf3xAK4yeC8DMT4TLQR-KXSyvuDVj3qmpwclYdoYQ=s120-c-rp-mo-br100"
  },
  {
    name: "Piotr Teterycz",
    text: "Szybko sprawnie fachowo polecam 👍",
    stars: 5,
    date: "28.08.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJKeIN9jIGAdGSWlICY7Mcw0RM1lL7jfskLrNh0i1bzTOFlhw=s120-c-rp-mo-br100"
  },
  {
    name: "Sylwia Ja",
    text: "Serio efekt wow. Dywan wyprany błyskawiczne☺️Polecam",
    stars: 5,
    date: "25.08.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI_xEL1NmymYb2cteJT6cWB0qjniH8aUVRUto7ZKn5vqp1S5g=s120-c-rp-mo-br100"
  },
  {
    name: "Fox'",
    text: "Polecam. Pan Krystian wyprał wyczyścił mój dywan, który spisałem na straty",
    stars: 5,
    date: "23.08.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLANRi0I9jNTWd8kENuFsJQBjIKwOXjV6Haic6MRtfac-emzQ=s120-c-rp-mo-br100"
  },
  {
    name: "piotr sekulka",
    text: "Profesjonalnie wykonana usługa",
    stars: 5,
    date: "19.08.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIsseaBVRr_V8RonLyRhUf8x0hAbwPvqGGhGaIagp00uaQRzg=s120-c-rp-mo-br100"
  },
  {
    name: "Emilia Jachorek",
    text: "Oddałam 2 auta na mycie i pranie wnętrza – efekt przerósł moje oczekiwania! Auta wyglądaja jak nowe, pachna świeżo, każdy detal dopracowany. Usługa wykonana perfekcyjnie i z pełnym zaangażowaniem ponad to co oczekiwałam. Zdecydowanie polecam!",
    stars: 5,
    date: "15.08.2025",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKE9_ebwyv2rGDP7mlx2DgXxn1YPADyMO1a--3fycjOFwpiTg=s120-c-rp-mo-br100"
  },
  {
    name: "Wioleta Krukowska",
    text: "Polecam z całego ♥️, usługa dobrze wykonana, tapicerka wygląda jak nowa. Pełen profesjonalizm i sumienność. Wszystko zrobione szybko i dokładnie a co najważniejsze cena naprawdę w porządku.",
    stars: 5,
    date: "12.07.2025",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXg5cPZW-rgKau1fsbfbeoFsTo_YpRJnH_iRpOmEtPCooR59W9W=s120-c-rp-mo-br100"
  },
  {
    name: "Sacky",
    text: "Zdecydowanie polecam! Bardzo dobrze wykonana praca, jakościowe czyszczenie spełniło moje oczekiwania.",
    stars: 5,
    date: "10.07.2025",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVleeaYHxVpy9bc3K2eJ9jqwobhyWPQB6YRXlwf6_oBrkREZiF9=s120-c-rp-mo-br100"
  },
  {
    name: "KasiuLa",
    text: "Polecam. Po czyszczeniu tapicerki w aucie i ogólnie całego środka jestem mega zadowolona!",
    stars: 5,
    date: "10.07.2025",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXJByoho1bXJbdp_fcYXB9OZ4iXNuTwDxImsY8_KDMwch1R-50=s120-c-rp-mo-br100"
  }
];
