"use client";

import { IUser } from "@/backend/models/user";
import { useDeleteBookingMutation } from "@/redux/api/bookingApi";
import { MDBDataTable } from "mdbreact";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

interface Props {
  data: {
    users: IUser[];
  };
}

const AllUsers = ({ data }: Props) => {
  const users = data?.users;
  const router = useRouter();

  //   const [deleteBooking, { error, isLoading, isSuccess }] =
  //     useDeleteBookingMutation();

  //   useEffect(() => {
  //     if (error && "data" in error) {
  //       toast.error(error?.data?.errMessage);
  //     }

  //     if (isSuccess) {
  //       router.refresh();
  //       toast.success("Booking deleted");
  //     }
  //   }, [error, isSuccess]);

  const setUsers = () => {
    const data: { columns: any[]; rows: any[] } = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
        },
        {
          label: "Role",
          field: "role",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    users?.forEach((user) => {
      data?.rows?.push({
        id: user._id,
        name: user?.name,
        email: user?.email,
        role: user?.role,
        actions: (
          <div className="d-flex gap-2 justify-content-center">
            <Link
              href={`/admin/users/${user._id}`}
              className="btn btn-outline-primary"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button
              className="btn btn-outline-danger mx-2"
              //   disabled={isLoading}
              //   onClick={() => deleteBookingHandler(user?._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ),
      });
    });

    return data;
  };

  //   const deleteBookingHandler = (id: string) => {
  //     deleteBooking(id);
  //   };

  return (
    <div className="container">
      <h1 className="my-5">{users?.length} Users</h1>
      <MDBDataTable data={setUsers()} className="px-3" bordered striped hover />
    </div>
  );
};

export default AllUsers;
