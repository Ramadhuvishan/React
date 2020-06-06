import React from 'react';
import applogo from '../images/applogo.jpg';
import user from '../images/user.jpeg';
import Restraunt from '../components/Restraunt';
import '../styles/HotelsCSS.css';
import '../styles/LoginStyles.css';
import data from '../data/data';


class Hotels extends React.Component{
    constructor(){
        super();
        this.state={
            list: data
        }
        
    }
    render(){
        return(
        <div>
        <div class="header">
            <a href="FrontPage.html">
                <img src={applogo} alt="app-logo" width="100" height="100"/>
            </a>
            <div class="header-right">
                Saomi
                <img  class="user" src={user} alt="user-pic" width="100" height="100"/>
            </div>
        </div>

        <div class="hotels">
            {this.state.list.map(
                x => <Restraunt feature_image = {x.feature_image} name = {x.name} cuisines = {x.cuisines}/> 
            )}
        </div>
        </div>
        )
    };
}

{/*             
            <div class="restPic">
                    <img src="Assets/restraunt.jpeg"/>
                    <div class="content-ellipsis">
                        <p><b>Carnivall Restraunt</b><br/>All you can eat - Cosy - Casual</p>
                        <i class="fas fa-map-marker-alt" style="color: red">No.7, Gokhale Rd, Chinna Chokikulam, Tamil Nadu 625002</i>
                    </div>
            </div>
            <div class="restPic">
                    <img src="Assets/restraunt.jpeg"/>
                    <div class="content-ellipsis">
                        <p><b>Amma Mess</b><br/>All you can eat - Casual - Good for Kids.</p>
                        <i class="fas fa-map-marker-alt" style="color: red">136, Alagar Kovil Main Rd, Mellur, Tallakulam, Tamil Nadu 625002</i>
                    </div>
            </div>
            <div class="restPic">
                    <img src="Assets/restraunt.jpeg"/>
                    <div class="content-ellipsis">
                        <p><b>Fortune Pandiyan</b><br/>Late night Food.</p>
                        <i class="fas fa-map-marker-alt" style="color: red">SH 72, Outpost, Ramaond Reserve Line, Race Course Colony, Tamil Nadu 625002</i>
                    </div>
            </div>
        </div>
        <div class="hotels">
                <div class="restPic">
                        <img src="Assets/restraunt.jpeg"/><br/>
                        <div class="content-ellipsis">
                            <p><b>Kari Kanji</b><br/>Late Night food - Cash only.</p>
                            <i class="fas fa-map-marker-alt" style="color: red">SH 72, Mellur, Race Course Colony, Tamil Nadu 625002</i>
                        </div>
                </div>
                <div class="restPic">
                        <img src="Assets/restraunt.jpeg"/>
                        <div class="content-ellipsis">
                            <p><b>Shree Narayana Restraunt</b><br/>Cash only.</p>
                            <i class="fas fa-map-marker-alt" style="color: red">Chokikulam, Tamil Nadu 625002</i>
                        </div>
                </div>
                <div class="restPic">
                        <img src="Assets/restraunt.jpeg"/>
                        <div class="content-ellipsis">
                            <p><b>Harish Mess</b><br/>Cash only.</p>
                            <i class="fas fa-map-marker-alt" style="color: red">11, OCPM Main Rd, Chinna Chokikulam, Tamil Nadu 625002</i>
                        </div>
                </div>
                <div class="restPic">
                        <img src="Assets/restraunt.jpeg"/>
                        <div class="content-ellipsis">
                            <p><b>Meat and Eat</b><br/>Casual - Good for Kids - Groups.</p>
                            <i class="fas fa-map-marker-alt" style="color: red">65/26, Vignesh Plaza, Avvaiyar Street, P.T.Rajan Road, Narimedu, Madurai, Tamil Nadu 625002</i>
                        </div>
                </div>
        </div>
        <div class="hotels">
                <div class="restPic">
                    <img src="Assets/restraunt.jpeg"/><br/>
                    <div class="content-ellipsis">
                        <p><b>Wings Chimney</b><br/>All you can Eat. Casual</p>
                        <i class="fas fa-map-marker-alt" style="color: red">New Natham Rd, Outpost, Ramaond Reserve Line, Race Course Colony, Tamil Nadu 625002</i>
                    </div>
                </div>
                <div class="restPic">
                    <img src="Assets/restraunt.jpeg"/>
                    <div class="content-ellipsis">
                        <p><b>Palm Tree Restraunt and Grill</b><br/>Good for Kids.</p>
                        <i class="fas fa-map-marker-alt" style="color: red"> Vishaal De Mall, Gokhale Rd, Chinna Chokikulam, Tamil Nadu 625002</i>
                    </div>
                </div>
                <div class="restPic">
                    <img src="Assets/restraunt.jpeg"/>
                    <div class="content-ellipsis">
                        <p><b>Kumar Mess</b><br/>Multicuisine thaali with spicy Chettinad fare in simple surrounds.</p>
                        <i class="fas fa-map-marker-alt" style="color: red">Unnamed Road, Mellur, Chinna Chokikulam, Tamil Nadu 625002</i>
                    </div>
                </div>
                <div class="restPic">
                    <img src="Assets/restraunt.jpeg"/>
                    <div class="content-ellipsis">
                        <p><b>Hotel Sri Janaki Raman</b><br/>Multi-cuisine hotel restaurant with a regularly changing menu and full air conditioning.</p>
                        <i class="fas fa-map-marker-alt" style="color: red">Mellur, Chinna Chokikulam, Tamil Nadu 625002</i>
                    </div>
                </div>
            </div> */}
export default Hotels;