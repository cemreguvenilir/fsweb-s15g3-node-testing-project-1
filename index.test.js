const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  test("[3] verilen propu trimliyor", () => {
    let model = { isim: "  jane  ", yas: " 34 " };
    let expected = { isim: "jane", yas: " 34 " };
    let actual = utils.verileniTrimle(model, "isim");
    expect(actual).toEqual(expected);
  });
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    let model = { isim: "  jane  ", yas: " 34 " };
    let actual = utils.verileniTrimle(model, "isim");
    expect(actual.yas).toBe(" 34 ");
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }", () => {
    let tamsayilar = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];
    let expected = 3;
    let actual = utils.enBuyukTamsayiyiBul(tamsayilar);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    sayici = new utils.Sayici(3); // her test yeni bir sayı ile başlatılıyor
  });
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    let actual = sayici.asagiSay();
    expect(actual).toBe(3);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    sayici.asagiSay();
    let actual = sayici.asagiSay();
    expect(actual).toBe(2);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    for (let i = 0; i < 999; i++) {
      sayici.asagiSay();
    }
    let actual = sayici.asagiSay();
    expect(actual).toBe(0);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    let actual = mevsimler.sonraki();
    expect(actual).toBe("yaz");
  });
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    mevsimler.sonraki();
    let actual = mevsimler.sonraki();
    expect(actual).toBe("sonbahar");
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    let actual = mevsimler.sonraki();
    expect(actual).toBe("kış");
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    let actual = mevsimler.sonraki();
    expect(actual).toBe("ilkbahar");
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    for (let i = 0; i < 4; i++) {
      mevsimler.sonraki();
    }
    let actual = mevsimler.sonraki();
    expect(actual).toBe("yaz");
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    for (let i = 0; i < 39; i++) {
      mevsimler.sonraki();
    }
    let actual = mevsimler.sonraki();
    expect(actual).toBe("ilkbahar");
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    focus.sur(100);
    let actual = focus.sur(100);
    expect(actual).toBe(200);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    focus.sur(100);
    focus.sur(100);
    focus.sur(100);
    expect(focus.depo).toBe(10);
  }) /
    test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
      focus.sur(600);
      focus.benzinal(20);
      focus.sur(300);
      expect(focus.odometer).toBe(900);
    });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    focus.sur(600);
    focus.benzinal(50);
    let actual = focus.sur(600);
    expect(actual).toBe(1200);
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  test("[19] bir çift sayı verilirse true çözümlüyor", async () => {
    let actual = await utils.asenkronCiftSayi(2);
    expect(actual).toBeTruthy();
  });
  test("[20] tek sayı verilirse false çözümlüyor", async () => {
    let actual = await utils.asenkronCiftSayi(3);
    expect(actual).toBeFalsy();
  });
});
