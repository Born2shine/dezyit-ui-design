import { BiSearch, BiDotsVerticalRounded } from "react-icons/bi"
import { RiShareForwardLine } from "react-icons/ri"
import { IoIosArrowRoundBack, IoMdClose } from "react-icons/io"

import playstore from "../../assets/images/google-play-store.png"
import appstore from "../../assets/images/appstore.png"
import { useState } from "react"

const AllPost = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [showShare, setShowShare] = useState(false)

    return (
        <section className="main-content blog-section">
            <div className="post-wrapper">
                <div className="header">
                    <div className="left">
                       <span className="title">  Blogs </span>
                       <ul>
                           <li><a href="#all-post">All Posts</a></li>
                           <li><a href="#all-post">Design Thinking</a></li>
                           <li><a href="#all-post">Design Sprint</a></li>
                           <li><a href="#all-post">Guides </a></li>
                       </ul>
                    </div>
                    <div className="right">
                        <div className="search-icon" onClick={() => setShowSearch(!showSearch)}>
                            {
                                !showSearch && (
                                    <BiSearch/>
                                )
                            }
                        </div>
                        {
                            showSearch && (
                                <div className="search-wrapper">
                            <div className="search-form">
                                <div className="arrow-left" onClick={() => setShowSearch(!showSearch)}> 
                                    <IoIosArrowRoundBack/> 
                                </div>
                                <div className="search-icon"> <BiSearch/> </div>
                                <input type="text" placeholder="Search"/>
                                <div className="close-search" onClick={() => setShowSearch(!showSearch)}> <IoMdClose/> </div>
                            </div>
                            <div className="search-info">
                                <h2>Looking for Something</h2>
                                <span className="sub-info">Search for posts and comments here.</span>
                            </div>
                        </div>
                            )
                        }
                    </div>
                </div>
                <div className="sort-by">
                    <div className="title">All Posts</div>
                    <div className="filter">
                        <form>
                            <select>
                                <option value="All" key="all">All Posts</option>
                                <option value="All" key="thinking">Design Thinking</option>
                                <option value="All" key="sprint">Design Sprint</option>
                                <option value="All" key="guide">Guides</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <section className="blog">
            <div className="posts">
                {/* single post */}
                <article className="single-post">
                    <img className="post-img" src="https://static.wixstatic.com/media/f5b934_eafc2af0a60843368d025c6cc41ba074~mv2.jpg/v1/fill/w_454,h_243,fp_0.50_0.50,q_90/f5b934_eafc2af0a60843368d025c6cc41ba074~mv2.webp" alt="post-img" />
                    <div className="post-content">
                            <div className="posted">
                                <li>17 <span className="time">hours ago </span></li>
                                <li> <span className="dot"></span></li>
                                <li>2 <span className="time">min</span></li>
                                <div className="share" onClick={() => setShowShare(!showShare)}>
                                    <div className="share-btn">
                                        <BiDotsVerticalRounded/>
                                    </div>
                                </div>
                                    {
                                        showShare && (
                                            <div className="link">
                                                <ul>
                                                    <li>  <RiShareForwardLine/></li>
                                                    <li> Share Post</li>
                                                </ul>
                                            
                                            </div>
                                        )
                                    }
                            </div>
                            <h4 className="post-title">
                                Role of Product Management in Design Thinking
                            </h4>
                            <p className="post-body">
                            Design thinking is an integral part of product development and management. 
                            Design thinking focuses on the user's needs, aspirations
                            </p>
                        </div>  
                </article>
                {/* end single post */}

                {/* single post */}
                <article className="single-post">
                    <img className="post-img" src="https://static.wixstatic.com/media/f5b934_4ac1f88e94ba4d96bb3d31095dd64804~mv2.jpeg/v1/fill/w_454,h_243,fp_0.50_0.50,q_90/f5b934_4ac1f88e94ba4d96bb3d31095dd64804~mv2.webp" alt="post-img" />
                    <div className="post-content">
                            <div className="posted">
                                <li>Oct 5 <span className="time"> </span></li>
                                <li> <span className="dot"></span></li>
                                <li>3 <span className="time">min</span></li>
                                <div className="share">
                                    <div className="share-btn">
                                        <BiDotsVerticalRounded/>
                                    </div>
                                </div>
                            </div>
                            <h4 className="post-title">
                                5 Ways To Improve Design Research
                            </h4>
                            <p className="post-body">
                            In the design industry, you have to deal with several clients, companies, 
                            and organisations with versatile ideas, beliefs, work ethics
                            </p>
                        </div>  
                </article>
                {/* end single post */}

                {/* single post */}
                <article className="single-post">
                    <img className="post-img" src="https://static.wixstatic.com/media/f5b934_a8800a70ab4741d9bb53bcce7973f37e~mv2.jpg/v1/fill/w_454,h_243,fp_0.50_0.50,q_90/f5b934_a8800a70ab4741d9bb53bcce7973f37e~mv2.webp" alt="post-img" />
                    <div className="post-content">
                            <div className="posted">
                                <li>Sept 30 <span className="time"> </span></li>
                                <li> <span className="dot"></span></li>
                                <li>3 <span className="time">min</span></li>
                                <div className="share">
                                    <div className="share-btn">
                                        <BiDotsVerticalRounded/>
                                    </div>
                                </div>
                            </div>
                            <h4 className="post-title">
                                How UX design can help your app
                            </h4>
                            <p className="post-body">
                            An app, these days, is a crucial technology for any product or
                             service company to connect with their clients. There are multiple things
                            </p>
                        </div>  
                </article>
                {/* end single post */}

                {/* single post */}
                <article className="single-post">
                    <img className="post-img" src="https://static.wixstatic.com/media/f5b934_b2466828d4394a7290813cdb96a0f97b~mv2.jpg/v1/fill/w_454,h_243,fp_0.50_0.50,q_90/f5b934_b2466828d4394a7290813cdb96a0f97b~mv2.webp" alt="post-img" />
                    <div className="post-content">
                            <div className="posted">
                                <li>Sept 25 <span className="time"> </span></li>
                                <li> <span className="dot"></span></li>
                                <li>3 <span className="time">min</span></li>
                                <div className="share">
                                    <div className="share-btn">
                                        <BiDotsVerticalRounded/>
                                    </div>
                                </div>
                            </div>
                            <h4 className="post-title">
                            Ways you can promote yourself on social media
                            </h4>
                            <p className="post-body">
                            Nowadays, social media has become one of the topmost platforms
                             to promote and market your artwork, design, creativity and grow your
                            </p>
                        </div>  
                </article>
                {/* end single post */}
            </div>
            </section>
            <div className="hero">
               <div className="content">
               <aside className="left-aside">
                   <article>
                       <div className="title">
                        <h1>Your personal <br/> Design Sprint Master!</h1>
                        <p>Time to innovate? let's Dezy it!</p>
                       </div>
                       <div className="iphone-animate">
                           <img src="https://static.wixstatic.com/media/ec9816_58d376c7bae642ff8c9bc2d22895f107~mv2.png/v1/fill/w_358,h_577,al_c,q_95/Design%20Thinking%20Sprint%20-%20Centre3.webp" alt="iphone" />
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
                        <img src="https://static.wixstatic.com/media/ec9816_58d376c7bae642ff8c9bc2d22895f107~mv2.png/v1/fill/w_358,h_577,al_c,q_95/Design%20Thinking%20Sprint%20-%20Centre3.webp" alt="iphone" />
                    </div>
               </aside>
               </div>
           </div>
        </section>
    )
}

export default AllPost