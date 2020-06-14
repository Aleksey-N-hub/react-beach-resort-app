import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "You can enjoy free cocktails every evening from 7 to 11"
            },
            {
                icon: <FaHiking/>,
                title: "endless hiking",
                info: "You can enjoy free cocktails every evening from 7 to 11 "
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle",
                info: "Free shuttle bus will take you to and from your apartment"
            },
            {
                icon: <FaBeer/>,
                title: "strong as beer",
                info: "You can enjoy free cocktails every evening from 7 to 11"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                   {this.state.services.map((el,id) => {
                       return <article key={id} className="service">
                           <span>{el.icon}</span>
                           <h6>{el.title}</h6>
                           <p>{el.info}</p>
                       </article>
                   })} 
                </div>
            </section>
        )
    }
}
