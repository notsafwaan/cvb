"use client";
import { Input, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Working Hours",
    dataIndex: "workingHours",
    key: "workingHours",
  },
  {
    title: "Remaining Slots",
    dataIndex: "slotsRemaining",
    key: "slotsRemaining",
    render: (slot) => <p>{slot}/10</p>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {record.slotsRemaining > 0 ? (
          <a onClick={() => applyForVaccine(record)}>Apply</a>
        ) : (
          <p>Full</p>
        )}
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Banglore Vaccine Centre",
    address: "Banglore",
    workingHours: "9 a.m to 5 p.m",
    slotsRemaining: 6,
  },
  {
    key: "2",
    name: "Chennai Vaccine Centre",
    address: "Chennai",
    workingHours: "9 a.m to 5 p.m",
    slotsRemaining: 7,
  },
  {
    key: "3",
    name: "Hyderabad Vaccine Centre",
    address: "Hyderabad",
    workingHours: "9 a.m to 5 p.m",
    slotsRemaining: 3,
  },
  {
    key: "4",
    name: "Kerala Vaccine Centre",
    address: "Kerala",
    workingHours: "9 a.m to 5 p.m",
    slotsRemaining: 3,
  },
  {
    key: "5",
    name: "Pune Vaccine Centre",
    address: "Pune",
    workingHours: "10 a.m to 6 p.m",
    slotsRemaining: 4,
  },
  {
    key: "6",
    name: "Mumbai Vaccine Centre",
    address: "Mumbai",
    workingHours: "9 a.m to 5 p.m",
    slotsRemaining: 0,
  },
];

const applyForVaccine = (record) => {
  console.log(record); // apply API here
};

export default function VaccinCentrePage() {
  const [centres, setCentres] = useState([...data]);

  useEffect(() => {
    // call fetch API to get data here
  }, []);

  const handleSearchVaccineCentre = (e) => {
    const filteredValues = data.filter((c) =>
      c.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCentres([...filteredValues]);
  };

  return (
    <div className={styles.main}>
      <h1>Vaccine Centres</h1>
      <div style={{ marginBottom: 50 }}>
        <h4>Search for Vaccine Centres</h4>
        <Input
          placeholder="Vaccine Centre Name"
          onChange={handleSearchVaccineCentre}
        />
      </div>
      <Table columns={columns} dataSource={centres} />
    </div>
  );
}
