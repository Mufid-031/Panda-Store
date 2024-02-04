// Navbar
const slideButton = document.querySelector(".garis-tiga input");
const nav = document.querySelector("nav ul");
const main = document.querySelector(".main");
slideButton.addEventListener("click", function () {
  nav.classList.toggle("slide");
  main.classList.toggle("aktif");
});

// search button
const searchButton = document.getElementById("search-button");
const searchInput = document.querySelector(".search-input input");
searchButton.addEventListener("click", function () {
  searchButton.classList.toggle("aktif");
  searchInput.classList.toggle("aktif");
  if (searchInput.value !== "") {
    searchInput.value = "";
  }
});

// shopping cart
const shoppingCart = document.getElementById("button-shoppingcart");
shoppingCart.addEventListener("click", function () {
  const shoppingNav = document.querySelector(".shopping-cart");
  shoppingCart.classList.toggle("aktif");
  shoppingNav.classList.toggle("shopping-slide");
});

// Animation shoes
const slideRed = document.querySelector(".black-button");
const red = document.querySelector(".red");
const black = document.querySelector(".black");
const changeColor = document.querySelector(".black-button");
slideRed.addEventListener("click", function () {
  red.classList.toggle("slide-red");
  black.classList.toggle("slide-black");
  changeColor.classList.toggle("red-button");
});

// Check out button disabled
const form = document.querySelector("form.form-payment");
const nama = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const checkOutButton = document.querySelector('.checkout');

form.addEventListener("keyup", function () {
  if (nama === "" || email === "" || phone === "") {
    checkOutButton.classList.remove("disabled");
    checkOutButton.classList.add("disabled");
    checkOutButton.disabled = true;
} else if (nama !== "" && email !== "" && phone !== "") {
  checkOutButton.classList.remove("disabled");
  checkOutButton.disabled = false;
}
});

// form.addEventListener("keyup", function () {
//   for (let i = 0; i < form.elements.lenght; i++) {
//     if (form.elements[i].value.lenght !== 0) {
//       checkOutButton.classList.remove("disabled");
//       checkOutButton.classList.add("disabled");
//     } else {
//       return false;
//     }
//   }
//   checkOutButton.disabled = false;
//   checkOutButton.classList.remove("disabled");
// });

// kirim data ketika dicheckout
checkOutButton.addEventListener("click", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);

  // minta transtaksi token menggunakan ajax / fecth
  try {
    const response = await fetch("php/placeOreder.php", {
      method: "POST",
      body: data,
    });
    const token = await response.text();
    // console.log(token);
    window.snap.pay(token, {
      onSuccess: function (result) {
        /* You may add your own implementation here */
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Pembayaran berhasil",
        });
      },
      onPending: function (result) {
        /* You may add your own implementation here */
        Swal.fire({
          title: "Transaksi sedang diproses",
          text: "harap bayar transaksi dengan metode yang sudah dipilih",
          icon: "info",
        });
        console.log(result);
      },
      onError: function (result) {
        /* You may add your own implementation here */
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Pembelian barang gagal!",
        });
        console.log(result);
      },
      onClose: function () {
        /* You may add your own implementation here */
        Swal.fire({
          title: "Transaksi gagal",
          text: "Anda menutup pop up pembayaran!",
          icon: "warning",
        });
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});
// sweetAlert for button buy Transfer

// sweesAlert for button buy

// Notofication for button-shopping cart in card

// Notofication for button-shopping cart in card
