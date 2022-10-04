import styled from "styled-components";

const MainLayout = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
`;

const MainLayoutPage = styled.div`
  color: #000;
  background-color: #fff;
`;

const UiMainLayout = Object.assign(MainLayout, {
  Page: MainLayoutPage,
});

export default UiMainLayout;
