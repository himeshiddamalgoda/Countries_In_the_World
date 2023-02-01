import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {MdArrowBack} from "react-icons/md"
import toast, { Toaster } from 'react-hot-toast';

const CountryDetailPage = () => {
  const [countryDetails, setCountryDetails] = useState();
  const [languages, setLanguages] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [officialNativeName, setOfficialNativeName] = useState([]);
  const [currency, setCurrency] = useState();



  let { country } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 404) {
            setErrorMsg("404");
            toast.error("Error in fetching",errorMsg)
          } else {
            setCountryDetails(data[0]);
            setOfficialNativeName(Object.values(data[0].name.nativeName))
            setLanguages(Object.values(data[0].languages))
            setCurrency(Object.keys(data[0].currencies))
            // console.log(data);
            
          }
        });
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  console.log(countryDetails);
  return (
    <div className="grid grid-cols-1 ">
      
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      <div className="p-1 px-5">
        <div className=" mt-24  md:mt-20 lg:mt-20 flex   mx-auto w-full px-6 bg-slate-100 rounded p-3">
        <span className="p-1 mx-2" onClick={()=> navigate(-1)}><MdArrowBack/></span>
          <p className="text-indigo-700 font-semibold">
           Search <span className="text-black">/ {country}</span>
          </p>
        </div>
      </div>

      <div className="p-1 px-5">
        <div className="  md:mt-5 flex mx-auto w-full px-6 rounded p-3">
          <p className="font-medium text-4xl"> {country} </p>
        </div>
      </div>

      <div className="flex flex-wrap px-5 lg:px-10 py-10 mx-auto gap-3">
        <div>
          {countryDetails && officialNativeName[0] && (
            <table className="w-full whitespace-nowrap ">
              <thead>
                <tr className="h-16  text-sm leading-none text-gray-800">
                  <th className="font-bold text-lg text-left pl-2 break-all text-clip">
                    <p className="text-2xl leading-3 ">Names</p>
                  </th>
                </tr>
              </thead>
              <tbody className="w-full border-2">
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 ">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">Common</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2  px-2">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.name.common}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">official</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.name.official}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">Common(native)</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                    {officialNativeName[0].common}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">official(native)</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                    {officialNativeName[0].official}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">alternative spellings</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.altSpellings}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">translations</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {/* {countryDetails.translations} */}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <div>
          {countryDetails && languages && (
            <table className="w-full whitespace-nowrap ">
              <thead>
                <tr className="h-16  text-sm leading-none text-gray-800">
                  <th className="font-bold text-lg text-left pl-2 break-all text-clip">
                    <p className="text-2xl leading-3 p">Languages</p>
                  </th>
                </tr>
              </thead>
              <tbody className="w-full border-2">
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 ">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">Native Language</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2  px-2">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {languages[0]}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-semibold">languages</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                    {languages.map((lan,index)=> (<p key={index}>{lan}</p>))}
                    </p>
                  </td>
                </tr>
                
                
              </tbody>
            </table>
          )}
        </div>

        <div>
          {countryDetails &&  (
            <img src={countryDetails.flags.png} alt={countryDetails.flags.alt} />
          )}
        </div>

        <div>
          {countryDetails  && (
            <table className="w-full whitespace-nowrap ">
              <thead>
                <tr className="h-16  text-sm leading-none text-gray-800">
                  <th className="font-bold text-lg text-left pl-2 break-all text-clip">
                    <p className="text-2xl leading-3 ">Codes</p>
                  </th>
                </tr>
              </thead>
              <tbody className="w-full border-2 ">
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 ">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">ISO 3166-1 alpha-2</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2  px-2">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.cca2}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">ISO 3166-1 alpha-3</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.cca3}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">ISO 3166-1 numeric</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                    {countryDetails.ccn3}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">International calling code</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                    {countryDetails.idd.root}{countryDetails.idd.suffixes}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">ISO 4217 currency code</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {currency && currency}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">Top level domains</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.tld}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>


        <div>
          {countryDetails && (
            <table className="w-full whitespace-nowrap ">
              <thead>
                <tr className="h-16  text-sm leading-none text-gray-800">
                  <th className="font-bold text-lg text-left pl-2 break-all text-clip">
                    <p className="text-2xl leading-3 ">Geography</p>
                  </th>
                </tr>
              </thead>
              <tbody className="w-full border-2">
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100 ">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">Region</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2  px-2">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.region}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">SubRegion</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.subregion}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">Capital</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                    {countryDetails.capital}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">Demonyms</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                    {countryDetails.demonyms.eng.m}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">Lat/Lng</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.latlng}
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">Area</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.area}Km&sup2;
                    </p>
                  </td>
                </tr>
                <tr className="h-12  text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="pl-4">
                        <p className="font-medium">LandBorders</p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-2 ">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {countryDetails.borders}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        
        
      </div>
    </div>
  );
};

export default CountryDetailPage;
