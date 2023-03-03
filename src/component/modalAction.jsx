import React from 'react';
import { Button, Card, Table } from 'flowbite-react'
import { Dialog } from '@headlessui/react';
import logo from '../assets/Icon.png';


function ModalAction({show, setShow}) {
    return (
        <>
                <Dialog
                    open={show}
                    onClose={()=> setShow(false)}
                    className="fixed inset-0 flex items-end md:items-center justify-center px-3 bg-black bg-opacity-60 backdrop-blur z-[999]"
                >
                <Dialog.Panel
                className='justify-center bg-white rounded-lg shadow"'
                >
                    <Card>
                        <div className="flex p-2">
                            <img className="w-20" src={logo} alt="stempel" />
                            <h5 className="ml-auto font-bold">Booking</h5>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h4 className="font-extrabold text-3xl">Orchid Residence</h4>
                                <p>Jl. Kolonel yos Sudarso</p>
                                <div className="bg-red-300 rounded-md text-white py-2 px-2 w-36 flex justify-center">
                                    <button>Waiting Approve</button>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center w-55 h-30">
                                    <div>
                                        <input id="steps-range" type="range" min="0" max="5" value="4" step="0.5" className="rotate-90 w-24 bg-gray-200 rounded-lg cursor-pointer" />
                                    </div>
                                    <div className="ml-2">
                                        <h6 className="font-bold">Check-In</h6>
                                            <h6 className="text-sm">23-12-2022</h6>
                                        <h6 className="mt-3 font-bold">Check-Out</h6>
                                            <h6 className="text-sm">22-01-2023</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-10">
                                <h6 className="font-bold">Amenities</h6>
                                <h6 className="font-bold mt-3">Type of Rent</h6>
                                <span>Month</span>
                            </div>
                        </div>
                        <Table className="text-black font-medium">
                            <Table.Head className="font-bold">
                                <Table.HeadCell>
                                    No.
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Fullname
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Gender
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Phone
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        1
                                    </Table.Cell>
                                    <Table.Cell>
                                        Banana
                                    </Table.Cell>
                                    <Table.Cell>
                                        Female
                                    </Table.Cell>
                                    <Table.Cell>
                                        0821397435463
                                    </Table.Cell>
                                    <Table.Cell className="font-bold text-base">
                                        <span>Long time rent: Month</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell className="font-bold text-base">
                                        <span>Total: Rp.3.0000.000</span>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card>
                    <div className='flex justify-end m-2'>
                        <Button className='mr-3'>
                            Approve
                        </Button>
                        <Button
                            color="failure"
                        >
                            Cancel
                        </Button>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )

}

export default ModalAction;