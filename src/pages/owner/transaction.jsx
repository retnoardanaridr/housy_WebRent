import React, { useState } from "react";
import { useQuery } from "react-query";
import { Table } from "flowbite-react";
import { API } from "../../config/api";
import search from '../../assets/seacr.png';
import ModalAction from "../../component/modalAction";

export default function IncomeTransaction() {
  const [action, setAction] = useState(false);

  let { data: orders } = useQuery('ordersCache', async () => {
    const response = await API.get('/orders');
    return response.data.data;
  })

  console.log(orders)

  return (
    <>
      <div className="bg-grey-d flex justify-center py-5 w-full h-screen">
        <div className="w-11/12 h-[500px] md:flex-row px-5 py-4">
          <h3 className="font-bold text-3xl">Incoming Transaction</h3>
          <div className="w-full mt-4 ">
            <Table striped={true}>
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Users</Table.HeadCell>
                <Table.HeadCell>Type of Rent</Table.HeadCell>
                <Table.HeadCell>Status Tenant</Table.HeadCell>
                <Table.HeadCell>Status Payment</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {orders?.map((item, index) => (
                  <Table.Row key={index} className="bg-white">
                    <Table.Cell>{index+1}</Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.user.fullname}
                    </Table.Cell>
                    <Table.Cell>{item.housy.typerent}</Table.Cell>
                    <Table.Cell>{item.status}</Table.Cell>
                    <Table.Cell>Approve</Table.Cell>
                    <Table.Cell>
                      <button onClick={() => {setAction(true)}}>
                        <img src={search}  alt="" />
                      </button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              </Table>
              {action && (
                <ModalAction
                show={action}
                setShow={setAction}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
}
