import React, { Component } from "react";
import JobCard from "./JobCard";

class JobList extends Component {
  render() {
    // console.log(this.props.jobs);
    const cards = this.props.jobs.map((job) => {
      return (
        <JobCard
          key={job.id}
          job_title={job.job_title}
          job_company={job.job_company}
          job_location={job.job_location}
          est_salary={job.est_salary}
          min_reqs={job.min_reqs}
          preferred_reqs={job.preferred_reqs}
          responsibilities={job.responsibilities}
        />
      );
    });
    console.log(cards);
    return (
      <div className="job-list">
        <h1>{this.props.job_title}</h1>
        {cards}
      </div>
    );
  }
}

export default JobList;
