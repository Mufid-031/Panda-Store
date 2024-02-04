const slideButton = document.querySelector('.garis-tiga input');
const nav = document.querySelector('nav ul');
const main = document.querySelector('.main');
slideButton.addEventListener('click', function() {
    nav.classList.toggle('slide');
    main.classList.toggle('aktif')
})


document.addEventListener("DOMContentLoaded", function () {
  const frontEndHeader = document.getElementById("typed-text");
  const texts = ["Front-end Developer", "Back-end Developer"];

  let teks = 0;
  let huruf = 0;
  let teksTampil = "";
  let hurufSaatIni = "";

  function mengetik() {
    if (huruf < texts[teks].length) {
      hurufSaatIni = texts[teks].charAt(huruf);
      teksTampil += hurufSaatIni;
      frontEndHeader.innerHTML = teksTampil;
      huruf++;
      setTimeout(mengetik, 100);
    } else {
      setTimeout(menghapus, 2000);
    }
  }

  function menghapus() {
    if (huruf > 0) {
      teksTampil = texts[teks].substring(0, huruf - 1);
      frontEndHeader.innerHTML = teksTampil;
      huruf--;
      setTimeout(menghapus, 50);
    } else {
      teks = (teks + 1) % texts.length;
      setTimeout(mengetik, 1000);
    }
  }

  setTimeout(mengetik, 1000);

  const section = document.getElementById("home");
  section.style.minHeight = frontEndHeader.offsetHeight + "px";
});

const input0 = document.getElementById("name");
const input1 = document.getElementById("country");
const input2 = document.getElementById("email");

input0.addEventListener(
  "focus",
  (event) => {
    event.target.style.backgroundColor = "yellowgreen";
  },
  true
);

input0.addEventListener(
  "blur",
  (event) => {
    event.target.style.backgroundColor = "";
  },
  true
);

input1.addEventListener(
  "focus",
  (event) => {
    event.target.style.backgroundColor = "yellowgreen";
  },
  true
);

input1.addEventListener(
  "blur",
  (event) => {
    event.target.style.backgroundColor = "";
  },
  true
);

input2.addEventListener(
  "focus",
  (event) => {
    event.target.style.backgroundColor = "yellowgreen";
  },
  true
);

input2.addEventListener(
    "blur",
    (event) => {
        event.target.style.backgroundColor = "";
    },
    true
    );
    
const button = document.querySelector("#button");
button.addEventListener("click", function () {
    const myPhoneNumber = "+6287715567904";
    
    let name = document.getElementById("name").value;
    let country = document.getElementById("country").value;
    let email = document.getElementById("email").value;
    let pertanyaan = document.getElementById("pertanyaan").value;
    if ( document.getElementById('name').value.length > 0 && document.getElementById('country').value.length > 0 && document.getElementById('email').value.length > 0 && document.getElementById('pertanyaan').value.length > 0 ) {
      const url = "https://wa.me/" + myPhoneNumber + "?text="+"*Name:* " +name+"%0a"+"*Country:* " +country+"%0a"+"*Email:* " +email+"%0a"+"*Pertanyaan:* " +pertanyaan+"%0a%0a";
      window.open(url, '_blank').focus();
      swal.fire("Berhasil!", "Kami akan segera menjawab pesan anda", "success");
    } else if ( document.getElementById('name').value.length > 0 || document.getElementById('country').value.length > 0 || document.getElementById('email').value.length > 0 || document.getElementById('pertanyaan').value.length > 0 ) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Sepertinya ada yang belum anda isi!",
      });
    name.value = "";
    country.value = "";
    email.value = "";
    pertanyaan.value = "";
  }

});

