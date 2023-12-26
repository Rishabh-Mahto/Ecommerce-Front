import Header from "@/components/Header";
import { useCallback, useEffect, useRef, useState } from "react";
import Input from "@/components/Input";
import styled from "styled-components";
import axios from "axios";
import ProductsGrid from "@/components/ProductsGrid";
import debounce from "lodash/debounce";
import Spinner from "@/components/Spinner";

const Wrapper = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const SearchInput = styled(Input)`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.4rem;
`;
const InputWrapper = styled.div`
  position: sticky;
  top: 20px;
  margin: 17px 0;
  padding: 5px 0;
  background-color: #eeeeeeaa;
`;

export default function SearchPage() {
  const [phrase, setPhrase] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useCallback(debounce(serachProducts, 500), []);
  useEffect(() => {
    if (phrase.length > 0) {
      setIsLoading(true);
      debouncedSearch(phrase);
    } else {
      serachProducts([]);
    }
  }, [phrase]);

  function serachProducts(phrase) {
    axios
      .get("api/products/search?phrase=" + encodeURIComponent(phrase))
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      });
  }
  return (
    <>
      <Header />
      <Wrapper>
        <InputWrapper>
          <SearchInput
            autoFocus
            value={phrase}
            onChange={(ev) => setPhrase(ev.target.value)}
            placeholder="Search for Books..."
          />
        </InputWrapper>
        {!isLoading && phrase !== "" && products.length === 0 && (
          <h2>No products found for "{phrase}"</h2>
        )}
        {isLoading && <Spinner fullWidth={true} />}
        {!isLoading && products.length > 0 && (
          <ProductsGrid products={products} />
        )}
      </Wrapper>
    </>
  );
}
