//! Soal 1
//* Nilai Ujian Siswa

let nilaiMatematika = 100;

if (nilaiMatematika >= 90 && nilaiMatematika <= 100) {
    console.log("A");
} else if (nilaiMatematika >= 80) {
    console.log("B");
} else if (nilaiMatematika >= 70) {
    console.log("C");
} else if (nilaiMatematika >= 60) {
    console.log("D");
} else {
    console.log("E");
}


//! Soal 2
//* Membuat sistem login sederhana dengan username dan password menggunakan prompt dan alert serta menggunakan if else

//* Ada di HTML


//! Soal 3
//* Mengecek apakah input sesuai dengan data yang benar atau tidak dengan parameter menggunakan function


function logIn(username, password) {
    let data = {
        username: "admin",
        password: "12345"
    };

    if (username === data.username && password === data.password) {
        return true;
    } else {
        return false;
    }
}
console.log(logIn("admin", "12345"));

if (logIn("admin", "12345")) {
    console.log("Login berhasil");
} else {
    console.log("Login gagal");
}