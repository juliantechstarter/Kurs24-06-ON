import StdrButton from "../../common/standard-btn/Standardbtn";
import styles2 from "../../common/standard-btn/Standardbtn.module.css";

function Navbar() {
  function onClickHello() {
    alert("Hello");
  }

  function onClickHi() {
    alert("Hi");
  }

  return (
    <div className={styles2.navbar}>
      <StdrButton myOnClick={onClickHello}>{"Hello"}</StdrButton>
      <StdrButton myOnClick={onClickHi}>{"Hi"}</StdrButton>
    </div>
  );
}

export default Navbar;
