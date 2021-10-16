import { BiSearch } from "react-icons/bi"
import { IoIosArrowRoundBack, IoMdClose } from "react-icons/io"

import playstore from "../../assets/images/google-play-store.png"
import appstore from "../../assets/images/appstore.png"
import { useState } from "react"

const AllPost = () => {
    const [showSearch, setShowSearch] = useState(false)

    return (
        <section className="main-content blog">
            <div className="posts">
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
                            <BiSearch/>
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
                                <div className="close-search"> <IoMdClose/> </div>
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