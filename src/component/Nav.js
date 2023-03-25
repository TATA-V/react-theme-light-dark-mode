import styled from "styled-components";
import "../App.css";
import TATApng from "../assets/TATA.png";

const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 8px;
  margin: auto;
  background-color: ${(props) => props.theme.backgroundColor};

  .logo {
    height: 100%;
    padding: 12px;
    float: left;

    .logo_icon {
      margin-top: 5px;
      height: 60px;
      filter: ${(props) => props.theme.logoFilter};
    }
  }
`;

const Nav = ({ dark, setDark }) => {
  const setOpenFunc = () => {
    setDark(!dark);
  };

  return (
    <>
      <div className="header">
        <Wrapper>
          <div className="logo" onClick={setOpenFunc}>
            <img src={TATApng} className="logo_icon" alt="logo_icon" />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Nav;
