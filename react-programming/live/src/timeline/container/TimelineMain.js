import React from "react";
import { getNextTimelines } from "../../common/mockData";
import TimelineList from "../component/TimelineList";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state";

export default function TimelineMain() {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  function onAdd() {
    const timeline = getNextTimelines();
    dispatch(actions.addTimeline(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }
  console.log("TimelineMain render");
  return (
    <div>
      <button onClick={onAdd}>Add timeline</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송 중...</p>}
    </div>
  );
}
