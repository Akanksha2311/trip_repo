 import React from 'react';
 import './TripPackage.css';

export default function TripPackage(){
    return (
        <div>
          <h1 className=" text-danger text-center text-capitalize m-2 p-2">Holiday Packages</h1>
            <table class="table table-hover text-center bordered">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Package Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Weekend Munnar</td>
      <td>5110</td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Goa Holiday Packages</td>
      <td>6789</td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Kashmir Holiday Packages</td>
      <td>10000</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}
