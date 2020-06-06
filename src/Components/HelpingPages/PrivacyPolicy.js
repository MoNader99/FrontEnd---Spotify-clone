import React ,{ Component} from 'react';
import './PrivacyPolicy.css'
import MainNavbar from '../WelcomeRelated/MainNavbar';
import { Link } from 'react-router-dom';
import Bottom from '../WelcomeRelated/Bottom';

/** Class PrivacyPolicy 
 * @category PrivacyPolicy
 * @extends Component
 */
export class PrivacyPolicy extends Component
{
    render(){
        {document.title ="Spotify - PrivacyPolicy"}
        return(
            <div className="privacy-policy">
                <MainNavbar color="black" IsLoggedIn="false"/>
            <div className="header-privacy"> 
            
                <div className="container">
               <h1> Spotify Privacy Policy</h1>
               <p>Effective as of January 20, 2020</p>
                <div className="linking mb-5">
                <a href="/privacypolicy#part1">1 Introduction</a>
                <br/>
                <a href="/privacypolicy#part2">2 About this Policy</a>
                <br/>
                <a href="/privacypolicy#part3">3 Your rights and your preferences: Giving you choice and control</a>
                <br/>
                <a href="/privacypolicy#part4">4 Personal data we collect from you</a>
                <br/>
                <a href="/privacypolicy#part5">5 Data retention and deletion</a>
                <br/>
                <a href="/privacypolicy#part6">6 Transfer to other countries</a>
                <br/>
                <a href="/privacypolicy#part7">7 Links</a>
                <br/>
                <a href="/privacypolicy#part8">8 Keeping your personal data safe</a>
                <br/>
                <a href="/privacypolicy#part9">9 Children</a>
                <br/>
                <a href="/privacypolicy#part10">10 Changes to this Policy</a>
                <br/>
                <a href="/privacypolicy#part11">11 How to contact us</a>
                </div>

            <div className="mb-5">
                <h2 id="part1">1. Introduction</h2>
                    <p>Thanks for choosing Spotify!</p>

                   <p> At Spotify, we want to give you the best possible experience to ensure that you enjoy our service. To do this we need to understand your streaming habits so we can deliver an exceptional and personalized service specifically for you. Your privacy and the security of your personal data is, and will always be, enormously important to us. So, we want to transparently explain how and why we gather, store, share and use your personal data - as well as outline the controls and choices you have around when and how you choose to share your personal data.</p>

                    <p>That is our objective, and this Privacy Policy (“Policy”) will explain exactly what we mean in further detail below.</p>

            </div>

            <div className="mb-5">
                <h2 id="part2"> 2. About this Policy </h2>
                    <p>This Policy sets out the essential details relating to your personal data relationship with Spotify AB. The Policy applies to all Spotify services and any associated services (referred to as the ‘Spotify Service’). The terms governing your use of the Spotify Service are defined in our Terms and Conditions of Use (the “Terms and Conditions of Use”).</p>

                    <p>From time to time, we may develop new or offer additional services. If the introduction of these new or additional services results in any material change to the way we collect or process your personal data we will provide you with more information or additional terms or policies. Unless stated otherwise when we introduce these new or additional services, they will be subject to this Policy.</p>

                    <p>The aim of this Policy is to:</p>
                        <ol className="pl-5">
                        <li>Ensure that you understand what personal data we collect about you, the reasons why we collect and use it, and who we share it with;</li>
                        <li>Explain the way we use the personal data that you share with us in order to give you a great experience when you are using the Spotify Service; and</li>
                        <li>Explain your rights and choices in relation to the personal data we collect and process about you and how we will protect your privacy.</li>
                        </ol>
                    <p>We hope this helps you to understand our privacy commitments to you. For further clarification of the terms used in this Policy please visit our Privacy Center on spotify.com. For information on how to contact us if you ever have any questions or concerns, please see Section 13 ‘How to contact us’ below. Alternatively, if you do not agree with the content of this Policy, then please remember it is your choice whether you want to use the Spotify Service.</p>
            </div>
            <div className="mb-5">
           <h2 id="part3"> 3. Your rights and your preferences: Giving you choice and control </h2>
                <p>The General Data Protection Regulation or "GDPR" gives certain rights to individuals in relation to their personal data. Accordingly, we are happy to offer transparency and access controls to help users take advantage of those rights. As available and except as limited under applicable law, the rights afforded to individuals are:</p>
                <ul className="pl-5">

                    <li>Right of access - the right to be informed of, and request access to, the personal data we process about you;</li>
                    <li>Right to rectification - the right to request that we amend or update your personal data where it is inaccurate or incomplete;</li>
                    <li>Right to erasure - the right to request that we delete your personal data;</li>
                    <li>Right to restrict - the right to request that we temporarily or permanently stop processing all or some of your personal data;</li>
                    <li>Right to object -</li>
                        <ul className="pl-5 pt-2 pb-2">
                            <li>the right, at any time, to object to us processing your personal data on grounds relating to your particular situation;</li>
                            <li>the right to object to your personal data being processed for direct marketing purposes;</li>
                        </ul>
                    <li>Right to data portability - the right to request a copy of your personal data in electronic format and the right to transmit that personal data for use in another party’s service; and</li>
                    <li>Right not to be subject to automated decision-making - the right to not be subject to a decision based solely on automated decision making, including profiling, where the decision would have a legal effect on you or produce a similarly significant effect.</li>
            </ul>
        <p>In order to enable you to learn more about these rights, exercise these rights with ease, and record your preferences in relation to how Spotify uses your personal data, we provide the following resources:</p>
        <ul className="pl-5">
        <li> <p><strong>Privacy Settings </strong>(accessed via your account page) - allows you to exercise choices about the processing of certain personal data, and an automated ‘Download your data’ function to download basic account and usage information.</p>
        </li>

        <li> <p><strong>Privacy Center </strong>- provides a convenient central location where you can find more information about how Spotify uses your personal data, your rights in relation to your personal data, and how to exercise those rights.</p>
        </li>
        <li> <p> <strong>Notification Settings </strong> (accessed via your account page) - allows you to choose which marketing communications you receive from Spotify. You may toggle these settings to opt in or out of receiving different types of email and push notifications. Please note that email marketing messages from Spotify include an opt-out mechanism within the message itself (e.g. an unsubscribe link in the emails we send to you). Clicking on the link in an email will opt you out of further messages of that category (e.g. Artist Updates). You can use the Notification Settings page to exercise choices about all categories of email and push marketing communication</p>
        </li>

        <li> <p> <strong>Cookies Policy</strong> - provides more information on how we use cookies, including for interest-based advertising. You will also find information about how you can manage your cookie preferences and opt-out of certain types of tracking; and</p>
        </li>
        <li> <p> <strong>Customer Support resources </strong> - We have several pages on our customer support site which provide further guidance about data protection questions. A key source of information is the Data Rights and Privacy Settings article which includes answers to “frequently asked questions” about personal data processing in the Spotify Service.</p>
        </li>
        </ul>
        <p>If you have any questions about your privacy, your rights, or how to exercise them, please contact our Data Protection Officer using the ‘Contact Us’ form on the Privacy Center. If you have concerns around our processing of your personal data, we hope you will continue to work with us to resolve them. However, you can also contact and have the right to lodge a complaint with the Swedish Data Protection Authority (Datainspektionen) or your local Data Protection Authority.</p>
</div>

        <div className="mb-5">
        <h2 id="part4">4. Personal data we collect from you</h2>
        <p>We have set out in the tables below the categories of personal data we collect and use about you and how we collect it:</p>

        <p>The table below describes personal data collected when you sign up for the Spotify Service:</p>
        <div className="row">
            <div className="col-3 table-border">
            <p className="table-heading pb-2">Categories of personal data</p>
            <p>User Data</p>
            </div>
            <div className="col-9 table-border">
            <p className="table-heading pb-2">Description of category</p>
            <p>This is the personal data that is provided by you or collected by us to enable you to sign up for and use the Spotify Service. Depending on the type of Spotify Service plan you sign up for, this may include your username, email address, phone number, birth date, gender, street address, and country.</p>

            <p>Some of the personal data we will ask you to provide is required in order to create your account. You also have the option to provide us with additional personal data in order to make your account more personalized.</p>

            <p>The exact personal data we will collect depends on the type of Spotify Service plan you sign up for, how you create an account, and whether you use third party services (such as Facebook) to sign up and use the Spotify Service. If you use a third party service to create an account, we will receive personal data via that third party service but only when you have consented to that third party service sharing your personal data with us. Please note that the available plans and sign-up options may differ by country.</p>
            </div>

        </div>

        <p>The table below describes personal data collected through your use of the Spotify Service:</p>
        <div className="row">
            <div className="col-3 table-border">
            <p className="table-heading pb-2">Categories of personal data</p>
            <p style={{marginBottom:"65px"}}>Voice Data</p>
            <p style={{marginBottom:"250px"}}>Payment and Purchase Data</p>
            <p >Contests, Surveys and Sweepstakes Data</p>

            </div>
            <div className="col-9 table-border">
            <p className="table-heading pb-2 ">Description of category</p>
            	<p>If voice features are available in your market, we collect your voice data with your permission to provide you with additional features and functionalities, such as interacting with the Spotify Service with your voice. For more information see our Voice Control Policy.</p>
                <p>We may collect certain personal data if you sign up for a Trial or purchase any of our Paid Subscriptions (as defined in the Terms and Conditions of Use) or make other purchases through the Spotify Service. The exact personal data collected will vary depending on the payment method (e.g. direct via your mobile phone carrier or by invoice) but will include information such as:</p>
                <ul className="pl-5">
                    <li>Name;</li>
                    <li>Date of birth;</li>
                    <li>Credit or debit card type, expiration date, and certain digits of your card number;</li>
                    <li>Postal code;</li>
                    <li>Mobile phone number; and</li>
                    <li>Details of your purchase and payment history.</li>
                </ul>
                <p>When you complete any forms, respond to a survey or questionnaire, or participate in a contest, we collect the personal data you provide.</p>
                </div>
                </div>
                
                <p>The table below describes personal data collected from third party sources</p>

                <p>We collect personal data about you from various third parties. These third party sources vary over time and include the following:</p>
                <div className="row">
                    <div className="col-3 table-border">

                    <p className="table-heading pb-2"> Categories of third party sources	</p>
                    <p className="pb-4">Authentication partners</p>
                    <p className="pb-4">Technical service partners</p>
                    <p className="pb-4">Payment partners</p>
                    <p>Advertisers and other advertising partners</p>
                    </div>
                    <div className="col-9 table-border">
                    <p className="table-heading pb-2">Description of category</p>
                   	<p>If you register for or log into our services using third party credentials (e.g. Facebook), we will import your information from such third party to help create your account with us.</p>
                    <p>	We work with technical service partners that provide us with certain data, such as mapping IP addresses to non-precise location data (e.g., city, state), to enable us to provide the Spotify Service, content, and features.</p>
                    <p>If you choose to pay for a service or feature by invoice, we may receive data from our payment partners to enable us to send you invoices, process your payment and provide you with what you’ve purchased.</p>
                    <p>We may obtain certain data about you, such as cookie id, mobile device id, or email address, and inferences about your interests and preferences from certain advertisers and advertising partners that allow us to deliver more relevant ads and measure their effectiveness.</p>

                    </div>

                </div>
            

        
        </div>


        <div className="mb-5">
        <h2 id="part5">5. Data retention and deletion</h2>
        <p>We keep your personal data only as long as necessary to provide you with the Spotify Service and for legitimate and essential business purposes, such as maintaining the performance of the Spotify Service, making data-driven business decisions about new features and offerings, complying with our legal obligations, and resolving disputes. We keep some of your personal data for as long as you are a user of the Spotify Service. For example, we keep your playlists, song library, and account information.</p>

        <p>If you request, we will delete or anonymise your personal data so that it no longer identifies you, unless we are legally allowed or required to maintain certain personal data, including situations such as the following:</p>
    <ul className="pl-5">
        <li>If there is an unresolved issue relating to your account, such as an outstanding credit on your account or an unresolved claim or dispute we will retain the necessary personal data until the issue is resolved;</li>
        <li>Where we need to retain the personal data for our legal, tax, audit, and accounting obligations, we will retain the necessary personal data for the period required by applicable law; and/or,</li>
        <li>Where necessary for our legitimate business interests such as fraud prevention or to maintain the security of our users.</li>
    </ul>
        </div>


        <div className="mb-5">
        <h2 id="part6">6. Transfer to other countries</h2>
        <p>Spotify shares your personal data globally with Spotify group companies in order to carry out the activities specified in this Policy. Spotify may also subcontract processing to, or share your personal data with, third parties located in countries other than your country. Your personal data, therefore, may be subject to privacy laws that are different from those in your country.</p>

        <p>Personal data collected within the European Union and Switzerland may, for example, be transferred to and processed by third parties located in a country outside of the European Union and Switzerland. In such instances Spotify shall ensure that the transfer of your personal data is carried out in accordance with applicable privacy laws and, in particular, that appropriate contractual, technical, and organisational measures are in place such as the Standard Contractual Clauses approved by the EU Commission.</p>

        <p className="linking">For further details of the security measures we use to protect your personal data, please see <a href="/privacypolicy#part8">Section 8 ‘Keeping your personal data safe’</a> of this Policy.</p>
        </div>

        <div className="mb-5">
          <h2 id="part7">7. Links</h2>
            <p>We may display advertisements from third parties and other content that links to third-party websites. We cannot control or be held responsible for third parties’ privacy practices and content. If you click on a third-party advertisement or link, please understand that you are leaving the Spotify Service and any personal data you provide will not be covered by this Policy. Please read their privacy policies to find out how they collect and process your personal data.</p>
        </div>

        <div className="mb-5">
        <h2 id="part8">8. Keeping your personal data safe</h2>
        <p>We are committed to protecting our users’ personal data. We implement appropriate technical and organisational measures to help protect the security of your personal data; however, please note that no system is ever completely secure. We have implemented various policies including pseudonymisation, encryption, access, and retention policies to guard against unauthorised access and unnecessary retention of personal data in our systems.</p>

        <p>Your password protects your user account, so we encourage you to use a strong password that is unique to your Spotify account, never share your password with anyone, limit access to your computer and browser, and log out after having used the Spotify Service.</p>
        </div>

        <div className="mb-5">
        <h2 id="part9">9. Children</h2>
        <p>With the exception of Spotify Kids, a separate Spotify application available in certain markets, the Spotify Service is not directed to children under the age of 13 years. The Spotify Service is also not offered to children whose age makes it illegal to process their personal data or requires parental consent for the processing of their personal data under the GDPR or other local law.</p>

        <p>We do not knowingly collect personal data from children under 13 years or under the applicable age limit (the “Age Limit”). If you are under the Age Limit, please do not use the Spotify Service, and do not provide any personal data to us.</p>

        <p>If you are a parent of a child under the Age Limit and become aware that your child has provided personal data to Spotify, please contact us using the ‘Contact Us’ form on the Privacy Center, and you may request exercise of your applicable rights detailed in Section 3 ‘Your rights and your preferences: Giving you choice and control’ of this Policy.</p>

        <p>If we learn that we have collected the personal data of a child under the age of 13 years, we will take reasonable steps to delete the personal data. This may require us to delete the Spotify account for that child.</p>
        </div>

        <div className="mb-5">
        <h2 id="part10">10. Changes to this Policy</h2>
        <p>We may occasionally make changes to this Policy.</p>

        <p>When we make material changes to this Policy, we’ll provide you with prominent notice as appropriate under the circumstances, e.g., by displaying a prominent notice within the Spotify Service or by sending you an email and/or a device notification. We may notify you in advance.</p>

        <p>Please, therefore, make sure you read any such notice carefully.</p>

        <p>If you want to find out more about this Policy and how Spotify uses your personal data, please visit the Privacy Center on spotify.com to find out more.</p>
        </div>

        <div className="mb-5">
        <h2 id="part11">11. How to contact us</h2>
        <p>Thank you for reading our Policy. If you have any questions about this Policy, please contact our Data Protection Officer by using the ‘Contact Us’ form on the Privacy Center, emailing privacy@spotify.com, or by writing to us at the following address:</p>

        <p>Spotify AB</p>
        <p>Regeringsgatan 19</p>
        <p> 111 53 Stockholm</p>
        <p> Sweden</p>

        <p>Spotify AB is the data controller for the purposes of the personal data processed under this Policy.</p>

        <p>We hope you enjoy Spotify!</p>

        <p>© Spotify AB.</p>
        </div>
        </div>
            </div>
            <Bottom/>
            </div>
        )
    }
}
export default PrivacyPolicy