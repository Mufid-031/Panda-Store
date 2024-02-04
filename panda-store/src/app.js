document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Nike Air Force 1 Low", img: "produk7.png", price: 2099000 },
      { id: 2, name: "Nike Airflow", img: "produk8.png", price: 1999999 },
      { id: 3, name: "Nike Air Force 1 Low", img: "produk9.png", price: 2099000 },
      { id: 4, name: "Nike Air Force 1 High Red", img: "produk10.png", price: 2599000 },
      { id: 5, name: "Nike Air Force 1 High Yellow", img: "produk11.png", price: 2599000 },
      { id: 6, name: "Nike Air Force 1 Low", img: "produk12.png", price: 2099000 },
    ],
  }));

  Alpine.data("products2", () => ({
    items: [
      { id: 7, name: "Nama produk", img: "jm1.jpg", price: 999999 },
      { id: 8, name: "Nama produk", img: "jm2.webp", price: 1999999 },
      { id: 9, name: "Nama produk", img: "jm3.webp", price: 599999 },
      { id: 10, name: "Nama produk", img: "jm4.webp", price: 2999999 },
      { id: 11, name: "Nama produk", img: "jm7.webp", price: 1299999 },
      { id: 12, name: "Nama produk", img: "jm6.webp", price: 799999 },
    ],
  }));

  Alpine.data("products3", () => ({
    items: [
      { id: 13, name: "Keyboard mekanis K610", img: "m7.jpg", price: 967998 },
      { id: 14, name: "Keyboard T8", img: "m8.webp", price: 907596 },
      { id: 15, name: "Keyboard E-YOOSO Z-11T", img: "m9.webp", price: 839062 },
      { id: 16, name: "Nama produk", img: "m4.avif", price: 1200000 },
      { id: 17, name: "Keyboard Modify Tofu60 Acrylic", img: "m10.webp", price: 1299998 },
      { id: 18, name: "Keyboard PCB SZ60v2", img: "m6.jpg", price: 1200000 },
    ],
  }));

  Alpine.data("productsinfo", () => ({
    items: [
      { id: 1, name: "Nike Air Force 1 Low", img: "produk7.png", price: 2099000 },
      { id: 2, name: "Nike Airflow", img: "produk8.png", price: 1999999 },
      { id: 3, name: "Adidas", img: "produk9.png", price: 599999 },
      { id: 4, name: "Nike Air Force 1 High Red", img: "produk10.png", price: 2599000 },
      { id: 5, name: "Nike Air Force 1 High Yellow", img: "produk11.png", price: 2599000 },
      { id: 6, name: "Air", img: "produk12.png", price: 799999 },
      { id: 7, name: "Nama produk", img: "jm1.jpg", price: 999999 },
      { id: 8, name: "Nama produk", img: "jm2.webp", price: 1999999 },
      { id: 9, name: "Nama produk", img: "jm3.webp", price: 599999 },
      { id: 10, name: "Nama produk", img: "jm4.webp", price: 2999999 },
      { id: 11, name: "Nama produk", img: "jm7.webp", price: 1299999 },
      { id: 12, name: "Nama produk", img: "jm6.webp", price: 799999 },
      { id: 13, name: "Keyboard mekanis K610", img: "m7.jpg", price: 967998 },
      { id: 14, name: "Keyboard T8", img: "m8.webp", price: 907596 },
      { id: 15, name: "Keyboard E-YOOSO Z-11T", img: "m9.webp", price: 839062 },
      { id: 16, name: "Nama produk", img: "m4.avif", price: 2999999 },
      { id: 17, name: "Keyboard Modify Tofu60 Acrylic", img: "m10.webp", price: 1299998 },
      { id: 18, name: "Keyboard PCB SZ60v2", img: "m6.jpg", price: 1200000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    totalHarga: 0,
    totalJumlah: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if (!cartItem) {
        this.items.push({ ...newItem, totalJumlah: 1, totalHarga: newItem.price });
        this.totalJumlah += 1;
        this.totalHarga += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.totalJumlah += 1;
            item.totalHarga = item.price * item.totalJumlah;
            this.totalJumlah += 1;
            this.totalHarga += item.price;
            return item;
          }
        });
      }
    },

    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if (cartItem.totalJumlah > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.totalJumlah -= 1;
            item.totalHarga = item.price * item.totalJumlah;
            this.totalJumlah -= 1;
            this.totalHarga -= item.price;
            return item;
          }
        });
      } else if (cartItem.totalJumlah === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.totalHarga -= cartItem.price;
        this.totalJumlah -= 1;
      }
    },
  });
});

// form validation
const checkoutButton = document.querySelector(".checkout");
checkoutButton.disabled = true;

const form = document.querySelector('.form-payment');
const nama = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

form.addEventListener('keyup', function() {
  if ( nama.value === "" || email.value === "" || phone.value === "" ) {
    checkoutButton.disabled = true;
    checkoutButton.classList.remove('disabled');
    checkoutButton.classList.add('disabled');
  } else if ( nama.value !== "" && email.value !== "" && phone.value !== "" ) {
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
  }
});

// kirim data ketika dicheckout
checkoutButton.addEventListener('click', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  console.log(objData)
});



// Format mata uang rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
