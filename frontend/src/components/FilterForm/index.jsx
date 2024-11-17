import { useState } from "react";
import {
  Wrapper,
  Form,
  SearchContainer,
  FilterContainer,
  Button,
} from "./FilterForm.style";
import { IoFilter, IoSearchSharp } from "react-icons/io5";

const FilterForm = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [displayFilter, setDisplayFilter] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <>
      <Form>
        <Wrapper>
          <SearchContainer $display={displaySearch}>
            <input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IoSearchSharp onClick={() => setDisplaySearch(!displaySearch)} />
          </SearchContainer>
        </Wrapper>
        <Wrapper>
          <FilterContainer>
            <Button
              type="button"
              onClick={() => setDisplayFilter(!displayFilter)}
            >
              <IoFilter />
              Filter
            </Button>
            {displayFilter && (
              <fieldset>
                <ul>
                  {["POP", "ROCK", "JAZZ", "RAP", "HIP-HOP", "ELECTRONIC"].map(
                    (item) => (
                      <li key={item}>
                        <label>
                          {item}
                          <input
                            type="checkbox"
                            value={item}
                            onChange={(e) => setFilter(e.target.value)}
                          />
                          <span></span>
                        </label>
                      </li>
                    )
                  )}
                </ul>
                <Button>Filter</Button>
              </fieldset>
            )}
          </FilterContainer>
        </Wrapper>
      </Form>
    </>
  );
};

export default FilterForm;
