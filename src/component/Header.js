import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="logo"><img height={65} src="images/logo.png"/></div>
        <div className="header-txt">
            <h1>강플릭스에서 인기있는 영화를 추천해줍니다.</h1>
            <h1>지금 바로 히트작들을 만나보세요!</h1>
            <p>준비되셨나요? 스크롤을 내려 지금 바로 확인해보세요.</p>
        </div>
        
      </Container>
    </div>
  );
};

export default Header;
