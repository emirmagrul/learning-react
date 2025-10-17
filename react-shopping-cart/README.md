# React Alışveriş Sepeti Uygulaması (`useReducer` ile)

Bu proje, React'in temel ve orta seviye hook'larını kullanarak oluşturulmuş, mini bir e-ticaret arayüzüdür. Uygulama, harici bir API'den ürün verilerini çeker, listeler ve kullanıcıların bu ürünleri bir alışveriş sepetine ekleyip çıkarmasına olanak tanır.

Bu proje, `learning-react` repomda, özellikle `useReducer` hook'unun karmaşık state yönetimindeki gücünü anlamak için geliştirilmiştir.

## 🚀 Projenin Ekran Görüntüsü

![React Shopping Cart Projesi Ekran Görüntüsü](./screenshot.png)

*(**Not:** Bu görüntüyü eklemek için projenden bir ekran görüntüsü alıp, adını `screenshot.png` olarak değiştirerek bu klasörün içine eklemelisin.)*

## ✨ Özellikler

-   Harici bir API'den (`FakeStoreAPI`) ürünleri asenkron olarak çeker.
-   Ürünleri bir grid yapısında listeler.
-   Kullanıcıların istedikleri ürünleri sepete eklemesine olanak tanır.
-   Sepet içeriğini, ürün sayısını ve toplam tutarı anlık olarak gösterir.
-   Kullanıcıların ürünleri sepetten çıkarmasına imkan verir.
-   Veri yüklenirken "Yükleniyor..." mesajı gösterir.

## 🎯 Bu Projeyle Pekiştirilen Konular

Bu proje, birden fazla React hook'unu ve modern JavaScript tekniğini bir arada kullanarak pratik yapmak için harika bir fırsat oldu.

### `useReducer`
Projenin ana odağı buydu. Sepetin durumu (içindeki ürünler) birden fazla eylemle (`ADD_TO_CART`, `REMOVE_FROM_CART`) değiştiği için, bu karmaşık state mantığını `useState` yerine `useReducer` ile yönetmek çok daha temiz ve ölçeklenebilir bir çözüm sundu. State güncelleme mantığı, bileşenin dışındaki `cartReducer` fonksiyonuna taşındı.

### `useEffect`
Bileşen ilk yüklendiğinde ürün verilerini API'den bir kereliğine çekmek için kullanıldı. Boş bağımlılık dizisi `[]` sayesinde bu `fetch` isteğinin gereksiz yere tekrarlanmasının önüne geçildi.

### `useState`
API'den veriler çekilirken arayüzde bir "Yükleniyor..." mesajı göstermek gibi daha basit ve yerel state'ler (`loading` durumu) için kullanıldı. Bu, `useReducer` ve `useState`'in farklı senaryolarda nasıl birlikte kullanılabileceğini gösterdi.

### Bileşen Yapısı ve Props
Uygulama, ana `App` bileşeni ve tekrar kullanılabilir bir `Cart` bileşeni olarak ikiye ayrıldı. `App` bileşeninden `Cart` bileşenine `cartItems` (sepet verisi) ve `dispatch` (eylem gönderici fonksiyon) `props` aracılığıyla aktarıldı.

### Modern JavaScript Metotları
-   **`.map()`**: Ürün verisi dizisini JSX elemanlarına dönüştürerek ekranda listelemek için kullanıldı.
-   **`.reduce()`**: Sepetteki ürünlerin fiyatlarını toplayarak anlık olarak toplam tutarı hesaplamak için kullanıldı.
-   **`.filter()`**: Bir ürünü sepetten çıkarırken, mevcut sepet dizisinden o ürünü hariç tutan yeni bir dizi oluşturmak için kullanıldı.

## 🛠️ Kullanılan Teknolojiler

-   **React** (`useState`, `useEffect`, `useReducer`)
-   **JavaScript (ES6+)**
-   **[FakeStoreAPI](https://fakestoreapi.com/)** (Ürün verileri için)
-   HTML5 & CSS3

## 📦 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarında çalıştırmak için aşağıdaki adımları izleyebilirsin:

1.  **Depoyu klonla (eğer daha önce yapmadıysan):**
    ```bash
    git clone [https://github.com/emirmagrul/learning-react.git](https://github.com/emirmagrul/learning-react.git)
    ```

2.  **Proje dizinine git:**
    ```bash
    cd learning-react/shopping-cart
    ```

3.  **Gerekli paketleri yükle:**
    ```bash
    npm install
    ```

4.  **Projeyi başlat:**
    ```bash
    npm start
    ```

Uygulama, varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.