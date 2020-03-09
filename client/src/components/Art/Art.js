import React, { Component } from "react";
import Axios from "axios";
import Section from "../Section";
import Banner from "../Banner";

class Art extends Component{

    state={
        results: []
    }


    componentDidMount(){
        Axios.get("")
    }

    render(){
        
        return(
            <Section>
                <Banner
                title="Shop Artwork and Design"
                subtext="Find art to fill your frames or just browse for inspiration"
                />
            </Section>
        )
    }
}

export default Art