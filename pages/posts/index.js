import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../../Assets/images/logo.svg";
import Image from "next/image";

import style from '../../styles/Posts.module.css'
import { useDispatch, useSelector } from "react-redux";

import { ubahWarna, ubahUmur, ubahNama } from "../../redux/action";

function Artikel() {
  const stateNyaRedux = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(stateNyaRedux.reducer)

  function ubahRedux() {
    // TODO: ubah redux
    dispatch(ubahNama('Ghifari'))

    // log
    console.log(stateNyaRedux.reducer)
  }

  return (
    <div>
      <Navbar
        className="my-2"
        color="dark"
        dark
      >
        <NavbarBrand 
          href="/" 
          className={`d-flex align-items-center ${style.header}`}
        >
          <Image
            alt="logo"
            src={logo}
            width={50}
            height={50}
          />
          Reactstrap 2
        </NavbarBrand>
      </Navbar>
      <h1>Reactstrap</h1>
      <button type="button" onClick={ubahRedux}>Ubah Redux</button>
    </div>
  )
}

export default Artikel