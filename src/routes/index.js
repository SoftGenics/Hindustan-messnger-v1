import React from "react";
import { Switch, Route } from "react-router-dom";
import HeadlinesOne from "../pages/Headlines/Headlines0ne/HeadlinesOne";
import HeadlinesEight from "../pages/Headlines/HeadlinesEight/HeadlinesEight";
import HeadlinesFive from "../pages/Headlines/HeadlinesFive/HeadlinesFive";
import HeadlinesFour from "../pages/Headlines/HeadlinesFour/HeadlinesFour";
import HeadlinesNine from "../pages/Headlines/HeadlinesNine/HeadlinesNine";
import HeadlinesSeven from "../pages/Headlines/HeadlinesSeven/HeadlinesSeven";
import HeadlinesSix from "../pages/Headlines/HeadlinesSix/HeadlinesSix";
import HeadlinesTen from "../pages/Headlines/HeadlinesTen/HeadlinesTen";
import HeadlinesThree from "../pages/Headlines/HeadlinesThree/HeadlinesThree";
import HeadlinesTwo from "../pages/Headlines/HeadlinesTwo/HeadlinesTwo";
import LayoutCover from "../pages/layoutCover";
import MessageOfTheDay from "../pages/MessageOfTheDay/MessageOfTheDay";
import GenralVideoUpload from "../pages/VideoUpload/VideoUpload";



const RouteHandle = () => {
  return (
    <Switch>
       <LayoutCover>
             <Route exact strict path="/" component={MessageOfTheDay} />
            <Route exact strict path="/genral-video-upload" component={GenralVideoUpload} />
            <Route exact strict path="/message-upload-for-first-headlines" component={HeadlinesOne} />
            <Route exact strict path="/message-upload-for-second-headlines" component={HeadlinesTwo} />
            <Route exact strict path="/message-upload-for-third-headlines" component={HeadlinesThree} />
            <Route exact strict path="/message-upload-for-fourth-headlines" component={HeadlinesFour} />
            <Route exact strict path="/message-upload-for-fiveth-headlines" component={HeadlinesFive} />
            <Route exact strict path="/message-upload-for-sixth-headlines" component={HeadlinesSix} />
            <Route exact strict path="/message-upload-for-seventh-headlines" component={HeadlinesSeven} />
            <Route exact strict path="/message-upload-for-eighth-headlines" component={HeadlinesEight} />
            <Route exact strict path="/message-upload-for-ninth-headlines" component={HeadlinesNine} />
            <Route exact strict path="/message-upload-for-tenth-headlines" component={HeadlinesTen} />
      </LayoutCover>
     </Switch>
  );
};

export default RouteHandle;
