import React ,{ Component} from 'react';
import './AboutUs.css'
import { MainNavbar } from '../WelcomeRelated/MainNavbar';
import { Link } from 'react-router-dom';
import Bottom from '../WelcomeRelated/Bottom';

/** Class AboutUs 
 * @category AboutUs
 * @extends Component
 */
export class AboutUs extends Component
{
    render(){
        return(
            <div className="about-us-page">
                <MainNavbar color="black"/>
                <div className="container">
                <h1>About Us</h1> 
                    <div className="row"> 
                   
                    <div className="col-7">  
                            <p>With Spotify, it’s easy to find the right music or podcast for every moment – on your phone, your computer, your tablet and more.</p>
                            <p>There are millions of tracks and episodes on Spotify. So whether you’re behind the wheel, working out, partying or relaxing, the right music or podcast is always at your fingertips. Choose what you want to listen to, or let Spotify surprise you.</p>
                            <p>You can also browse through the collections of friends, artists, and celebrities, or create a radio station and just sit back.</p>
                            <p>Soundtrack your life with Spotify. Subscribe or listen for free.</p>
                        
                        <h2>Customer Service and Support</h2>
                    
                            <li>
                            <Link To="/help" className="inline-linking">Help site</Link> .Check out our help site for answers to your questions and to learn how to get the most out of Spotify and your music.
                            </li>
                            <br/>
                            <p>
                            Spotify USA, Inc. provides the Spotify service to users in the United States. Spotify AB provides the Spotify service to users in all other markets.
                            </p>
                    </div>



                    <div className="col-5">
                        <div>
                        <h2>Spotify HQ</h2>
                        <div className="inline-address" >
                                <strong>Spotify AB</strong>
                                <br/>
                                Regeringsgatan 19
                                <br/>
                                SE-111 53 Stockholm
                                <br/>
                                Sweden
                                <br/>
                                Reg no: 556703-7485
                                <br/>
                                office@spotify.com
                            </div>
                        </div>
                        <h2>Spotify around the world</h2>
                        <div className="row">
                            <div className="col-6">
                                <div className="inline-address">
                                    <strong>Spotify Belgium</strong>
                                    <br/>
                                    Square de Meeus 37
                                    <br/>
                                    4th floor
                                    <br/>
                                    1000 Brussels
                                    <br/>
                                    Belgium
                                    <br/>
                                    office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>Spotify Canada Inc.</strong>
                                <br/>
                                179 John St. Suite 403
                                <br/>
                                M5T 1X4 Toronto
                                <br/>
                                Canada
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>SPOTIFY SPAIN SL</strong>
                                <br/>
                                Paseo de Recoletos, 7-9
                                <br/>
                                28004 Madrid
                                <br/>
                                Spain
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address-adapt">
                                <strong>Spotify France SAS</strong>
                                <br/>
                                54 Rue de Londres, 75008
                                <br/>
                                Paris
                                <br/>
                                France
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>Spotify Italy S.r.l.</strong>
                                <br/>
                                c/o Fintech District
                                <br/>
                                Via Filippo Sassetti 32
                                <br/>
                                20124 Milano
                                <br/>
                                Italy
                                <br/>
                                office@spotify.com
                                </div>


                                <div className="inline-address-adapt">
                                <strong>Spotify Norway AS</strong>
                                <br/>
                                Tordenskioldsgate 2
                                <br/>
                                0160 Oslo
                                <br/>
                                Norway
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address mb-5">
                                <strong>Spotify Ltd</strong>
                                <br/>
                                Adelphi Building
                                <br/>
                                4 Savoy Place
                                <br/>
                                London WC2N 6AT
                                <br/>
                                United Kingdom
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>Spotify Mexico</strong>
                                <br/>
                                Pedregal 24 Torre Virreyes Piso 8
                                <br/>
                                Col. Molino del Rey
                                <br/>
                                DF 11040
                                <br/>
                                Mexico
                                <br/>
                                office@spotify.com
                                </div>

                               


                            </div>
                            <div className="col-6">

                            <div className="inline-address">
                                <strong>Spotify GmbH</strong>
                                <br/>
                                c/o Mindspace
                                <br/>
                                Krausenstraße 9-10
                                <br/>
                                10117 Berlin
                                <br/>
                                Germany
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>Spotify Denmark ApS</strong>
                                <br/>
                                Vestergade 27, 1 th
                                <br/>
                                1456 København K
                                <br/>
                                Denmark
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>Spotify Finland Oy</strong>
                                <br/>
                                Merimiehenkatu 36 D
                                <br/>
                                FI-00150 Helsinki
                                <br/>
                                Finland
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>Spotify India LLP</strong>
                                <br/>
                                Regus 5th & 6th Floor Mafatlal House (“Building”) H.T.Parekh Marg, Backbay Reclamation
                                <br/>
                                Mumbai 400020
                                <br/>
                                India
                                <br/>
                                office@spotify.com
                                </div>

                                
                                <div className="inline-address mb-5">
                                <strong>Spotify Netherlands</strong>
                                <br/>
                                Singel 540 3h
                                <br/>
                                1017AZ, Amsterdam
                                <br/>
                                Netherlands
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>Spotify Poland Sp. z o.o.</strong>
                                <br/>
                                Warsaw Skylight Skylight Building, 14th floor
                                <br/>
                                c/o Regus
                                <br/>
                                Ul. Zlota 59
                                <br/>
                                00-120 Warszawa
                                <br/>
                                Poland
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>Spotify USA Inc</strong>
                                <br/>
                                4 World Trade Center
                                <br/>
                                150 Greenwich Street, 62nd Floor
                                <br/>
                                New York, NY 10007
                                <br/>
                                USA
                                <br/>
                                office@spotify.com
                                </div>

                                <div className="inline-address">
                                <strong>Spotify Israel</strong>
                                <br/>
                                office@spotify.com
                                <br/>
                               
                                </div>
                                
                            </div>

                        </div>

                    </div>



                    </div>
                </div>
<Bottom/>
            </div>

        )
    }

 }

 export default AboutUs