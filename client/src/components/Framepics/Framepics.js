import React, {Component} from "react";
import Axios from "axios";
import Metal from "../Metal";
import Color from "../Color";
import Black from "../Black";



class Framepics extends Component{
    state={
        results: []
    }

    componentDidMount(){
        Axios.get("")
    }

    render(){

        return(
        <Section>
            <Metal/>
            <Color/>
            <Black/>
       
        </Section>


        )


    }



}


export default Framepics