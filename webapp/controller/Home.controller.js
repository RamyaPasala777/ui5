sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.app.empdetailsapp.controller.Home", {
        onInit: function () { 
            const oModel=new JSONModel({
                employee:{
                    age:25,
                    fName:"Kalyan"

                }
            })
            this.getView().setModel(oModel,'sample'); 
     }
        });
       
    });
