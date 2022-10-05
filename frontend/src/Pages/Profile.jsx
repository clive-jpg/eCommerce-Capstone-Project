import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { EditText, EditTextarea } from 'react-edit-text';
import { useSelector, useDispatch } from "react-redux";
import { getProductThunk } from "../redux/productSlice";
import 'react-edit-text/dist/index.css';

export default function Profile() {
  const products = useSelector((state) => state.productReducer.products);
  console.log(products)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  return (
    <div className='container'>
        <React.Fragment>
          <div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">Full Name : </label></strong>
            <EditText id="fullName" name="fullName" defaultValue="Full Name" inline/>
          </div>
          <div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">Email Address: </label></strong>
            <EditText name="email" type="email" style={{width: '200px'}} defaultValue="email@domain.com" inline/>
          </div>
          <div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">Phone Number: </label></strong>
            <EditText name="age" type="number" style={{width: '200px'}} defaultValue="34" inline/>
          </div>
          <div style={{ display: 'flex' }}>
            <strong>
              <label className='mr-2' style={{ paddingTop: '2px' }}>Address: </label>
            </strong>
            <EditTextarea
              name='description'
              rows={4}
              
              style={{ paddingTop: 0 }}
              placeholder='Enter a description'
            />
          </div>
        </React.Fragment>
    <div className='row'>
        {products && products.map((data)=>(
          <div className="col-sm-6 col-md-4 col-lg-3">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Stock: {data.stock}</ListGroup.Item>
            <ListGroup.Item>Price: ${data.price}</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </div>
        ))}
    
      {/* <div className="container">
        <div className="d-flex text-center justify-content-center align-items-center">
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title> Order number </Card.Title>
              <Card.Text>Date Status</Card.Text>
              <hr />

              <div className="row">
                <div className="col">
                  <img alt="" />
                </div>
                <div className="col">
                  <p>Name</p>
                  <p>Unit</p> <p>Price</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div> */}
    </div>
    </div>
  );
}