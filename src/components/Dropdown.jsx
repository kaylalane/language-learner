import { Transition, Listbox } from "@headlessui/react";
import { Fragment,  useState } from "react";
import {
  ChevronUpDownIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";

export default function Dropdown({ defaultValue, list, changeItem }) {
  const [selected, setSelected] = useState(list[0]);

  function handleChange(e) {
    console.log(e);
    changeItem(e);
    setSelected(e);
  }

  return (
    <div className=" text-right">
      <Listbox value={selected} onChange={handleChange}>
        <div>
          <Listbox.Button
            value={selected}
            className="bg-primary text-white relative w-full cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {list.map((listItem) => (
                <Listbox.Option
                  key={listItem}
                  id={listItem}
               
                  value={listItem}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 text-base text-left ${
                      active ? "bg-secondary" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {listItem}
                      </span>

                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primaryButton">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </div>
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
