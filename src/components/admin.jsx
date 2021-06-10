import React, { Component } from "react";
import ProductService from "../services/productService";

class Admin extends Component {
    render(){
        return(
            <div className ="admin-age px-4 py-5">
                <button onClick={this.testRead} className = "btn btn- info">
                    Test Read
                </button>
                <button onClick={this.sendData} className = "btn btn-Warning">
                    Send data 
                </button>
                <button onClick={this.ClearData} className = "btn btn-Danger">
                   Clear Data
                </button>

            </div>
        )
    }
}

    testRead = async () => {
    console.log("Teast Read"); 
    let service = new ProductService();
    let data = await service.getCatalog();
    console.log("test read", data);
};

    sendData = async  {} => {
    console.log(" Send Data "); 

    let service = new ProductService();
    await service.seeData();
    console.log("Data seeded, Try reading it to confirm");
};

clearData = () => {
    console.log("clear data");
};


export deafault Admin;