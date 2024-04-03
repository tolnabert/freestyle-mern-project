import NavLinks from "./Navlinks";
import PlaceHolder from "./PlaceHolder";

function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <NavLinks />
        <div className='nav-side'>
          <PlaceHolder />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
