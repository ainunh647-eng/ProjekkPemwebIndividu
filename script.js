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

    data.forEach(function(item) {

        const article =
            document.createElement("article");

        article.className = "product-card";


        article.innerHTML = `
            <img
                src="${item.gambar}"
                alt="${item.nama}"
            >

            <p class="kategori">
                ${item.kategori}
            </p>

            <h3>
                ${item.nama}
            </h3>

            <p class="harga">
                Rp ${item.harga.toLocaleString("id-ID")}
            </p>

            <div class="product-buttons">

                <button
                    type="button"
                    class="beli"
                    data-product="${item.nama}">
                    Beli Sekarang
                </button>

                <button
                    type="button"
                    class="favorite"
                    aria-label="Tambah favorit"
                    title="Tambah favorit">
                    ♡
                </button>

            </div>
        `;

        const tombolBeli =
            article.querySelector(".beli");

        tombolBeli.addEventListener(
            "click",
            function() {

                beliProduk(item.nama);

            }
        );

        const tombolFavorit =
            article.querySelector(".favorite");

        tombolFavorit.addEventListener(
            "click",
            function() {

                favoriteProduk(tombolFavorit);

            }
        );


        productList.appendChild(article);

    });
}

