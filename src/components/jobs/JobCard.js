import React, {Component} from 'react';

class JobCard extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    };
  }

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    let jobCardDetails;
    if(this.state.showDetails) {
      jobCardDetails = (
        <div className="card-details">
          <div className="job-card-company">{this.props.company}</div>
        </div>
      );
    };

    return (
      <div className="job-card">
        <div className="job-card-job-title" onClick={this.toggleDetails.bind(this)}>{this.props.job_title}</div>
        {jobCardDetails}
      </div>
    );
  }

}

export default JobCard;