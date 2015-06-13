'use strict';

var Actions = require('../Actions'),
    Constants = require('../Constants'),
    Stores = require('../Stores');

var HomePage = React.createClass({

    getInitialState: function(){
        var o = this.getTruth();
        return o;
    },

    componentWillMount: function(){
        Stores.addListener(Constants.CHANGE_EVENT, this._onChange);
    },

    componentWillUnmount: function(){
        Stores.removeChangeListener(this._onChange());
    },

    _onChange: function(){
        this.setState(this.getTruth());
    },

    getTruth: function(){

        return Stores.getAll();

    },

    render: function() {

        return (
            <div>
                index
            </div>
        );
    }
});


module.exports = HomePage;
