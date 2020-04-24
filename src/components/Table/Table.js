import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { generateKey, getRandomNumber } from '../../Utilidades'

const mobileMin = 420;
const Table = ({ header, items, loading, noResults, className }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= mobileMin);
  const nroColsMobile = React.useMemo(() => header.filter(e => e.mobile).length, [])
  const nroColsMock = (header && (isMobile ? nroColsMobile : header.length)) || items[0].length || 5;
  const nroRowsMock = items.length || 5;

  React.useLayoutEffect(() => {
    const updateIsMobile = e => {
      if(e.target.innerWidth <= mobileMin) setIsMobile(true)
      else setIsMobile(false);
    }
    window.addEventListener('resize', updateIsMobile);
    // return window.removeEventListener('resize', updateIsMobile)
  }, []);


  const LoadingData = () => (
    <>{
      [...Array(nroRowsMock)].map(() => (
        <tr key={Math.random() * 10000}>
          {[...Array(nroColsMock)].map(() => (
            <Cell key={generateKey()} mobile={true}>
              <SkeletonPulse
                key={Math.random() * 10000}
                maxWidth={`${getRandomNumber(0, 250)}px`}
              />
            </Cell>
          ))}
        </tr>
      ))
    }</>
  );

  return (
    <TableWrapper className={className}>
      {/* HEADER TABLE */}
      {
        header && (
          <>
            {header.map(elem => <Cols mobile={elem.mobile} colWidth={elem.width || `${100 / header.length}%`} />)}
            <thead>
            <tr>
              {
                header.map(elem => <Cell key={generateKey()} mobile={elem.mobile}>{elem.value}</Cell>)
              }
            </tr>
            </thead>
          </>
        )
      }

      {/* BODY TABLE */}
      {
        <tbody>
        {
          loading
            ? <LoadingData/>
            : (
                items.map(rows => (
                  <tr key={generateKey()}>
                    {rows.map((cell, i) => (
                      <Cell
                        style={cell.style}
                        key={generateKey()}
                        mobile={header[i].mobile}
                      >
                        {cell.value}
                      </Cell>
                    ))}
                  </tr>
                ))
            )
        }
        </tbody>
      }

      {
        !loading && items.length === 0 && (
          <tfoot>
            <tr>
              <td colSpan={nroColsMock}>
               {noResults}
              </td>
            </tr>
          </tfoot>
        )
      }
    </TableWrapper>
  )
}

const Cols = styled.col`
  width: ${props => props.colWidth};
  @media (max-width: ${mobileMin}px) {
      display: ${props => (props.mobile ? 'table-column' : 'none')};
      //width: 33.33%;
  }
`;
const TableWrapper = styled.table`
  border-collapse: collapse;
  border: 1px solid #E6E6E6;
  width: 50%;
  margin: 20px auto;
  background: #fff;
  thead td {
    padding: 8px 8px 8px 16px;
    text-align: left;
    font-weight: 700;
  }
  td {
    border-bottom: 1px solid #E6E6E6;
  }
  
  tbody td {
    padding: 16px;
  } 
  
  tfoot td{
    text-align: center;
    padding: 16px;
  }
`

const Cell = styled.td`
  @media (max-width: 420px) {
    display: ${props => (props.mobile ? 'table-cell' : 'none')};
  }
`

const SkeletonPulse = styled.span`
  display: inline-block;
  height: 16px;
  width: 100%;
  min-width: 30px;
  max-width: calc(100% - ${props => props.maxWidth || 0});
  background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -135% 0;
    }
  }
`

Table.defaultProps = {
  items: [],
  header: [],
  loading: false,
  noResults: 'No hay datos que mostrar',
  className: null,
}
Table.propTypes = {}

export default Table
