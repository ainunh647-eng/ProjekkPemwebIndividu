const produk = [
    {
        nama: "Wardah Lightening Whip Facial Foam",
        kategori: "skincare",
        harga: 28000,
        gambar: "WardahLighteningWhipFacialFoam.jpg"
    },

    {
        nama: "Wardah UV Shield Aqua Fresh Essence",
        kategori: "skincare",
        harga: 65000,
        gambar: "WardahUV.jpg"
    },

        {
        nama: "Wardah Lightening Day Cream",
        kategori: "skincare",
        harga: 42000,
        gambar: "WardahDayCream.jpg"
    },

    {
        nama: "Wardah Lightening Face Toner",
        kategori: "skincare",
        harga: 35000,
        gambar: "WardahToner.jpg"
    },

    {
        nama: "Wardah Lightening Serum",
        kategori: "skincare",
        harga: 85000,
        gambar: "WardahSerum.jpg"
    },

    {
        nama: "Wardah BB Crream",
        kategori: "makeup",
        harga: 45000,
        gambar: "WardahBBCream.jpg"
    }
];

let jumlahKeranjang = 0;

let kategoriAktif = "semua";

function tampilkanProduk(data) {

    const productList = 
        document.getElementById("produkList");

    const jumlahProduk = 
        document.getElementById("jumlahProduk");

    const produkKosong =
        document.getElementById("produkKosong");

    if (!productList) {
        return;
    }

    productList.innerHTML = "";

    if (jumlahProduk) {
        jumlahProduk.textContent = 
            "Menampilkan " + data.length + " produk";
    }

    if (data.length === 0) {

        if (produkKosong) {
            produkKosong.style.display = "block";
        }

        return;
    
    } else {
         if (produkKosong) {
            produkKosong.style.display = "none";
        }
    }

}