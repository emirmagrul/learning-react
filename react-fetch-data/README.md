# React: Fetch User Data Project

Bu proje, [Coursera](https://www.coursera.org/) React kursu kapsamında yapılan, `fetch` API'si kullanarak harici bir kaynaktan veri çekme pratiğidir. Uygulama, [Random User Generator](https://randomuser.me/) API'sinden rastgele bir kullanıcı verisi çeker ve bu veriyi ekranda bir kart bileşeni olarak gösterir.

Bu, `learning-react` repomda bulunan küçük ve pratik uygulamalardan biridir.

## 🚀 Projenin Ekran Görüntüsü

![Fetch Data Project Screenshot](./screenshot.png)

*(**Not:** Bu görüntüyü eklemek için projenden bir ekran görüntüsü alıp, adını `screenshot.png` olarak değiştirerek `fetch-data` klasörüne eklemelisin.)*

## 🎯 Projenin Amacı ve Öğrenilenler

Bu projenin temel amacı, React'in temel hook'larını kullanarak asenkron bir işlemi yönetmektir. Bu proje ile aşağıdaki konular pekiştirilmiştir:

-   **`useEffect` Hook'u:** Bileşen yüklendiğinde bir yan etki (side effect) olarak API isteği gönderme.
-   **`useState` Hook'u:** Gelen veriyi ve yüklenme durumunu yönetmek için state (durum) oluşturma.
-   **Fetch API:** JavaScript'in yerleşik `fetch` API'sini kullanarak bir `GET` isteği yapma ve `.then()` ile yanıtı işleme.
-   **Koşullu Render (Conditional Rendering):** Veri henüz yüklenmemişken "Data pending..." gibi bir mesaj gösterme.
-   **Temel CSS ile Stil Verme:** Veriyi daha okunabilir ve estetik bir kart yapısında sunma.

## 🛠️ Kullanılan Teknolojiler

-   [React](https://reactjs.org/)
-   JavaScript (ES6+)
-   HTML5 & CSS3

## 📦 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1.  **Depoyu klonlayın (eğer daha önce yapmadıysanız):**
    ```bash
    git clone [https://github.com/emirmagrul/learning-react.git](https://github.com/emirmagrul/learning-react.git)
    ```

2.  **Proje dizinine gidin:**
    ```bash
    cd learning-react/fetch-data
    ```

3.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    ```

4.  **Projeyi başlatın:**
    ```bash
    npm start
    ```

Uygulama, varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.