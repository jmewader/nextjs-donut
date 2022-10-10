import styled from "styled-components";

const MainLayout = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
`;

const MainLayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  color: #000;
  background-color: #fff;
  margin: 80px auto auto;
`;

const UiMainLayout = Object.assign(MainLayout, {
  Wrap: MainLayoutWrap,
});

export default UiMainLayout;
