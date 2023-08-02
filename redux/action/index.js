export function ubahWarna(warna) {
  return {
    type: 'MENGUBAH_WARNA',
    payload: warna
  }
}

export function ubahUmur(umur) {
  return {
    type: 'MENGUBAH_UMUR',
    payload: umur
  }
}

export function ubahNama(nama) {
  return {
    type: 'MENGUBAH_NAMA',
    payload: nama
  }
}