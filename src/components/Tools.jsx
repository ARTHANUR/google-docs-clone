import React from "react";

const Tools = () => {
    return (
        <>
            <div className="tool-section">
                <div className="tool1">
                    <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478667/Google%20docs/undo_FILL0_wght400_GRAD0_opsz48_rbqbnq.png" alt="" className="icon" />
                    <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478667/Google%20docs/redo_FILL0_wght400_GRAD0_opsz48_zzzalv.png" alt="" className="icon" />
                    <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478667/Google%20docs/print_FILL0_wght400_GRAD0_opsz48_ahtavo.png" alt="" className="icon" />
                    <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478668/Google%20docs/spellcheck_FILL0_wght400_GRAD0_opsz48_t1a8hz.png" alt="" className="icon" />
                    <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478668/Google%20docs/imagesearch_roller_FILL0_wght400_GRAD0_opsz48_awthrf.png" alt="" className="icon" />
                    <div className="extra">
                        <span>100 %</span>
                        <img className="icon" src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478675/Google%20docs/arrow_drop_down_FILL0_wght400_GRAD0_opsz48_rplvdb.png" alt="" />
                    </div>
                </div>
                <div className="line" /> 
                {/* ///////////////////////////////////////////////  */}
                <div className="tool2">
                    <div className="extra">
                        <span>Normal text</span>
                        <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478675/Google%20docs/arrow_drop_down_FILL0_wght400_GRAD0_opsz48_rplvdb.png" alt="" className="icon" />
                    </div>
                    <div className="line" />
                    <div className="extra2">
                        <span>Arial</span>
                        <img src="https://res.cloudinary.com/dboa7dqkl/image/upload/v1684478675/Google%20docs/arrow_drop_down_FILL0_wght400_GRAD0_opsz48_rplvdb.png" alt="" className="icon" />
                    </div>
                </div>
                <div className="line"></div>
                {/* //////////////////////////////////////////////////// */}
                <div className="tool3">
                    <span className="extra">-</span>
                    <span className="number">11</span>
                    <span className="extra">+</span>
                </div>
                <div className="line"></div>
            </div>
        </>
    );
};

export default Tools;
