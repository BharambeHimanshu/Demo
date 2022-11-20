import React from "react";

export default function GForm() {
    return(
        <>
        <div className="form">
		<div className="title-div">
			<h1>Industry Mentor</h1>
            <p>This Form is for the Industry Mentor</p>
			<p className="required">*Required</p>
		</div>

		<div className="name-div">
			<div className="name">Punctuality/ discipline <span className="required">*</span></div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your answer"/></div>
		</div>

		<div className="college-div">
			<div className="name">Learning initiatives / attitude <span className="required">*</span></div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your answer"/></div>
		</div>

		<div className="gmail-div">
			<div className="name">Daily and weekly dairy maintenance <span className="required">*</span></div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your email"/></div>
		</div>

		<div className="mobile-div">
			<div className="name">Inplant traning report writing <span className="required">*</span></div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your answer"/></div>
		</div>

        <div className="mobile-div">
			<div className="name">Knowledge gained / skills achieved <span className="required">*</span></div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your answer"/></div>
		</div>

		<div>
			<input className="btn" type="submit" name="Submit"/>
		</div>

	</div>
        </>
    )
}