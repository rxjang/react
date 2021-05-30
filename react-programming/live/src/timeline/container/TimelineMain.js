import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextTimelines } from "../../common/mockData";
import { addTimeline } from "../state";
import TimelineList from "../component/TimelineList";

export default function TimelineMain() {
  const [, foreceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscirbe = store.subscribe(() => {
      const timelines = store.getState().timeline.timelines;
      if (prevTimelines !== timelines) {
        foreceUpdate();
      }
      prevTimelines = timelines;
    });
    return () => unsubscirbe();
  }, []);
  function onAdd() {
    const timeline = getNextTimelines();
    store.dispatch(addTimeline(timeline));
  }
  console.log("TimelineMain render");
  const timelines = store.getState().timeline.timelines;
  return (
    <div>
      <button onClick={onAdd}>Add timeline</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
