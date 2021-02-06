import React, { useContext } from 'react'

const OperationLog = ({ operationLog }) => {

  return  (
    <tr>
      <td>{operationLog.descrition}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  )
}

export default OperationLog