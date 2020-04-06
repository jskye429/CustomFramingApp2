import React, { Component } from "react";
import Axios from "axios";
import Section from "../../components/Section";
import Banner from "../../components/Banner";
import ArtCard from "../../components/Cards/ArtCard";
import print1 from "../../images/print1.jpg";
import print2 from "../../images/print2.jpg";
import print3 from "../../images/print3.jpg";
import print4 from "../../images/print4.jpg";
import print5 from "../../images/print5.jpg";
import print6 from "../../images/print6.jpg";
import print7 from "../../images/print7.jpg";
import print8 from "../../images/print8.jpg";


var horizontalStyle = {
    height: "250px",
    width: "300px"
  };

var verticalStyle = {
    height: "300px",
    width: "250px"
  };


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

                <div className="container">
                    <div className="columns">
                        <div className="column is-half is-pulled-left">

                            <ArtCard
                            style={verticalStyle}
                            img={print1}
                            caption="Geographic print"
                            />
                            <ArtCard
                            style={verticalStyle}
                            img={print2}
                            caption="Geographic print"
                            />
                            <ArtCard
                            style={verticalStyle}
                            img={print3}
                            caption="Geographic print"
                            />
                            <ArtCard
                            style={verticalStyle}
                            img={print4}
                            caption="Geographic print"
                            />
                        </div>

                        <div className="column is-half is-pulled-right">

                            <ArtCard
                            style={verticalStyle}
                            img={print5}
                            caption="Geographic print"
                            />
                            <ArtCard
                            style={verticalStyle}
                            img={print6}
                            caption="Geographic print"
                            />
                            <ArtCard
                            style={verticalStyle}
                            img={print7}
                            caption="Geographic print"
                            />
                            <ArtCard
                            style={verticalStyle}
                            img={print8}
                            caption="Geographic print"
                            />
                        </div>
                    </div>
                </div>

            </Section>
        )
    }
}

export default Art