import React from "react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";
import AccountPage from "../../features/auth/AccountPage";
import Dashboard from "../../features/events/Dashboard/Dashboard";
import RestaurantDetailedPage from "../../features/events/restaurantDetailed/RestaurantDetailedPage";
import HomePage from "../../features/events/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import ErrorComponent from "../common/errors/ErrorComponent";
import ModalManager from "../common/modals/ModalManager";

function App() {
  return (
    <>
      <ModalManager />
      <ToastContainer position="bottom-right" theme="colored" hideProgressBar />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/restaurants" component={Dashboard} />
              <Route
                path="/restaurants/:id"
                component={RestaurantDetailedPage}
              />
              <Route path="/account" component={AccountPage} />
              <Route path="/error" component={ErrorComponent} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;

// {/* {<EventDashboard
//           formOpen={formOpen}
//           setFormOpen={setFormOpen}
//           selectEvent={handleSelectEvent}
//           selectedEvent={selectedEvent}
//         /> What it looks like without router. */}
