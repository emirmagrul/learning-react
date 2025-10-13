# Basit React Yapılacaklar Listesi Uygulaması

Bu proje, `learning-react` serüvenimin ilk adımı olarak oluşturulmuştur. React'in temel prensiplerini ve en temel hook'larını anlamak amacıyla geliştirilmiş basit bir "Yapılacaklar Listesi" (To-Do) uygulamasıdır.

## ✨ Özellikler

- Yeni bir görev ekleme
- Eklenen tüm görevleri listeleme
- Mevcut bir görevi listeden silme

## 🚀 Öğrenilen Temel Kavramlar

Bu projeyi geliştirirken React'in aşağıdaki temel yapı taşları üzerine pratik yapıldı:

- **Component Yapısı:** Tüm uygulamanın tek bir `App` bileşeni etrafında nasıl yapılandırıldığı.
- **JSX:** HTML'e benzeyen sözdizimi kullanılarak kullanıcı arayüzünün (UI) oluşturulması.
- **State Yönetimi (`useState`):** `useState` hook'u kullanılarak görev listesinin (`todos`) ve input alanına yazılan metnin (`newTodo`) durumunun anlık olarak yönetilmesi.
- **Olay Yönetimi (Event Handling):** `onSubmit`, `onChange` ve `onClick` gibi olaylar aracılığıyla kullanıcı etkileşimlerinin yakalanması ve yönetilmesi.
- **Listelerin Render Edilmesi:** JavaScript'in `map()` fonksiyonu kullanılarak görev dizisinin dinamik olarak ekrana bir liste halinde basılması ve her eleman için benzersiz `key` prop'unun önemi.

## 🏁 Kurulum ve Başlatma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

1.  Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```

2.  Geliştirme sunucusunu başlatın:
    ```bash
    npm start
    ```

Uygulama, tarayıcınızda `http://localhost:3000` adresinde otomatik olarak açılacaktır.