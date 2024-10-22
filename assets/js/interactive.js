const fiyat = 0.00016;

function hesapla() {
  const gosterim = Number(this.value) * 1000;
  let toplamFiyat = Math.round(gosterim * fiyat);
  const gosterimSayisi = gosterim/1000;
  pageviews.innerText = `${gosterimSayisi.toLocaleString()}K`
  if(yillikOdeme.checked) {
    toplamFiyat = (toplamFiyat * 12) * 0.75;
  }
  fiyatTxt.innerText = '$' + toplamFiyat;
}

slider.addEventListener('input', hesapla);
yillikOdeme.addEventListener('click', hesapla);

sayfaGoruntulemeHesapla();
hesapla();