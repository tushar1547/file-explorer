import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import TestUtils from 'react-dom/test-utils';
import Draggable from 'react-draggable';

describe('draggable', () => {
  let drag;

  function mouseDownOn(drag, selector, shouldDrag) {
    resetDragging(drag);
    const node = ReactDOM.findDOMNode(drag).querySelector(selector);
    if (!node) throw new Error(`Selector not found: ${selector}`);
    TestUtils.Simulate.mouseDown(node);
    assert(drag.state.dragging === shouldDrag);
  }

  function resetDragging(drag) {
    TestUtils.Simulate.mouseUp(ReactDOM.findDOMNode(drag));
    assert(drag.state.dragging === false);
  }

  test('should initialize dragging onmousedown', function () {
    drag = TestUtils.renderIntoDocument(<Draggable><div/></Draggable>);
  
    TestUtils.Simulate.mouseDown(ReactDOM.findDOMNode(drag));
    assert(drag.state.dragging === true);
  });

  it('should only initialize dragging onmousedown of handle', function () {
    drag = TestUtils.renderIntoDocument(
      <Draggable handle=".handle">
        <div>
          <div className="handle">Handle</div>
          <div className="content">Lorem ipsum...</div>
        </div>
      </Draggable>
    );

    mouseDownOn(drag, '.content', false);
    mouseDownOn(drag, '.handle', true);
  });

  it('should not initialize dragging onmousedown of cancel', function () {
    drag = TestUtils.renderIntoDocument(
      <Draggable cancel=".cancel">
        <div>
          <div className="cancel">Cancel</div>
          <div className="content">Lorem ipsum...</div>
        </div>
      </Draggable>
    );

    mouseDownOn(drag, '.cancel', false);
    mouseDownOn(drag, '.content', true);
  });

  it('should discontinue dragging onmouseup', function () {
    drag = TestUtils.renderIntoDocument(<Draggable><div/></Draggable>);

    TestUtils.Simulate.mouseDown(ReactDOM.findDOMNode(drag));
    assert(drag.state.dragging === true);

    resetDragging(drag);
  });

  it('should initialize dragging ontouchstart', function () {
    drag = TestUtils.renderIntoDocument(<Draggable><div/></Draggable>);
    const e = new Event('touchstart');
    ReactDOM.findDOMNode(drag).dispatchEvent(e);
    assert(drag.state.dragging === true);
  });
});
