import playstore from "../../assets/images/google-play-store.png"
import appstore from "../../assets/images/appstore.png"
import iphone_1 from "../../assets/images/iphones/portrait/iphone-1.png"
const Home = () => {
    return (
       <section className="main-content">
           <div className="hero">
               <div className="content">
               <aside className="left-aside">
                   <article>
                       <div className="title">
                        <h1>Your personal <br/> Design Sprint Master!</h1>
                        <p>Time to innovate? let's Dezy it!</p>
                       </div>
                       <div className="iphone-animate">
                           <img src={iphone_1} alt="iphone" />
                       </div>
                       <div className="download-app">
                           <h4>Download Now! </h4>
                           <p>And enjoy our Beta Version for free!</p>
                           <ul>
                               <li className="store-logo">
                                   <img src={playstore} alt="plastore-logo" />
                               </li>
                               <li className="store-logo">
                                   <img src={appstore} alt="plastore-logo" />
                               </li>
                           </ul>
                       </div>
                   </article>
               </aside>
               <aside className="right-aside">
                    <div className="iphone-animate">
                        <img src={iphone_1} alt="iphone" />
                    </div>
               </aside>
               </div>
           </div>
           <section className="design-sprint">
               <article className="left">
                   <img src="https://static.wixstatic.com/media/ec9816_120f89a1570549e882031fbfb5ee5905~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" alt="design-sprint" />
               </article>
               <article className="right">
                   <h1>What is a Design Sprint?</h1>
                   <p>
                   The sprint is a five-day process for answering critical business questions through design, prototyping and testing ideas with customers. Developed at Google Ventures, it’s a “greatest hits” of business strategy, innovation, behaviour science, design thinking, and more—packaged into a battle-tested process that any team can use.
                   </p>
               </article>
           </section>

           <section className="our-product">
               <div className="title">
                   <h1>Our Product</h1>
                   <p>
                        Dezy It, is your personal design sprint master. It is your design thinking guide and companion to help you facilitate design sprints, to innovate, pivot and improve on the user experience of your product.
                   </p>
               </div>
               <div className="product-images">
                   <article className="gallery-1">

                   </article>
                   <article className="gallery-2">
                        <div className="iphone-animate">
                            <img src={iphone_1} alt="iphone" />
                       </div>
                   </article>
                   <article className="gallery-3">

                   </article>
               </div>
               <div className="download-app">
                    <h4>Download Now! </h4>
                    <p>And enjoy our Beta Version for free!</p>
                    <ul>
                        <li className="store-logo">
                            <img src={playstore} alt="plastore-logo" />
                        </li>
                        <li className="store-logo">
                            <img src={appstore} alt="plastore-logo" />
                        </li>
                    </ul>
                </div>
           </section>
           <section className="why-dezy-it">
               <h1>Why Dezy It?</h1>
               <div className="why-wrapper">
                   {/* single article */}
                   <article className="single-dezy">
                       <aside className="left">
                           <h1 className="dezy-title">Collaboration</h1>
                           <p className="dezy-text">
                           The product development journey can become a linear process where there is very minimal 
                           interaction between the product team and all the other stakeholders, including the marketers,
                            the sales team and customer service. Dezy It, brings in a collaborative space for your team 
                            to leverage design thinking and work together and participate in the ideation process, 
                            sharing valuable insights which would shape the product and its features. 
                           It's a process which truly gets your whole team invested!
                           </p>
                       </aside>
                       <aside className="right">
                           <img src="https://static.wixstatic.com/media/ec9816_d3949d97e43843b8a292ffe04eacce85~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" alt="dezy-img" />
                       </aside>
                   </article>
                   {/* end single article */}

                   {/* single article */}
                   <article className="single-dezy">
                       <aside className="left">
                           <h1 className="dezy-title">Creativity</h1>
                           <p className="dezy-text">
                           Design Sprints are a great way to quickly innovate.
                            A structured agile process to streamline your innovation and come up with multiple
                            creative ideas using the Crazy-8 framework. It boosts your morale and provokes you
                            to think out of the box. Now, with a ton of ideas, the Impact vs Feasibility analysis
                            is a simple yet effective criteria,
                            to shortlist the winning ides and most importantly validate them with real users.
                           </p>
                       </aside>
                       <aside className="right">
                           <img src="https://static.wixstatic.com/media/ec9816_02665f5bd8044684b66a011b3c3bd8ca~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" alt="dezy-img" />
                       </aside>
                   </article>
                   {/* end single article */}

                   {/* single article */}
                   <article className="single-dezy">
                       <aside className="left">
                           <h1 className="dezy-title">Empathy</h1>
                           <p className="dezy-text">
                           The first rule of design thinking is to keep your users in the centre and under a spotlight.
                            All great ideas arrive from devastating problems. The design sprint focuses on getting each and every team 
                            member to be able to empathise and understand the user, map their journeys and identify their pain points. 
                            You have to truly step into the shoes of your users to 
                            understand their psychology and experience of what they feel and think; while using your product or service.
                           </p>
                       </aside>
                       <aside className="right">
                           <img src="https://static.wixstatic.com/media/ec9816_2f2c8bead30544a89198bb3d605d232a~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" alt="dezy-img" />
                       </aside>
                   </article>
                   {/* end single article */}
               </div>
           </section>

           <section className="blog">
               <h1> Our Blog </h1>
               <div className="posts">
                   {/* single post */}
                   <article className="single-post">
                       <img className="post-img" src="https://static.wixstatic.com/media/f5b934_eafc2af0a60843368d025c6cc41ba074~mv2.jpg/v1/fill/w_292,h_164,fp_0.50_0.50,q_90/f5b934_eafc2af0a60843368d025c6cc41ba074~mv2.webp" alt="post-img" />
                        <div className="post-content">
                            <div className="posted">
                                <li>17 <span className="time">hours ago </span></li>
                                <li> <span className="dot"></span></li>
                                <li>2 <span className="time">min</span></li>
                            </div>
                            <h4 className="post-title">
                                Role of Product Management in Design Thinking
                            </h4>
                            <p className="post-body">
                                Design thinking is an integral part of product development and
                            </p>
                        </div>  
                   </article>
                   {/* end single post */}

                    {/* single post */}
                    <article className="single-post">
                       <img className="post-img" src="https://static.wixstatic.com/media/f5b934_4ac1f88e94ba4d96bb3d31095dd64804~mv2.jpeg/v1/fill/w_292,h_164,fp_0.50_0.50,q_90/f5b934_4ac1f88e94ba4d96bb3d31095dd64804~mv2.webp" alt="post-img" />
                        <div className="post-content">
                            <div className="posted">
                                <li>Oct 5 <span className="time"> </span></li>
                                <li> <span className="dot"></span></li>
                                <li>3 <span className="time">min</span></li>
                            </div>
                            <h4 className="post-title">
                                5 Ways To Improve Design Research
                            </h4>
                            <p className="post-body">
                                In the design industry, you have to deal with several clients, 
                                companies, and organisations with versatile ideas
                            </p>
                        </div>  
                   </article>
                   {/* end single post */}

                    {/* single post */}
                    <article className="single-post">
                       <img className="post-img" src="https://static.wixstatic.com/media/f5b934_eafc2af0a60843368d025c6cc41ba074~mv2.jpg/v1/fill/w_292,h_164,fp_0.50_0.50,q_90/f5b934_eafc2af0a60843368d025c6cc41ba074~mv2.webp" alt="post-img" />
                        <div className="post-content">
                            <div className="posted">
                                <li>17 <span className="time">hours ago </span></li>
                                <li> <span className="dot"></span></li>
                                <li>2 <span className="time">min</span></li>
                            </div>
                            <h4 className="post-title">
                                Role of Product Management in Design Thinking
                            </h4>
                            <p className="post-body">
                                Design thinking is an integral part of product development and
                            </p>
                        </div>  
                   </article>
                   {/* end single post */}
               </div>
           </section>
       </section>
    )
}

export default Home