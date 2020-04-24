import React from 'react'
import PropTypes from 'prop-types'
import Table from '../components/Table/Table'

const TableView = props => {
  const [loading, setLoading] = React.useState(true)
  setTimeout(() => setLoading(false), 2000)
  const header = [
    {
      value: 'Tipo',
      mobile: true,
    },
    {
      value: 'Procedencia',
      mobile: false,
    },
    {
      value: 'Costo',
      mobile: true,
    },
    {
      value: 'Acciones',
      mobile: false,
    },
    {
      value: 'cosos',
      mobile: true,
    }
  ]

  const tableItems = [
    [
      {
        value: 'Tipo 1',
        style: { color: 'blue' }
      },
      {
        value: 'Vnzla'
      },
      {
        value: '788.55Bs'
      },
      {
        value: 'algunas acciones'
      },
      {
        value: 'algo'
      }
    ],
    [
      {
        value: 'Tipo 1',
        style: { color: 'blue' }
      },
      {
        value: 'Vnzla'
      },
      {
        value: '788.55Bs'
      },
      {
        value: 'algunas acciones'
      },
      {
        value: 'algo'
      }
    ],
    [
      {
        value: 'Tipo 1',
        style: { color: 'blue' }
      },
      {
        value: 'Vnzla'
      },
      {
        value: '788.55Bs'
      },
      {
        value: 'algunas acciones'
      },
      {
        value: 'algo'
      }
    ]
  ]
  return (
    <Table
      header={header}
      loading={loading}
      // items={tableItems}
    />
  )
}

TableView.propTypes = {}

export default TableView
