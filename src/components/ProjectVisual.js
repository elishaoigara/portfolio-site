import React from "react";
// Lightweight editorial illustrations, not screenshots or live product data.
export default function ProjectVisual({ type, hero = false }) {
  return (
    <div
      className={`product-visual visual-${type} ${hero ? "visual-hero" : ""}`}
      aria-hidden="true"
    >
      {type === "agent" && (
        <div className="agent-window">
          <div className="window-bar">
            <span className="window-dots">● ● ●</span>
            <span>ORA / WORKSPACE</span>
            <span>↗</span>
          </div>
          <div className="agent-body">
            <div className="agent-rail">
              <b>O</b>
              <span>⌘</span>
              <span>◇</span>
              <span>⌁</span>
            </div>
            <div className="agent-main">
              <div className="agent-overline">YOUR IDEA → YOUR NEXT COMMIT</div>
              <div className="agent-heading">
                What shall we
                <br />
                build next<span>?</span>
              </div>
              <div className="prompt-box">
                Build something that matters.<span>↑</span>
              </div>
              <div className="agent-plan">
                <span className="ai-mark">✳</span>
                <div>
                  <b>A little context. A clear plan.</b>
                  <p>
                    Explore the repository
                    <br />
                    Review the approach
                    <br />
                    Make the change
                  </p>
                </div>
              </div>
              <div className="agent-pills">
                <span>Plan</span>
                <i /> <span>Approve</span>
                <i />
                <span>Build</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "pos" && (
        <div className="pos-window">
          <div className="mini-top">
            <b>
              ORA <small>POS</small>
            </b>
            <span>Store overview ↗</span>
          </div>
          <div className="pos-body">
            <div className="pos-side">
              Overview
              <br />
              <b>Checkout</b>
              <br />
              Inventory
              <br />
              Reports
            </div>
            <div className="pos-content">
              <span className="mini-eyebrow">THE RETAIL WORKSPACE</span>
              <h4>Everything in sync.</h4>
              <div className="pos-tiles">
                <span>
                  Checkout <b>↗</b>
                </span>
                <span>
                  Inventory <b>▤</b>
                </span>
              </div>
              <div className="bar-chart">
                {[36, 52, 43, 66, 59, 81, 72, 94, 85].map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="chart-label">CHECKOUT · STOCK · REPORTING</div>
            </div>
          </div>
        </div>
      )}
      {type === "nia" && (
        <>
          <div className="nia-word">
            nia<span>✳</span>
          </div>
          <div className="nia-caption">Africa connects here.</div>
          <div className="nia-phone">
            <div className="phone-notch" />
            <div className="phone-top">
              <b>nia</b>
              <span>＋</span>
            </div>
            <div className="phone-tabs">
              For you <span>Circles</span> Flicks
            </div>
            <div className="nia-post">
              <span className="nia-avatar">N</span>
              <b>Your next community.</b>
            </div>
            <div className="nia-art">
              <span>
                Made of
                <br />
                many stories.
              </span>
              <i>✳</i>
            </div>
            <div className="phone-bottom">
              ♡　♧　↗<span>⌑</span>
            </div>
          </div>
        </>
      )}
      {type === "samaritan" && (
        <div className="samaritan-window">
          <div className="mini-top">
            <b>
              ✳ samaritan<span>ai</span>
            </b>
            <span>Solutions ↗</span>
          </div>
          <span className="mini-eyebrow">BETTER WAYS TO WORK</span>
          <h4>
            A little less busy.
            <br />A lot more possible.
          </h4>
          <div className="samaritan-button">Explore the possibilities ↗</div>
          <div className="workflow">
            <span>Enquiry</span>
            <i>→</i>
            <span>Organise</span>
            <i>→</i>
            <span>Follow up</span>
          </div>
        </div>
      )}
      {type === "callcare" && (
        <div className="callcare-window">
          <div className="mini-top">
            <b>
              callcare<span>●</span>
            </b>
            <span>People first.</span>
          </div>
          <h4>
            Great conversations.
            <br />
            Real connections.
          </h4>
          <div className="callcare-line" />
          <div className="job-preview">
            <span>CAREERS</span>
            <b>Your next chapter starts here.</b>
            <i>Explore opportunities ↗</i>
          </div>
        </div>
      )}
      {type === "assistant" && (
        <div className="assistant-window">
          <div className="mini-top">
            <b>ORA</b>
            <span>YOUR PERSONAL WORKSPACE</span>
          </div>
          <div className="orb">
            <i />
            <i />
            <i />
          </div>
          <h4>A little more clarity.</h4>
          <div className="assistant-tabs">
            <span>Talk</span>
            <span>Plan</span>
            <span>Remember</span>
          </div>
        </div>
      )}
    </div>
  );
}
