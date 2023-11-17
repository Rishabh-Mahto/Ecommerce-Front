import styled from "styled-components";


const CategoryDiv = styled.div`
  padding-bottom: 260px;
  categoryHeader{
    z-index: 1;
  }
`;

const CategoryHeader = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* z-index: 1; */
`;

const TitleSize = styled.h1`
  font-size: 150px;
  right: 50%;
  color: #35373b;
  letter-spacing: 37px;
  text-shadow: 0 0 20px rgba(31, 29, 29, 0.5);
`

const DifCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  &:hover {
    z-index: 2;
  }
`;

const CategoryItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* z-index: 1; */
  margin-top: 30px;
  top: 200px;
  position: relative;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  background: #fff;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
  }
`;

const CategoryImg = styled.img`
  width: 100%;
  height: 15rem;
  border-radius: 8px 8px 0 0;
  transition: transform 0.2s ease-in-out;
  /* opacity: .7; */

  ${CategoryItem}:hover & {
    transform: scale(1.1);
  }
`;

const CategoryTitle = styled.p`
  font-size: 16px;
  text-transform: capitalize;
  color: black;
  padding: 5px;
  position: absolute;
  bottom: 10px;
`;

export default function Categories() {
  const categories = ['Horror', 'Mystery', 'Crime', 'Romance', 'Thriller', 'Suspense', 'Fantasy', 'Mythology', 'Self help', 'Buisness', 'StartUp', 'Investing', 'Trading', 'Parenting', 'Poems', 'Geo political', 'Kids books', 'Autobiography', 'Health', 'Mental' ];
  return (
    <CategoryDiv>
    <CategoryHeader>
      <TitleSize>&nbsp;&nbsp;CATEGORIES</TitleSize>
    </CategoryHeader>
    <DifCategory>
      {categories.map((category, index) => (
        <CategoryItem href={`/products?category=${category}`} key={index}>
          <CategoryImg src={`/Category_img.jpg`} alt="" />
          <CategoryTitle className="categoryTitle">{category}</CategoryTitle>
        </CategoryItem>
      ))}
    </DifCategory>
  </CategoryDiv>
  );
}
