# Basit Hesap Makinesi (React)

Bu proje, React'in temel hook'larını (özellikle `useState` ve `useRef`) kullanarak oluşturulmuş basit bir hesap makinesi uygulamasıdır. `learning-react` reposu için pratik amaçlı geliştirilmiştir.

---

## Özellikler

- **Toplama, çıkarma, çarpma ve bölme** işlemleri.
- Giriş alanını tek tuşla **temizleme** (`reset input`).
- Hesaplanan sonucu tek tuşla **sıfırlama** (`reset result`).

---

## Kullanılan Temel React Kavramları

Bu proje, aşağıdaki temel React kavramlarını anlamak ve pekiştirmek için harika bir örnektir:

### `useState`

Uygulamanın anlık sonucunu (`result`) bir state içerisinde tutmak ve bu değer değiştiğinde arayüzü otomatik olarak yeniden render etmek için kullanılmıştır. State yönetimi için en temel hook'tur.

```javascript
const [result, setResult] = useState(0);
```

### `useRef`

Kullanıcının girdiği sayı değerini tutan `<input>` elemanına doğrudan erişmek için `useRef` hook'u kullanılmıştır. `useRef` sayesinde, input alanındaki her değişiklikte bileşenin yeniden render edilmesinin önüne geçilmiştir. Bu, özellikle kontrolsüz bileşenlerde (uncontrolled components) performansı artırmak için etkili bir yöntemdir.

```javascript
const inputRef = useRef(null);

// Değeri okumak için:
Number(inputRef.current.value);
```

### Olay Yönetimi (Event Handling)

Butonlara tıklandığında ilgili fonksiyonları (`plus`, `minus`, `resetInput` vb.) tetiklemek için `onClick` olayı kullanılmıştır. Bu, kullanıcı etkileşimlerini yönetmenin temel yoludur.

```jsx
<button onClick={plus}>add</button>
<button onClick={resetInput}>reset input</button>
```