function merhaba(){
    let ad, soyad, yas;
    ad=document.getElementById("txtAd").value;
    console.log(ad);

    soyad=document.getElementById("txtSoyad").value;
    console.log(soyad);

    yas=document.getElementById("numberYas").value;
    console.log(yas);

    document.getElementById("sonucBaslik").innerHTML="";

    if(yas < 18){
        sonucBaslik.innerHTML="Siteye 18 Yaşının Altındakiler Giremez!";
    }
    else{
        sonucBaslik.innerHTML="Siteye Üye Olabilirsiniz";
    }
}
