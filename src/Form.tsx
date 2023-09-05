import { useState, useEffect} from "react";
import flag from "./indian-flag.png";


interface Location {
  latitude: number | null;
  longitude: number | null;
}


const Form = () => {
  
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });
  const [number, setNumber] = useState<number | "">("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input === "" || /^\d{1,10}$/.test(input)) {
      setNumber(input === "" ? "" : parseInt(input, 10));
    }
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error retrieving geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleFileSelect = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = () => {
    console.log(selectedFiles);
  };

  

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login form
          </h2>
          <h2 className="mt-1  text-1xl font-bold leading-9 tracking-tight text-gray-900">
            Basic details
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm ">

          <form  className="space-y-6 "   action="#" method="POST" >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">email</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  phone number
                  <img src={flag} height={14} width={14} />
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  ></a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="phone_number"
                  name="phone_number"
                  type="number"
                  autoComplete="current-phone_number"
                  value={number}
                  onChange={handleInputChange}
                  placeholder="+91"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <h2 className="mt-1  text-1xl font-bold leading-9 tracking-tight text-gray-900">
                Address
              </h2>
              <div className="mt-2">
                address:1{" "}
                <input
                  type="text"
                  name="street-address1"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2">
                address:2{" "}
                <input
                  type="text"
                  name="street-address2"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                pin code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                country
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="country"
                  id="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <h2 className="mt-1  text-1xl font-bold leading-9 tracking-tight text-gray-900">
                file upload
              </h2>
              <div>
                <label
                  htmlFor="file"
                  className=" mt-7 block text-sm font-medium leading-6 text-gray-900"
                >
                  single_file
                </label>
                <input
                  className='mt-3 "block w-full rounded-md border-0 py-1.4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"'
                  type="file"
                  id="file"
                  name="file"
                  accept=".png, .pdf"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="file"
                  className=" mt-7 block text-sm font-medium leading-6 text-gray-900"
                >
                  multiple_file
                </label>
                <input
                  className='mt-3 "block w-full rounded-md border-0 py-1.4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"'
                  type="file"
                  name="multiple-file"
                  multiple
                  onChange={handleFileSelect}
                  accept=".png,.pdf"
                />
                <button
                  type="submit"
                  onClick={handleUpload}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  upload
                </button>
              </div>

              <div>
                <div>
                  <h2 className="mt-1 mb-3 text-1xl font-bold leading-9 tracking-tight text-gray-900">
                    Geolocation status
                  </h2>
                  {location && (
                    <div>
                      <p>Latitude: {location.latitude}</p>
                      <p>Longitude: {location.longitude}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  alert("form has been successfully subbmited");
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
