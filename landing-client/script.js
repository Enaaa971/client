function prosesPesan(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const nohp = document.getElementById("nohp").value;
    const kerusakan = document.getElementById("kerusakan").value;

    alert(`Halo ${nama}, Kami sudah menerima pesan kamu.\nNo HP: ${nohp}\nMasalah: ${kerusakan}`);
}
