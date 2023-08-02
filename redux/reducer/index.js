const stateAwal = {
  warna: 'merah',
  umur: 35,
  nama: 'Rudi'
}

export function reducer (
  state = stateAwal,
  action // const action = { payload: .... , type: "MENGUBAH_WARNA" }
) {
  switch(action.type) {
    case "MENGUBAH_WARNA":
      return { ...state, warna: action.payload }
    case "MENGUBAH_UMUR":
      return { ...state, umur: action.payload }
    case "MENGUBAH_NAMA":
      return { ...state, nama: action.payload }
    default:
      return state
  }
}