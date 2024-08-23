import React, { useEffect, useState } from 'react'
import { getItems } from '../services/ItemService';

function ListItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((response) => {
      setItems(response.data);})
      .catch(error => {
        console.error(error);
      })
    }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Todo Items...</h2>
      <table className="table table-striped table-bordered mt-4">
        <thead className="themed-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item =>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.completed}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListItems;