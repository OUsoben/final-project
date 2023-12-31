import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navStyle.css';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import i18n from "i18next"

function NavBar() {

  const lngs  = [
    {
      code : "en",
      nativeName : "English",
    
    },
    {
      code : "kh",
      nativeName : "ខ្មែរ",
      
    },
    {
      code : "jp",
      nativeName : "ヤーペン",
     
    }
  ]
  const  {t} = useTranslation()
  return (
    <Navbar expand="lg" className="bg-dark  item-style sticky-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
        
          <Nav className="  p-2 nav-list  text-center p ">
            <NavLink className={'nav-link text-white ms-3  '} to={"/"} >{t("Navbar.title1")}</NavLink>
            <NavLink className={'nav-link text-white ms-3'} to={"/services"} >{t("Navbar.title2")}</NavLink>
            <NavLink className={'nav-link text-white ms-3'} to={"products"} >{t("Navbar.title3")}</NavLink>
            <NavLink className={'nav-link text-white ms-3'} to={"/aboutus"} >{t("Navbar.title4")}</NavLink>
            <NavLink className={'nav-link text-white ms-3'} to={"/admin/products"}  >{t("Navbar.title4")}</NavLink>
          </Nav>

         
        </Navbar.Collapse>
        <div className='text-white me-5 d-flex  '>
        <img style={{ width: "40px"}} className='img-fluid me-3 rounded' src={t("Navbar.imageUrl")} alt="flag" /> 
      <NavDropdown  id="basic-nav-dropdown">
        {
          
              lngs.map((lng)=>{
              
                return(
                  
                  <NavDropdown.Item href='#'
                  className=''
                   key={lng.code}
                  type='submit'
                  onClick={()=> i18n.changeLanguage(lng.code)}
                
                  >{lng.nativeName}
                  
                  </NavDropdown.Item>
                 
                )
                })
                
        }
             
              
            </NavDropdown>
          
            </div>
            <button className='btn btn-warning'>Login</button>
              
      </Container>
        
    </Navbar>
  );
}

export default NavBar;