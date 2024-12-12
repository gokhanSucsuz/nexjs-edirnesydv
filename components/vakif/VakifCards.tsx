import Image from "next/image";
import React from "react";
import { VakifCard } from "./VakifCard";

const info = [
	{
		id: 1,
		title: "Edirne Valisi - Vakıf Başkanı",
		url: "/vali-yunus-sezer.svg",
		biography: `10 Nisan 1978 yılında Erzurum’un İspir İlçesinde dünyaya gelen Sezer; ilk, orta ve lise öğrenimini Erzurum'da tamamladı.
Uludağ Üniversitesi İktisadi ve İdari Bilimler Fakültesi Kamu Yönetimi bölümünden mezun oldu.
2001 yılında Kaymakam adayı olarak mesleğe başladı.
Daha sonra sırasıyla: (Edirne) Lalapaşa Kaymakam Vekili, (İzmir) Beydağ Kaymakam Vekili, İngiltere’de yurt dışı stajı, (Giresun) Alucra Kaymakamı, (Sivas) Altınyayla Kaymakamı, Siirt Vali Yardımcısı, (Diyarbakır) Silvan Kaymakamı, Mahalli İdareler Genel Müdürlüğü Daire Başkanı, Bakan Danışmanı, İçişleri Bakanlığı Strateji Geliştirme Başkanı, Kırıkkale Valisi görevlerinde bulundu.
11 Eylül 2021 tarihinde Afet ve Acil Durum Yönetimi Başkanlığı görevine atanan Vali SEZER, 10 Ağustos 2023 tarihli Resmî Gazetede yayımlanan Cumhurbaşkanlığı Atama Kararı ile Edirne Valiliği görevine atanan SEZER 21 Ağustos 2023 tarihinde Edirne Valiliği görevine başlamıştır. 
Edirne Valisi Yunus SEZER evli ve 3 (üç) çocuk babasıdır.`
	},
	{
		id: 2,
		title: "Edirne Vali Yardımcısı - Vakıf Başkan Vekili",
		url: "/vali-yardimcisi-turgut-subasi.svg",
		biography: `1964 yılında Artvin İli Şavşat İlçesinde doğdu. İlk ve orta öğrenimini aynı ilçede tamamladı.1987 yılında Ankara Üniversitesi Hukuk Fakültesinden mezun oldu. Dokuz Eylül Üniversitesi Hukuk Fakültesinde Kamu Hukuku Anabilim Dalı Ekonomi Hukuku programında yüksek lisans yaptı. “Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Usulü” konulu proje çalışması mevcuttur. 1987-1988 yılında Artvin Barosuna bağlı Avukatlık stajını bitirip "Avukatlık Ruhsatnamesi" ni alan Subaşı 1988-1990 yılları arasında Artvin Adli Yargı Hakim Adayı olarak çalıştı.1990 yılında Mülki İdare Amirliği mesleğini geçerek Ordu Kaymakam Adayı olarak göreve başladı. Subaşı, adaylık sırasında 8 ay İngiltere'de lisan ve mesleki eğitim aldı.
 
Mesleki Kariyeri
 
1994-1996 Trabzon-Dernekpazarı Kaymakamı, 
1996-1998 Muş-Varto Kaymakamı, 
1998-2002 Hatay-Yayladağı Kaymakamı, 
2002-2006 Erzurum-Pasinler Kaymakamı, 
2006-2012 İzmir-Menemen Kaymakamı, 
2012-2015 Adana-Yüreğir Kaymakamı,
2015-2018 Ordu Vali Yardımcısı,
27.12.2018 tarihli ve 2018/260 sayılı 30368 Sayılı Resmi Gazete” de yayınlanan 2018/260 Sayılı Cumhurbaşkanlığı Kararınca Zonguldak Vali Yardımcısı görevine atanmıştır. Evli, iki kız, bir erkek çocuğu vardır. Eşi öğretmen olarak çalışmaktadır. Yabancı dili İngilizcedir. `
	}
];
const VakifCards = () => {
	return (
		<div className="w-[96%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
			{info.map(data => {
				return <VakifCard key={data.id} props={data} />;
			})}
		</div>
	);
};

export default VakifCards;
