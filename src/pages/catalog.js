import React from "react"

import FMDALayout from "../components/layout"

import DataTable from "react-data-table-component"

const columns = [
  {
    name: "Index",
    selector: "index",
    sortable: true,
  },
  {
    name: "Company",
    selector: "company",
    sortable: true,
  },
  {
    name: "File Name",
    selector: "filename",
    sortable: true,
  },
  {
    name: "Date Uploaded",
    selector: "date_uploaded",
    sortable: true,
  },
]

const data = [
  {
    index: 1,
    company: "Conan the Barbarian",
    filename: "1982",
    date_uploaded: "mwjiw",
  },
  {
    index: 1,
    company: "Conan the Barbarian",
    filename: "1982",
    date_uploaded: "mwjiw",
  },
  {
    index: 1,
    company: "Conan the Barbarian",
    filename: "1982",
    date_uploaded: "mwjiw",
  },
  {
    index: 1,
    company: "Conan the Barbarian",
    filename: "1982545454",
    date_uploaded: "mwjiw",
  },
]

const Catalog = () => {
  return (
    <FMDALayout>
      <DataTable
        title="Catalog"
        columns={columns}
        data={data}
        highlightOnHover={true}
        striped={true}
        persistTableHead={true}
      />
    </FMDALayout>
  )
}

export default Catalog
