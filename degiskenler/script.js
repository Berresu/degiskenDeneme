function merhaba(){
    let ad;
    ad=document.getElementById("txtAd"),value;
    console.log(ad);

    let soyad;
    soyad=document.getElementById("txtSoyad"),value;
    console.log(soyad);

    let yas;
    yas=document.getElementById("numberYas"),value;
    console.log(yas);

    let okul;
    okul=document.getElementById("txtOkul"),value;
    console.log(okul);

    let sinif;
    sinif=document.getElementById("numberSinif"),value;
    console.log(sinif);

    let bolum;
    bolum=document.getElementById("txtBolum"),value;
    console.log(bolum);
    alert("Hoşgeldiniz " + ad + soyad + yas + okul + sinif + bolum);

    let yeniButon=document.createElement("button");
    document.body.appendChild(yeniButon);
    yeniButon.innerText="Tıkla";
    yeniButon.addEventListener("click" , temizle);
}

function temizle(){
    console.log("Kontrol");
    document.body.remove();
}