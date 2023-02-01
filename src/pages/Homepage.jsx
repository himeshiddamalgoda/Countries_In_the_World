import { useState, useEffect } from "react";
import SearchComponent from "../components/SearchComponent";
import { BiSearch } from "react-icons/bi";
import { Link ,useNavigate } from "react-router-dom";


const Homepage = () => {
  const [term, setTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [city, setCity] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const navigate = useNavigate();

  const getSearchOptions = (value) => {
    fetch(
      `https://restcountries.com/v3.1/name/${value.trim()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
        console.log(data);
      });
  };

  const onInputChange = (e) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === "") return;

    getSearchOptions(value);
  };

  const onOptionSelect = (option) => {
    setCity(option.name.common);
    console.log(option.name.common);
  };



  const onSubmit = () => {
    if (!city) return;
    navigate(`/${term}`)
    // getForecast(city);
  };

  useEffect(() => {
    if (city) {
      setTerm(city);
      setOptions([]);
    }
  }, [city]);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v2/all`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 ">
      <SearchComponent
        term={term}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-10 py-10 mx-auto">
        {allCountries?.map((country, index) => (
          <Link to={`/${country.name}`}>
            <div key={index} className="m-2 ">
              <div className="rounded bg-slate-100 hover:bg-slate-300 p-3">
                <table className="w-full whitespace-nowrap ">
                  <thead>
                    <tr className="h-16  text-sm leading-none text-gray-800">
                      <th className="font-bold text-lg text-left pl-2 break-all text-clip">
                        {country.name}
                        <p className="text-xs leading-3 text-gray-600 px-1 break-all text-clip">
                          ({country.nativeName})
                        </p>
                      </th>
                      <th className="font-normal text-left pl-2">
                        <div className="rounded bg-slate-100  p-2 w-10">
                          <BiSearch size={25} />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    <tr className="h-12 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 rounded">
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="font-medium">County Code</p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              (Alpha 2)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-2 ">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {country.alpha2Code}
                        </p>
                      </td>
                    </tr>
                    <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="font-medium">County Code</p>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              (Alpha 3)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-2 ">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {country.alpha3Code}
                        </p>
                      </td>
                    </tr>
                    <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="font-medium">Currency</p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-2 ">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {country.cioc}
                          {/* {country.currencies.map((lan,index) => (
                            <span key={index}> {lan.code}</span>
                        ))} */}
                        </p>
                      </td>
                    </tr>
                    <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="font-medium">Int. dial code</p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-2 ">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {country.callingCodes}
                        </p>
                      </td>
                    </tr>
                    <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="font-medium">Language</p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-2 ">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {country.languages.map((lan, index) => (
                            <span key={index}> {lan.iso639_2}</span>
                          ))}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
