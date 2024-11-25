import { useMutation } from '@tanstack/react-query'; // Mengimpor hook useMutation dari react-query untuk melakukan operasi asinkron.
import { RegisterPayload } from '../../utils'; // Mengimpor tipe data RegisterPayload yang mendefinisikan struktur data yang dikirim saat pendaftaran.
import { registerUser } from '../authService'; // Mengimpor fungsi registerUser yang berfungsi untuk mendaftar user ke API atau backend.

export function useRegisterUser() {
    return useMutation({
        /*
        Hook ini digunakan untuk melakukan mutasi asinkron seperti POST, PUT, DELETE,
        atau operasi lain yang mengubah data. Di sini, kita menggunakan registerUser
        untuk mengirimkan data ke server.
        */
        mutationFn: (data: RegisterPayload) => registerUser(data),

        /*
        onMutate dipanggil sebelum mutasi dimulai, di sini bisa digunakan untuk
        menampilkan status atau menjalankan operasi lain sebelum mutasi dilakukan.
        */
        onMutate: () => {
            console.log('mutate'); // Menampilkan pesan 'mutate' sebelum mutasi dimulai
        },

        /*
        onError dipanggil jika terjadi error saat mutasi. Ini digunakan untuk menangani
        error dan memberikan feedback kepada pengguna atau developer.
        */
        onError: (error) => {
            console.log('error', error); // Menampilkan pesan error jika mutasi gagal
        },

        /*
        onSuccess dipanggil jika mutasi berhasil. Ini digunakan untuk memproses hasil
        yang diterima dari server, seperti memperbarui state aplikasi atau menampilkan pesan sukses.
        */
        onSuccess: (data) => {
            console.log('success', data); // Menampilkan data yang berhasil diterima dari server
        },

        /*
        onSettled dipanggil setelah mutasi selesai, baik sukses maupun gagal.
        Biasanya digunakan untuk menutup status loading atau melakukan operasi pembersihan lainnya.
        */
        onSettled: () => {
            console.log('settled'); // Menampilkan pesan 'settled' setelah mutasi selesai
        },
    });
}

