import React from "react";
import "./Components.css"

const Header = () => {
    return (
        <>
            <div className="header">
                <img className="logo" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478805/Google%20docs/61447cd55953a50004ee16d9_wswicx.png" alt="" />
                <div className="header-info">
                    <span>
                        <span className="title" >Untitled document</span>
                        <img className="star"  src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478679/Google%20docs/grade_FILL0_wght400_GRAD0_opsz48_vjrilj.png" alt="" />
                    </span>
                    <div>
                      <span>File </span>
                      <span>Edit </span>
                      <span>View </span>
                      <span>Insert </span>
                      <span>Format </span>
                      <span>Tools </span>
                      <span>Extensions </span>
                      <span>Help </span>
                    </div>
                </div>
                <div className="header-right">
                    <img className="header-icon" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478677/Google%20docs/comment_FILL0_wght400_GRAD0_opsz48_rldp5h.png" alt="" />
                    <div>
                        <img className="header-icon" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478677/Google%20docs/videocam_FILL0_wght400_GRAD0_opsz48_tfbmoa.png" alt="" />
                        <img className="header-icon" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478675/Google%20docs/arrow_drop_down_FILL0_wght400_GRAD0_opsz48_rplvdb.png" alt="" />
                    </div>
                    <div>
                        <img className="lock" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478677/Google%20docs/lock_FILL0_wght400_GRAD0_opsz48_smdahw.png" alt="" />
                        <span>Share</span>
                    </div>
                    <img className="profile-pic" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1683897267/cosmetics/pexels-jonaorle-3828268_ctpqw3.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;
