import { TrackDocument, TrackedDiv, Track } from 'react-track'
import { topTop } from 'react-track/tracking-formulas'

export const Scroller = (props) => (
  <div className='Scroller'>
    {props.children}
    <style jsx>{`
      .Scroller {
        display: flex;
        flex-direction: row-reverse;
      }
      `}
    </style>
  </div>
)
export const Sticky = (props) => (
  <div className='Sticky'>
    {props.children}
    <style jsx>{`
      .Sticky {
        background: var(--grey-2);
        flex-grow: 1;
        flex-shrink: 0;
        height: 100vh;
        position: sticky;
        right: 0;
        top: 0;
        width: 60%;
      }
      `}
    </style>
  </div>
)
export const StickyGraphic = (props) => (
  <div className='StickyGraphic'>
    {props.children}
    <style jsx>{`
      .StickyGraphic {
        background-color: var(--grey-4);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      `}
    </style>
  </div>
)
export const StickyRuler = (props) => (
  <div className='StickyRuler'>
    <style jsx>{`
      .StickyRuler {
        border-bottom: 1px dashed red;
        height: 1px;
        left: 0px;
        position: fixed;
        top: 50%;
        width: 100%;
        z-index: 1000;
      }
      `}
    </style>
  </div>
)
export const Scrolly = (props) => (
  <div className='Scrolly'>
    {props.children}
    <style jsx>{`
      .Scrolly {
        background: var(--grey-3);
        position: relative;
        max-width: 32rem;
      }
      `}
    </style>
  </div>
)
export const ScrollySection = (props) => (
  <TrackDocument formulas={[topTop]}>
    {topTop =>
      <TrackedDiv formulas={[topTop]}>
        {(posTopTop) => (
          <div>
            <div style={{background:'gold', position:'absolute'}}>{posTopTop}</div>
            <div>{props.children}</div>
          </div>
        )}
      </TrackedDiv>
    }
  </TrackDocument>
)
