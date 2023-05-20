import React from "react";

const Header = () => {
    return (
        <>
            <div className="header">
                <img className="logo" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478805/Google%20docs/61447cd55953a50004ee16d9_wswicx.png" alt="" />
                <div className="header-info">
                    <span>
                        <h1>Untitled document</h1>
                        <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478679/Google%20docs/grade_FILL0_wght400_GRAD0_opsz48_vjrilj.png" alt="" />
                    </span>
                    <ul>
                        <li>File </li>
                        <li> Edit </li>
                        <li> View </li>
                        <li>Insert </li>
                        <li> Format </li>
                        <li> Tools</li>
                        <li> Extensions </li>
                        <li> Help </li>
                    </ul>
                </div>
                <div className="header-right">
                    <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478677/Google%20docs/comment_FILL0_wght400_GRAD0_opsz48_rldp5h.png" alt="" />
                    <div>
                        <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478677/Google%20docs/videocam_FILL0_wght400_GRAD0_opsz48_tfbmoa.png" alt="" />
                        <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478675/Google%20docs/arrow_drop_down_FILL0_wght400_GRAD0_opsz48_rplvdb.png" alt="" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478677/Google%20docs/lock_FILL0_wght400_GRAD0_opsz48_smdahw.png" alt="" />
                        <p>Share</p>
                    </div>
                    <img className="profile-pic" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1683897267/cosmetics/pexels-jonaorle-3828268_ctpqw3.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;
