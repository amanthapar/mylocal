import React from 'react';

export default class GeneralSettings extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav nav-inline settings-bar">
          <a className="nav-link" href="#">General</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
        </nav>

        <div style={{ "marginTop":"132px" }}></div>

        <div className="general-settings">
          <h2 className="settings-main">General Settings</h2>
          <hr />
          <div className="settings-panel">
            <h4 className="settings-subtitle">Name</h4>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <input type="text" style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"100%", "marginTop":"10px", "padding":"7px" }} placeholder="First Name.." />
              </div>
              <div className="col-md-3">
                <input type="text" style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"100%", "marginTop":"10px", "padding":"7px" }} placeholder="Last Name.." />
              </div>
            </div>
          </div>
          <div className="settings-panel">
            <h4 className="settings-subtitle">Password</h4>
            <hr />
            <div className="password-box">
              <input type="text" style={{ "borderRadius":"5px", "width":"250px", "border":"1px solid #ddd", "display":"block", "outline":"none", "padding":"7px", "marginTop":"10px" }} placeholder="Current Password.." />
            </div>
            <div className="password-box">
              <input type="text" style={{ "borderRadius":"5px", "width":"250px", "border":"1px solid #ddd", "display":"block", "outline":"none", "padding":"7px", "marginTop":"10px" }} placeholder="New Password.." />
            </div>
            <div className="password-box">
              <input type="text" style={{ "borderRadius":"5px", "width":"250px", "border":"1px solid #ddd", "display":"block", "outline":"none", "padding":"7px", "marginTop":"10px" }} placeholder="Confirm New Password.." />
            </div>
          </div>
          <div className="settings-panel">
            <h4 className="settings-subtitle">Description</h4>
            <hr />
            <textarea style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"250px", "padding":"7px" }} placeholder="Description.." rows="5"></textarea>
          </div>
          <div className="settings-panel">
            <button className="btn btn-info btn-main-custom">Apply Changes</button>
          </div>
        </div>
      </div>
    )
  }
}