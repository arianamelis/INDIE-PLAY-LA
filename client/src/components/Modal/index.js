import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AuthService from "../../components/AuthService";
import { Link } from "react-router-dom";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "relative",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],

    outline: "1px"
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="button">
        {/* <Typography gutterBottom>Click to get the full Modal experience!</Typography> */}
        <Button variant="outlined" onClick={this.handleOpen}>
          TEAM MEMBERS
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <footer className="footer">
              <div className="bottom">
                <ul>
                  <p className="center-align">Team</p>

                  <hr />
                  <li>
                    <ul>
                      <li className="teamMember">Ariana Melis</li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/arianamelis/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Connect with me on LinkedIn"
                        >
                          <i className="fab fa-linkedin-in" />
                          <br />
                          LinkedIn
                        </a>
                      </li>
                    </ul>

                    <ul>
                      <li>
                        <a
                          href="https://github.com/Arianamelis"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View more Projects on GitHub"
                        >
                          <i className="fab fa-github" />
                          <br />
                          GitHub
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="teamMember">Shannon Ruder</li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Connect with me on LinkedIn"
                        >
                          <i className="fab fa-linkedin-in" />
                          <br />
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="https://github.com/shannonruder"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View more Projects on GitHub"
                        >
                          <i className="fab fa-github" />
                          <br />
                          GitHub
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="teamMember">Gladys Navarro</li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Connect with me on LinkedIn"
                        >
                          <i className="fab fa-linkedin-in" />
                          <br />
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a
                          href="https://github.com/gladyn"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View more Projects on GitHub"
                        >
                          <i className="fab fa-github" />
                          <br />
                          GitHub
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                copyrights {`IndiePlay 2019    `}
              </div>
            </footer>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
