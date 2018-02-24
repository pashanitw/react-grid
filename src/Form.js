import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import ReactDataGrid from 'react-data-grid';

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eid:'',
      name:'',
      number:''
    };

    this._columns = [
      { key: 'eid', name: 'EID' },
      { key: 'name', name: 'Name' },
      { key: 'number', name: 'Number' } ];

    this.rows = [];
  }

  rowGetter = (i) => {
    return this.rows[i];
  };

  update= (key, input)=> {
    this.setState({
      [key]: input.target.value
    })
  }
  send = () => {
    /*
         axios.post('/user', this.state).then(()=> {

         }).catch(err=> {

         })
    */
    this.rows.push(this.state)
    this.setState({
      eid:'',
      name:'',
      number:''
    })
  }
  render() {
    const {eid, name, number} = this.state;
    return (
      <div>
        <FormGroup>
          <Label for="exampleEmail" >EID</Label>
          <Input  name="eid" value={eid} onChange={(value) => this.update('eid',value )}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input  name="name"  value={name} onChange={(value) => this.update('name',value )}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" >Number</Label>
          <Input  name="number" number={number} value={number} onChange={(value) => this.update('number',value )}/>
        </FormGroup>
        <Button onClick={this.send}>Submit</Button>
        <div>
          <ReactDataGrid
            columns={this._columns}
            rowGetter={this.rowGetter}
            rowsCount={this.rows.length}
            minHeight={500} />);

        </div>
      </div>
    );
  }
}

FormComponent.propTypes = {};
FormComponent.defaultProps = {};

export default FormComponent;
