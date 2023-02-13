import { IoSearch } from "react-icons/io5";

const SearchCountry = ({ styles, setIsSearch, setIsEmpty, key_url }) => {

  const HandleData = async (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const dataSearch = dataForm.get("country");

    if (dataSearch == "") {
      setIsEmpty((prev) => true);
      return;
    }

    try {
      const resp = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${dataSearch}&lang=sp&units=metric&APPID=${key_url}`
      );
      const data = await resp.json();
      if (resp.ok) {
        setIsEmpty((prev) => false);
        setIsSearch((prev) => [{ find: true }, { data: data }]);
      } else {
        setIsEmpty((prev) => false);
        setIsSearch((prev) => [...prev, { find: true }]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.formBox} onSubmit={(e) => HandleData(e)}>
      <input
        className={styles.inputSearch}
        autoFocus={true}
        name="country"
        placeholder="Enter your location"
      />
      <div>
        <button className={styles.buttonSearch}>
          <IoSearch
            color="black"
            size={"35"}
            className={styles.iconSearch}
            cursor="pointer"
          />
        </button>
      </div>
    </form>
  );
};

export { SearchCountry };
