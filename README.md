# Create Resource CLI
 **Create Resource CLI**! 🚀 Ini adalah alat Command Line Interface (CLI) yang dirancang untuk mempercepat pengembangan proyek Node.js Anda dengan memudahkan pembuatan template resource yang diperlukan, termasuk model, controller, routes, dan validasi.

## 📦 Instalasi

Untuk memulai, ikuti langkah-langkah sederhana berikut:

1. **Clone atau Download** repositori ini:
   ```bash
   git clone https://github.com/username/create-resource-cli.git
   cd create-resource-cli
   ```
2. **Instal Dependencies** dengan menjalankan perintah berikut:
   ```bash
   npm install
   ```

## ⚙️ Penggunaan

Membuat resource baru sangat mudah! Gunakan perintah berikut:

```bash
node src/index.js create-resource <resourceName>
```

Gantilah `<resourceName>` dengan nama resource yang ingin Anda buat, seperti `user`, `product`, atau resource lainnya.

### ✏️ Pengisian Field

Setelah menjalankan perintah di atas, Anda akan diminta untuk mengisi detail field dari resource yang akan dibuat. Berikut adalah langkah-langkah dan informasi yang diperlukan:

1. **Masukkan Nama Field**: Ketikkan nama untuk field yang ingin ditambahkan, misalnya: `username`, `email`, `createdAt`.

2. **Tentukan Tipe Field**: Pilih tipe data yang sesuai untuk setiap field. Tipe yang valid meliputi:
   - `string`: untuk teks (contoh: nama, deskripsi)
   - `number`: untuk angka (contoh: usia, harga)
   - `date`: untuk tanggal (contoh: tanggal lahir)
   - `boolean`: untuk nilai true/false (contoh: status aktif)
   - `array`: untuk daftar nilai (contoh: daftar produk)
   - `object`: untuk struktur data yang lebih kompleks (contoh: alamat)

3. **Apakah Ini Primary Key?**: Anda akan ditanya apakah field ini merupakan primary key. Masukkan `y` untuk ya atau `n` untuk tidak.

4. **Aturan Validasi**: Tentukan aturan validasi untuk field ini, seperti `required` (wajib diisi), `min:3` (minimal 3 karakter), dan lain-lain. Jika tidak ada aturan yang perlu diterapkan, cukup tekan Enter.

5. **Tambah Field Lain?**: Setelah memasukkan field, Anda akan ditanya apakah ingin menambahkan field lain. Masukkan `y` untuk menambahkan atau `n` untuk menyelesaikan.

### 🌍 Instalasi Global

Untuk menggunakan alat ini secara global di sistem Anda, jalankan:

```bash
npm link
```

Setelah itu, Anda dapat membuat resource menggunakan perintah berikut dari mana saja:

```bash
create-resource <resourceName>
```

Gantilah `<resourceName>` dengan nama resource yang ingin Anda buat.

## 💡 Fitur Tambahan

- **Dukungan Multi-Resource**: Alat ini mendukung pembuatan beberapa resource dalam satu perintah, sehingga Anda bisa menghemat waktu.
- **Integrasi dengan Database**: Anda dapat menyesuaikan model yang dihasilkan untuk terintegrasi langsung dengan database pilihan Anda, seperti MongoDB atau MySQL.
- **Custom Templates**: Sesuaikan template yang dihasilkan dengan mudah untuk memenuhi kebutuhan spesifik proyek Anda.

## 🤝 Kontribusi

Kami selalu terbuka untuk kolaborasi! Jika Anda ingin berkontribusi pada proyek ini, berikut adalah beberapa cara yang bisa Anda lakukan:

1. **Buka Issues**: Jika Anda menemukan bug atau memiliki saran fitur baru, silakan buka isu di repositori ini.
2. **Pull Requests**: Jika Anda telah membuat perubahan yang ingin Anda sertakan, kirimkan pull request. Kami akan dengan senang hati meninjaunya!
3. **Dokumentasi**: Bantu kami meningkatkan dokumentasi dengan memberikan masukan atau menambahkan contoh penggunaan baru.

## 🎉 Kesimpulan

Dengan **Create Resource CLI**, Anda dapat menghemat waktu dan usaha dalam mengatur struktur resource proyek Anda. Alat ini tidak hanya mempercepat alur kerja Anda, tetapi juga meningkatkan konsistensi dan kualitas kode. Mari bergabung dalam pengembangan alat ini dan tingkatkan produktivitas Anda dalam pengembangan Node.js. Selamat berkarya!