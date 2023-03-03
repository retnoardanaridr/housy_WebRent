import React, { useEffect, useState } from "react";
import { Alert, Label, TextInput } from "flowbite-react";
import { useMutation } from "react-query";
import { API } from "../../config/api";


export default function AddCity() {
    const [message, setMessage] = useState(null)
    const [form, setForm] = useState({
        name: '',
    })

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const response = await API.post('/city', form)
            console.log(response.data.data);
            const alert = (
                <Alert className="font-medium" color='success'>
                    Success
                </Alert>
            )
            setMessage(alert)
        } catch (error) {
            const alert = (
                <Alert color='failure' className="font-bold">
                    Failed
                </Alert>
            )
            setMessage(alert)
            console.log(error)
        }
    })

    return (
        <>
            <div>
                <div className="mb-4 flex justify-center items-center w-full h-full">
                    <div className="w-3/4">
                        <h3 className="font-bold mb-5 mt-4 text-3xl">Add City</h3>
                        {message && message}
                        <form>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name">Name City</Label>
                                </div>
                                <TextInput className="mt-5" id="name" type="text" name="name" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={(e) => handleSubmit.mutate(e)}
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}