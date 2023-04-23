import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class task extends Component {
    constructor(props) {
        super(props);
        //   this.delete = this.delete.bind(this);
    }
    //   delete(){
    //       axios.get('http://localhost:4000/attendance/delete/'+this.props.obj._id)
    //           .then(this.setState({redirect: true}))
    //           .catch(err => console.log(err))
    //       //this.props.history.push('/index');
    //       alert("Your Order Successfully Deleted....")
    //       window.location.replace('/inventoryView/'+this.props.obj.email);
    //   }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.taskNo}
               </td>
               <td>
                   {this.props.obj.staffid}
               </td>
               <td>
                   {this.props.obj.description}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.status}
               </td>
    
                <td>
                   <Link to={"/edit/"+this.props.obj._id} className="btn btn-success">Buy</Link>
                      &nbsp;
                    {/* <button onClick={this.delete} className="btn btn-danger">Add To cart</button>  */}
               </td>  
           </tr>
        );
    }
}

export default task;