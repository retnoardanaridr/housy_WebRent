import React, { useState } from "react";

function SideBar() {
    const [form, setForm] = useState({
        typerent: "",
        bedroom: "",
        bathroom: "",
        amenities: "",
        city_id: "",
    })
    return (
        <>
            <aside className="pt-4" aria-label="Sidebar">
                <div className="px-3 pb-4 overflow-y-auto">
                    <form>
                        <ul>
                            <li>
                                <div className="items-center p-2 text-base font-bold text-gray-900 rounded-lg">
                                    <span className="mb-2">Type of Rent</span>
                                    <div className="mt-3 grid w-full gap-2 md:grid-cols-3">
                                        <div>
                                            <input type="radio" id="date-radio" value="" className="hidden" />
                                            <label htmlFor="date-radio" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-2 border-gray-200 rounded-lg cursor-pointer focus:border-blue-600 hover:text-gray-600 hover:bg-gray-50">
                                                <div className="block">
                                                    <div className="w-full text-lg font-semibold">Date</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" id="month-option" value="" className="hidden" />
                                            <label htmlFor="month-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-2 border-gray-200 rounded-lg cursor-pointer focus:border-blue-600 hover:text-gray-600 hover:bg-gray-50">
                                                <div className="block">
                                                    <div className="w-full text-lg font-semibold">Month</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="radio" id="year-option" value="" className="hidden" />
                                            <label htmlFor="year-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-2 border-gray-200 rounded-lg cursor-pointer focus:border-blue-600 hover:text-gray-600 hover:bg-gray-50">
                                                <div className="block">
                                                    <div className="w-full text-lg font-semibold">Year</div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="items-center p-2 text-base font-bold text-gray-900 rounded-lg">
                                    <span>Date</span>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                        </div>
                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select date" />
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="items-center p-2 text-base font-bold text-gray-900 rounded-lg">
                                    <span>Property Room</span>
                                    <ul>
                                        <li className="text-xs text-grey-tf">
                                            <div>
                                                <h6>Bedroom</h6>
                                                <div className="grid-row-3 text-black">
                                                    <ul className="grid w-full gap-2 md:grid-cols-5">
                                                        <li className="me-2">
                                                            <input type="checkbox" id="bthone-option" value="" className="hidden peer" />
                                                            <label htmlFor="bthone-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-1 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="text-center text-lg font-semibold">1</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="bthtwo-option" value="" className="hidden peer" />
                                                            <label htmlFor="bthtwo-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-1 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">2</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="bththree-option" value="" className="hidden peer" />
                                                            <label htmlFor="bththree-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-1 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">3</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="bthfour-option" value="" className="hidden peer" />
                                                            <label htmlFor="bthfour-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-1 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">4</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="bthfive-option" value="" className="hidden peer" />
                                                            <label htmlFor="bthfive-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-1 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">5 +</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Bathroom</h6>
                                                <div className="grid-row-3 text-black">
                                                    <ul className="grid w-full gap-2 md:grid-cols-5">
                                                        <li className="me-2">
                                                            <input type="checkbox" id="one-option" value="" className="hidden peer" />
                                                            <label htmlFor="one-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-2 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">1</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="two-option" value="" className="hidden peer" />
                                                            <label htmlFor="two-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-1 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">2</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="three-option" value="" className="hidden peer" />
                                                            <label htmlFor="three-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-1 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">3</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="four-option" value="" className="hidden peer" />
                                                            <label htmlFor="four-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-1 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">4</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="five-option" value="" className="hidden peer" />
                                                            <label htmlFor="five-option" className="inline-flex items-center justify-between w-full px-2 py-1 text-black bg-grey-b border-1 border-gray-200 rounded-md cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">5 +</div>
                                                                </div>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="items-center p-2 text-base font-bold text-gray-900 rounded-lg">
                                    <span>Amenities</span>
                                    <div>
                                        <ul>
                                            <li className="w-full border-b border-gray-200 rounded-t-lg">
                                                <div className="flex items-center pl-3">
                                                    <label htmlFor="furnished-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Furnished</label>
                                                    <input id="furnished-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                </div>
                                            </li>
                                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <label htmlFor="pet-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pet Allowed</label>
                                                    <input id="pet-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                                </div>
                                            </li>
                                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center pl-3">
                                                    <label htmlFor="shared-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shared Accomodation</label>
                                                    <input id="shared-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="items-center p-2 text-base font-bold text-gray-900 rounded-lg">
                                    <span>Budget</span>
                                    <div className="flex gap-5 items-center">
                                        <label htmlFor="small-input" className="block mb-2 text-xs font-bold">Less than IDR.</label>
                                        <input type="text" id="small-input" className="block w-50 ml-auto p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="px-3 flex justify-end">
                            <button className="focus:outline-none text-dark font-bold bg-grey-w rounded-lg text-sm px-5 py-2.5">Apply</button>
                        </div>
                    </form>
                </div>
            </aside>
        </>
    )
}

export default SideBar;