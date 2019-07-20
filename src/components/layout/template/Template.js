import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../../../redux/actions/eventsActions";
import "./style/template.scss";

const Template = ({ children, fetchEvents, events }) => {
  const fetchEventsCallback = useCallback(() => {
    fetchEvents();
  }, [fetchEvents]);
  useEffect(() => {
    fetchEventsCallback();
  },[fetchEventsCallback]);
  console.log(events);
  return <main>{children}</main>;
};

const mapStateToProps = state => ({ events: state});

export default connect(
  mapStateToProps,
  { fetchEvents }
)(Template);
