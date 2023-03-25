import styled from "styled-components";
import imageGif from "../assets/image-gif.gif";
import bt21All from "../assets/bt21All.png";
import "../App.css";

const MainArea = styled.div`
  max-height: 864px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};

  .main-txt {
    font-size: 105px;
    font-weight: 900;
    margin-top: 60px;
    color: ${(props) => props.theme.mainTxtColor};
  }

  @media screen and (max-width: 768px) {
    .main-txt {
      margin-top: 35px;
      font-size: 67px;
      transition: 0.3s linear;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .main-txt {
      font-size: 90px;
      transition: 0.3s linear;
    }
  }

  @media screen and (min-width: 1025px) {
    .main-txt {
      font-size: 105px;
      transition: 0.3s linear;
    }
  }
`;

const MoveLoop = styled.div`
  width: 820px;
  height: 56px;
  margin-bottom: 0.2px;
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 768px) {
    & {
      margin-top: 13px;
      width: 520px;
      height: 30px;
      overflow: hidden;
      overflow-x: auto;
      transition: 0.3s linear;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & {
      margin-top: 20px;
      width: 705px;
      height: 30px;
      overflow: hidden;
      overflow-x: auto;
      transition: 0.3s linear;
    }
  }

  @media screen and (min-width: 1025px) {
    & {
      margin-top: 26px;
      font-size: 27px;
      width: 820px;
      height: 30px;
      transition: 0.3s linear;
    }
  }
`;

const MoveRowTxt = styled.div`
  @keyframes loop {
    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  .sub-txt {
    white-space: nowrap;

    .bold {
      font-weight: 700;
    }
  }

  margin-top: 3px;
  font-size: 27px;
  font-weight: 400;
  text-shadow: 0 0 0 #222222;
  width: 820px;
  height: 30px;
  color: ${(props) => props.theme.textColor};
  animation: loop 22s infinite linear;
  -webkit-animation: loop 20s infinite linear;

  @media screen and (max-width: 768px) {
    .sub-txt {
      font-size: 23px;
      transition: 0.3s linear;
    }

    .move-row-txt {
      width: 525px;
      transition: 0.3s linear;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .sub-txt {
      font-size: 25px;
      transition: 0.3s linear;
    }

    .move-row-txt {
      margin-top: 13px;
      width: 705px;
      transition: 0.3s linear;
    }
  }

  @media screen and (min-width: 1025px) {
    .sub-txt {
      font-size: 27px;
      transition: 0.3s linear;
    }

    .move-row-txt {
      margin-top: 26px;
      width: 820px;
      transition: 0.3s linear;
    }
  }
`;

const LargeImg = styled.div`
  margin-top: 36px;
  height: 370px;
  width: 820px;
  border-radius: 17px;
  background: url(${imageGif}) no-repeat center;
  background-size: 100%;

  .bt21-all {
    width: 270px;
    margin: 280px 0 0 22px;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.4));
    animation: fadeIn4 60s infinite;
  }

  @keyframes fadeIn4 {
    1.3%,
    39% {
      opacity: 0;
      transform: translateY(10px);
    }
    41% {
      opacity: 1;
      transform: none;
    }
    49% {
      opacity: 1;
      transform: none;
    }
    51% {
      opacity: 0;
      transform: translateY(10px);
    }
    89% {
      opacity: 0;
      transform: translateY(10px);
    }
    91% {
      opacity: 1;
      transform: none;
    }
    98.3% {
      opacity: 1;
      transform: none;
    }
    1.2% {
      opacity: 0;
      transform: translateY(10px);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(12px);
    }
    7%,
    50% {
      opacity: 1;
      transform: none;
    }
    60%,
    65% {
      opacity: 0;
      transform: translateY(27px);
    }
    100% {
      opacity: 0;
      transform: translateY(27px);
    }
  }

  @keyframes fadeIn3 {
    0%,
    28% {
      opacity: 0;
      transform: translateY(27px);
    }
    33%,
    47% {
      opacity: 1;
      transform: none;
    }
    52% {
      opacity: 0;
      transform: translateY(27px);
    }
    100% {
      opacity: 0;
      transform: translateY(27px);
    }
  }

  @keyframes fadeIn2-left {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  .blogging-txt {
    color: ${(props) => props.theme.smallTxtColor};
    font-size: 20px;
    position: absolute;
    padding: 255px 0 0 25px;
    font-weight: 400;
    animation: fadeIn2-left 1.5s ease-out;
    opacity: 1;
  }

  span {
    color: ${(props) => props.theme.smallTxtColor};
    font-size: 63px;
    font-weight: 900;
    position: absolute;
    padding: 278px 0 0 25px;
  }

  .keyfe-txt {
    text-shadow: #595959 1px 0 50px;
    animation: fadeIn 15s infinite;
  }

  .query-txt {
    text-shadow: #595959 1px 0 50px;
    animation: fadeIn3 30s infinite;
  }

  @media screen and (max-width: 768px) {
    background {
      size: 80px;
      transition: 0.3s linear;
    }

    span {
      font-size: 50px;
      padding: 310px 0 0 25px;
      transition: 0.3s linear;
    }

    .blogging-txt {
      font-size: 20px;
      padding: 285px 0 0 25px;
      transition: 0.3s linear;
    }

    .bt21-all {
      margin-top: 310px;
      width: 240px;
      transition: 0.3s linear;
    }

    & {
      margin-top: 34px;
      height: 390px;
      width: 525px;
      border-radius: 17px;
      background: url(${imageGif}) no-repeat center;
      background-size: 140%;
      transition: 0.3s linear;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .sub-txt {
      font-size: 25px;
      transition: 0.3s linear;
    }

    span {
      font-size: 55px;
      padding: 235px 0 0 30px;
      transition: 0.3s linear;
    }

    .blogging-txt {
      font-size: 20px;
      padding: 207px 0 0 30px;
      transition: 0.3s linear;
    }

    .bt21-all {
      margin-top: 230px;
      width: 255px;
      transition: 0.3s linear;
    }

    & {
      margin-top: 34px;
      height: 315px;
      width: 710px;
      border-radius: 17px;
      background: url(${imageGif}) no-repeat center;
      background-size: 100%;
      transition: 0.3s linear;
    }
  }

  @media screen and (min-width: 1025px) {
    .sub-txt {
      font-size: 27px;
      transition: 0.3s linear;
    }

    span {
      font-size: 63px;
      padding: 278px 0 0 25px;
      transition: 0.3s linear;
    }

    .blogging-txt {
      font-size: 20px;
      padding: 255px 0 0 25px;
      transition: 0.3s linear;
    }

    .bt21-all {
      width: 270px;
      margin: 280px 0 0 22px;
      filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.4));
      transition: 0.3s linear;
    }

    & {
      margin-top: 36px;
      height: 370px;
      width: 820px;
      border-radius: 17px;
      background: url(${imageGif}) no-repeat center;
      background-size: 100%;
      transition: 0.3s linear;
    }
  }
`;

const Main = () => {
  return (
    <>
      <MainArea>
        <div className="text">
          <h1 className="main-txt">SITE OF THE DAY</h1>
        </div>
        <MoveLoop>
          <MoveRowTxt className="move-row-txt">
            <span className="sub-txt">
              Site of the Day — <span className="bold">Mar 17,</span> 2023 - <span className="bold">velog.io/@tata-v_vlelog</span>
              &nbsp;&nbsp;Site of the Day — Mar 17, 2023 - <span className="bold">velog.io/@tata-v_vlelog</span>
              &nbsp;&nbsp;Site of the Day — Mar 17, 2023 - <span className="bold">velog.io/@tata-v_vlelog</span>
            </span>
          </MoveRowTxt>
        </MoveLoop>
        <LargeImg className="large-img">
          <span className="blogging-txt">Today's blogging</span>
          <span className="keyfe-txt">Keyframes</span>
          <span className="query-txt">Media query</span>
          <div className="bt21-img">
            <img className="bt21-all" src={bt21All} alt="tata-gif" />
          </div>
        </LargeImg>
      </MainArea>
    </>
  );
};

export default Main;
