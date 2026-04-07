/* ═══════════════════════════════════════════════════════════════
   DoF Calculator — Lens Database  v25
   https://github.com/nari4D/dof-calculator

   Format:
   { focal:XX, fstop:X.X, name:'Brand XXmm FX.X', sensors:['FF'], asin_jp:'XXXXXXXXXX', asin_en:'XXXXXXXXXX', year:XXXX },

   sensors: 'MF'=Medium Format, 'FF'=Full Frame, 'APSC'=APS-C, '1INCH'=1 inch
   year: release year (affiliate section shows year >= 2020 only)
   ASINs verified on amazon.co.jp / amazon.com (Apr 2026)

   Mount notes:
   - Sigma DG DN Art: Sony E and L-mount ONLY (no Canon RF, no Nikon Z)
   - Viltrox FF Z-mount: 20/2.8, 24/1.8, 35/1.8 available natively
   - Canon RF FF third-party: very limited (Canon licensing restrictions)
═══════════════════════════════════════════════════════════════ */

const LENS_DB = [

  /* ── Medium Format — Fujifilm GF ────────────────────────── */
  { focal:20,  fstop:4.0, name:'Fujinon GF 20-35mm F4 R WR',          sensors:['MF'], asin_jp:'B0BZXM2TB5', asin_en:'B0BCR6YBJR', year:2022 },
  { focal:23,  fstop:4.0, name:'Fujinon GF 23mm F4 R LM WR',          sensors:['MF'], asin_jp:'B01N12IMGM', asin_en:'B01N12IMGM', year:2017 },
  { focal:30,  fstop:3.5, name:'Fujinon GF 30mm F3.5 R WR',           sensors:['MF'], asin_jp:'B08CMNV9ZV', asin_en:'B08CMNV9ZV', year:2020 },
  { focal:45,  fstop:2.8, name:'Fujinon GF 45mm F2.8 R WR',           sensors:['MF'], asin_jp:'B078WGWHR5', asin_en:'B078WGWHR5', year:2017 },
  { focal:35,  fstop:4.5, name:'Fujinon GF 35-70mm F4.5-5.6 WR',      sensors:['MF'], asin_jp:'B09WD12FMR', asin_en:'B09WD12FMR', year:2022 },
  { focal:50,  fstop:3.5, name:'Fujinon GF 50mm F3.5 R LM WR',        sensors:['MF'], asin_jp:'B07X38NSDP', asin_en:'B07X38NSDP', year:2019 },
  { focal:55,  fstop:1.7, name:'Fujinon GF 55mm F1.7 R WR',           sensors:['MF'], asin_jp:'B0CHG23DJC', asin_en:'B0CHG23DJC', year:2023 },
  { focal:80,  fstop:1.7, name:'Fujinon GF 80mm F1.7 R WR',           sensors:['MF'], asin_jp:'B08VGT7HST', asin_en:'B08TPBNCYM', year:2021 },
  { focal:45,  fstop:4.0, name:'Fujinon GF 45-100mm F4 R LM OIS WR',  sensors:['MF'], asin_jp:'B07VHKQ3B7', asin_en:'B07VHKQ3B7', year:2019 },

  /* ── Medium Format — Hasselblad XCD ─────────────────────── */
  { focal:21,  fstop:4.0, name:'Hasselblad XCD 21mm F4',              sensors:['MF'], asin_jp:'B09CGQKTK7', asin_en:'B09CGQKTK7', year:2021 },
  { focal:35,  fstop:3.5, name:'Hasselblad XCD 35-75mm F3.5-4.5',     sensors:['MF'], asin_jp:'B09CGQ8KMQ', asin_en:'B09CGQ8KMQ', year:2021 },

  /* ── Full Frame — Sony FE ───────────────────────────────── */
  { focal:14,  fstop:1.8, name:'Sony FE 14mm F1.8 GM',                sensors:['FF'], asin_jp:'B093BY7LKP', asin_en:'B09316YPCH', year:2021 },
  { focal:16,  fstop:2.8, name:'Sony FE 16-25mm F2.8 G',              sensors:['FF'], asin_jp:'B0D1X89TH8', asin_en:'B0D1VWRW46', year:2024 },
  { focal:20,  fstop:1.8, name:'Sony FE 20mm F1.8 G',                 sensors:['FF'], asin_jp:'B0854Y5YWH', asin_en:'B084ZDLBVQ', year:2020 },
  { focal:24,  fstop:1.4, name:'Sony FE 24mm F1.4 GM',                sensors:['FF'], asin_jp:'B07HSSRJ9D', asin_en:'B07HJXVHSS', year:2018 },
  { focal:24,  fstop:2.8, name:'Sony FE 24mm F2.8 G',                 sensors:['FF'], asin_jp:'B08ZY3SGH3', asin_en:'B08ZSWL58M', year:2021 },
  { focal:24,  fstop:2.8, name:'Sony FE 24-50mm F2.8 G',              sensors:['FF'], asin_jp:'B0CW66Y45K', asin_en:'B0CVRYS3WW', year:2024 },
  { focal:24,  fstop:2.8, name:'Sony FE 24-70mm F2.8 GM II',          sensors:['FF'], asin_jp:'B0B1LWBR18', asin_en:'B09YYY6P98', year:2022 },
  { focal:35,  fstop:1.4, name:'Sony FE 35mm F1.4 GM',                sensors:['FF'], asin_jp:'B08T1MRC74', asin_en:'B09B4RSNTQ', year:2021 },
  { focal:35,  fstop:1.8, name:'Sony FE 35mm F1.8',                   sensors:['FF'], asin_jp:'B07V3PS92L', asin_en:'B07V8X4KGG', year:2019 },
  { focal:50,  fstop:1.2, name:'Sony FE 50mm F1.2 GM',                sensors:['FF'], asin_jp:'B08ZC82H77', asin_en:'B08ZNFM4WG', year:2021 },
  { focal:50,  fstop:1.4, name:'Sony FE 50mm F1.4 GM',                sensors:['FF'], asin_jp:'B0BWHD1JVN', asin_en:'B0BWFSJXQC', year:2022 },
  { focal:50,  fstop:2.5, name:'Sony FE 50mm F2.5 G',                 sensors:['FF'], asin_jp:'B08ZYB29CS', asin_en:'B08ZYB29CS', year:2021 },

  /* ── Full Frame — Canon RF ──────────────────────────────── */
  { focal:14,  fstop:4.0, name:'Canon RF 14-35mm F4 L IS USM',        sensors:['FF'], asin_jp:'B097Z21LGH', asin_en:'B097Z21LGH', year:2021 },
  { focal:16,  fstop:2.8, name:'Canon RF 16mm F2.8 STM',              sensors:['FF'], asin_jp:'B09FFTB9V6', asin_en:'B09FFTB9V6', year:2021 },
  { focal:24,  fstop:1.8, name:'Canon RF 24mm F1.8 Macro IS STM',     sensors:['FF'], asin_jp:'B0B69QZ1DJ', asin_en:'B0B69QZ1DJ', year:2022 },
  { focal:50,  fstop:1.8, name:'Canon RF 50mm F1.8 STM',              sensors:['FF'], asin_jp:'B08MFVH7SV', asin_en:'B08MFVH7SV', year:2021 },

  /* ── Full Frame — Nikon Z ───────────────────────────────── */
  { focal:14,  fstop:2.8, name:'Nikon Z 14-24mm F2.8 S',             sensors:['FF'], asin_jp:'B08J7FHHWX', asin_en:'B08J7FHHWX', year:2020 },
  { focal:17,  fstop:2.8, name:'Nikon Z 17-28mm F2.8',               sensors:['FF'], asin_jp:'B0BFVTRRKJ', asin_en:'B0BFTX4DS7', year:2022 },
  { focal:20,  fstop:1.8, name:'Nikon Z 20mm F1.8 S',                sensors:['FF'], asin_jp:'B084QPDT1H', asin_en:'B084QPDT1H', year:2020 },
  { focal:28,  fstop:2.8, name:'Nikon Z 28mm F2.8',                  sensors:['FF'], asin_jp:'B09M3H6M4P', asin_en:'B09M62RJK2', year:2021 },
  { focal:40,  fstop:2.0, name:'Nikon Z 40mm F2',                    sensors:['FF'], asin_jp:'B09G3XYY8F', asin_en:'B09G57BXZ4', year:2021 },
  { focal:50,  fstop:1.2, name:'Nikon Z 50mm F1.2 S',                sensors:['FF'], asin_jp:'B08J7HWS3J', asin_en:'B08J7FDF6G', year:2020 },

  /* ── Full Frame — Lumix S (L-mount) ─────────────────────── */
  { focal:18,  fstop:1.8, name:'Lumix S 18mm F1.8',                  sensors:['FF'], asin_jp:'B0BDDJYRCN', asin_en:'B0BDGGZ7NS', year:2022 },
  { focal:24,  fstop:1.8, name:'Lumix S 24mm F1.8',                  sensors:['FF'], asin_jp:'B09DYTGM62', asin_en:'B09F6WGXHM', year:2021 },
  { focal:35,  fstop:1.8, name:'Lumix S 35mm F1.8',                  sensors:['FF'], asin_jp:'B09MHVQRF3', asin_en:'B09LD9DQG5', year:2021 },
  { focal:50,  fstop:1.8, name:'Lumix S 50mm F1.8',                  sensors:['FF'], asin_jp:'B093NKZCR4', asin_en:'B093NKZCR4', year:2020 },

  /* ── Full Frame — Sigma DG DN Art (Sony E) ──────────────── */
  /* Note: DG DN Art series = Sony E + L-mount ONLY. No Canon RF or Nikon Z versions exist. */
  { focal:20,  fstop:1.4, name:'Sigma 20mm F1.4 DG DN Art (Sony E)',  sensors:['FF'], asin_jp:'B0B8Z5582N', asin_en:'B0B8Z5582N', year:2022 },
  { focal:24,  fstop:1.4, name:'Sigma 24mm F1.4 DG DN Art (Sony E)',  sensors:['FF'], asin_jp:'B0B91YP783', asin_en:'B0B91YP783', year:2022 },
  { focal:35,  fstop:1.4, name:'Sigma 35mm F1.4 DG DN Art (Sony E)',  sensors:['FF'], asin_jp:'B093JQ7XPK', asin_en:'B093JQ7XPK', year:2021 },
  { focal:50,  fstop:1.4, name:'Sigma 50mm F1.4 DG DN Art (Sony E)',  sensors:['FF'], asin_jp:'B0BV47LYN7', asin_en:'B0BV47LYN7', year:2023 },

  /* ── Full Frame — Sigma DG DN Art (L-mount) ─────────────── */
  { focal:20,  fstop:1.4, name:'Sigma 20mm F1.4 DG DN Art (L-mount)', sensors:['FF'], asin_jp:'B0B92CBXFF', asin_en:'B0B92CBXFF', year:2022 },
  { focal:24,  fstop:1.4, name:'Sigma 24mm F1.4 DG DN Art (L-mount)', sensors:['FF'], asin_jp:'B0B91MPH6F', asin_en:'B0B91MPH6F', year:2022 },
  { focal:35,  fstop:1.4, name:'Sigma 35mm F1.4 DG DN Art (L-mount)', sensors:['FF'], asin_jp:'B093JPTHCK', asin_en:'B093JPTHCK', year:2021 },
  { focal:50,  fstop:1.4, name:'Sigma 50mm F1.4 DG DN Art (L-mount)', sensors:['FF'], asin_jp:'B0BV3V7D74', asin_en:'B0BV3V7D74', year:2023 },

  /* ── Full Frame — Samyang AF (Sony E) ───────────────────── */
  { focal:14,  fstop:2.8, name:'Samyang AF 14mm F2.8 FE',             sensors:['FF'], asin_jp:'B076VHK2ZZ', asin_en:'B076VHK2ZZ', year:2017 },
  { focal:24,  fstop:1.8, name:'Samyang AF 24mm F1.8 FE',             sensors:['FF'], asin_jp:'B09234JQP1', asin_en:'B09234JQP1', year:2021 },
  { focal:35,  fstop:1.8, name:'Samyang AF 35mm F1.8 FE',             sensors:['FF'], asin_jp:'B08HN3558W', asin_en:'B08N8KHLKV', year:2020 },
  { focal:50,  fstop:1.4, name:'Samyang AF 50mm F1.4 II FE',          sensors:['FF'], asin_jp:'B09MWQSZ6X', asin_en:'B09MWQSZ6X', year:2021 },

  /* ── Full Frame — Viltrox (Sony E) ─────────────────────── */
  { focal:20,  fstop:2.8, name:'Viltrox AF 20mm F2.8 FE',             sensors:['FF'], asin_jp:'B0CNSRM33W', asin_en:'B0CNSRM33W', year:2023 },
  { focal:24,  fstop:1.8, name:'Viltrox AF 24mm F1.8 FE',             sensors:['FF'], asin_jp:'B091DP6K96', asin_en:'B091DP6K96', year:2021 },
  { focal:35,  fstop:1.8, name:'Viltrox AF 35mm F1.8 FE',             sensors:['FF'], asin_jp:'B09ND9W2WG', asin_en:'B09ND9W2WG', year:2022 },

  /* ── Full Frame — Viltrox (Nikon Z) ─────────────────────── */
  { focal:20,  fstop:2.8, name:'Viltrox AF 20mm F2.8 (Nikon Z)',       sensors:['FF'], asin_jp:'B0CTLTKNZ3', asin_en:'B0CPSLDM7G', year:2024 },
  { focal:24,  fstop:1.8, name:'Viltrox AF 24mm F1.8 (Nikon Z)',       sensors:['FF'], asin_jp:'B0C52SL5SS', asin_en:'B09CPYVCC3', year:2021 },
  { focal:35,  fstop:1.8, name:'Viltrox AF 35mm F1.8 (Nikon Z)',       sensors:['FF'], asin_jp:'B09G2G44WQ', asin_en:'B09G2G44WQ', year:2021 },

  /* ── APS-C — Sony E ─────────────────────────────────────── */
  { focal:11,  fstop:1.8, name:'Sony E 11mm F1.8',                    sensors:['APSC'], asin_jp:'B0B2YZX69J', asin_en:'B09RZPZDMW', year:2022 },
  { focal:35,  fstop:1.8, name:'Sony E 35mm F1.8 OSS',                sensors:['APSC'], asin_jp:'B00GEBLXGO', asin_en:'B00GEBLXGO', year:2013 },
  { focal:50,  fstop:1.8, name:'Sony E 50mm F1.8 OSS',                sensors:['APSC'], asin_jp:'B00DMLPVG0', asin_en:'B00DMLPVG0', year:2013 },

  /* ── APS-C — Fujifilm XF ────────────────────────────────── */
  { focal:10,  fstop:4.0, name:'Fujinon XF 10-24mm F4 R OIS WR',      sensors:['APSC'], asin_jp:'B00HE5MXE0', asin_en:'B00HE5MXE0', year:2013 },
  { focal:16,  fstop:1.4, name:'Fujinon XF 16mm F1.4 R WR',           sensors:['APSC'], asin_jp:'B00XN53JME', asin_en:'B00XN53JME', year:2015 },
  { focal:18,  fstop:1.4, name:'Fujinon XF 18mm F1.4 R LM WR',        sensors:['APSC'], asin_jp:'B0921Q4498', asin_en:'B0923F7V45', year:2021 },
  { focal:23,  fstop:1.4, name:'Fujinon XF 23mm F1.4 R LM WR',        sensors:['APSC'], asin_jp:'B09M2HBQ5P', asin_en:'B09M2HBQ5P', year:2021 },
  { focal:33,  fstop:1.4, name:'Fujinon XF 33mm F1.4 R LM WR',        sensors:['APSC'], asin_jp:'B09M2JLQK7', asin_en:'B09M2JLQK7', year:2021 },
  { focal:35,  fstop:1.4, name:'Fujinon XF 35mm F1.4 R',              sensors:['APSC'], asin_jp:'B006VQLZGM', asin_en:'B006VQLZGM', year:2012 },
  { focal:35,  fstop:2.0, name:'Fujinon XF 35mm F2 R WR',             sensors:['APSC'], asin_jp:'B015HCM6C2', asin_en:'B015HCM6C2', year:2015 },
  { focal:50,  fstop:1.0, name:'Fujinon XF 50mm F1.0 R WR',           sensors:['APSC'], asin_jp:'B08DB1ZY4V', asin_en:'B08DB1ZY4V', year:2020 },

  /* ── APS-C — Canon RF-S ─────────────────────────────────── */
  { focal:10,  fstop:4.5, name:'Canon RF-S 10-18mm F4.5-6.3 IS STM',  sensors:['APSC'], asin_jp:'B0D4RXPZ8G', asin_en:'B0D6GY79XV', year:2023 },
  { focal:18,  fstop:4.5, name:'Canon RF-S 18-45mm F4.5-6.3 IS STM',  sensors:['APSC'], asin_jp:'B0B27NSFLQ', asin_en:'B09B4V58FL', year:2022 },

  /* ── APS-C — Sigma DC DN (Sony E / Fuji X) ─────────────── */
  { focal:16,  fstop:1.4, name:'Sigma 16mm F1.4 DC DN Contemporary',  sensors:['APSC'], asin_jp:'B077BWG7VX', asin_en:'B077BWG7VX', year:2017 },
  { focal:18,  fstop:2.8, name:'Sigma 18-50mm F2.8 DC DN Contemporary',sensors:['APSC'], asin_jp:'B09JVBB36L', asin_en:'B09JFXS4X1', year:2021 },
  { focal:30,  fstop:1.4, name:'Sigma 30mm F1.4 DC DN Contemporary',  sensors:['APSC'], asin_jp:'B075543MDD', asin_en:'B075543MDD', year:2017 },

  /* ── APS-C — Samyang ────────────────────────────────────── */
  { focal:12,  fstop:2.0, name:'Samyang AF 12mm F2.0 E',               sensors:['APSC'], asin_jp:'B093BN913R', asin_en:'B08Z2SMKDB', year:2021 },

  /* ── APS-C — Viltrox (Sony E / Fuji X) ─────────────────── */
  { focal:35,  fstop:1.7, name:'Viltrox AF 35mm F1.7 E',               sensors:['APSC'], asin_jp:'B0DQP6SQ7Z', asin_en:'B0DQP6SQ7Z', year:2024 },
  { focal:50,  fstop:1.8, name:'Viltrox AF 50mm F1.8 E (APS-C)',       sensors:['APSC'], asin_jp:'B0BW4J2JFH', asin_en:'B0BW4J2JFH', year:2023 },

  /* ── APS-C — Viltrox (Nikon Z) ─────────────────────────── */
  { focal:35,  fstop:1.7, name:'Viltrox AF 35mm F1.7 (Nikon Z)',       sensors:['APSC'], asin_jp:'B0DP74RL9X', asin_en:'B0DQV4MGJF', year:2024 },

  /* ── 1-inch ─────────────────────────────────────────────── */
  { focal:24,  fstop:1.8, name:'Sony Cyber-shot RX100 VII',            sensors:['1INCH'], asin_jp:'B07VDGB5R6', asin_en:'B07VDGB5R6', year:2019 },
  { focal:18,  fstop:1.8, name:'Sony VLOGCAM ZV-1 II (18-50mm)',       sensors:['1INCH'], asin_jp:'B0C2KBCYK3', asin_en:'B0C2KBCYK3', year:2023 },
  { focal:20,  fstop:2.0, name:'Sony VLOGCAM ZV-1F (20mm F2.0)',       sensors:['1INCH'], asin_jp:'B0BJ6HXBJZ', asin_en:'B0BHKKHNHM', year:2022 },
  { focal:24,  fstop:1.8, name:'Canon PowerShot G7 X Mark III',        sensors:['1INCH'], asin_jp:'B07V6DHHRX', asin_en:'B07VF8BBGH', year:2019 },

];
