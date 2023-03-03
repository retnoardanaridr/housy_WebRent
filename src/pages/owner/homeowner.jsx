import React from "react";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { Card, Button } from "flowbite-react";


export default function HomeOwner() {
    let { data: housy } = useQuery('houseCache', async () => {
        const response = await API.get('/housy');
        return response.data.data;
    });
    return (
        <>
            <div className="flex justify-center">
                <div className="w-[1035px]">
                    <Card>
                        <div className="font-bold">
                            <h3>Homepage</h3>
                        </div>
                        <div className="w-[600px]">
                            {housy?.map((item) => (
                                <>
                                    <div className="mb-5">
                                        <Card horizontal={true}>
                                            <div className="flex">
                                                <div>
                                                    <img src={item.thumbnail} alt='' />
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                    <div className="flex justify-items-center items-center">
                                                    <div>
                                                        <Button>
                                                            Edit
                                                        </Button>
                                                    </div>
                                                    <div>
                                                        <Button color="failure">
                                                            Delete
                                                        </Button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}