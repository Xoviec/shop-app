import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const people = ['All', 'Apple', 'Samsung','HP Pavilion','OPPO','Microsoft Surface','Infinix','Impression of Acqua Di Gio','Royal_Mirage','Fog Scent Xpressio','Golden','luxury palace','LED Lights','Flying Wooden','Boho Decor','Dry Rose','fauji','Baking Food Items','Bake Parlor Big','Saaf & Khaas','Fair & Clear','ROREC White Rice','Dermive','Hemani Tea',"L'Oreal Paris",'Lord - Al-Rehab','Al Munakh']


export default function CategorySelect({categories, categoryChange}) {


    const [selected, setSelected] = useState(people[0])

    const categoryList = ['All', ...categories]




    useEffect(()=>{
        if(selected==='All'){
            categoryChange('')
        }
        else{
            categoryChange(selected)
        }
    }, [selected])



  return (
    <div className="first fixed top-16 w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="second relative mt-1">
          <Listbox.Button className="dropdown-button relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="fourth block truncate">{selected}</span>
            <span className='pseudo-placeholder'>Category</span>
            <span className="fifth pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
             
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="dropdown  absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {categoryList.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `dropdown-item relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'eighth bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`dropdown-item-text block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person}
                      </span>
                      {/* {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">>
                        </span>
                      ) : null} */}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}